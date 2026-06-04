'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionWrapper, SectionHeader, FadeIn } from '@/components/ui/SectionWrapper'

const categories = [
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'C++', level: 'Intermediate'

       },
      { name: 'C', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Basic' },
      { name: 'TypeScript', level: 'Basic' },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    skills: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'React', level: 'Basic' },
      { name: 'Next.js', level: 'Basic' },
      { name: 'Tailwind CSS', level: 'Basic' },
    ],
  },
  {
    id: 'cs',
    label: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures', level: 'Intermediate' },
      { name: 'Algorithms', level: 'Intermediate' },
      { name: 'Object-Oriented Programming', level: 'Intermediate' },
      { name: 'Database Fundamentals', level: 'Basic' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    skills: [
      { name: 'Git', level: 'Intermediate' },
      { name: 'GitHub', level: 'Intermediate' },
      { name: 'VS Code', level: 'Intermediate' },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: string }) {
  const colors: Record<string, string> = {
    'Basic': 'bg-fog dark:bg-[#2a2a2a] text-ash',
    'Intermediate': 'bg-charcoal dark:bg-[#444] text-fog',
    'Advanced': 'bg-ink dark:bg-fog text-paper dark:text-ink',
  }

  return (
    <div className="flex items-center justify-between py-2.5 border-b border-mist dark:border-[#2a2a2a] last:border-0">
      <span className="text-sm text-charcoal dark:text-[#ccc]">{name}</span>
      <span className={`text-xs font-mono px-3 py-1 rounded-full ${colors[level] ?? 'bg-fog text-ash'}`}>
        {level}
      </span>
    </div>
  )
}

function CategoryCard({
  category,
  isActive,
  onClick,
  index,
}: {
  category: typeof categories[0]
  isActive: boolean
  onClick: () => void
  index: number
}) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.button
        onClick={onClick}
        whileHover={{ y: -2 }}
        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
          isActive
            ? 'border-ink dark:border-fog bg-ink dark:bg-fog text-paper dark:text-ink'
            : 'border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] hover:border-charcoal dark:hover:border-[#444]'
        }`}
      >
        <div className="font-mono text-xs mb-1 opacity-60">{String(index + 1).padStart(2, '0')}</div>
        <div className={`font-medium text-base ${isActive ? '' : 'text-ink dark:text-fog'}`}>
          {category.label}
        </div>
        <div className={`text-xs mt-1 ${isActive ? 'opacity-70' : 'text-ash'}`}>
          {category.skills.length} skills
        </div>
      </motion.button>
    </FadeIn>
  )
}

export default function Skills() {
  const [active, setActive] = useState('programming')
  const activeCategory = categories.find((c) => c.id === active)!

  return (
    <SectionWrapper id="skills" className="bg-fog dark:bg-[#0d0d0d]">
      <SectionHeader
        label="003 — Skills"
        title="Capabilities"
        subtitle="Technologies and tools I work with, continuously expanding my toolkit."
      />

      <div className="grid md:grid-cols-5 gap-8">
        {/* Category tabs */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-3">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              isActive={active === cat.id}
              onClick={() => setActive(cat.id)}
              index={i}
            />
          ))}
        </div>

        {/* Skills panel */}
        <div className="md:col-span-3">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 rounded-xl border border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] h-full"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl text-ink dark:text-fog">{activeCategory.label}</h3>
              <span className="font-mono text-xs text-ash bg-fog dark:bg-charcoal px-3 py-1 rounded-full">
                {activeCategory.skills.length} skills
              </span>
            </div>

            <div className="space-y-5">
              {activeCategory.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>

            {/* Skill tags */}
            <div className="mt-8 pt-6 border-t border-mist dark:border-[#2a2a2a]">
              <p className="text-xs font-mono text-ash mb-3 uppercase tracking-widest">Quick reference</p>
              <div className="flex flex-wrap gap-2">
                {activeCategory.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs bg-fog dark:bg-charcoal text-charcoal dark:text-fog border border-mist dark:border-[#333] rounded-full cursor-default hover:border-ink dark:hover:border-fog transition-colors"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
