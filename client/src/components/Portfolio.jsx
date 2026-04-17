import { useState } from 'react'
import './Portfolio.css'

const projects = [
  { cat: 'it', icon: '💻', label: 'IT', title: 'Plateforme ERP industrielle', en: 'Industrial ERP Platform', desc: "ERP complet pour une usine de 200 employés intégrant production, stock et RH.", tech: ['React', 'Node.js', 'PostgreSQL'] },
  { cat: 'ind', icon: '⚙️', label: 'Industrie', title: 'Machine CNC 5 axes', en: '5-Axis CNC Machine', desc: "Fraiseuse CNC 5 axes haute précision pour l'industrie aéronautique locale.", tech: ['CAO', 'CNC', 'Usinage'] },
  { cat: 'it', icon: '📱', label: 'IT', title: 'App mobile logistique', en: 'Logistics Mobile App', desc: "Suivi de flotte en temps réel avec tableau de bord analytique pour le transport.", tech: ['React Native', 'Firebase'] },
  { cat: 'ind', icon: '🏭', label: 'Industrie', title: "Ligne d'automatisation", en: 'Automation Line', desc: "Ligne d'assemblage semi-automatique réduisant les coûts de production de 40%.", tech: ['Automate', 'PLC'] },
  { cat: 'it', icon: '🔒', label: 'IT', title: 'Système cybersécurité', en: 'Cybersecurity System', desc: "Audit complet et infrastructure sécurisée pour une institution financière dakaroise.", tech: ['Firewall', 'ISO 27001'] },
  { cat: 'ind', icon: '🔩', label: 'Industrie', title: 'Tour CNC de précision', en: 'Precision CNC Lathe', desc: "Tour CNC sur mesure pour l'usinage de pièces métalliques haute tolérance.", tech: ['CNC', 'Tournage'] },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter(p => p.cat === filter)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">Portfolio / Our Work</div>
        <h2 className="section-title">Nos réalisations</h2>
        <p className="section-sub">Projets IT et industriels livrés avec succès.</p>
      </div>
      <div className="portfolio-filters">
        {[['all','Tous'],['it','IT'],['ind','Industrie']].map(([k,l]) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
