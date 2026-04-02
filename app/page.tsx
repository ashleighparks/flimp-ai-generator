'use client';
import { useState, useRef, useCallback } from 'react';

type SourceFile = { name: string; type: string; content: string };

export default function Home() {
  const [sources, setSources] = useState<SourceFile[]>([]);
  const [videoUrl, setVideoUrl] = useState('https://flimp.live/Flimp_HRBenefitsVideoLibrary');
  const [outputType, setOutputType] = useState('Showcase');
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [status, setStatus] = useState('');
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ACCEPTED_TYPES: Record<string, string> = {
    'application/pdf': 'PDF',
    'text/csv': 'CSV',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
    'text/plain': 'TXT',
    'text/html': 'HTML',
    'application/json': 'JSON',
  };

  const getFileType = (file: File): string => {
    if (ACCEPTED_TYPES[file.type]) return ACCEPTED_TYPES[file.type];
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const extMap: Record<string, string> = { pdf: 'PDF', csv: 'CSV', docx: 'DOCX', xlsx: 'XLSX', txt: 'TXT', html: 'HTML', json: 'JSON', doc: 'DOC', xls: 'XLS' };
    return extMap[ext] || 'File';
  };

  const processFile = async (file: File) => {
    const fileType = getFileType(file);
    setStatus(`Processing ${file.name}...`);

    if (fileType === 'PDF') {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await fetch('/api/extract-pdf', { method: 'POST', body: formData });
        const data = await res.json();
        setSources(prev => [...prev, { name: file.name, type: fileType, content: data.text }]);
      } catch {
        setSources(prev => [...prev, { name: file.name, type: fileType, content: '(PDF content)' }]);
      }
    } else {
      try {
        const text = await file.text();
        setSources(prev => [...prev, { name: file.name, type: fileType, content: text }]);
      } catch {
        setSources(prev => [...prev, { name: file.name, type: fileType, content: '(File content)' }]);
      }
    }
    setStatus(`${file.name} added ✓`);
    setTimeout(() => setStatus(''), 2000);
  };

  const handleFiles = async (files: FileList | File[]) => {
    for (const file of Array.from(files)) {
      await processFile(file);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files?.length) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }, []);

  const handleGenerate = async () => {
    setGenerating(true);
    setStatus('Extracting benefit sections...');
    await new Promise(r => setTimeout(r, 800));
    setStatus('Mapping videos to sections...');
    await new Promise(r => setTimeout(r, 800));
    setStatus('Building branded microsite...');
    await new Promise(r => setTimeout(r, 1000));
    setStatus('Finalizing...');
    await new Promise(r => setTimeout(r, 600));
    setGenerated(true);
    setGenerating(false);
    setStatus('');
  };

  // Flimp brand colors
  const brand = {
    navy: '#08212D',
    green: '#67E74E',
    yellow: '#FFB21B',
    white: '#FFFFFF',
    bgLight: '#E9F0FB',
    textDark: '#08212D',
    border: '#d0dce8',
    radius: '12px',
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#f0f4f8' }}>

      {/* LEFT PANEL — CONTENT HUB */}
      <div style={{ width: '400px', minWidth: '400px', background: brand.white, borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ background: brand.navy, padding: '22px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: brand.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '18px', color: brand.navy }}>F</div>
          <div>
            <div style={{ color: brand.white, fontWeight: 700, fontSize: '17px', letterSpacing: '-0.3px' }}>Flimp AI Generator</div>
            <div style={{ color: 'rgba(255,255,255,.5)', fontSize: '12px', marginTop: '1px' }}>Benefits Microsite Platform</div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>

          {/* Step 1: Content Sources */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: brand.green, marginBottom: '12px' }}>Step 1 — Content Sources</div>

            {/* Drop Zone */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: `2px dashed ${dragging ? brand.green : brand.border}`,
                borderRadius: brand.radius,
                padding: '28px 20px',
                textAlign: 'center',
                cursor: 'pointer',
                marginBottom: '14px',
                background: dragging ? 'rgba(103,231,78,0.06)' : '#f8fafc',
                transition: 'all 0.2s ease',
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.csv,.docx,.xlsx,.txt,.html,.json,.doc,.xls"
                multiple
                onChange={e => e.target.files && handleFiles(e.target.files)}
                style={{ display: 'none' }}
              />
              <div style={{ fontSize: '32px', marginBottom: '10px', opacity: 0.8 }}>
                {dragging ? '📥' : '📄'}
              </div>
              <div style={{ fontWeight: 600, fontSize: '14px', color: brand.navy, marginBottom: '4px' }}>
                {dragging ? 'Drop files here' : 'Drag & drop files here'}
              </div>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.5' }}>
                or click to browse<br />
                <span style={{ fontSize: '11px', color: '#aaa' }}>PDF, DOCX, XLSX, CSV, TXT, HTML, JSON</span>
              </div>
            </div>

            {/* Source Cards */}
            {sources.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(103,231,78,0.08)', border: '1px solid rgba(103,231,78,0.3)', borderRadius: '10px', marginBottom: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: brand.navy, color: brand.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>{s.type}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: brand.navy, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</div>
                  <div style={{ fontSize: '11px', color: '#666' }}>{s.type} · Processed</div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); setSources(prev => prev.filter((_, j) => j !== i)); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '18px', padding: '2px 6px', borderRadius: '4px' }}>×</button>
              </div>
            ))}

            {/* Video Library URL */}
            <div style={{ marginTop: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#444', marginBottom: '6px' }}>Video Library URL</div>
              <input
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', border: `1px solid ${brand.border}`, borderRadius: '10px', fontSize: '13px', color: brand.navy, outline: 'none' }}
              />
            </div>
          </div>

          {/* Step 2: Output Type */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: brand.green, marginBottom: '12px' }}>Step 2 — Output Type</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Showcase', 'Microsite', 'Template'].map(type => (
                <button
                  key={type}
                  onClick={() => setOutputType(type)}
                  style={{
                    flex: 1, padding: '10px 8px', borderRadius: '10px',
                    border: '1.5px solid',
                    borderColor: outputType === type ? brand.navy : brand.border,
                    background: outputType === type ? brand.navy : brand.white,
                    color: outputType === type ? brand.white : '#555',
                    fontWeight: outputType === type ? 700 : 400,
                    fontSize: '13px', cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          {status && (
            <div style={{ background: brand.bgLight, borderRadius: '10px', padding: '12px 14px', fontSize: '13px', color: brand.navy, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span>
              {status}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={generating}
            style={{
              width: '100%', padding: '15px',
              background: generating ? '#9ca3af' : `linear-gradient(135deg, ${brand.green}, #4ed83a)`,
              color: generating ? brand.white : brand.navy,
              border: 'none', borderRadius: brand.radius,
              fontWeight: 800, fontSize: '15px',
              cursor: generating ? 'not-allowed' : 'pointer',
              letterSpacing: '-0.2px',
              boxShadow: generating ? 'none' : '0 4px 14px rgba(103,231,78,0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            {generating ? 'Generating...' : '✦ Generate with AI'}
          </button>

          {generated && (
            <a
              href="/showcase"
              target="_blank"
              style={{ display: 'block', marginTop: '10px', padding: '13px', background: brand.navy, color: brand.white, borderRadius: brand.radius, fontWeight: 600, fontSize: '14px', textAlign: 'center', textDecoration: 'none', transition: 'opacity 0.15s', }}
            >
              View Live Showcase →
            </a>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: '14px 24px', borderTop: '1px solid #e2e8f0', background: '#fafbfc', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '11px', color: '#999' }}>Flimp Communications</div>
          <div style={{ fontSize: '11px', color: '#bbb' }}>v1.0 Prototype</div>
        </div>
      </div>

      {/* RIGHT PANEL — PREVIEW */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Preview Header */}
        <div style={{ background: brand.white, borderBottom: '1px solid #e2e8f0', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: brand.navy }}>
            {generated ? 'RWJBarnabas Health 2026 Benefits Showcase' : 'Preview'}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {generated && (
              <>
                <a href="/showcase" target="_blank" style={{ padding: '8px 16px', background: brand.navy, color: brand.white, borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                  Open Full Screen ↗
                </a>
                <button style={{ padding: '8px 16px', border: `1.5px solid ${brand.border}`, borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: brand.white, cursor: 'pointer', color: brand.navy }}>
                  Deploy to Vercel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Preview Frame */}
        {generated ? (
          <iframe src="/showcase" style={{ flex: 1, border: 'none' }} title="Showcase Preview" />
        ) : (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', color: '#888' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: `linear-gradient(135deg, ${brand.green}22, ${brand.navy}11)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>✦</div>
            <div style={{ fontWeight: 700, fontSize: '20px', color: brand.navy, letterSpacing: '-0.3px' }}>Ready to generate</div>
            <div style={{ fontSize: '14px', textAlign: 'center', maxWidth: '340px', lineHeight: '1.7', color: '#666' }}>
              Upload your benefits guide and source files, confirm the video library URL, select an output type, and click Generate.
            </div>
            <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
              {['PDF', 'DOCX', 'XLSX', 'CSV', 'TXT'].map(t => (
                <span key={t} style={{ padding: '4px 10px', background: brand.bgLight, borderRadius: '6px', fontSize: '11px', fontWeight: 600, color: brand.navy }}>{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
