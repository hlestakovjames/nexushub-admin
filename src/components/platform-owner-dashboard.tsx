"use client";

import {
  Activity, AppWindow, ArrowUpRight, BadgeCheck, ChartNoAxesCombined,
  CircleAlert, Clock3, Fingerprint, KeyRound, Network, Server,
  ShieldCheck, ShieldEllipsis, Users
} from "lucide-react";

const indicators = [
  { label: "Ecosystem applications", value: "06", detail: "Defined in current scope", icon: AppWindow },
  { label: "Identity services", value: "—", detail: "Connection not configured", icon: Fingerprint },
  { label: "Critical security alerts", value: "—", detail: "Security feed unavailable", icon: ShieldCheck },
  { label: "Platform availability", value: "—", detail: "Monitoring not connected", icon: Activity }
];

const domains = [
  { title: "Identity & privileged access", detail: "Account lifecycle, privileged roles and access governance.", status: "Not connected", icon: KeyRound },
  { title: "Application ecosystem", detail: "Application register, ownership and service relationships.", status: "Scope defined", icon: AppWindow },
  { title: "Infrastructure & integrations", detail: "Hosting environments, external services and dependencies.", status: "Not connected", icon: Network },
  { title: "Security & audit", detail: "Security posture, sensitive actions and audit evidence.", status: "Not connected", icon: ShieldEllipsis }
];

const safeguards = [
  "Platform Owner is the highest administrative position in the digital ecosystem.",
  "Delegating operational tasks does not transfer or surrender the highest authority.",
  "Platform administration does not itself create a corporate executive appointment.",
  "Access to private records remains permission-scoped, even for privileged accounts.",
  "Privileged actions require authentication, authorisation and auditable records."
];

export function PlatformOwnerDashboard() {
  return <main className="min-h-screen bg-[#f5f7fa] text-[#172b49]">
    <header className="border-b border-[#e4e9f0] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <div><div className="text-[10px] font-bold uppercase tracking-[.17em] text-[#7086a5]">Nexus Hub · Administration Console</div><h1 className="mt-2 text-[25px] font-semibold tracking-[-.035em] sm:text-[32px]">Platform Owner</h1><p className="mt-1 text-[11px] text-[#7c899c]">Highest Administrator · Ecosystem-wide stewardship</p></div>
        <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-[9px] font-bold uppercase tracking-[.1em] text-amber-800">Demonstration only</div>
      </div>
    </header>
    <div className="mx-auto max-w-[1440px] space-y-7 px-5 py-7 sm:px-8 lg:px-12 lg:py-9">
      <section className="rounded-2xl border border-[#dce5f0] bg-white p-5 sm:p-7">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div className="max-w-3xl"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#5d7da7]"><BadgeCheck size={15}/> Highest administrative oversight</div><h2 className="mt-3 text-[21px] font-semibold tracking-tight text-[#203653] sm:text-[25px]">Steward the ecosystem. Preserve accountability.</h2><p className="mt-2 text-[12px] leading-6 text-[#748198]">A consolidated view for the highest administrator responsible for the integrity, continuity and technical governance of the Nexus Hub digital ecosystem.</p></div>
          <div className="min-w-[220px] rounded-xl bg-[#f4f7fb] p-4"><div className="text-[9px] font-bold uppercase tracking-[.13em] text-[#8291a6]">Current session</div><div className="mt-2 flex items-center gap-2 text-[12px] font-semibold text-[#405773]"><span className="h-2 w-2 rounded-full bg-amber-400"/> No authenticated session</div><div className="mt-1 text-[9px] text-[#95a0b0]">Identity provider not connected</div></div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between"><div><h2 className="text-[14px] font-bold text-[#344964]">Ecosystem control indicators</h2><p className="mt-1 text-[10px] text-[#8995a7]">Values are intentionally unavailable until trusted data sources are connected.</p></div><span className="text-[9px] font-semibold uppercase tracking-[.1em] text-[#9aa5b5]">Illustrative state</span></div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{indicators.map((item)=>{const Icon=item.icon;return <article key={item.label} className="rounded-xl border border-[#e4e9f0] bg-white p-4"><div className="flex items-center justify-between text-[#8290a5]"><span className="text-[10px] font-medium">{item.label}</span><Icon size={16}/></div><div className="mt-4 text-[27px] font-semibold tracking-tight text-[#263b59]">{item.value}</div><p className="mt-1 text-[9px] text-[#98a3b2]">{item.detail}</p></article>})}</div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
        <div className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="text-[14px] font-bold text-[#344964]">Stewardship domains</h2><p className="mt-1 text-[10px] text-[#8995a7]">Areas under ecosystem-wide technical oversight</p></div><ChartNoAxesCombined size={18} className="text-[#7d91ad]"/></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{domains.map((item)=>{const Icon=item.icon;return <article key={item.title} className="rounded-lg border border-[#edf0f5] p-4"><div className="flex items-center justify-between"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0f4f9] text-[#58769e]"><Icon size={16}/></span><span className="rounded-full bg-[#f4f6f9] px-2 py-1 text-[8px] font-semibold text-[#8794a7]">{item.status}</span></div><h3 className="mt-4 text-[11px] font-bold text-[#405571]">{item.title}</h3><p className="mt-1 text-[9px] leading-5 text-[#8793a5]">{item.detail}</p></article>})}</div></div>
        <div className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6"><div className="flex items-center gap-2"><CircleAlert size={16} className="text-[#8a7890]"/><h2 className="text-[14px] font-bold text-[#344964]">Governance attention</h2></div><div className="mt-5 rounded-lg border border-dashed border-[#dfe5ed] bg-[#fbfcfd] p-5 text-center"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3f7] text-[#8190a5]"><Clock3 size={18}/></div><div className="mt-3 text-[11px] font-semibold text-[#5c6e87]">No governance feed connected</div><p className="mx-auto mt-1 max-w-[230px] text-[9px] leading-5 text-[#98a3b2]">Pending approvals, privileged access reviews and escalation items will be displayed when the relevant services exist.</p></div><div className="mt-4 flex items-start gap-2 rounded-lg bg-[#f6f8fb] p-3 text-[9px] leading-5 text-[#78879c]"><Users size={13} className="mt-0.5 shrink-0"/> Corporate appointments and executive decisions remain governed outside this technical console.</div></div>
      </section>

      <section className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6"><div className="flex items-center gap-2"><ShieldCheck size={17} className="text-[#6682a6]"/><h2 className="text-[14px] font-bold text-[#344964]">Platform Owner authority safeguards</h2></div><p className="mt-1 text-[10px] text-[#8995a7]">Foundational design principles for the future privileged experience.</p><div className="mt-5 grid gap-3 md:grid-cols-2">{safeguards.map((item,index)=><div key={item} className="flex items-start gap-3 rounded-lg bg-[#f7f9fc] p-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-[9px] font-bold text-[#6c82a0]">{String(index+1).padStart(2,"0")}</span><p className="text-[10px] leading-5 text-[#596b83]">{item}</p></div>)}</div></section>

      <section className="rounded-xl border border-[#dfe6ef] bg-[#f9fbfd] p-5 sm:p-6"><div className="flex items-center gap-2"><Server size={16} className="text-[#7189a8]"/><h2 className="text-[13px] font-bold text-[#344964]">Platform continuity</h2></div><p className="mt-2 max-w-3xl text-[10px] leading-5 text-[#7c899c]">The future owner experience should surface backup status, recovery readiness, deployment health and critical infrastructure dependencies. These indicators must come from verified services; no status is simulated as healthy here.</p><div className="mt-4 flex flex-wrap gap-2">{["Backups","Recovery readiness","Deployment integrity","Service dependencies"].map((label)=><span key={label} className="rounded-full border border-[#e1e7ef] bg-white px-3 py-1.5 text-[9px] text-[#718198]">{label}</span>)}</div></section>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#e3e8ef] pt-4 text-[9px] text-[#929daf]"><span>NEXUS HUB · PLATFORM OWNER EXPERIENCE</span><span>Prototype only · No live privileges · Backend enforcement required <ArrowUpRight className="ml-1 inline" size={11}/></span></div>
    </div>
  </main>;
}
