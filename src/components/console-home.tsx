"use client";

import { useState } from "react";
import {
  Activity, ArrowRight, ArrowUpRight, Blocks, CheckCircle2, ChevronDown,
  CircleHelp, Command, Cpu, Eye, Fingerprint, Globe2, Layers3, LockKeyhole,
  Menu, MonitorCog, Network, RadioTower, ShieldCheck, ShieldEllipsis,
  SlidersHorizontal, Sparkles, TerminalSquare, X
} from "lucide-react";

type PreviewKey = "owner" | "technical" | "oversight" | "applications";

const previews: { key: PreviewKey; title: string; eyebrow: string; description: string; icon: typeof ShieldCheck; capabilities: string[] }[] = [
  {
    key: "owner", title: "Platform Owner", eyebrow: "Highest Administrator",
    description: "A consolidated view of ecosystem-wide platform health, privileged administration and critical governance controls.",
    icon: ShieldCheck,
    capabilities: ["Ecosystem-wide status overview", "Privileged access governance", "Platform-wide security posture", "Critical events and audit visibility"]
  },
  {
    key: "technical", title: "Technical Administration", eyebrow: "Platform Operations",
    description: "Tools for authorised technical administrators responsible for keeping applications, services and infrastructure operating reliably.",
    icon: MonitorCog,
    capabilities: ["Application and service registry", "Infrastructure and integration status", "Operational monitoring", "Technical incident coordination"]
  },
  {
    key: "oversight", title: "Executive Oversight", eyebrow: "Authorised Oversight",
    description: "A controlled oversight experience with approved ecosystem summaries, governance indicators and accountability reporting.",
    icon: Eye,
    capabilities: ["Approved ecosystem summaries", "Governance and accountability indicators", "Strategic-level reporting", "Controlled access to reports"]
  },
  {
    key: "applications", title: "Application Administration", eyebrow: "Application-Level Controls",
    description: "A scoped administration experience for authorised operators of individual applications within the ecosystem.",
    icon: Blocks,
    capabilities: ["Assigned application overview", "Scoped configuration controls", "Application user administration", "Application-specific activity logs"]
  }
];

const metrics = [
  { label: "Applications", value: "06", note: "Ecosystem register", icon: Layers3 },
  { label: "Platform services", value: "—", note: "Awaiting integration", icon: Network },
  { label: "Security posture", value: "—", note: "Live data not connected", icon: Fingerprint },
  { label: "System activity", value: "—", note: "Monitoring not connected", icon: Activity }
];

export function ConsoleHome() {
  const [active, setActive] = useState<PreviewKey>("owner");
  const [showPreview, setShowPreview] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const selected = previews.find((item) => item.key === active) ?? previews[0];
  const SelectedIcon = selected.icon;

  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <header className="sticky top-0 z-30 border-b border-[#e5eaf1] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-3" aria-label="Nexus Hub Administration Console home">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142746] text-white"><Command size={20} /></div>
            <div>
              <div className="text-[15px] font-bold tracking-tight text-[#142746]">NEXUS HUB</div>
              <div className="text-[10px] font-semibold uppercase tracking-[.19em] text-[#77849a]">Administration Console</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#52617a] md:flex">
            <a href="#experiences" className="transition hover:text-[#142746]">Experiences</a>
            <a href="#scope" className="transition hover:text-[#142746]">Platform scope</a>
            <a href="#principles" className="transition hover:text-[#142746]">Security principles</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <span className="flex items-center gap-2 rounded-full border border-[#e5eaf1] px-3 py-2 text-[11px] font-medium text-[#66738a]"><span className="h-2 w-2 rounded-full bg-amber-400" /> Preview environment</span>
            <button onClick={() => setShowPreview(true)} className="rounded-lg bg-[#142746] px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#203c65]">Explore console <ArrowUpRight className="ml-1 inline" size={14} /></button>
          </div>
          <button className="rounded-lg p-2 text-[#142746] md:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X /> : <Menu />}</button>
        </div>
        {mobileMenu && <div className="border-t border-[#e5eaf1] bg-white px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm text-[#52617a]"><a href="#experiences" onClick={() => setMobileMenu(false)}>Experiences</a><a href="#scope" onClick={() => setMobileMenu(false)}>Platform scope</a><a href="#principles" onClick={() => setMobileMenu(false)}>Security principles</a><button onClick={() => { setShowPreview(true); setMobileMenu(false); }} className="rounded-lg bg-[#142746] px-4 py-3 text-left font-semibold text-white">Explore console</button></div></div>}
      </header>

      <section className="console-grid relative overflow-hidden border-b border-[#e5eaf1]">
        <div className="pointer-events-none absolute -right-28 -top-36 h-[540px] w-[540px] rounded-full border border-[#dce4ef] opacity-70" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-[380px] w-[380px] rounded-full border border-[#dce4ef] opacity-70" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:px-12 lg:py-24">
          <div className="max-w-[700px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce4ef] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.17em] text-[#49658d]"><span className="h-1.5 w-1.5 rounded-full bg-[#4d7bb7]" /> Nexus Hub digital ecosystem</div>
            <h1 className="text-[42px] font-semibold leading-[1.08] tracking-[-.045em] text-[#142746] sm:text-[56px] lg:text-[64px]">One platform.<br /><span className="text-[#54739f]">Clear oversight.</span></h1>
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-[#63718a] sm:text-[16px]">The central administration environment for governing, securing and monitoring the Nexus Hub digital ecosystem.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button onClick={() => setShowPreview(true)} className="rounded-lg bg-[#142746] px-5 py-3.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#203c65]">Explore dashboard previews <ArrowRight className="ml-2 inline" size={15} /></button>
              <a href="#principles" className="rounded-lg border border-[#d8e0eb] bg-white/80 px-5 py-3.5 text-[13px] font-semibold text-[#344764] transition hover:bg-white">How access works</a>
            </div>
            <p className="mt-5 text-[11px] text-[#8a96a8]">Demonstration environment · No live administrative access</p>
          </div>
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="rounded-2xl border border-[#dfe6ef] bg-white p-4 shadow-[0_24px_80px_rgba(24,45,78,.10)] sm:p-5">
              <div className="flex items-center justify-between border-b border-[#edf0f5] pb-4">
                <div><div className="text-[11px] font-bold text-[#233958]">Ecosystem overview</div><div className="mt-1 text-[10px] text-[#8b97a9]">Illustrative dashboard preview</div></div>
                <span className="rounded-md bg-[#f2f5f9] px-2 py-1 text-[9px] font-semibold text-[#718098]">DEMO DATA</span>
              </div>
              <div className="grid grid-cols-2 gap-3 py-4">
                {metrics.map((metric) => { const Icon = metric.icon; return <div key={metric.label} className="rounded-xl border border-[#edf0f5] bg-[#fbfcfe] p-3.5"><div className="flex items-center justify-between text-[#8290a5]"><span className="text-[10px]">{metric.label}</span><Icon size={14} /></div><div className="mt-3 text-[25px] font-semibold tracking-tight text-[#203653]">{metric.value}</div><div className="mt-1 text-[9px] text-[#9aa4b3]">{metric.note}</div></div>; })}
              </div>
              <div className="rounded-xl bg-[#f6f8fb] p-4">
                <div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-semibold text-[#4a5c77]">Ecosystem applications</span><span className="text-[9px] text-[#8c98aa]">Illustrative register</span></div>
                {["Corporate Website", "Ecosystem Portal", "Corporate Workspace", "Nexus Hub TV", "Nexus Hub Learning", "Administration Console"].map((name, i) => <div key={name} className="flex items-center gap-2 border-t border-[#e9edf3] py-2 first:border-0"><span className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-[9px] font-bold text-[#647995]">{String(i + 1).padStart(2, "0")}</span><span className="text-[10px] text-[#53637b]">{name}</span><span className="ml-auto text-[9px] text-[#a0aaba]">Planned / scoped</span></div>)}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-[#e1e7ef] bg-white px-4 py-3 shadow-lg sm:flex"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf3fb] text-[#41628f]"><ShieldEllipsis size={17} /></div><div><div className="text-[10px] font-bold text-[#334965]">Access governed by role</div><div className="mt-0.5 text-[9px] text-[#8a96a8]">Least privilege by design</div></div></div>
          </div>
        </div>
      </section>

      <section id="experiences" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-[#6380a8]">Dashboard experiences</div><h2 className="mt-3 text-[30px] font-semibold tracking-[-.035em] text-[#172b49] sm:text-[36px]">Designed around responsibility.</h2><p className="mt-3 max-w-[650px] text-[13px] leading-6 text-[#748198]">Different responsibilities require different views. Select an experience to see its intended scope.</p></div>
          <span className="w-fit rounded-full border border-[#e1e7ef] bg-white px-3 py-2 text-[10px] font-medium text-[#7b8799]">Previews are not access grants</span>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {previews.map((item) => { const Icon = item.icon; const isActive = active === item.key; return <button key={item.key} onClick={() => setActive(item.key)} className={`group rounded-xl border p-5 text-left transition ${isActive ? "border-[#9bb1ce] bg-white shadow-[0_10px_30px_rgba(30,55,90,.07)]" : "border-[#e4e9f0] bg-white/65 hover:border-[#c5d1e0] hover:bg-white"}`}>
            <div className="flex items-start justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? "bg-[#eaf0f8] text-[#294c7c]" : "bg-[#f1f4f8] text-[#71819a]"}`}><Icon size={19} /></span><ArrowUpRight size={15} className="text-[#a0aabb] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
            <div className="mt-5 text-[10px] font-bold uppercase tracking-[.12em] text-[#8090a7]">{item.eyebrow}</div><div className="mt-2 text-[16px] font-semibold text-[#263b59]">{item.title}</div><p className="mt-2 min-h-[60px] text-[11px] leading-5 text-[#78859a]">{item.description}</p>
            <div className={`mt-4 flex items-center gap-2 text-[10px] font-bold ${isActive ? "text-[#315b91]" : "text-[#8895a8]"}`}>{isActive ? "Selected experience" : "View experience"} <ArrowRight size={12} /></div>
          </button>; })}
        </div>
        <div className="mt-5 grid gap-6 rounded-2xl border border-[#dfe6ef] bg-white p-6 sm:p-8 lg:grid-cols-[.8fr_1.2fr]">
          <div><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#7187a5]"><SelectedIcon size={14} /> Selected preview</div><h3 className="mt-3 text-[24px] font-semibold tracking-tight text-[#1c3150]">{selected.title}</h3><p className="mt-3 text-[12px] leading-6 text-[#748198]">{selected.description}</p><button onClick={() => setShowPreview(true)} className="mt-6 rounded-lg bg-[#142746] px-4 py-3 text-[11px] font-semibold text-white hover:bg-[#203c65]">Open demonstration <ArrowRight className="ml-2 inline" size={13} /></button></div>
          <div className="grid gap-3 sm:grid-cols-2">{selected.capabilities.map((capability) => <div key={capability} className="flex items-start gap-3 rounded-lg bg-[#f7f9fc] p-4"><CheckCircle2 className="mt-0.5 shrink-0 text-[#6684ac]" size={15} /><span className="text-[11px] leading-5 text-[#53647d]">{capability}</span></div>)}</div>
        </div>
      </section>

      <section id="scope" className="border-y border-[#e5eaf1] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">
          <div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-[#6380a8]">Defined platform boundary</div><h2 className="mt-3 text-[30px] font-semibold tracking-[-.035em] text-[#172b49]">A focused technical control plane.</h2><p className="mt-4 max-w-[570px] text-[13px] leading-7 text-[#748198]">The Administration Console provides central technical administration and ecosystem-wide oversight. It connects to other environments through controlled interfaces without taking over their responsibilities.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[{icon:Cpu,title:"Administration Console",desc:"Technical governance, access, security, integrations and monitoring.",active:true},{icon:Globe2,title:"Corporate Website",desc:"Public corporate presence and information."},{icon:Blocks,title:"Ecosystem Portal",desc:"Shared entry point into the digital ecosystem."},{icon:Layers3,title:"Corporate Workspace",desc:"Internal operations, departments, people and business workflows."}].map((item) => {const Icon=item.icon;return <div key={item.title} className={`rounded-xl border p-4 ${item.active ? "border-[#a9bad1] bg-[#f5f8fc]" : "border-[#e9edf3] bg-white"}`}><Icon size={17} className="text-[#55749e]" /><div className="mt-3 text-[12px] font-semibold text-[#344964]">{item.title}</div><p className="mt-1 text-[10px] leading-5 text-[#8793a5]">{item.desc}</p></div>})}
          </div>
        </div>
      </section>

      <section id="principles" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-[650px]"><div className="text-[10px] font-bold uppercase tracking-[.18em] text-[#6380a8]">Trust and accountability</div><h2 className="mt-3 text-[30px] font-semibold tracking-[-.035em] text-[#172b49]">Access is earned, scoped and recorded.</h2><p className="mt-3 text-[13px] leading-6 text-[#748198]">The interface is designed around a few non-negotiable security principles. Actual enforcement belongs to the backend and connected identity services.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{icon:LockKeyhole,title:"Authentication first",desc:"Protected functions require an authenticated identity."},{icon:ShieldCheck,title:"Least privilege",desc:"Users see only the functions and information they are authorised to access."},{icon:SlidersHorizontal,title:"Separation of duties",desc:"Administrative permissions do not automatically confer corporate authority."},{icon:Activity,title:"Accountable actions",desc:"Privileged operations must be authorised and recorded in audit trails."}].map((item)=>{const Icon=item.icon;return <div key={item.title} className="rounded-xl border border-[#e5eaf1] bg-white p-5"><Icon size={18} className="text-[#54749f]" /><div className="mt-4 text-[13px] font-semibold text-[#344964]">{item.title}</div><p className="mt-2 text-[11px] leading-5 text-[#7c899c]">{item.desc}</p></div>})}
        </div>
      </section>

      <footer className="border-t border-[#e5eaf1] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-7 text-[10px] text-[#8a96a8] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><div className="font-semibold tracking-[.12em] text-[#52647f]">NEXUS HUB · ADMINISTRATION CONSOLE</div><div>Independent platform · Preview only · Backend authorisation required</div><div>© {new Date().getFullYear()} Nexus Hub</div></div>
      </footer>

      {showPreview && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b30]/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="preview-title">
        <div className="w-full max-w-[620px] overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
          <div className="flex items-start justify-between border-b border-[#e8edf3] px-6 py-5"><div><div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#6d83a2]">Interactive demonstration</div><h2 id="preview-title" className="mt-2 text-[21px] font-semibold text-[#1c3150]">{selected.title}</h2></div><button onClick={() => setShowPreview(false)} className="rounded-lg p-2 text-[#718098] hover:bg-[#f1f4f8]" aria-label="Close preview"><X size={18} /></button></div>
          <div className="px-6 py-5"><div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[11px] leading-5 text-amber-800"><strong>Preview only.</strong> This demonstration uses illustrative content. It does not authenticate you, grant permissions or expose live platform data.</div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">{previews.map((item)=>{const Icon=item.icon;return <button key={item.key} onClick={()=>setActive(item.key)} className={`flex items-center gap-3 rounded-lg border p-3 text-left ${active===item.key?"border-[#9bb1ce] bg-[#f3f7fc]":"border-[#e7ecf2] hover:bg-[#fafbfd]"}`}><Icon size={17} className="text-[#54749f]" /><span className="text-[11px] font-semibold text-[#405571]">{item.title}</span>{active===item.key&&<CheckCircle2 size={14} className="ml-auto text-[#54749f]" />}</button>})}</div>
            <div className="mt-5 rounded-xl bg-[#f6f8fb] p-4"><div className="text-[10px] font-bold uppercase tracking-[.12em] text-[#7b8aa0]">Experience scope</div><ul className="mt-3 grid gap-2 sm:grid-cols-2">{selected.capabilities.map((cap)=> <li key={cap} className="flex gap-2 text-[10px] leading-5 text-[#596b83]"><CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#6c89ad]" />{cap}</li>)}</ul></div>
          </div>
          <div className="flex items-center justify-between border-t border-[#e8edf3] bg-[#fbfcfe] px-6 py-4"><span className="text-[10px] text-[#929daf]">Authentication integration: not yet connected</span><button onClick={()=>setShowPreview(false)} className="rounded-lg bg-[#142746] px-4 py-2.5 text-[11px] font-semibold text-white hover:bg-[#203c65]">Close preview</button></div>
        </div>
      </div>}
    </main>
  );
}
