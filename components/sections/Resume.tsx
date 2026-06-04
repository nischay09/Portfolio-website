'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, FileText, Eye, Maximize2, ExternalLink } from 'lucide-react'
import { SectionWrapper, SectionHeader, FadeIn } from '@/components/ui/SectionWrapper'

// Simple resume preview content
function ResumePreview() {
  return (
    <div className="bg-white text-[#222] p-8 md:p-12 min-h-[600px] font-sans text-sm leading-relaxed">
      {/* Header */}
      <div className="border-b-2 border-[#222] pb-5 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">NISCHAY SHARMA</h1>
        <p className="text-base mt-1 text-gray-600">B.Tech Computer Science Engineering Student</p>
        <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-500">
          <span>nischay@example.com</span>
          <span>LinkedIn: /in/nischay-sharma</span>
          <span>GitHub: /nischay-sharma</span>
          <span>Kolkata, West Bengal, India</span>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Education</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">JIS University</div>
              <div className="text-gray-600">B.Tech in Computer Science Engineering</div>
            </div>
            <div className="text-right text-xs text-gray-500">
              <div>2024 — Present</div>
              <div className="font-semibold text-[#222]">CGPA: 8.0</div>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">The Newtown School, Kolkata</div>
              <div className="text-gray-600">Higher Secondary (Class XII) & Secondary (Class X)</div>
            </div>
            <div className="text-right text-xs text-gray-500">2020 — 2024</div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Technical Skills</h2>
        <div className="space-y-1.5 text-xs">
          <div><span className="font-semibold">Languages:</span> C++, C, JavaScript, TypeScript</div>
          <div><span className="font-semibold">Web Technologies:</span> HTML, CSS, React, Next.js, Tailwind CSS</div>
          <div><span className="font-semibold">CS Fundamentals:</span> Data Structures, Algorithms, OOP, Database Fundamentals</div>
          <div><span className="font-semibold">Tools:</span> Git, GitHub, VS Code</div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Projects</h2>
        <div className="space-y-3">
          <div>
            <div className="font-semibold">Real-Time Chat Application</div>
            <div className="text-xs text-gray-500 mb-1">React · Next.js · JavaScript · CSS</div>
            <ul className="text-xs text-gray-600 space-y-0.5 list-disc list-inside">
              <li>Built a real-time messaging application with responsive UI</li>
              <li>Implemented modern frontend design patterns</li>
              <li>Focused on interactive user experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Interests</h2>
        <p className="text-xs text-gray-600">
          Data Structures & Algorithms · Web Development · Software Engineering · AI Technologies · Problem Solving · Open Source
        </p>
      </div>
    </div>
  )
}

function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-paper dark:bg-[#111] rounded-2xl border border-mist dark:border-[#2a2a2a] w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b border-mist dark:border-[#2a2a2a]">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-ash" />
              <span className="text-sm font-medium text-ink dark:text-fog">Resume Preview</span>
              <span className="text-xs font-mono text-ash bg-fog dark:bg-charcoal px-2 py-0.5 rounded">PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-ink dark:bg-fog text-paper dark:text-ink rounded-lg hover:bg-charcoal dark:hover:bg-mist transition-all"
              >
                <Download size={13} />
                Download
              </a>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-fog dark:hover:bg-charcoal transition-colors"
              >
                <X size={16} className="text-ash" />
              </button>
            </div>
          </div>

          {/* Resume content */}
          <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
            <ResumePreview />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Resume() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SectionWrapper id="resume">
        <SectionHeader
          label="006 — Resume"
          title="My Resume"
          subtitle="A summary of my education, skills, and experience."
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Preview card */}
          <FadeIn>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative cursor-pointer group"
              onClick={() => setModalOpen(true)}
            >
              <div className="rounded-xl border border-mist dark:border-[#2a2a2a] overflow-hidden">
                {/* Mini preview */}
                <div className="h-72 overflow-hidden bg-white relative">
                  <div className="scale-[0.55] origin-top-left w-[181%]">
                    <ResumePreview />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 dark:to-[#111]/80" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/10 dark:group-hover:bg-ink/30 transition-all rounded-xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-paper dark:bg-[#111] rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-mist"
                  >
                    <Maximize2 size={14} className="text-ink dark:text-fog" />
                    <span className="text-sm font-medium text-ink dark:text-fog">Preview</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Info & actions */}
          <FadeIn delay={0.15} direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl text-ink dark:text-fog mb-2">
                  Nischay Sharma
                </h3>
                <p className="text-sm text-ash leading-relaxed">
                  My resume outlines my academic background, technical skills, and project experience.
                  Currently seeking internship opportunities in software development and web engineering.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  'B.Tech CSE — JIS University',
                  'CGPA: 8.0 (Current)',
                  'React, Next.js, TypeScript',
                  'DSA & Problem Solving',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-charcoal dark:text-[#aaa]">
                    <div className="w-1 h-1 rounded-full bg-ash" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-mist dark:border-[#333] text-charcoal dark:text-fog text-sm rounded-lg hover:border-ink dark:hover:border-fog hover:bg-fog dark:hover:bg-charcoal transition-all hover:scale-[1.02]"
                >
                  <Eye size={15} />
                  Preview Resume
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2.5 bg-ink dark:bg-fog text-paper dark:text-ink text-sm rounded-lg hover:bg-charcoal dark:hover:bg-mist transition-all hover:scale-[1.02]"
                >
                  <Download size={15} />
                  Download PDF
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </>
  )
}
