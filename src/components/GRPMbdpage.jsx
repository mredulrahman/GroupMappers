import React, { useEffect, useMemo, useState } from "react";

// === GroupMappers: React Single‑Page Site (SPA) ===
// Usage: put this file as src/App.jsx inside a Vite React project, run `npm run dev`.
// Design: Tailwind-first (looks best with Tailwind enabled), but graceful without it.
// Content mirrors sections from groupmappers.com (Who we are, Mission, What we do, Activities, Projects, Team, Contact, Donate).

// --- Small UI helpers ---

const Chip = ({ active, onClick, children }) => (
  <button onClick={onClick} className={`px-3 py-1.5 rounded-xl border text-sm transition ${active ? "border-emerald-400 bg-emerald-400/10" : "border-white/10 hover:bg-white/5"}`}>
    {children}
  </button>
);

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-20">
    {title && (
      <div className="max-w-5xl mx-auto mb-8">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-base md:text-lg text-white/70 mt-2">{subtitle}</p>}
      </div>
    )}
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

// --- Data (summarized from the public site) ---
const nav = [
  { label: "Home", href: "#home" },
  { label: "Who we are", href: "#who" },
  { label: "Mission", href: "#mission" },
  { label: "What we do", href: "#what" },
  { label: "Activities", href: "#activities" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
  { label: "Donate", href: "#donate" },
];

const whatWeDo = [
  {
    title: "Data collection & management",
    body:
      "Participatory mapping, key-informant interviews, ODK / Kobo / SMS workflows, QA/QC, database design, geo‑referencing systems; support to malaria, rabies, Aedes, STH and more.",
  },
  {
    title: "Data analysis & modeling",
    body:
      "Spatial analytics: interpolation, overlay, spatial statistics, accessibility modelling; evidence for targeting, referrals and public health planning.",
  },
  {
    title: "Mapping & visualization",
    body:
      "Interactive web maps, custom styles, multi‑source integration; communicating geospatial insights for decisions and community action.",
  },
];

const activities = [
  { title: "Volunteering", desc: "Join mapping, newsletter writing, training and club cafés." },
  { title: "GroupLetters (Issues 1–3)", desc: "Newsletter exploring geospatial perspectives in health." },
  { title: "Training", desc: "Intro to GIS (2019), GIS for Communicable Disease Surveillance (2017), Capacity trainings." },
  { title: "GIS & RS Club Café", desc: "Community sessions for hands‑on learning and sharing." },
];

const projects = [
  { tag: "Key", title: "Village Mapping (2017‑ongoing)", link: "#" },
  { tag: "Health", title: "The Global Health Facilities Database (2020‑ongoing)", link: "#" },
  { tag: "Malaria", title: "Malaria API Tracker (2021)", link: "#" },
];

const team = [
  { name: "Md Nurullah", role: "GIS Data Manager" },
  { name: "Afrida Asad", role: "Research & Development Officer" },
  { name: "Md Ismail Hossain", role: "Spatial Data Scientist" },
  { name: "Didar Uddin", role: "Research Assistant" },
  { name: "Ahamed Sakib Antor", role: "GIS Analyst" },
  { name: "Md. Mustakim Hossain Khan", role: "GIS Specialist" },
  { name: "Mst. Asfat Ara Joly", role: "Data Analyst" },
  { name: "Israt Jahan Ria", role: "Data Analyst" },
];

// --- Sections ---
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-neutral-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold">
          <div className="w-9 h-9 rounded-xl bg-emerald-400/20 grid place-items-center text-emerald-300 font-bold">GM</div>
          <span className="text-lg">GroupMappers</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="px-3 py-2 rounded-xl hover:bg-white/5">
              {n.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden px-3 py-2 rounded-xl border border-white/10" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 p-3 space-y-2">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="block px-3 py-2 rounded-xl hover:bg-white/5">{n.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-cyan-400/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-emerald-300/90 text-xs md:text-sm">Crowdsourced Mapping for Public Health</p>
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            GroupMappers
            <span className="block text-emerald-300 mt-2">Empowering communities with geospatial technology</span>
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            Established in 2017, GroupMappers is a Bangladesh‑based initiative using GIS/RS and data science to address public health challenges through village mapping, accessibility analysis, and open data tools.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur text-sm">Contact us</a>
            <a href="#what" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur text-sm">What we do</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <Section id="who" title="Who we are">
      <div className="grid md:grid-cols-2 gap-8">
        <p className="text-white/80 leading-relaxed">
          As our name suggests, we are a group of Bangladesh‑based mapmakers. We leverage crowdsourcing and geospatial technologies to improve public health outcomes, with a growing network of trained volunteers.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Mission() {
  return (
    <Section id="mission" title="Mission">
      <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-white/80">
        "Empowering communities through the utilization of crowdsourced mapping and data analysis for enhanced public health outcomes."
      </div>
    </Section>
  );
}

function WhatWeDo() {
  return (
    <Section id="what" title="What we do" subtitle="Geospatial methods for real‑world public health decisions">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whatWeDo.map((s, i) => (
          <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="font-semibold text-base md:text-lg">{s.title}</h4>
            <p className="text-sm md:text-base text-white/75 mt-2">{s.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Activities() {
  return (
    <Section id="activities" title="Activities">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {activities.map((a, i) => (
          <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="font-semibold">{a.title}</h4>
            <p className="text-sm text-white/75 mt-2">{a.desc}</p>
            <a href="#" className="mt-3 inline-block text-sm underline underline-offset-4">Learn more</a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", ...Array.from(new Set(projects.map(p => p.tag)))];
  const filtered = useMemo(() => projects.filter(p => filter === "All" || p.tag === filter), [filter]);

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(t => (
          <Chip key={t} active={filter===t} onClick={() => setFilter(t)}>{t}</Chip>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, i) => (
          <article key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[16/9] bg-white/5" />
            <div className="p-4">
              <p className="text-xs uppercase tracking-wider text-white/60">{p.tag}</p>
              <h4 className="font-semibold mt-1">{p.title}</h4>
              <a className="mt-2 inline-block text-sm underline underline-offset-4" href={p.link}>Read more</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Team() {
  return (
    <Section id="team" title="Team Members">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-square bg-white/5" />
            <div className="p-4">
              <h4 className="font-semibold">{m.name}</h4>
              <p className="text-white/70 text-sm">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Bangladesh Office – Lalmatia, Mohammadpur, Dhaka">
      <div className="grid md:grid-cols-2 gap-6">
        <form className="grid gap-3">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Name" />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Email" type="email" />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Organization" />
          <textarea className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Message" rows={5} />
          <button type="button" className="px-5 py-3 rounded-2xl bg-emerald-400/90 hover:bg-emerald-400 text-black font-semibold">Send</button>
        </form>
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-white/80">
          <p className="font-semibold">Phone</p>
          <p className="mb-3">+880 1793 593 083</p>
          <p className="font-semibold">Email</p>
          <p className="mb-3">groupmappers@gmail.com</p>
          <p className="font-semibold">Address</p>
          <p>House 6/20 (1st Floor), Block‑E, Lalmatia, Mohammadpur, Dhaka, Bangladesh</p>
          <div className="mt-4 flex gap-4 text-sm">
            <a className="underline underline-offset-4" href="#">Facebook</a>
            <a className="underline underline-offset-4" href="#">Twitter</a>
            <a className="underline underline-offset-4" href="#">YouTube</a>
            <a className="underline underline-offset-4" href="#">LinkedIn</a>
            <a className="underline underline-offset-4" href="#">Instagram</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Donate() {
  return (
    <Section id="donate" title="Donate">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
        <p>
          Support GroupMappers’ community mapping, training, and open data efforts. Your contribution helps sustain volunteer‑led activities and public goods.
        </p>
        <a href="#" className="mt-3 inline-block text-sm underline underline-offset-4">Go to donation page</a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-white/70">
      <p>© {new Date().getFullYear()} GroupMappers. All rights reserved.</p>
    </footer>
  );
}

export default function GRPMbdpage() {
  useEffect(() => {
    // Smooth scrolling for hash links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      const el = id && document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Mission />
      <WhatWeDo />
      <Activities />
      <Projects />
      <Team />
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
}
