import './Blog.css'

const posts = [
  { cat: 'it', icon: '🤖', label: 'IT', date: 'Mars 2026', read: '5 min', title: "L'IA au service de l'industrie", en: 'AI in Manufacturing Industry', desc: "Comment l'intelligence artificielle révolutionne les processus de production et de contrôle qualité dans les usines modernes." },
  { cat: 'ind', icon: '⚙️', label: 'Industrie', date: 'Fév. 2026', read: '7 min', title: 'CNC : révolution en Afrique', en: 'CNC Machining Revolution in Africa', desc: "Les machines CNC transforment le paysage industriel africain. Xelkom Valley à l'avant-garde de cette mutation." },
  { cat: 'it', icon: '🔒', label: 'IT', date: 'Jan. 2026', read: '6 min', title: 'Cybersécurité en 2026', en: 'Cybersecurity in 2026', desc: "Les menaces évoluent, les solutions aussi. Guide pratique pour sécuriser vos systèmes informatiques face aux nouvelles attaques." },
]

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="section-header">
        <div className="section-tag">Blog & Actualités / News</div>
        <h2 className="section-title">Nos derniers articles</h2>
        <p className="section-sub">Restez informés des dernières tendances IT et industrielles.</p>
      </div>
      <div className="blog-grid">
        {posts.map((p, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-img">{p.icon}</div>
            <div className="blog-body">
              <div className="blog-meta">
                <span className={`blog-cat ${p.cat==='it'?'cat-it':'cat-ind'}`}>{p.label}</span>
                <span className="blog-date">{p.date}</span>
                <span className="blog-read">{p.read}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="blog-en">{p.en}</p>
              <p>{p.desc}</p>
              <button className="blog-link">Lire l'article →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
