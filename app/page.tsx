'use client';
import { useState } from 'react';

export default function Home() {
  const [sources, setSources] = useState<{name: string; type: string; content: string}[]>([]);
  const [videoUrl, setVideoUrl] = useState('https://flimp.live/Flimp_HRBenefitsVideoLibrary');
  const [outputType, setOutputType] = useState('Showcase');
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [status, setStatus] = useState('');
  const [pdfName, setPdfName] = useState('');

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfName(file.name);
    setStatus('Reading PDF...');
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/extract-pdf', { method: 'POST', body: formData });
    const data = await res.json();
    setSources(prev => [...prev, { name: file.name, type: 'PDF', content: data.text }]);
    setStatus('PDF processed ✓');
  };

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

  return (
    <div style={{display:'flex',height:'100vh',fontFamily:'system-ui,sans-serif',background:'#f4f6f9'}}>
      {/* LEFT PANEL — CONTENT HUB */}
      <div style={{width:'380px',minWidth:'380px',background:'white',borderRight:'1px solid #e2e8f0',display:'flex',flexDirection:'column',overflow:'hidden'}}>
        {/* Header */}
        <div style={{background:'#1B2F5C',padding:'20px 24px'}}>
          <div style={{color:'white',fontWeight:700,fontSize:'18px',marginBottom:'2px'}}>Flimp AI Generator</div>
          <div style={{color:'rgba(255,255,255,.6)',fontSize:'13px'}}>Benefits Microsite Platform</div>
        </div>

        <div style={{flex:1,overflowY:'auto',padding:'24px'}}>
          {/* Step 1: Upload */}
          <div style={{marginBottom:'28px'}}>
            <div style={{fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'1px',color:'#CC1F34',marginBottom:'10px'}}>Step 1 — Content Sources</div>

            {/* PDF Upload */}
            <label style={{display:'block',border:'2px dashed #d0dce8',borderRadius:'10px',padding:'20px',textAlign:'center',cursor:'pointer',marginBottom:'12px',background:'#f8fafc'}}>
              <input type="file" accept=".pdf" onChange={handlePdfUpload} style={{display:'none'}}/>
              <div style={{fontSize:'28px',marginBottom:'8px'}}>📄</div>
              <div style={{fontWeight:600,fontSize:'14px',color:'#1B2F5C',marginBottom:'4px'}}>
                {pdfName || 'Drop Benefits Guide PDF'}
              </div>
              <div style={{fontSize:'12px',color:'#888'}}>Click to upload · PDF only</div>
            </label>

            {/* Source Cards */}
            {sources.map((s, i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',background:'#f0fdf4',border:'1px solid #86efac',borderRadius:'8px',marginBottom:'8px'}}>
                <span>✓</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:'13px',fontWeight:600,color:'#1B2F5C'}}>{s.name}</div>
                  <div style={{fontSize:'11px',color:'#666'}}>{s.type} · Processed</div>
                </div>
                <button onClick={() => setSources(prev => prev.filter((_, j) => j !== i))} style={{background:'none',border:'none',cursor:'pointer',color:'#999',fontSize:'16px'}}>×</button>
              </div>
            ))}

            {/* Video Library URL */}
            <div style={{marginTop:'12px'}}>
              <div style={{fontSize:'12px',fontWeight:600,color:'#444',marginBottom:'6px'}}>Video Library URL</div>
              <input
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                style={{width:'100%',padding:'10px 12px',border:'1px solid #d0dce8',borderRadius:'8px',fontSize:'13px',color:'#1B2F5C'}}
              />
            </div>
          </div>

          {/* Step 2: Output Type */}
          <div style={{marginBottom:'28px'}}>
            <div style={{fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'1px',color:'#CC1F34',marginBottom:'10px'}}>Step 2 — Output Type</div>
            <div style={{display:'flex',gap:'8px'}}>
              {['Showcase','Microsite','Template'].map(type => (
                <button
                  key={type}
                  onClick={() => setOutputType(type)}
                  style={{flex:1,padding:'10px 8px',borderRadius:'8px',border:'1.5px solid',borderColor:outputType===type?'#1B2F5C':'#d0dce8',background:outputType===type?'#1B2F5C':'white',color:outputType===type?'white':'#555',fontWeight:outputType===type?700:400,fontSize:'13px',cursor:'pointer'}}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          {status && (
            <div style={{background:'#EBF0F5',borderRadius:'8px',padding:'12px',fontSize:'13px',color:'#1B2F5C',marginBottom:'16px',display:'flex',alignItems:'center',gap:'8px'}}>
              <span style={{animation:'spin 1s linear infinite',display:'inline-block'}}>⟳</span>
              {status}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={generating}
            style={{width:'100%',padding:'14px',background:generating?'#9ca3af':'#CC1F34',color:'white',border:'none',borderRadius:'10px',fontWeight:700,fontSize:'15px',cursor:generating?'not-allowed':'pointer'}}
          >
            {generating ? 'Generating...' : '✦ Generate with AI'}
          </button>

          {generated && (
            <a
              href="/showcase"
              target="_blank"
              style={{display:'block',marginTop:'10px',padding:'12px',background:'#1B2F5C',color:'white',borderRadius:'10px',fontWeight:600,fontSize:'14px',textAlign:'center',textDecoration:'none'}}
            >
              View Live Showcase →
            </a>
          )}
        </div>
      </div>

      {/* RIGHT PANEL — PREVIEW */}
      <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden'}}>
        {/* Preview Header */}
        <div style={{background:'white',borderBottom:'1px solid #e2e8f0',padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{fontWeight:600,fontSize:'14px',color:'#1B2F5C'}}>
            {generated ? 'RWJBarnabas Health 2026 Benefits Showcase' : 'Preview'}
          </div>
          <div style={{display:'flex',gap:'8px'}}>
            {generated && (
              <>
                <a href="/showcase" target="_blank" style={{padding:'8px 14px',background:'#1B2F5C',color:'white',borderRadius:'6px',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>
                  Open Full Screen ↗
                </a>
                <button style={{padding:'8px 14px',border:'1.5px solid #d0dce8',borderRadius:'6px',fontSize:'13px',fontWeight:600,background:'white',cursor:'pointer',color:'#1B2F5C'}}>
                  Deploy to Vercel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Preview Frame */}
        {generated ? (
          <iframe src="/showcase" style={{flex:1,border:'none'}} title="Showcase Preview"/>
        ) : (
          <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'16px',color:'#888'}}>
            <div style={{fontSize:'60px'}}>✦</div>
            <div style={{fontWeight:600,fontSize:'18px',color:'#1B2F5C'}}>Ready to generate</div>
            <div style={{fontSize:'14px',textAlign:'center',maxWidth:'320px',lineHeight:'1.6'}}>
              Upload your benefits guide PDF, confirm the video library URL, select Showcase, and click Generate.
            </div>
          </div>
        )}
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
