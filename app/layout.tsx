import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Cardumy Docs',
    template: '%s | Cardumy Docs'
  },
  description:
    'Base pública de conhecimento da plataforma Cardumy para jogos de cartas.',
  metadataBase: new URL('https://docs.cardumy.com'),
  openGraph: {
    title: 'Cardumy Docs',
    description:
      'Documentação oficial e perguntas frequentes sobre a plataforma Cardumy.',
    siteName: 'Cardumy',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
          background: '#0b0f19',
          color: '#e5e7eb'
        }}
      >
        {children}
      </body>
    </html>
  )
}
