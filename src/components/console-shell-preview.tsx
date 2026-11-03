"use client";

import { useState } from "react";
import {
  Activity, AppWindow, Bell, ChevronDown, CircleHelp, Command, Cpu,
  Gauge, KeyRound, LayoutDashboard, LifeBuoy, LockKeyhole, Menu,
  Network, Search, Settings2, ShieldCheck, ShieldEllipsis, X
} from "lucide-react";
import { consoleNavigation, navigationGroups, type ConsoleArea } from "@/lib/console-navigation";

const iconMap = {
  overview: LayoutDashboard,
  applications: AppWindow,
  "identity-access": KeyRound,
  security: ShieldCheck,
  integrations: Network,
  infrastructure: Cpu,
  monitoring: Activity,
  audit: ShieldEllipsis,
  settings: Settings2
};

const pageCopy: Record<ConsoleArea, { title: string; subtitle: string; status: string }> = {
  overview: { title: "Platform overview", subtitle: "A consolidated view of the Nexus Hub digital ecosystem.", status: "Overview prototype" },
  applications: { title: "Application registry", subtitle: "A structured register of applications connected to the ecosystem.", status: "Registry not connected" },
  "identity-access": { title: "Identity & access", subtitle: "Identity lifecycle, role assignments and permission governance.", status: "Identity provider not connected" },
  security: { title: "Security centre", subtitle: "Security posture, privileged access and control monitoring.", status: "Security services not connected" },
  integrations: { title: "Integrations", subtitle: "External services, API connections and integration health.", status: "No integrations connected" },
  infrastructure: { title: "Infrastructure", subtitle: "Environments, hosting dependencies and platform resources.", status: "Infrastructure not connected" },
  monitoring: { title: "Monitoring", subtitle: "Operational signals, service availability and incidents.", status: "Monitoring not connected" },
  audit: { title: "Audit trail", subtitle: "A reviewable record of administrative and security-sensitive events.", status: "Audit service not connected" },
  settings: { title: "System settings", subtitle: "Configuration for the Administration Console experience.", status: "Configuration is local prototype state" }
};

function Sidebar({ active, onNavigate, onClose }: { active: ConsoleArea; onNavigate: (id: ConsoleArea) => void; onClose?: () => void }) {
  return (
    <aside className="flex h-full w-[264px] shrink-0 flex-col border-r border-[#e5eaf1] bg-white">
      <div className="flex h-[72px] items-center gap-3 border-b border-[#edf0f5] px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#142746] text-white"><Command size={18} /></div>
        <div className="min-w-0"><div className="text-[13px] font-extrabold tracking-[.08em] text-[#172b49]">NEXUS HUB</div><div className="text-[9px] font-semibold uppercase tracking-[.16em] text-[#8793a5]">Administration Console</div></div>
        {onClose && <button className="ml-auto rounded-lg p-2 text-[#718098] hover:bg-[#f3f6fa]" onClick={onClose} aria-label="Close navigation"><X size={17} /></button>}
      </div>
      <div className="border-b border-[#edf0f5] px-5 py-4">
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5"><div className="flex items-center gap-2 text-[10px] font-bold text-amber-800"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Prototype environment</div><p className="mt-1 text-[9px] leading-4 text-amber-800/80">No live account or platform connection</p></div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navigationGroups.map((group) => {
          const items = consoleNavigation.filter((item) => item.group === group.id);
          return <div key={group.id} className="mb-5">
            <div className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[.15em] text-[#9aa5b5]">{group.label}</div>
            <div className="space-y-1">{items.map((item) => {
              const Icon = iconMap[item.id];
              const selected = active === item.id;
              return <button key={item.id} onClick={() => { onNavigate(item.id); onClose?.(); }} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${selected ? "bg-[#edf3fa] text-[#244a7b]" : "text-[#65738a] hover:bg-[#f6f8fb] hover:text-[#263c5a]"}`} aria-current={selected ? "page" : undefined}>
                <Icon size={16} /><span className="text-[11px] font-semibold">{item.label}</span>{selected && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#4f76a7]" />}
              </button>;
            })}</div>
          </div>;
        })}
      </nav>
      <div className="border-t border-[#edf0f5] p-4"><div className="flex items-center gap-2 rounded-lg px-2 py-2 text-[10px] text-[#8290a4]"><CircleHelp size={15} /> Help & documentation</div><div className="mt-2 flex items-center gap-2 rounded-lg bg-[#f6f8fb] p-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e4ebf5] text-[#47658e]"><LockKeyhole size={14} /></div><div><div className="text-[10px] font-bold text-[#435773]">Access not established</div><div className="text-[9px] text-[#8995a7]">Authentication pending</div></div></div></div>
    </aside>
  );
}

export function ConsoleShellPreview() {
  const [active, setActive] = useState<ConsoleArea>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const current = pageCopy[active];

  return <div className="min-h-screen bg-[#f5f7fa] text-[#172b49]">
    <div className="flex min-h-screen">
      <div className="hidden lg:block"><Sidebar active={active} onNavigate={setActive} /></div>
      {sidebarOpen && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-[#0d1b30]/40" onClick={() => setSidebarOpen(false)} aria-label="Close navigation overlay" /><div className="relative h-full w-[min(86vw,300px)] shadow-2xl"><Sidebar active={active} onNavigate={setActive} onClose={() => setSidebarOpen(false)} /></div></div>}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-[72px] items-center gap-3 border-b border-[#e5eaf1] bg-white/95 px-4 backdrop-blur sm:px-7">
          <button onClick={() => setSidebarOpen(true)} className="rounded-lg p-2 text-[#52647f] hover:bg-[#f2f5f9] lg:hidden" aria-label="Open navigation"><Menu size={19} /></button>
          <div className="min-w-0 flex-1"><div className="text-[9px] font-semibold uppercase tracking-[.14em] text-[#91a0b4]">Nexus Hub / Administration</div><div className="mt-1 truncate text-[13px] font-bold text-[#263b59]">{current.title}</div></div>
          <div className="hidden h-9 w-[220px] items-center gap-2 rounded-lg border border-[#e7ebf1] bg-[#fbfcfd] px-3 text-[#9aa5b5] md:flex"><Search size={14} /><span className="text-[10px]">Search console</span><span className="ml-auto rounded border border-[#e5eaf1] px-1.5 py-0.5 text-[9px]">⌘ K</span></div>
          <button className="relative rounded-lg p-2 text-[#75849a] hover:bg-[#f2f5f9]" aria-label="Notifications are unavailable in preview" title="Notifications unavailable"><Bell size={17} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" /></button>
          <div className="hidden h-8 items-center gap-2 border-l border-[#e8edf3] pl-4 sm:flex"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9eef6] text-[#49668f]"><LockKeyhole size={14} /></div><div><div className="text-[10px] font-semibold text-[#52647f]">Preview visitor</div><div className="text-[9px] text-[#9aa5b5]">Unauthenticated</div></div><ChevronDown size={13} className="text-[#9aa5b5]" /></div>
        </header>
        <main className="mx-auto w-full max-w-[1500px] flex-1 px-4 py-6 sm:px-7 sm:py-8">
          <div className="mb-6 flex flex-col justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 sm:flex-row sm:items-center"><div className="flex items-start gap-3"><div className="mt-0.5 rounded-lg bg-white p-2 text-amber-700"><ShieldEllipsis size={16} /></div><div><div className="text-[11px] font-bold text-amber-900">Interface prototype — not connected to live services</div><p className="mt-1 text-[10px] leading-5 text-amber-800/80">This shell demonstrates layout and navigation only. It does not authenticate users or enforce permissions.</p></div></div><span className="w-fit rounded-full border border-amber-300 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.1em] text-amber-800">Demo only</span></div>
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#6f87a8]">Administration workspace</div><h1 className="mt-2 text-[26px] font-semibold tracking-[-.035em] text-[#1c3150] sm:text-[32px]">{current.title}</h1><p className="mt-2 max-w-2xl text-[12px] leading-6 text-[#77859a]">{current.subtitle}</p></div><div className="flex items-center gap-2 rounded-lg border border-[#e4e9f0] bg-white px-3 py-2 text-[10px] text-[#8290a4]"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> {current.status}</div></div>
          {active === "overview" ? <Overview /> : <ModulePlaceholder area={active} />}
        </main>
        <footer className="border-t border-[#e5eaf1] bg-white px-4 py-4 text-[9px] text-[#929daf] sm:px-7"><div className="flex flex-col gap-1 sm:flex-row sm:justify-between"><span>NEXUS HUB · ADMINISTRATION CONSOLE</span><span>Prototype interface · No live platform data · Backend authorisation required</span></div></footer>
      </div>
    </div>
  </div>;
}

function Overview() {
  const cards = [
    { label: "Registered applications", value: "06", note: "Illustrative ecosystem scope", icon: AppWindow },
    { label: "Platform services", value: "—", note: "Awaiting service integration", icon: Network },
    { label: "Security events", value: "—", note: "Security feed unavailable", icon: ShieldCheck },
    { label: "System availability", value: "—", note: "Monitoring not connected", icon: Gauge }
  ];
  return <div className="space-y-6">
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{cards.map((card) => { const Icon=card.icon; return <div key={card.label} className="rounded-xl border border-[#e4e9f0] bg-white p-4"><div className="flex items-center justify-between text-[#8290a5]"><span className="text-[10px] font-medium">{card.label}</span><Icon size={16} /></div><div className="mt-4 text-[27px] font-semibold tracking-tight text-[#263b59]">{card.value}</div><div className="mt-1 text-[9px] text-[#98a3b2]">{card.note}</div></div>; })}</div>
    <div className="grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
      <section className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="text-[13px] font-bold text-[#344964]">Ecosystem application register</h2><p className="mt-1 text-[10px] text-[#8995a7]">Illustrative scope — not a live service inventory</p></div><AppWindow size={17} className="text-[#7e91ac]" /></div><div className="mt-5 divide-y divide-[#edf0f5]">{["Corporate Website","Ecosystem Portal","Corporate Workspace","Nexus Hub TV","Nexus Hub Learning","Administration Console"].map((name,index)=><div key={name} className="flex items-center gap-3 py-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f4f8] text-[9px] font-bold text-[#6b7e99]">{String(index+1).padStart(2,"0")}</span><div className="min-w-0 flex-1"><div className="text-[11px] font-semibold text-[#465a76]">{name}</div><div className="mt-0.5 text-[9px] text-[#9aa5b5]">Application record not connected</div></div><span className="rounded-full bg-[#f3f5f8] px-2 py-1 text-[8px] font-semibold text-[#8995a7]">Scoped</span></div>)}</div></section>
      <section className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6"><div className="flex items-center gap-2"><Activity size={16} className="text-[#7189a8]" /><h2 className="text-[13px] font-bold text-[#344964]">Operational signals</h2></div><div className="mt-5 rounded-lg border border-dashed border-[#dfe5ed] bg-[#fbfcfd] p-5 text-center"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3f7] text-[#8190a5]"><Activity size={18} /></div><div className="mt-3 text-[11px] font-semibold text-[#5c6e87]">No monitoring source connected</div><p className="mx-auto mt-1 max-w-[230px] text-[9px] leading-5 text-[#98a3b2]">Service health, incidents and performance metrics will appear when authorised data sources are integrated.</p></div><div className="mt-4 flex items-start gap-2 rounded-lg bg-[#f6f8fb] p-3 text-[9px] leading-5 text-[#78879c]"><LockKeyhole size={13} className="mt-0.5 shrink-0" /> Operational data will be filtered by the signed-in user’s permissions.</div></section>
    </div>
    <section className="rounded-xl border border-[#e4e9f0] bg-white p-5 sm:p-6"><div className="flex items-center gap-2"><LifeBuoy size={16} className="text-[#7189a8]" /><h2 className="text-[13px] font-bold text-[#344964]">Implementation readiness</h2></div><div className="mt-4 grid gap-3 sm:grid-cols-3"><div className="rounded-lg bg-[#f7f9fc] p-4"><div className="text-[10px] font-bold text-[#536780]">Frontend shell</div><div className="mt-1 text-[9px] text-[#8794a7]">Prototype in progress</div></div><div className="rounded-lg bg-[#f7f9fc] p-4"><div className="text-[10px] font-bold text-[#536780]">Authentication</div><div className="mt-1 text-[9px] text-[#8794a7]">Not connected</div></div><div className="rounded-lg bg-[#f7f9fc] p-4"><div className="text-[10px] font-bold text-[#536780]">Authorisation APIs</div><div className="mt-1 text-[9px] text-[#8794a7]">Not connected</div></div></div></section>
  </div>;
}

function ModulePlaceholder({ area }: { area: ConsoleArea }) {
  const current = pageCopy[area];
  return <section className="rounded-xl border border-[#e4e9f0] bg-white p-6 sm:p-8"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf2f8] text-[#54739b]"><Command size={19} /></div><h2 className="mt-5 text-[16px] font-bold text-[#344964]">{current.title} workspace</h2><p className="mt-2 max-w-xl text-[11px] leading-6 text-[#7d8a9e]">This area is reserved in the navigation model. Its workflows, data contracts and permissions will be implemented after the relevant backend and governance requirements are confirmed.</p><div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full border border-[#e4e9f0] px-3 py-1.5 text-[9px] text-[#7d8a9e]">No live data</span><span className="rounded-full border border-[#e4e9f0] px-3 py-1.5 text-[9px] text-[#7d8a9e]">No privileged actions</span><span className="rounded-full border border-[#e4e9f0] px-3 py-1.5 text-[9px] text-[#7d8a9e]">Backend pending</span></div></section>;
}
