'use client';
import AppShell from '../components/AppShell';
import DropZone from '../components/DropZone';
import { useStore, formatFileSize, formatDate } from '../components/store';
import { useState } from 'react';

function ContentManager() {
  const { content, folders, addContent, removeContent, renameContent, moveContent, addFolder } = useStore();
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [movingId, setMovingId] = useState<string | null>(null);

  const filtered = content.filter(c => {
    if (activeFolder && c.folder !== activeFolder) return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const getFileType = (file: File): string => {
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const map: Record<string, string> = { pdf: 'PDF', csv: 'CSV', docx: 'DOCX', xlsx: 'XLSX', txt: 'TXT', html: 'HTML', json: 'JSON', doc: 'DOC', xls: 'XLS' };
    return map[ext] || 'File';
  };

  const handleFiles = async (files: File[]) => {
    for (const file of files) {
      const fileType = getFileType(file);
      let text = '';
      if (fileType === 'PDF') {
        try {
          const fd = new FormData();
          fd.append('file', file);
          const res = await fetch('/api/extract-pdf', { method: 'POST', body: fd });
          const data = await res.json();
          text = data.text;
        } catch { text = '(PDF content)'; }
      } else {
        try { text = await file.text(); } catch { text = '(File content)'; }
      }
      addContent({ name: file.name, fileType, folder: activeFolder || 'Uncategorized', content: text, size: file.size });
    }
  };

  const fileTypeColors: Record<string, string> = { PDF: '#D83A31', DOCX: '#367ED4', XLSX: '#44A55D', CSV: '#44A55D', TXT: '#888', HTML: '#FFB21B', JSON: '#FFB21B' };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Folder Sidebar */}
      <div style={{ width: '220px', minWidth: '220px', background: '#fff', borderRight: '1px solid #e2e8f0', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#67E74E', marginBottom: '14px' }}>Folders</div>
        <div
          onClick={() => setActiveFolder(null)}
          style={{
            padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', marginBottom: '4px', fontSize: '13px',
            background: !activeFolder ? 'rgba(103,231,78,0.1)' : 'transparent',
            color: !activeFolder ? '#08212D' : '#666', fontWeight: !activeFolder ? 600 : 400,
          }}
        >
          All Content ({content.length})
        </div>
        {folders.map(f => {
          const count = content.filter(c => c.folder === f).length;
          return (
            <div key={f}
              onClick={() => setActiveFolder(f)}
              style={{
                padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', marginBottom: '4px', fontSize: '13px',
                background: activeFolder === f ? 'rgba(103,231,78,0.1)' : 'transparent',
                color: activeFolder === f ? '#08212D' : '#666', fontWeight: activeFolder === f ? 600 : 400,
              }}
            >
              {f} ({count})
            </div>
          );
        })}
        {showNewFolder ? (
          <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
            <input value={newFolderName} onChange={e => setNewFolderName(e.target.value)} placeholder="Folder name" autoFocus
              onKeyDown={e => { if (e.key === 'Enter' && newFolderName.trim()) { addFolder(newFolderName.trim()); setNewFolderName(''); setShowNewFolder(false); } }}
              style={{ flex: 1, padding: '6px 8px', border: '1px solid #d0dce8', borderRadius: '6px', fontSize: '12px', outline: 'none' }} />
            <button onClick={() => { if (newFolderName.trim()) { addFolder(newFolderName.trim()); setNewFolderName(''); setShowNewFolder(false); } }}
              style={{ padding: '6px 8px', background: '#08212D', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>+</button>
          </div>
        ) : (
          <button onClick={() => setShowNewFolder(true)} style={{ marginTop: '8px', padding: '8px', background: 'transparent', border: '1px dashed #d0dce8', borderRadius: '8px', color: '#888', fontSize: '12px', cursor: 'pointer' }}>
            + New Folder
          </button>
        )}
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: '28px 36px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#08212D', margin: 0 }}>Content Management</h1>
            <p style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>{activeFolder || 'All content'} · {filtered.length} items</p>
          </div>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search files..." style={{ padding: '10px 16px', border: '1px solid #d0dce8', borderRadius: '10px', fontSize: '13px', width: '240px', outline: 'none', color: '#08212D' }} />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <DropZone onFiles={handleFiles} compact />
        </div>

        {/* File List */}
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          {/* Header Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 120px 140px', padding: '12px 20px', borderBottom: '1px solid #e2e8f0', fontSize: '11px', fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <span>Name</span><span>Type</span><span>Folder</span><span>Size</span><span>Actions</span>
          </div>
          {filtered.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#888', fontSize: '14px' }}>No content found. Upload files to get started.</div>
          ) : filtered.map(item => (
            <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 120px 140px', padding: '14px 20px', borderBottom: '1px solid #f0f0f0', alignItems: 'center', fontSize: '13px' }}>
              {/* Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: `${fileTypeColors[item.fileType] || '#888'}15`, color: fileTypeColors[item.fileType] || '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>{item.fileType}</div>
                {renamingId === item.id ? (
                  <input value={renameValue} onChange={e => setRenameValue(e.target.value)} autoFocus
                    onKeyDown={e => { if (e.key === 'Enter') { renameContent(item.id, renameValue); setRenamingId(null); } if (e.key === 'Escape') setRenamingId(null); }}
                    onBlur={() => { renameContent(item.id, renameValue); setRenamingId(null); }}
                    style={{ flex: 1, padding: '4px 8px', border: '1px solid #67E74E', borderRadius: '4px', fontSize: '13px', outline: 'none', minWidth: 0 }} />
                ) : (
                  <span style={{ color: '#08212D', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</span>
                )}
              </div>
              {/* Type */}
              <span style={{ color: fileTypeColors[item.fileType] || '#888', fontWeight: 600, fontSize: '11px' }}>{item.fileType}</span>
              {/* Folder */}
              {movingId === item.id ? (
                <select autoFocus value={item.folder} onChange={e => { moveContent(item.id, e.target.value); setMovingId(null); }} onBlur={() => setMovingId(null)}
                  style={{ padding: '4px', border: '1px solid #d0dce8', borderRadius: '4px', fontSize: '11px' }}>
                  {folders.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              ) : (
                <span style={{ color: '#888', fontSize: '12px' }}>{item.folder}</span>
              )}
              {/* Size */}
              <span style={{ color: '#888', fontSize: '12px' }}>{formatFileSize(item.size)}</span>
              {/* Actions */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <button onClick={() => { setRenamingId(item.id); setRenameValue(item.name); }} style={{ padding: '4px 8px', background: '#f0f4f8', border: 'none', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', color: '#555' }}>Rename</button>
                <button onClick={() => setMovingId(item.id)} style={{ padding: '4px 8px', background: '#f0f4f8', border: 'none', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', color: '#555' }}>Move</button>
                <button onClick={() => removeContent(item.id)} style={{ padding: '4px 8px', background: '#fef2f2', border: 'none', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', color: '#D83A31' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContentPage() {
  return <AppShell><ContentManager /></AppShell>;
}
