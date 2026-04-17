import './About.css'

const metrics = [
  { big: '98%', label: 'Satisfaction client' },
  { big: '24h', label: 'Temps de réponse' },
  { big: 'CNC', label: 'Machines de précision' },
  { big: '100%', label: 'Projets livrés' },
]
const points = [
  { num: '01', title: 'Double expertise unique', desc: "Seule entreprise au Sénégal combinant IT de pointe et conception de machines CNC sous le même toit." },
  { num: '02', title: 'Solutions intégrées (Industrie 4.0)', desc: "Nous connectons vos machines industrielles à vos systèmes digitaux pour une usine intelligente et connectée." },
  { num: '03', title: 'Accompagnement de A à Z', desc: "De la conception au déploiement en passant par la maintenance, nous restons à vos côtés à chaque étape." },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-text">
          <div className="section-tag">Pourquoi nous choisir / Why choose us</div>
          <h2 className="section-title">IT & Industrie :<br/>deux expertises,<br/>une vision</h2>
          <p className="section-sub">Xelkom Valley — votre partenaire technologique de confiance au Sénégal, maîtrisant l'ingénierie logicielle et la fabrication de machines de précision.</p>
          <div className="why-list">
            {points.map((p, i) => (
              <div className="why-item" key={i}>
                <div className="why-num">{p.num}</div>
                <div><h4>{p.title}</h4><p>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <div className="metric" key={i}>
              <div className="metric-big">{m.big}</div>
              <div className="metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
