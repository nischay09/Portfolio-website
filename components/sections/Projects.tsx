'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, MessageSquare, Zap, Globe, Code2 } from 'lucide-react'
import { SectionWrapper, SectionHeader, FadeIn } from '@/components/ui/SectionWrapper'

const projects = [
  {
    id: 1,
    title: 'Real-Time Chat Application',
    tagline: 'Instant messaging with modern UI',
    description: 'A full-featured real-time chat application built with modern web technologies. Supports instant messaging with a clean, responsive interface designed for seamless user experience across all devices.',
    icon: MessageSquare,
    tech: ['React', 'Next.js', 'JavaScript', 'CSS', 'Web APIs'],
    features: [
      'Real-time messaging with instant delivery',
      'Responsive design for all screen sizes',
      'Modern and clean frontend architecture',
      'Interactive and intuitive user experience',
      'Efficient state management',
    ],
    github: 'https://github.com',
    demo: null,
    status: 'Completed',
    year: '2024',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    tagline: 'This very website you\'re browsing',
    description: 'A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a fully responsive design showcasing my skills and projects.',
    icon: Globe,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Dark / light mode toggle',
      'Smooth page animations with Framer Motion',
      'Fully responsive mobile-first design',
      'Interactive timeline and accordion components',
      'Optimized for performance and SEO',
    ],
    github: 'https://github.com',
    demo: '#',
    status: 'Live',
    year: '2024',
  },
  {
    id: 3,
    title: 'DSA Practice Tracker',
    tagline: 'Track your algorithm progress',
    description: 'A personal tool for tracking Data Structures & Algorithms practice sessions. Helps organize problem-solving progress across different topics and difficulty levels.',
    icon: Code2,
    tech: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    features: [
      'Track solved problems by category',
      'Difficulty-based organization',
      'Progress statistics and insights',
      'Offline-first with local storage',
    ],
    github: 'https://github.com',
    demo: null,
    status: 'In Progress',
    year: '2024',
  },
]

const statusColors: Record<string, string> = {
  Completed: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
  Live: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  'In Progress': 'text-amber-500 bg-amber-50 dark:bg-amber-900/20',
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = project.icon

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        layout
        className="rounded-xl border border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] overflow-hidden hover:border-charcoal dark:hover:border-[#444] transition-colors duration-200"
      >
        {/* Card header */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-fog dark:bg-charcoal flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-ash" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-display text-xl text-ink dark:text-fog">{project.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-ash">{project.tagline}</p>
              </div>
            </div>
            <span className="font-mono text-xs text-ash flex-shrink-0">{project.year}</span>
          </div>

          <p className="mt-4 text-sm text-charcoal dark:text-[#aaa] leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs bg-fog dark:bg-charcoal text-ash border border-mist dark:border-[#333] rounded-md font-mono"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions row */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-mist dark:border-[#2a2a2a]">
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-mist dark:border-[#333] text-charcoal dark:text-fog rounded-lg hover:border-ink dark:hover:border-fog hover:bg-fog dark:hover:bg-charcoal transition-all"
              >
                <Github size={13} />
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-ink dark:bg-fog text-paper dark:text-ink rounded-lg hover:bg-charcoal dark:hover:bg-mist transition-all"
                >
                  <ExternalLink size={13} />
                  Live Demo
                </a>
              )}
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-ash hover:text-ink dark:hover:text-fog transition-colors"
            >
              {expanded ? 'Less' : 'Details'}
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Expanded features */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 pt-0 border-t border-mist dark:border-[#2a2a2a] bg-fog dark:bg-[#0d0d0d]">
                <p className="text-xs font-mono text-ash uppercase tracking-widest mt-4 mb-3">Key Features</p>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-charcoal dark:text-[#aaa]"
                    >
                      <Zap size={13} className="text-ash mt-0.5 flex-shrink-0" />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="004 — Projects"
        title="Built Things"
        subtitle="A selection of projects I've built to learn, experiment, and solve problems."
      />

      <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-8 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ash hover:text-ink dark:hover:text-fog transition-colors animated-underline"
          >
            <Github size={15} />
            View all projects on GitHub
          </a>
        </div>
      </FadeIn>
    </SectionWrapper>
  )
}
