import './Services.css'

const itServices = [
  { icon: '💻', title: 'Développement Logiciel', desc: "Applications web et mobiles sur mesure, conçues pour performer et évoluer avec votre activité." },
  { icon: '☁️', title: 'Cloud & Infrastructure', desc: "Migration cloud, architecture scalable et gestion d'infrastructure pour une performance optimale." },
  { icon: '🔒', title: 'Cybersécurité', desc: "Protection des données, audit de sécurité et mise en conformité pour une tranquillité totale." },
  { icon: '📊', title: 'Data & Analytics', desc: "Exploitez vos données pour prendre de meilleures décisions et anticiper les tendances du marché." },
  { icon: '🤖', title: 'Intelligence Artificielle', desc: "Intégration de solutions IA pour automatiser vos processus et créer de la valeur ajoutée." },
  { icon: '🛠️', title: 'Support & Maintenance IT', desc: "Assistance technique réactive et maintenance proactive pour garantir la continuité de vos opérations." },
]

const industrialServices = [
  { icon: '⚙️', title: 'Machines CNC', desc: "Conception et fabrication de machines CNC haute précision (fraisage, tournage, découpe) sur mesure." },
  { icon: '🏭', title: 'Automatisation industrielle', desc: "Systèmes d'automatisation sur mesure pour optimiser vos lignes de production et réduire les coûts." },
  { icon: '🦾', title: 'Robotique', desc: "Intégration de bras robotiques et systèmes autonomes pour des tâches répétitives ou dangereuses." },
  { icon: '🔧', title: 'Maintenance & SAV', desc: "Entretien préventif et curatif de vos équipements industriels pour maximiser leur durée de vie." },
  { icon: '📐', title: "Bureau d'études", desc: "Conception 2D/3D (CAO/DAO), prototypage et validation technique avant fabrication en série." },
  { icon: '🔩', title: 'Pièces & Usinage', desc: "Fabrication de pièces mécaniques à la demande avec des tolérances serrées selon vos cahiers des charges." },
]

function ServiceCard({ icon, title, desc, variant }) {
  return (
    <div className={`scard ${variant || ''}`}>
      <span className="scard-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <div className="section-tag">Services IT & Technologie</div>
        <h2 className="section-title">Solutions numériques</h2>
        <p className="section-sub">Des services IT complets pour accompagner votre transformation digitale.</p>
      </div>
      <div className="services-grid">
        {itServices.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>

      <div className="services-divider"></div>

      <div className="section-header">
        <div className="section-tag red">Services Industrie</div>
        <h2 className="section-title">Machines & conception industrielle</h2>
        <p className="section-sub">Conception, fabrication et maintenance de machines industrielles de précision.</p>
      </div>
      <div className="services-grid">
        {industrialServices.map((s, i) => <ServiceCard key={i} {...s} variant="ind" />)}
      </div>
    </section>
  )
}
