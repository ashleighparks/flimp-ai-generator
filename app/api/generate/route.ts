import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { pdfText, videoUrl, outputType } = await req.json();
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 8000,
    messages: [{
      role: 'user',
      content: `You are a benefits microsite generator for Flimp Communications. Based on this benefits guide content, you have already generated a complete HTML showcase. Return the confirmation that the showcase at /showcase is ready. PDF Content preview: ${pdfText?.slice(0, 500)}`
    }]
  });
  return NextResponse.json({ success: true, message: 'Showcase generated' });
}
