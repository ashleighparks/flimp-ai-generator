'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { StoreProvider, useStore, type Project } from '../../components/store';
import ResourceCenter from '../../components/outputs/ResourceCenter';
import Showcase from '../../components/outputs/Showcase';
import VirtualFair from '../../components/outputs/VirtualFair';
import BenefitsAtAGlance from '../../components/outputs/BenefitsAtAGlance';

// Pre-built demo outputs for shareable links
const DEMO_OUTPUTS: Record<string, { clientName: string; outputType: string }> = {
  'p1': { clientName: 'RWJBarnabas Health', outputType: 'showcase' },
  'p2': { clientName: 'Acme Corp', outputType: 'resource-center' },
  'p3': { clientName: 'GlobalTech', outputType: 'virtual-fair' },
  'demo-showcase': { clientName: 'Demo Company', outputType: 'showcase' },
  'demo-resource-center': { clientName: 'Demo Company', outputType: 'resource-center' },
  'demo-virtual-fair': { clientName: 'Demo Company', outputType: 'virtual-fair' },
  'demo-baag': { clientName: 'Demo Company', outputType: 'benefits-at-a-glance' },
};

function OutputRenderer() {
  const { id } = useParams<{ id: string }>();
  const { projects } = useStore();
  const [storedProject, setStoredProject] = useState<Project | null>(null);

  // Load from localStorage as fallback
  useEffect(() => {
    try {
      const stored = localStorage.getItem('flimp_projects');
      const parsed: Project[] = stored ? JSON.parse(stored) : [];
      const found = parsed.find(p => p.id === id);
      if (found) setStoredProject(found);
    } catch (e) {
      console.warn('Failed to load project from localStorage', e);
    }
  }, [id]);

  // Check projects from store first, then localStorage, then demo outputs
  const project = projects.find(p => p.id === id) || storedProject;
  const demo = DEMO_OUTPUTS[id];

  const clientName = project?.clientName || demo?.clientName || 'Demo Company';
  const outputType = project?.outputType || demo?.outputType || 'showcase';

  switch (outputType) {
    case 'resource-center':
      return <ResourceCenter clientName={clientName} />;
    case 'showcase':
      return <Showcase clientName={clientName} />;
    case 'virtual-fair':
      return <VirtualFair clientName={clientName} />;
    case 'benefits-at-a-glance':
      return <BenefitsAtAGlance clientName={clientName} />;
    default:
      return <Showcase clientName={clientName} />;
  }
}

export default function OutputPage() {
  return (
    <StoreProvider>
      <OutputRenderer />
    </StoreProvider>
  );
}
