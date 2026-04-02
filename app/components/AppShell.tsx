'use client';
import { StoreProvider } from './store';
import Sidebar from './Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#f0f4f8' }}>
        <Sidebar />
        <main style={{ marginLeft: '220px', flex: 1, minHeight: '100vh' }}>
          {children}
        </main>
      </div>
    </StoreProvider>
  );
}
