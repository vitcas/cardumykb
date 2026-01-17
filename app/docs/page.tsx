import Link from 'next/link'

const sections = [
  { slug: 'jogos', title: 'Jogos' },
  { slug: 'cartas', title: 'Cartas e Coleção' },
  { slug: 'lojas', title: 'Lojas e Produtos' },
  { slug: 'conta', title: 'Conta e Perfil' },
  { slug: 'reservas', title: 'Reservas de Cartas' },
  { slug: 'social', title: 'Interações e Social' },
  { slug: 'seguranca', title: 'Segurança e Moderação' },
  { slug: 'suporte', title: 'Suporte e Contato' },
  { slug: 'futuro', title: 'Futuro da Plataforma' },
  { slug: 'sem-categoria', title: 'Sem categoria' }
]

export default function DocsIndex() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Documentação do Cardumy</h1>
      <p>Perguntas frequentes e informações sobre a plataforma.</p>

      <ul>
        {sections.map(section => (
          <li key={section.slug}>
            <Link href={`/docs/${section.slug}`}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
