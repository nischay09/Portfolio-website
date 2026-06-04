'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin, Terminal } from 'lucide-react'

const titles = [
  'Software Developer',
  'Problem Solver',
  'Web Developer',
  'CS Engineer',
]

function TypewriterText({ words }: { words: string[] }) {
  const [current, setCurrent] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1200)
      return () => clearTimeout(t)
    }
    const word = words[current]
    const speed = deleting ? 50 : 90
    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) {
          setPause(true)
          setDeleting(true)
        }
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setCurrent((c) => (c + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, pause, current, words])

  return (
    <span className="font-mono text-lg md:text-xl text-ash dark:text-[#888]">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative circle */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full border border-mist dark:border-[#222] -translate-y-1/4 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full border border-mist dark:border-[#222] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 md:order-1"
          >
            {/* Label */}
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <Terminal size={14} className="text-ash" />
              <span className="font-mono text-xs text-ash tracking-widest uppercase">
                Available for opportunities
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-ink dark:text-fog leading-[1.05] mb-4"
            >
              Nischay
              <br />
              <span className="text-ink dark:text-paper">Sharma</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="mb-6 h-8">
              <TypewriterText words={titles} />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base md:text-lg text-ash dark:text-[#999] leading-relaxed mb-8 max-w-xl"
            >
              B.Tech Computer Science Engineering Student passionate about software development,
              problem solving, algorithms, and modern web technologies.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 px-5 py-2.5 bg-ink dark:bg-fog text-paper dark:text-ink text-sm font-medium rounded-lg hover:bg-charcoal dark:hover:bg-mist transition-all duration-200 hover:scale-[1.02]"
              >
                <Download size={15} />
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 border border-mist dark:border-[#333] text-charcoal dark:text-fog text-sm font-medium rounded-lg hover:border-ink dark:hover:border-fog hover:bg-fog dark:hover:bg-charcoal transition-all duration-200 hover:scale-[1.02]"
              >
                <Mail size={15} />
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="text-xs text-ash uppercase tracking-widest font-mono">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:nischay@example.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-mist dark:border-[#333] text-ash hover:text-ink dark:hover:text-paper hover:border-ink dark:hover:border-paper hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-mist dark:border-[#2a2a2a] rounded-2xl" />
              <div className="absolute -inset-6 border border-mist/50 dark:border-[#222] rounded-2xl" />

              {/* Profile image placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden bg-fog dark:bg-charcoal border border-mist dark:border-[#2a2a2a]">
                <img
                  src="/profile.jpeg"
                  alt="Nischay Sharma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-sm text-paper font-mono">Hello, I'm Nischay!</span>
              </div>

                {/* Subtle pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-paper dark:bg-[#1a1a1a] border border-mist dark:border-[#2a2a2a] rounded-xl px-4 py-2 shadow-sm"
              >
                <div className="text-xs text-ash font-mono">CGPA</div>
                <div className="font-display text-2xl text-ink dark:text-fog">8.0</div>
              </motion.div>

              {/* Another floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-paper dark:bg-[#1a1a1a] border border-mist dark:border-[#2a2a2a] rounded-xl px-4 py-2 shadow-sm"
              >
                <div className="text-xs text-ash font-mono">Status</div>
                <div className="text-sm font-medium text-ink dark:text-fog">B.Tech CSE</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-xs font-mono text-ash uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} className="text-ash" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
