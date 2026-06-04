'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'
import { useTheme } from '@/components/ui/ThemeProvider'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  {
    label: 'Skills',
    href: '#skills',
    children: [
      { label: 'Programming', href: '#skills' },
      { label: 'Web Development', href: '#skills' },
      { label: 'CS Fundamentals', href: '#skills' },
      { label: 'Tools', href: '#skills' },
    ],
  },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setActiveDropdown(null)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 dark:bg-[#111]/95 backdrop-blur-md border-b border-mist dark:border-charcoal shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="font-display text-xl text-ink dark:text-fog tracking-tight hover:opacity-70 transition-opacity"
        >
          NS<span className="text-ash">.</span>
        </button>

        {/* Desktop Nav */}
        <div ref={dropdownRef} className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-charcoal dark:text-fog hover:text-ink dark:hover:text-paper transition-colors animated-underline"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-44 bg-paper dark:bg-charcoal border border-mist dark:border-[#333] rounded-lg shadow-lg overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.href)}
                            className="w-full text-left px-4 py-2.5 text-sm text-charcoal dark:text-fog hover:bg-fog dark:hover:bg-[#333] transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm text-charcoal dark:text-fog hover:text-ink dark:hover:text-paper transition-colors animated-underline"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-mist dark:border-[#333] text-charcoal dark:text-fog hover:bg-fog dark:hover:bg-charcoal transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-mist dark:border-[#333] text-charcoal dark:text-fog hover:bg-fog dark:hover:bg-charcoal transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-paper dark:bg-[#111] border-b border-mist dark:border-charcoal"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-3 py-2.5 text-sm text-charcoal dark:text-fog hover:text-ink dark:hover:text-paper hover:bg-fog dark:hover:bg-charcoal rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
