import Link from 'next/link'
import { ReactNode } from 'react'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        <h2>Documentação</h2>

        <ul>
          <li><Link href="/docs/jogos">Jogos</Link></li>
          <li><Link href="/docs/cartas">Cartas e Coleção</Link></li>
          <li><Link href="/docs/lojas">Lojas e Produtos</Link></li>
          <li><Link href="/docs/conta">Conta e Perfil</Link></li>
          <li><Link href="/docs/social">Social</Link></li>
          <li><Link href="/docs/seguranca">Segurança</Link></li>
          <li><Link href="/docs/suporte">Suporte</Link></li>
        </ul>
      </aside>

      <main className="docs-content">
        {children}
      </main>
    </div>
  )
}
