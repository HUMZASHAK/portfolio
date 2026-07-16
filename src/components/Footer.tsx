import { Code2, Globe2, Mail, Network } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:humzashaik23@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/HUMZASHAK", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/humza-shaik", icon: Network },
  { label: "Portfolio", href: "https://portfolio-d8gv0c2wj-humzashaks-projects.vercel.app", icon: Globe2 },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <p className="text-sm text-slate-400">Designed &amp; Developed by</p>
          <p className="mt-1 font-display text-xl font-semibold text-slate-100">Shaik Humza</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Software Engineer · Full Stack Developer · AI &amp; Data Science Student</p>
        </div>
        <div className="sm:text-right">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end">
            {links.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");
              return <a key={link.label} href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="inline-flex min-h-11 items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-200"><Icon size={16} aria-hidden="true" />{link.label}</a>;
            })}
          </div>
          <p className="mt-4 text-sm text-slate-400">© 2026 Shaik Humza. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
