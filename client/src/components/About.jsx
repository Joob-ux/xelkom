import './About.css'

const metrics = [
  { big: '2024', label: 'Création à Dakar' },
  { big: '24h', label: 'Temps de réponse' },
  { big: 'IoT', label: 'Électronique & capteurs' },
  { big: 'Drones', label: 'Robotique & drones' },
]
const points = [
  { num: '01', title: 'Logiciel et matériel sous le même toit', desc: "Nous développons vos applications et concevons aussi l'électronique qui va avec : capteurs, cartes embarquées, objets connectés." },
  { num: '02', title: 'Solutions adaptées au marché local', desc: "Paiements Wave et Orange Money, usage sur mobile, budgets de PME : nos solutions sont pensées pour les entreprises sénégalaises." },
  { num: '03', title: 'Accompagnement de A à Z', desc: "De la conception au déploiement en passant par la maintenance, nous restons à vos côtés à chaque étape." },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-text">
          <div className="section-tag">Pourquoi nous choisir / Why choose us</div>
          <h2 className="section-title">Numérique & électronique :<br/>deux expertises,<br/>une vision</h2>
          <p className="section-sub">Xelkom Valley — votre partenaire technologique de confiance au Sénégal, du développement logiciel aux systèmes embarqués.</p>
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
