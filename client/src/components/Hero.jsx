import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-line"></div>
      <div className="hero-line2"></div>
      <div className="hero-corner"></div>
      <div className="hero-corner2"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">IT · Industrie · Innovation · Dakar</div>
        <h1>Innovation digitale &amp;<br/><em>machines industrielles</em><br/>de précision</h1>
        <p className="hero-sub">Xelkom Valley conçoit des solutions IT sur mesure et des machines industrielles haute précision — CNC, automatisation, robotique — pour propulser votre entreprise vers l'excellence.</p>
        <p className="hero-sub-en">Custom IT solutions &amp; high-precision industrial machines for your operational excellence.</p>
        <div className="hero-btns">
          <a href="#services" className="btn-primary">Découvrir nos services</a>
          <a href="#contact" className="btn-outline">Nous contacter →</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="stat-num">15<sup>+</sup></div><div className="stat-lbl">Projets livrés</div></div>
          <div className="hero-stat"><div className="stat-num">14<sup>+</sup></div><div className="stat-lbl">Clients satisfaits</div></div>
          <div className="hero-stat"><div className="stat-num">5<sup>ans</sup></div><div className="stat-lbl">D'expertise</div></div>
          <div className="hero-stat"><div className="stat-num">2<sup>dom.</sup></div><div className="stat-lbl">IT & Industrie</div></div>
        </div>
      </div>
      <div className="hero-badge">
        <div className="badge-box">
          <span>CNC</span>
          <div className="badge-sep"></div>
          <span>IT</span>
          <div className="badge-sep"></div>
          <span>AI</span>
        </div>
      </div>
    </section>
  )
}
