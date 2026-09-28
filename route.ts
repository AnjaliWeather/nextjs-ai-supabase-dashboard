import { NextResponse } from 'next/server';
import { runOrchestrator } from '../../../nexus-orchestrator';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const agentResult = await runOrchestrator(prompt);

    return NextResponse.json({ success: true, data: agentResult });

  } catch (error) {
    console.error("Orchestrator Error:", error);
    return NextResponse.json({ success: false, error: "Failed to execute AI agents" }, { status: 500 });
  }
}