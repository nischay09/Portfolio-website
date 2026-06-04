'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code2, Globe, Brain, Zap } from 'lucide-react'
import { SectionWrapper, SectionHeader, FadeIn } from '@/components/ui/SectionWrapper'

const interests = [
  { icon: Brain, label: 'Data Structures & Algorithms', desc: 'Solving complex problems with efficient solutions' },
  { icon: Globe, label: 'Web Development', desc: 'Building modern, responsive web applications' },
  { icon: Code2, label: 'Software Engineering', desc: 'Writing clean, maintainable, scalable code' },
  { icon: Zap, label: 'AI Technologies', desc: 'Exploring modern machine learning and AI tools' },
]

const accordionItems = [
  {
    title: 'About Me',
    content: `I'm a second-year B.Tech Computer Science Engineering student at JIS University, currently maintaining a CGPA of 8.0. I'm deeply passionate about technology and its ability to solve real-world problems.`,
  },
  {
    title: 'Academic Journey',
    content: `Currently pursuing B.Tech in Computer Science Engineering at JIS University. Before that, I completed my Higher Secondary and Secondary education at The Newtown School, Kolkata — where my curiosity for computers first took root.`,
  },
  {
    title: 'Technical Interests',
    content: `My primary interests lie in Data Structures & Algorithms, Web Development, and Software Engineering. I am currently trying to learn working with modern JavaScript frameworks like React and Next.js, and I'm always exploring new technologies including TypeScript, AI tools, and cloud technologies.`,
  },
  {
    title: 'Goals & Aspirations',
    content: `I aim to build impactful software solutions, contribute to open-source projects, and gain professional experience through internships. My long-term goal is to become a proficient full-stack engineer with expertise in scalable system design. Explore a bit of Machine Learning and AI as well.`,
  },
]

function AccordionItem({ title, content, index }: { title: string; content: string; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <FadeIn delay={index * 0.08}>
      <div className="border-b border-mist dark:border-[#2a2a2a]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-4 text-left group"
        >
          <span className="flex items-center gap-3">
            <span className="font-mono text-xs text-ash">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-base font-medium text-ink dark:text-fog group-hover:text-ash transition-colors">
              {title}
            </span>
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="text-ash" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-4 pl-8 text-sm text-ash dark:text-[#888] leading-relaxed">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-fog dark:bg-[#0d0d0d]">
      <SectionHeader
        label="001 — About"
        title="Who I Am"
        subtitle="A curious mind building at the intersection of code and creativity."
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Accordion */}
        <div>
          <div className="border-t border-mist dark:border-[#2a2a2a]">
            {accordionItems.map((item, i) => (
              <AccordionItem key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>

        {/* Interests grid */}
        <div className="space-y-4">
          <FadeIn direction="right">
            <p className="text-sm font-mono text-ash uppercase tracking-widest mb-6">Interests</p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3">
            {interests.map(({ icon: Icon, label, desc }, i) => (
              <FadeIn key={label} delay={i * 0.08} direction="right">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl border border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] hover:border-charcoal dark:hover:border-[#444] transition-all duration-200 cursor-default group"
                >
                  <Icon size={18} className="text-ash group-hover:text-ink dark:group-hover:text-fog mb-2 transition-colors" />
                  <p className="text-sm font-medium text-ink dark:text-fog leading-tight mb-1">{label}</p>
                  <p className="text-xs text-ash leading-snug hidden group-hover:block">{desc}</p>
                  <p className="text-xs text-ash leading-snug group-hover:hidden">{desc.slice(0, 30)}...</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Stats */}
          <FadeIn delay={0.4} direction="right">
            <div className="mt-6 p-5 rounded-xl border border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111]">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '8.0', label: 'CGPA' },
                  { value: '1+', label: 'Projects' },
                  { value: '5+', label: 'Technologies' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-display text-3xl text-ink dark:text-fog">{value}</div>
                    <div className="text-xs text-ash font-mono mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
