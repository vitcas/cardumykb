import type { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Documentação',
  description:
    'Documentação e perguntas frequentes sobre a plataforma Cardumy.'
}


const sections = [
  { slug: 'jogos', title: 'Jogos' },
  { slug: 'cartas', title: 'Cartas e Coleção' },
  { slug: 'lojas', title: 'Lojas e Produtos' },
  { slug: 'conta', title: 'Conta e Perfil' },
  { slug: 'reservas', title: 'Reservas de Cartas' },
  { slug: 'social', title: 'Interações e Social' },
  { slug: 'seguranca', title: 'Segurança e Moderação' },
  { slug: 'suporte', title: 'Suporte e Contato' },
  { slug: 'futuro', title: 'Futuro da Plataforma' }
]

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside
        style={{
          width: 260,
          padding: 24,
          borderRight: '1px solid #e5e7eb'
        }}
      >
        <h2 style={{ marginBottom: 16 }}>Cardumy Docs</h2>

        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {sections.map(section => (
              <li key={section.slug} style={{ marginBottom: 8 }}>
                <Link href={`/docs/${section.slug}`}>
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 32, display: 'flex' }}>
  <div style={{ width: '100%' }}>
    {children}
  </div>
</main>
    </div>
  )
}
