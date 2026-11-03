"use client";

import {
  Activity, AlertTriangle, AppWindow, ArrowRight, Cable, CheckCircle2,
  Clock3, Cloud, Database, Gauge, KeyRound, Network, Server, ShieldCheck,
  Wrench
} from "lucide-react";

const workstreams = [
  { title: "Identity operations", description: "Provisioning, account lifecycle, role assignment and access reviews.", state: "Design pending", icon: KeyRound },
  { title: "Application administration", description: "Application configuration, service registration and release coordination.", state: "Scope defined", icon: AppWindow },
  { title: "Infrastructure operations", description: "Hosting environments, deployment configuration and service dependencies.", state: "Not connected", icon: Server },
  { title: "Integrations & APIs", description: "Credentials, API connections, webhooks and integration lifecycle.", state: "Not connected", icon: Cable },
  { title: "Security operations", description: "Operational security controls, vulnerability follow-up and incident handling.", state: "Not connected", icon: ShieldCheck },
  { title: "Monitoring & reliability", description: "Availability, performance, alerts and operational incident response.", state: "Not connected", icon: Activity }
];

const principles = [
  "Operate within permissions explicitly granted to the administrator.",
  "Do not alter Platform Owner authority or appoint corporate executives.",
  "Use approval and maker-checker controls for sensitive changes.",
  "Record privileged actions with actor, time, target and outcome.",
  "Keep production secrets out of frontend code and browser storage.",
  "Escalate decisions that exceed delegated operational authority."
];

const readiness = [
  { label: "Authentication", note: "No identity provider connected", icon: KeyRound },
  { label: "Authorisation", note: "Server-side permission enforcement pending", icon: ShieldCheck },
  { label: "Infrastructure telemetry", note: "Monitoring integration pending", icon: Cloud },
  { label: "Audit pipeline", note: "Central event service not connected", icon: Database }
];

export function TechnicalAdministrationDashboard() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#172b49]">
      <header className="border-b border-[#e4e9f0] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[.17em] text-[#7086a5]">Nexus Hub · Administration Console</div>
            <h1 className="mt-2 text-[25px] font-semibold tracking-[-.035em] sm:text-[32px]">Technical & Platform Administration</h1>
            <p className="mt-1 text-[11px] text-[#7c899c]">Operational administration · Delegated technical responsibilities</p>
          </div>
          <span className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-[9px] font-bold uppercase tracking-[.1em] text-amber-800">Demonstration only</span>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] space-y-7 px-5 py-7 sm:px-8 lg:px-12 lg:py-9">
        <section className="rounded-2xl border border-[#dce5f0] bg-white p-5 sm:p-7">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#5d7da7]"><Wrench size={15}/> Operational administration</div>
              <h2 className="mt-3 text-[21px] font-semibold tracking-tight text-[#203653] sm:text-[25px]">Keep platform services configured, secure and reliable.</h2>
              <p className="mt-2 text-[12px] leading-6 text-[#748198]">A working environment for authorised technical administrators to manage approved platform operations, monitor services and resolve operational issues within delegated permissions.</p>
            </div>
            <div className="min-w-[220px] rounded-xl bg-[#f4f7fb] p-4">
              <div className="text-[9px] font-bold uppercase tracking-[.13em] text-[#8291a6]">Administrator session</div>
              <div className="mt-2 flex items-center gap-2 text-[12px] font-semibold text-[#405773]"><span className="h-2 w-2 rounded-full bg-amber-400"/> No authenticated session</div>
              <div className="mt-1 text-[9px] text-[#95a0b0]">Identity and permission services pending</div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-3"><h2 className="text-[14px] font-bold text-[#344964]">Operational workstreams</h2><p className="mt-1 text-[10px] text-[#8995a7]">Functional areas for the technical administration team</p></div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {workstreams.map((item) => { const Icon = item.icon; return (
              <article key={item.title} className="rounded-xl border border-[#e4e9f0] bg-white p-4">
                <div className="flex items-center justify-between"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f0f4f9] text-[#58769e]"><Icon size={17}/></span><span className="rounded-full bg-[#f4f6f9] px-2 py-1 text-[8px] font-semibold text-[#8794a7]">{item.state}</span></div>
                <h3 className="mt-4 text-[11px] font-bold text-[#405571]">{item.title}</h3>
                <p className="mt-1 min-h-[40px] text-[9px] leading-5 text-[#8793a5]">{item.description}</p>
                <div className="mt-3 flex items-center gap-1 text-[9px] font-semibold text-[#7187a5]">View workstream <ArrowRight size={12}/></div>
              </article>
            ); })}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2"><Gauge size={17} className="text-[#7189a8]"/><h2 className="text-[14px] font-bold text-[#344964]">Service operations snapshot</h2></div>
            <p className="mt-1 text-[10px] text-[#8995a7]">Live service metrics will appear after trusted monitoring sources are integrated.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[{label:"Services monitored",value:"—",detail:"No monitoring source",icon:Activity},{label:"Open incidents",value:"—",detail:"Incident workflow pending",icon:AlertTriangle},{label:"Active environments",value:"—",detail:"Infrastructure inventory pending",icon:Cloud},{label:"Recent deployments",value:"—",detail:"Deployment provider not connected",icon:Server}].map((item)=>{const Icon=item.icon;return <div key={item.label} className="rounded-lg border border-[#edf0f5] p-4"><div className="flex items-center justify-between text-[#8290a5]"><span className="text-[10px] font-medium">{item.label}</span><Icon size={15}/></div><div className="mt-3 text-[25px] font-semibold text-[#263b59]">{item.value}</div><p className="mt-1 text-[9px] text-[#98a3b2]">{item.detail}</p></div>;})}
            </div>
          </div>
          <div className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2"><Clock3 size={16} className="text-[#7189a8]"/><h2 className="text-[14px] font-bold text-[#344964]">Operational activity</h2></div>
            <div className="mt-5 rounded-lg border border-dashed border-[#dfe5ed] bg-[#fbfcfd] p-5 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3f7] text-[#8190a5]"><Activity size={18}/></div>
              <div className="mt-3 text-[11px] font-semibold text-[#5c6e87]">No activity stream connected</div>
              <p className="mx-auto mt-1 max-w-[240px] text-[9px] leading-5 text-[#98a3b2]">Administrative changes, deployment events and incident updates will be listed here when the audit and monitoring services are available.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6">
          <div className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#6682a6]"/><h2 className="text-[14px] font-bold text-[#344964]">Operational access principles</h2></div>
          <p className="mt-1 text-[10px] text-[#8995a7]">The administrator's authority is delegated, permission-scoped and auditable.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {principles.map((item,index)=><div key={item} className="flex items-start gap-3 rounded-lg bg-[#f7f9fc] p-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-[9px] font-bold text-[#6c82a0]">{String(index+1).padStart(2,"0")}</span><p className="text-[10px] leading-5 text-[#596b83]">{item}</p></div>)}
          </div>
        </section>

        <section className="rounded-xl border border-[#dfe6ef] bg-[#f9fbfd] p-5 sm:p-6">
          <div className="flex items-center gap-2"><Network size={16} className="text-[#7189a8]"/><h2 className="text-[13px] font-bold text-[#344964]">Platform dependencies</h2></div>
          <p className="mt-2 max-w-3xl text-[10px] leading-5 text-[#7c899c]">This dashboard is designed to consume verified status from identity, authorisation, infrastructure, monitoring and audit services. It does not treat missing connections as healthy or operational.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">{readiness.map((item)=>{const Icon=item.icon;return <div key={item.label} className="rounded-lg border border-[#e4e9f0] bg-white p-3"><div className="flex items-center gap-2 text-[10px] font-bold text-[#536780]"><Icon size={14}/>{item.label}</div><p className="mt-2 text-[9px] leading-4 text-[#8794a7]">{item.note}</p></div>;})}</div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#e3e8ef] pt-4 text-[9px] text-[#929daf]"><span>NEXUS HUB · TECHNICAL & PLATFORM ADMINISTRATION</span><span>Prototype only · No live privileges · Backend enforcement required</span></div>
      </div>
    </main>
  );
}
