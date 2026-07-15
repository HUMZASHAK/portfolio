import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const posts = [
  { title: "How I Built Trackit", description: "A breakdown of my approach to building a full-stack employee management system." },
  { title: "Spring Boot REST APIs", description: "Lessons from designing backend endpoints and structuring service logic." },
  { title: "React Native Development", description: "What I learned while extending a product into mobile experiences." },
  { title: "My AI Learning Journey", description: "How I’m connecting data, logic, and intelligent systems in practice." },
];

export default function BlogsSection() {
  return (
    <SectionShell
      id="blogs"
      eyebrow="Blogs"
      title="Sharing what I learn while building."
      description="I enjoy documenting technical ideas, implementation choices, and lessons learned so I can grow and contribute more clearly."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="rounded-[24px] border border-white/10 bg-slate-950/60 p-7 backdrop-blur"
          >
            <h3 className="font-display text-xl font-semibold text-slate-100">{post.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{post.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
