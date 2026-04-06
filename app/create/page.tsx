'use client';
import { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import AppShell from '../components/AppShell';
import DropZone from '../components/DropZone';
import { useStore, OUTPUT_TYPE_META, type OutputType, type ContentItem } from '../components/store';

const STEPS = ['Choose Output', 'Select Content', 'Configure', 'Complete'];

function CreateFlow() {
  const router = useRouter();
  const params = useSearchParams();
  const { content, addContent, addProject, updateProject } = useStore();

  const [step, setStep] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [outputType, setOutputType] = useState<OutputType | null>((params.get('type') as OutputType) || null);
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [generating, setGenerating] = useState(false);
  const [genStatus, setGenStatus] = useState('');
  const [genDone, setGenDone] = useState(false);
  const [createdProjectId, setCreatedProjectId] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [copyFeedback, setCopyFeedback] = useState('');
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pre-select type from query param
  useEffect(() => {
    const t = params.get('type') as OutputType;
    if (t && OUTPUT_TYPE_META[t]) {
      setOutputType(t);
      setStep(1);
    } else {
      setStep(0);
    }
  }, [params]);

  const getFileType = (file: File): string => {
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const map: Record<string, string> = { pdf: 'PDF', csv: 'CSV', docx: 'DOCX', xlsx: 'XLSX', txt: 'TXT', html: 'HTML', json: 'JSON' };
    return map[ext] || 'File';
  };

  const handleNewFiles = async (files: File[]) => {
    const newIds: string[] = [];
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
      const item = addContent({ name: file.name, fileType, folder: clientName || 'Uploads', content: text, size: file.size });
      newIds.push(item.id);
    }
    setSelectedIds(prev => [...prev, ...newIds]);
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleGenerate = async () => {
    if (!outputType) return;
    setGenerating(true);
    const meta = OUTPUT_TYPE_META[outputType];
    const stages = [
      `Analyzing ${selectedIds.length} source files...`,
      `Extracting benefit sections...`,
      `Mapping content to ${meta.label} structure...`,
      outputType === 'virtual-fair' ? 'Building booth layouts...' : outputType === 'benefits-at-a-glance' ? 'Formatting plan tables...' : 'Embedding video content...',
      'Applying client branding...',
      'Generating shareable URL...',
      'Finalizing...',
    ];
    for (const s of stages) {
      setGenStatus(s);
      await new Promise(r => setTimeout(r, 600 + Math.random() * 500));
    }
    const project = addProject({
      name: projectName || `${clientName} ${meta.label}`,
      clientName: clientName || 'Demo Client',
      outputType,
      sourceIds: selectedIds,
      status: 'published',
      generatedAt: new Date().toISOString(),
    });
    setCreatedProjectId(project.id);
    setGenerating(false);
    setGenDone(true);
    setGenStatus('');
  };

  const fileTypeColors: Record<string, string> = { PDF: '#D83A31', DOCX: '#367ED4', XLSX: '#44A55D', CSV: '#44A55D', TXT: '#888', HTML: '#FFB21B', JSON: '#FFB21B' };

  const outputTypeAbbreviations: Record<OutputType, string> = {
    'showcase': 'SC',
    'resource-center': 'RC',
    'virtual-fair': 'VF',
    'benefits-at-a-glance': 'BG',
    'digital-benefits-guide': 'DG',
  };

  return (
    <div style={{ padding: '32px 40px', maxWidth: '900px' }}>
      {/* Header */}
      <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#08212D', margin: 0, marginBottom: '8px', letterSpacing: '-0.3px' }}>Create New Microsite</h1>
      <p style={{ color: '#888', fontSize: '14px', margin: 0, marginBottom: '32px' }}>Build an AI-powered benefits microsite in minutes</p>

      {/* Step Indicator */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '40px' }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ height: '4px', borderRadius: '2px', background: i <= step ? '#67E74E' : '#e2e8f0', marginBottom: '8px', transition: 'background 0.3s' }} />
            <span style={{ fontSize: '11px', fontWeight: i === step ? 700 : 400, color: i <= step ? '#08212D' : '#aaa' }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Step 0: Choose Output Type */}
      {step === 0 && (
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#08212D', margin: 0, marginBottom: '24px' }}>What would you like to create?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
            {(Object.entries(OUTPUT_TYPE_META) as [OutputType, typeof OUTPUT_TYPE_META[OutputType]][]).map(([key, meta]) => (
              <div key={key} onClick={() => { setOutputType(key); setStep(1); }}
                style={{
                  padding: '24px 16px', borderRadius: '14px', cursor: 'pointer',
                  border: '1px solid #e2e8f0',
                  background: '#fff',
                  transition: 'all 0.15s',
                  textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = meta.color; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${meta.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: meta.color + '15', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '14px', fontWeight: 700,
                  color: meta.color, marginBottom: '12px'
                }}>
                  {outputTypeAbbreviations[key]}
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#08212D', marginBottom: '4px' }}>{meta.label}</div>
                <div style={{ fontSize: '11px', color: '#888', lineHeight: '1.4' }}>{meta.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Select Content */}
      {step === 1 && outputType && (
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#08212D', margin: 0, marginBottom: '24px' }}>Upload documents or select from existing</h2>

          {/* Two Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            {/* Upload New */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#08212D', marginBottom: '12px' }}>Upload New</div>
              <DropZone onFiles={handleNewFiles} />
            </div>

            {/* Select Existing */}
            {content.length > 0 && (
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#08212D', marginBottom: '12px' }}>Select Existing</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '400px', overflowY: 'auto', background: '#f8fafc', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0' }}>
                  {Array.from(
                    content.reduce((folders, c) => {
                      if (!folders.has(c.folder)) folders.set(c.folder, []);
                      folders.get(c.folder)!.push(c);
                      return folders;
                    }, new Map<string, ContentItem[]>())
                  ).map(([folder, items]) => (
                    <div key={folder}>
                      <button
                        onClick={() => setExpandedFolders(prev => {
                          const next = new Set(prev);
                          if (next.has(folder)) next.delete(folder);
                          else next.add(folder);
                          return next;
                        })}
                        style={{
                          width: '100%', padding: '10px 12px', background: '#fff', border: '1px solid #d0dce8',
                          borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '12px', color: '#555',
                          textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f0f4f8'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                      >
                        {folder}
                        <span style={{ fontSize: '10px', color: '#888' }}>
                          {expandedFolders.has(folder) ? '▼' : '▶'} {items.length}
                        </span>
                      </button>
                      {expandedFolders.has(folder) && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px', marginLeft: '6px', paddingLeft: '6px', borderLeft: '2px solid #e2e8f0' }}>
                          {items.map(c => (
                            <div key={c.id} onClick={() => toggleSelect(c.id)} style={{
                              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px',
                              background: selectedIds.includes(c.id) ? 'rgba(103,231,78,0.08)' : '#fff',
                              border: `1.5px solid ${selectedIds.includes(c.id) ? '#67E74E' : '#e2e8f0'}`,
                              borderRadius: '8px', cursor: 'pointer', transition: 'all 0.15s',
                            }}>
                              <div style={{ width: '18px', height: '18px', borderRadius: '3px', border: `2px solid ${selectedIds.includes(c.id) ? '#67E74E' : '#ccc'}`, background: selectedIds.includes(c.id) ? '#67E74E' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>
                                {selectedIds.includes(c.id) && '✓'}
                              </div>
                              <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: `${fileTypeColors[c.fileType] || '#888'}15`, color: fileTypeColors[c.fileType] || '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, flexShrink: 0 }}>{c.fileType}</div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '12px', fontWeight: 500, color: '#08212D', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Selected Files Chips */}
          {selectedIds.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginBottom: '12px' }}>Selected Files ({selectedIds.length})</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedIds.map(id => {
                  const item = content.find(c => c.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} style={{
                      padding: '6px 12px', background: '#f0fdf4', border: '1px solid #67E74E',
                      borderRadius: '20px', fontSize: '12px', fontWeight: 600, color: '#16a34a',
                      display: 'flex', alignItems: 'center', gap: '6px'
                    }}>
                      {item.name}
                      <button onClick={() => toggleSelect(id)} style={{
                        background: 'none', border: 'none', color: '#16a34a',
                        cursor: 'pointer', fontSize: '14px', padding: 0, marginLeft: '4px'
                      }}>×</button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setStep(0)} style={{ flex: 1, padding: '12px 16px', background: '#fff', border: '1px solid #d0dce8', borderRadius: '10px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', color: '#555' }}>Back</button>
            <button disabled={selectedIds.length === 0} onClick={() => setStep(2)} style={{
              flex: 2, padding: '12px 16px', background: selectedIds.length === 0 ? '#e2e8f0' : '#08212D',
              color: selectedIds.length === 0 ? '#aaa' : '#fff',
              border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '14px',
              cursor: selectedIds.length === 0 ? 'not-allowed' : 'pointer',
            }}>Next: Configure</button>
          </div>
        </div>
      )}

      {/* Step 2: Configure */}
      {step === 2 && outputType && (
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#08212D', margin: 0, marginBottom: '24px' }}>Configure Your Microsite</h2>

          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', padding: '28px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#08212D', display: 'block', marginBottom: '8px' }}>Client Name *</label>
              <input
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="e.g. RWJBarnabas Health"
                style={{ width: '100%', padding: '12px 16px', border: '1px solid #d0dce8', borderRadius: '10px', fontSize: '14px', outline: 'none', color: '#08212D', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#08212D', display: 'block', marginBottom: '8px' }}>Project Name</label>
              <input
                value={projectName}
                onChange={e => setProjectName(e.target.value)}
                placeholder={`${clientName || 'Client'} ${OUTPUT_TYPE_META[outputType].label}`}
                style={{ width: '100%', padding: '12px 16px', border: '1px solid #d0dce8', borderRadius: '10px', fontSize: '14px', outline: 'none', color: '#08212D', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#888', marginBottom: '12px' }}>Preview Summary</div>
              <div style={{ fontSize: '13px', color: '#08212D', lineHeight: '1.8' }}>
                <div style={{ marginBottom: '8px' }}><strong>Output Type:</strong> {OUTPUT_TYPE_META[outputType].label}</div>
                <div style={{ marginBottom: '8px' }}><strong>Files:</strong> {selectedIds.length} document{selectedIds.length !== 1 ? 's' : ''} selected</div>
                <div><strong>Client:</strong> {clientName || '(enter above)'}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setStep(1)} style={{ flex: 1, padding: '12px 16px', background: '#fff', border: '1px solid #d0dce8', borderRadius: '10px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', color: '#555' }}>Back</button>
            <button onClick={() => { setStep(3); handleGenerate(); }} style={{
              flex: 2, padding: '12px 16px', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              background: 'linear-gradient(135deg, #67E74E, #4ed83a)', color: '#08212D',
              boxShadow: '0 4px 14px rgba(103,231,78,0.3)',
            }}>Generate with AI</button>
          </div>
        </div>
      )}

      {/* Step 3: Complete */}
      {step === 3 && outputType && (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          {generating && (
            <>
              <div style={{
                width: '80px', height: '80px', borderRadius: '20px',
                background: 'rgba(103,231,78,0.15)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', fontSize: '32px',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: '#67E74E' + '15', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 700, color: '#67E74E'
                }}>
                  {outputTypeAbbreviations[outputType]}
                </div>
              </div>
              <div style={{ fontWeight: 700, fontSize: '20px', color: '#08212D', marginBottom: '8px' }}>Generating your {OUTPUT_TYPE_META[outputType].label}...</div>
              <div style={{ fontSize: '14px', color: '#888', marginBottom: '24px', minHeight: '20px' }}>{genStatus}</div>
              <div style={{ width: '300px', height: '4px', background: '#e2e8f0', borderRadius: '2px', margin: '0 auto', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'linear-gradient(90deg, #67E74E, #4ed83a)', borderRadius: '2px', animation: 'loading 2s ease-in-out infinite', width: '60%' }} />
              </div>
            </>
          )}

          {genDone && createdProjectId && (
            <>
              <div style={{
                width: '80px', height: '80px', borderRadius: '20px',
                background: 'rgba(103,231,78,0.15)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', fontSize: '36px', fontWeight: 700, color: '#67E74E'
              }}>
                ✓
              </div>
              <div style={{ fontWeight: 700, fontSize: '22px', color: '#08212D', marginBottom: '8px' }}>
                {OUTPUT_TYPE_META[outputType].label} Generated!
              </div>
              <div style={{ fontSize: '14px', color: '#888', marginBottom: '32px' }}>Your microsite is live and ready to distribute.</div>

              {/* Shareable URL */}
              <div style={{
                background: '#f8fafc', borderRadius: '12px', padding: '16px 20px',
                marginBottom: '32px', display: 'inline-flex', alignItems: 'center',
                gap: '12px', border: '1px solid #e2e8f0'
              }}>
                <code style={{ fontSize: '13px', color: '#08212D', fontFamily: 'monospace' }}>
                  {typeof window !== 'undefined' ? window.location.origin : ''}/output/{createdProjectId}
                </code>
                <button onClick={() => {
                  const url = `${window.location.origin}/output/${createdProjectId}`;
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(url).then(() => {
                      setCopyFeedback('Copied!');
                      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
                      copyTimeoutRef.current = setTimeout(() => setCopyFeedback(''), 2000);
                    }).catch(() => fallbackCopy(url));
                  } else {
                    fallbackCopy(url);
                  }

                  function fallbackCopy(text: string) {
                    try {
                      const textarea = document.createElement('textarea');
                      textarea.value = text;
                      textarea.style.position = 'fixed';
                      textarea.style.opacity = '0';
                      document.body.appendChild(textarea);
                      textarea.select();
                      document.execCommand('copy');
                      document.body.removeChild(textarea);
                      setCopyFeedback('Copied!');
                      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
                      copyTimeoutRef.current = setTimeout(() => setCopyFeedback(''), 2000);
                    } catch (e) {
                      console.error('Copy failed', e);
                    }
                  }
                }} style={{
                  padding: '6px 14px', background: copyFeedback ? '#67E74E' : '#08212D',
                  color: copyFeedback ? '#08212D' : '#fff', border: 'none',
                  borderRadius: '6px', fontSize: '12px', fontWeight: 600,
                  cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap'
                }}>
                  {copyFeedback || 'Copy URL'}
                </button>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button onClick={() => router.push(`/output/${createdProjectId}`)} style={{
                  padding: '12px 28px', background: '#08212D', color: '#fff',
                  border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '14px',
                  cursor: 'pointer', transition: 'opacity 0.2s'
                }}>
                  View Output
                </button>
                <button onClick={() => router.push('/')} style={{
                  padding: '12px 28px', background: '#fff', border: '1px solid #d0dce8',
                  borderRadius: '10px', fontWeight: 600, fontSize: '14px',
                  cursor: 'pointer', color: '#555', transition: 'background 0.2s'
                }}>
                  Back to Dashboard
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes loading { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      `}</style>
    </div>
  );
}

export default function CreatePage() {
  return <AppShell><Suspense fallback={<div style={{padding:'40px',color:'#888'}}>Loading...</div>}><CreateFlow /></Suspense></AppShell>;
}
