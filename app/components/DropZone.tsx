'use client';
import { useState, useRef, useCallback } from 'react';

type Props = {
  onFiles: (files: File[]) => void;
  compact?: boolean;
};

export default function DropZone({ onFiles, compact }: Props) {
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files?.length) onFiles(Array.from(e.dataTransfer.files));
  }, [onFiles]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={e => { e.preventDefault(); e.stopPropagation(); setDragging(true); }}
      onDragLeave={e => { e.preventDefault(); e.stopPropagation(); setDragging(false); }}
      onClick={() => ref.current?.click()}
      style={{
        border: `2px dashed ${dragging ? '#67E74E' : '#d0dce8'}`,
        borderRadius: '12px',
        padding: compact ? '20px' : '36px 20px',
        textAlign: 'center',
        cursor: 'pointer',
        background: dragging ? 'rgba(103,231,78,0.06)' : '#f8fafc',
        transition: 'all 0.2s ease',
      }}
    >
      <input
        ref={ref}
        type="file"
        accept=".pdf,.csv,.docx,.xlsx,.txt,.html,.json,.doc,.xls"
        multiple
        onChange={e => e.target.files && onFiles(Array.from(e.target.files))}
        style={{ display: 'none' }}
      />
      <div style={{ fontSize: compact ? '24px' : '32px', marginBottom: compact ? '6px' : '10px', opacity: 0.8 }}>
        {dragging ? '📥' : '📄'}
      </div>
      <div style={{ fontWeight: 600, fontSize: '14px', color: '#08212D', marginBottom: '4px' }}>
        {dragging ? 'Drop files here' : 'Drag & drop files here'}
      </div>
      <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.5' }}>
        or click to browse<br />
        <span style={{ fontSize: '11px', color: '#aaa' }}>PDF, DOCX, XLSX, CSV, TXT, HTML, JSON</span>
      </div>
    </div>
  );
}
