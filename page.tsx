import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, Database, ShieldAlert, Cpu, TrendingUp } from 'lucide-react';

const mockData = [
  { name: 'Jan', requests: 4000, efficiency: 84 },
  { name: 'Feb', requests: 3000, efficiency: 88 },
  { name: 'Mar', requests: 5000, efficiency: 92 },
  { name: 'Apr', requests: 2780, efficiency: 95 },
  { name: 'May', requests: 1890, efficiency: 99 },
];

export default function AIDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      {/* Upper Header */}
      <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Agentic AI Infrastructure
          </h1>
          <p className="text-slate-400 mt-1">Supabase Real-time Telemetry & Analytics Dashboard</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20 text-sm font-semibold animate-pulse">
          <Cpu size={16} /> Live Cluster Active
        </div>
      </div>

      {/* Grid Tech Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl hover:border-blue-500/50 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">LLM Token Flow</h3>
            <Brain className="text-blue-400" size={24} />
          </div>
          <p className="text-2xl font-bold">4.8M / sec</p>
          <span className="text-xs text-emerald-400 flex items-center gap-1 mt-2">
            <TrendingUp size={12} /> +12.3% upper bound
          </span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl hover:border-emerald-500/50 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Supabase Pool Stats</h3>
            <Database className="text-emerald-400" size={24} />
          </div>
          <p className="text-2xl font-bold">99.99% Uptime</p>
          <span className="text-xs text-slate-400 block mt-2">PostgreSQL connections: 142/150</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl hover:border-rose-500/50 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Agent Security Layer</h3>
            <ShieldAlert className="text-rose-400" size={24} />
          </div>
          <p className="text-2xl font-bold">0 Anomalies</p>
          <span className="text-xs text-emerald-400 block mt-2">Guardrails active on all vector node requests</span>
        </div>
      </div>

      {/* Interactive Chart Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl mb-8">
        <h2 className="text-xl font-bold mb-6 text-slate-200">AI Agent Request Efficiency</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
              <Bar dataKey="requests" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}