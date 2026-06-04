'use client'

import { motion } from 'framer-motion'
import { Trophy, Target, BookOpen, Code2, Star, TrendingUp } from 'lucide-react'
import { SectionWrapper, SectionHeader, FadeIn } from '@/components/ui/SectionWrapper'

const achievements = [
  {
    icon: Trophy,
    title: 'Academic Excellence',
    value: '8.0',
    unit: 'CGPA',
    description: 'Maintaining a strong academic record in B.Tech Computer Science Engineering at JIS University.',
    highlight: true,
  },
  {
    icon: Target,
    title: 'Active Problem Solver',
    value: '100+',
    unit: 'Problems',
    description: 'Regularly solving Data Structures & Algorithms problems to sharpen problem-solving skills.',
    highlight: false,
  },
  {
    icon: Code2,
    title: 'Web Applications',
    value: '3+',
    unit: 'Projects',
    description: 'Built modern web applications using React, Next.js and other cutting-edge technologies.',
    highlight: false,
  },
  {
    icon: BookOpen,
    title: 'DSA Enthusiast',
    value: '5+',
    unit: 'Topics',
    description: 'Strong foundation in Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming.',
    highlight: false,
  },
  {
    icon: Star,
    title: 'Tech Stack Growth',
    value: '10+',
    unit: 'Technologies',
    description: 'Continuously expanding expertise across languages, frameworks, and development tools.',
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learner',
    value: '1+',
    unit: 'Year',
    description: 'Dedicated self-study and project-building since entering the world of computer science.',
    highlight: false,
  },
]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-fog dark:bg-[#0d0d0d]">
      <SectionHeader
        label="005 — Achievements"
        title="Milestones"
        subtitle="Key accomplishments and progress markers on my journey as a developer."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {achievements.map((item, index) => {
          const Icon = item.icon
          return (
            <FadeIn key={item.title} delay={index * 0.07}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`p-5 rounded-xl border transition-all duration-200 group cursor-default h-full ${
                  item.highlight
                    ? 'border-ink dark:border-fog bg-ink dark:bg-fog'
                    : 'border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] hover:border-charcoal dark:hover:border-[#444]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.highlight
                        ? 'bg-paper/20 dark:bg-ink/20'
                        : 'bg-fog dark:bg-charcoal'
                    }`}
                  >
                    <Icon
                      size={18}
                      className={item.highlight ? 'text-paper dark:text-ink' : 'text-ash group-hover:text-ink dark:group-hover:text-fog transition-colors'}
                    />
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-display text-3xl leading-none ${
                        item.highlight ? 'text-paper dark:text-ink' : 'text-ink dark:text-fog'
                      }`}
                    >
                      {item.value}
                    </div>
                    <div
                      className={`text-xs font-mono mt-0.5 ${
                        item.highlight ? 'text-paper/60 dark:text-ink/60' : 'text-ash'
                      }`}
                    >
                      {item.unit}
                    </div>
                  </div>
                </div>

                <h3
                  className={`font-medium text-base mb-2 ${
                    item.highlight ? 'text-paper dark:text-ink' : 'text-ink dark:text-fog'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.highlight ? 'text-paper/70 dark:text-ink/70' : 'text-ash'
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            </FadeIn>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
