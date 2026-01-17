import Link from 'next/link'

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '64px 32px'
      }}
    >
      <h1>Cardumy Docs</h1>

      <p style={{ fontSize: '1.1rem', marginTop: 16 }}>
        Base pública de conhecimento da plataforma Cardumy para jogos de cartas.
      </p>

      <div style={{ marginTop: 32 }}>
        <Link
          href="/docs/jogos"
          style={{
            display: 'inline-block',
            padding: '12px 20px',
            background: '#6366f1',
            color: '#fff',
            borderRadius: 6,
            fontWeight: 500
          }}
        >
          Acessar documentação →
        </Link>
      </div>
    </main>
  )
}
