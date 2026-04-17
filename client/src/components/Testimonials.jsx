import './Testimonials.css'

const testimonials = [
  { initials: 'MS', name: 'Moussa Sall', company: 'Directeur, Industries Sall & Frères', text: 'Xelkom Valley a conçu notre machine CNC sur mesure avec une précision remarquable. Délais respectés, équipe très professionnelle.', en: 'Remarkable CNC precision. Deadlines met, very professional team.' },
  { initials: 'FD', name: 'Fatou Diallo', company: 'CEO, TechHub Dakar', text: 'Notre plateforme digitale développée par Xelkom Valley a transformé notre gestion opérationnelle. Un partenaire de confiance.', en: 'Our digital platform transformed our operations. A trusted partner.' },
  { initials: 'IB', name: 'Ibrahima Ba', company: 'Directeur Technique, ManufactureSN', text: "L'automatisation de notre ligne de production a réduit nos coûts de 35%. Expertise industrielle de très haut niveau.", en: 'Production line automation cut costs by 35%. Very high-level expertise.' },
]

export default function Testimonials() {
  return (
    <section className="testi-section">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Témoignages / Testimonials</div>
        <h2 className="section-title">Ce que disent nos clients</h2>
      </div>
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <div className="testi-card" key={i}>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"{t.text}"</p>
            <p className="testi-text-en">"{t.en}"</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-company">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
