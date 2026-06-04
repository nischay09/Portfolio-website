'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / name */}
          <div>
            <button
              onClick={scrollToTop}
              className="font-display text-xl text-ink dark:text-fog hover:opacity-70 transition-opacity"
            >
              Nischay Sharma
            </button>
            <p className="text-xs text-ash mt-1 font-mono">
              B.Tech CSE · JIS University · Kolkata
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/nischay09', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nischaysharma09', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sharmanischay2005@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-mist dark:border-[#333] text-ash hover:text-ink dark:hover:text-paper hover:border-ink dark:hover:border-paper transition-all hover:scale-110"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-xs text-ash hover:text-ink dark:hover:text-fog transition-colors"
          >
            Back to top
            <ArrowUp size={13} />
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-mist dark:border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-ash font-mono">
            © 2024 Nischay Sharma. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-ash font-mono">
            Designed & developed with ♥ in Kolkata
          </p>
        </div>
      </div>
    </footer>
  )
}
