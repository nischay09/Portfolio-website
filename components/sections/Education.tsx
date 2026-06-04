'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'
import { SectionWrapper, SectionHeader, FadeIn } from '@/components/ui/SectionWrapper'

const timeline = [
  {
    id: 1,
    institution: 'JIS University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2024 — Present',
    location: 'Kolkata, West Bengal',
    status: 'Pursuing',
    cgpa: '8.0',
    highlights: [
      'Core CS curriculum — DSA, OOP, DBMS, OS',
      'Active in coding competitions',
      'Building full-stack projects',
    ],
    badge: 'Current',
  },
  {
    id: 2,
    institution: 'The Newtown School',
    degree: 'Higher Secondary Education (Class XII)',
    period: '2022 — 2024',
    location: 'Newtown, Kolkata',
    status: 'Completed',
    cgpa: null,
    highlights: [
      'Science stream with Computer Science',
      'Strong foundation in Mathematics',
      'Explored programming fundamentals',
    ],
    badge: 'Class XII',
  },
  {
    id: 3,
    institution: 'The Newtown School',
    degree: 'Secondary Education (Class X)',
    period: '2020 — 2022',
    location: 'Newtown, Kolkata',
    status: 'Completed',
    cgpa: null,
    highlights: [
      'All-round academic performance',
      'Introduction to computer science',
      'Developed logical reasoning skills',
    ],
    badge: 'Class X',
  },
]

function TimelineCard({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-8">
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15, duration: 0.4, type: 'spring', stiffness: 200 }}
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10
            ${item.status === 'Pursuing'
              ? 'border-ink dark:border-fog bg-ink dark:bg-fog'
              : 'border-mist dark:border-[#333] bg-paper dark:bg-[#111]'
            }`}
        >
          <GraduationCap
            size={16}
            className={item.status === 'Pursuing' ? 'text-paper dark:text-ink' : 'text-ash'}
          />
        </motion.div>
        {index < timeline.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
            className="w-px bg-mist dark:bg-[#2a2a2a] flex-1 mt-2"
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 mb-10"
      >
        <motion.div
          whileHover={{ y: -2 }}
          className="p-5 md:p-6 rounded-xl border border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] hover:border-charcoal dark:hover:border-[#444] transition-all duration-200 group"
        >
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono bg-fog dark:bg-charcoal text-ash px-2 py-0.5 rounded">
                  {item.badge}
                </span>
                {item.status === 'Pursuing' && (
                  <span className="flex items-center gap-1 text-xs text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-ink dark:text-fog">
                {item.institution}
              </h3>
              <p className="text-sm text-ash mt-0.5">{item.degree}</p>
            </div>
            {item.cgpa && (
              <div className="text-right">
                <div className="font-display text-3xl text-ink dark:text-fog">{item.cgpa}</div>
                <div className="text-xs text-ash font-mono">CGPA</div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-ash mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {item.location}
            </span>
          </div>

          <ul className="space-y-1.5">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-charcoal dark:text-[#aaa]">
                <span className="text-ash mt-1">—</span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        label="002 — Education"
        title="Academic Path"
        subtitle="My educational journey shaping a strong foundation in computer science."
      />

      <div className="max-w-2xl">
        {timeline.map((item, index) => (
          <TimelineCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
