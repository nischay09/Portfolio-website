import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Nischay Sharma — Software Developer',
  description: 'B.Tech Computer Science Engineering Student passionate about software development, problem solving, algorithms, and modern web technologies.',
  keywords: ['Nischay Sharma', 'Software Developer', 'Computer Science', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Nischay Sharma' }],
  openGraph: {
    title: 'Nischay Sharma — Software Developer',
    description: 'B.Tech CSE Student | Web Developer | Problem Solver',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nischay Sharma — Software Developer',
    description: 'B.Tech CSE Student | Web Developer | Problem Solver',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                    document.body.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
