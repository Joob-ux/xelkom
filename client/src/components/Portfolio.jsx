import { useState } from 'react'
import './Portfolio.css'

const projects = [
  { cat: 'it', icon: '📊', label: 'Logiciel', title: 'GestPro — gestion commerciale', en: 'Business management software', desc: "Ventes, proformas, factures, clients, caisse, inventaire et rapports dans une seule application en ligne.", tech: ['Node.js', 'PostgreSQL'], link: 'https://gestpro.onrender.com/' },
  { cat: 'it', icon: '🌐', label: 'Web', title: 'Refonte de site d\'entreprise', en: 'Corporate website redesign', desc: "Nouveau site vitrine moderne pour une entreprise de négoce à Dakar, avec contenus pour les réseaux sociaux.", tech: ['React', 'Vercel'] },
  { cat: 'it', icon: '💰', label: 'Application', title: 'Gestion de caisse & paiements', en: 'Cash & mobile money management', desc: "Suivi des encaissements par espèces, Wave et Orange Money, et du stock pour les boutiques.", tech: ['Web', 'Mobile'] },
  { cat: 'ind', icon: '⛽', label: 'IoT', title: 'Boîtier connecté stations-service', en: 'Fuel station IoT device (in progress)', desc: "En cours : mesure du niveau des cuves et suivi à distance, avec mises à jour sécurisées.", tech: ['Raspberry Pi', 'Linux embarqué'] },
  { cat: 'ind', icon: '🚁', label: 'Drones', title: 'Plateforme de gestion de drones', en: 'Drone management platform', desc: "Projet de recherche : suivi des drones en temps réel, sécurité des communications et détection d'anomalies par IA.", tech: ['ESP32', 'STM32', 'MQTT'] },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter(p => p.cat === filter)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">Portfolio / Our Work</div>
        <h2 className="section-title">Nos réalisations</h2>
        <p className="section-sub">Quelques projets réalisés ou en cours.</p>
      </div>
      <div className="portfolio-filters">
        {[['all','Tous'],['it','Logiciel & web'],['ind','Électronique & IoT']].map(([k,l]) => (
          <button key={k} className={`filter-btn ${filter===k?'active':''}`} onClick={() => setFilter(k)}>{l}</button>
        ))}
      </div>
      <div className="portfolio-grid">
        {shown.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <div className="portfolio-img">{p.icon}</div>
            <div className="portfolio-body">
              <span className={`portfolio-cat ${p.cat === 'it' ? 'cat-it' : 'cat-ind'}`}>{p.label}</span>
              <h3>{p.title}</h3>
              <p className="portfolio-en">{p.en}</p>
              <p>{p.desc}</p>
              <div className="portfolio-tags">
                {p.tech.map((t, j) => <span key={j} className="ptag">{t}</span>)}
              </div>
              {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="info-link">Voir le projet →</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
