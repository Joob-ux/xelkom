import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-line"></div>
      <div className="hero-line2"></div>
      <div className="hero-corner"></div>
      <div className="hero-corner2"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">IT · Électronique · Robotique · Dakar</div>
        <h1>Solutions digitales,<br/><em>électronique &amp; robotique</em><br/>made in Dakar</h1>
        <p className="hero-sub">Xelkom Valley développe des sites web, applications et logiciels de gestion, forme aux métiers du numérique, gère vos réseaux sociaux et conçoit des systèmes électroniques, IoT, robotiques et drones.</p>
        <p className="hero-sub-en">Web, software, IT training, social media, electronics, IoT, robotics &amp; drones.</p>
        <div className="hero-btns">
          <a href="#services" className="btn-primary">Découvrir nos services</a>
          <a href="#contact" className="btn-outline">Nous contacter →</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="stat-num">15<sup>+</sup></div><div className="stat-lbl">Projets livrés</div></div>
          <div className="hero-stat"><div className="stat-num">14<sup>+</sup></div><div className="stat-lbl">Clients satisfaits</div></div>
          <div className="hero-stat"><div className="stat-num">2024</div><div className="stat-lbl">Année de création</div></div>
          <div className="hero-stat"><div className="stat-num">24<sup>h</sup></div><div className="stat-lbl">Temps de réponse</div></div>
        </div>
      </div>
      <div className="hero-badge">
        <div className="badge-box">
          <span>IoT</span>
          <div className="badge-sep"></div>
          <span>IT</span>
          <div className="badge-sep"></div>
          <span>AI</span>
        </div>
      </div>
    </section>
  )
}
