import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const services = [
  { icon: "01", title: "Full Stack Development", text: "End-to-end products with thoughtful interfaces, reliable APIs, and structured data." },
  { icon: "02", title: "Backend Development", text: "Clean Java and Spring Boot services designed around maintainability and scale." },
  { icon: "03", title: "Frontend Development", text: "Responsive React experiences with clear hierarchy, motion, and usable details." },
  { icon: "04", title: "Mobile Development", text: "React Native applications that bring a coherent product experience to mobile." },
  { icon: "05", title: "REST API Development", text: "Well-structured endpoints, authentication flows, and integrations for modern apps." },
  { icon: "06", title: "AI & Data Science", text: "Practical exploration of data-driven systems, intelligent workflows, and AI concepts." },
];

export default function ServicesSection() {
  return (
    <SectionShell id="services" eyebrow="Services" title="Engineering across the product journey." description="I combine product-minded frontend craft with practical backend architecture to turn ideas into dependable software.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -7, scale: 1.01 }} className="group rounded-[26px] border border-white/10 bg-slate-950/55 p-6 shadow-[0_0_40px_rgba(56,189,248,0.03)] backdrop-blur transition hover:border-cyan-300/30 hover:shadow-[0_0_45px_rgba(56,189,248,0.14)]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 font-display text-sm text-cyan-200">{service.icon}</span>
            <h3 className="mt-6 font-display text-xl font-semibold text-slate-100">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{service.text}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
