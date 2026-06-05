'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react'
import { SectionWrapper, SectionHeader, FadeIn } from '@/components/ui/SectionWrapper'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sharmanischay2005@gmail.com',
    href: 'mailto:sharmanischay2005@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nischaysharma09',
    href: 'https://www.linkedin.com/in/nischaysharma09/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/nischay09',
    href: 'https://github.com/nischay09',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kolkata, West Bengal',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault()
  if (!form.name || !form.email || !form.message) return
  setStatus('sending')
  try {
    await emailjs.send(
      'service_bfnpbxt',
      'template_8ismzsc',
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      'Wddk5lWJz-n4qmtUS'
    )
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  } catch {
    setStatus('error')
  }
}

  return (
    <SectionWrapper id="contact" className="bg-fog dark:bg-[#0d0d0d]">
      <SectionHeader
        label="008 — Contact"
        title="Let's Connect"
        subtitle="Open to internship opportunities, collaborations, and interesting conversations."
      />

      <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
        {/* Contact info */}
        <div className="md:col-span-2 space-y-4">
          <FadeIn>
            <p className="text-sm text-ash leading-relaxed mb-6">
              I'm actively looking for internship opportunities and would love to hear about
              exciting projects. Whether you have a question or just want to say hi — my inbox is open.
            </p>
          </FadeIn>

          {contactInfo.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.label} delay={i * 0.07}>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111] hover:border-charcoal dark:hover:border-[#444] transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-fog dark:bg-charcoal flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-ash group-hover:text-ink dark:group-hover:text-fog transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-ash font-mono">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ink dark:text-fog hover:text-ash transition-colors animated-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-charcoal dark:text-[#ccc]">{item.value}</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Contact form */}
        <FadeIn delay={0.2} direction="right" className="md:col-span-3">
          <div className="p-6 md:p-7 rounded-xl border border-mist dark:border-[#2a2a2a] bg-paper dark:bg-[#111]">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-ash uppercase tracking-widest mb-1.5">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 text-sm bg-fog dark:bg-charcoal border border-mist dark:border-[#333] rounded-lg text-ink dark:text-fog placeholder-ash outline-none focus:border-ink dark:focus:border-fog transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-ash uppercase tracking-widest mb-1.5">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm bg-fog dark:bg-charcoal border border-mist dark:border-[#333] rounded-lg text-ink dark:text-fog placeholder-ash outline-none focus:border-ink dark:focus:border-fog transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-ash uppercase tracking-widest mb-1.5">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration / Just saying hi"
                  className="w-full px-4 py-2.5 text-sm bg-fog dark:bg-charcoal border border-mist dark:border-[#333] rounded-lg text-ink dark:text-fog placeholder-ash outline-none focus:border-ink dark:focus:border-fog transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-ash uppercase tracking-widest mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  rows={5}
                  className="w-full px-4 py-2.5 text-sm bg-fog dark:bg-charcoal border border-mist dark:border-[#333] rounded-lg text-ink dark:text-fog placeholder-ash outline-none focus:border-ink dark:focus:border-fog transition-colors resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800"
                >
                  <CheckCircle size={15} className="text-emerald-500" />
                  <span className="text-sm text-emerald-700 dark:text-emerald-400">
                    Message sent! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                  <AlertCircle size={15} className="text-red-500" />
                  <span className="text-sm text-red-700 dark:text-red-400">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-ink dark:bg-fog text-paper dark:text-ink text-sm font-medium rounded-lg hover:bg-charcoal dark:hover:bg-mist disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-paper/30 dark:border-ink/30 border-t-paper dark:border-t-ink rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
