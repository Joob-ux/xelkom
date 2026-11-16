import './Services.css'

const itServices = [
  { icon: '🌐', title: 'Sites web & applications', desc: "Sites vitrines, e-commerce, applications web et mobiles sur mesure, rapides et adaptés au mobile." },
  { icon: '🧾', title: 'Logiciels de gestion', desc: "Ventes, stock, factures, caisse, paiements Wave et Orange Money : des outils simples pour piloter votre commerce." },
  { icon: '🎓', title: 'Formation IT', desc: "Formations pratiques en informatique, développement et outils numériques, pour particuliers et entreprises." },
  { icon: '📣', title: 'Gestion des réseaux sociaux', desc: "Création de contenu, publication et animation de vos pages pour développer votre visibilité en ligne." },
  { icon: '🔒', title: 'Cybersécurité', desc: "Audit, sécurisation de vos systèmes et sensibilisation de vos équipes aux bonnes pratiques." },
  { icon: '🤖', title: 'Intelligence Artificielle', desc: "Assistants, automatisations et analyse de données pour gagner du temps au quotidien." },
]

const industrialServices = [
  { icon: '🔌', title: 'Électronique & systèmes embarqués', desc: "Conception de cartes et programmation de microcontrôleurs (ESP32, STM32) et Raspberry Pi." },
  { icon: '📡', title: 'IoT & capteurs', desc: "Objets connectés et capteurs pour mesurer, suivre et contrôler vos équipements à distance." },
  { icon: '🦾', title: 'Robotique', desc: "Conception et intégration de systèmes robotisés pour l'enseignement et l'industrie." },
  { icon: '🚁', title: 'Drones', desc: "Prises de vue aériennes, inspection et développement de solutions autour des drones." },
  { icon: '📐', title: 'Conception 3D & prototypage', desc: "Modélisation 3D, prototypage et validation technique de vos produits avant fabrication." },
  { icon: '🔧', title: 'Maintenance & support', desc: "Entretien de vos équipements informatiques et électroniques, assistance réactive." },
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
        <p className="section-sub">Du site web à la formation, tout pour réussir votre présence numérique.</p>
      </div>
      <div className="services-grid">
        {itServices.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>

      <div className="services-divider"></div>

      <div className="section-header">
        <div className="section-tag red">Électronique & Robotique</div>
        <h2 className="section-title">Électronique, IoT, robotique & drones</h2>
        <p className="section-sub">Du capteur au prototype, nous concevons des systèmes électroniques sur mesure.</p>
      </div>
      <div className="services-grid">
        {industrialServices.map((s, i) => <ServiceCard key={i} {...s} variant="ind" />)}
      </div>
    </section>
  )
}
