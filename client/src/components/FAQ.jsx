import { useState } from 'react'
import './FAQ.css'

const faqs = [
  { q: 'Quels types de machines CNC concevez-vous ?', en: 'What types of CNC machines do you design?', a: "Nous concevons des fraiseuses CNC, tours CNC, machines de découpe laser et plasma, ainsi que des centres d'usinage multi-axes adaptés à vos besoins industriels spécifiques." },
  { q: 'Proposez-vous des solutions IT pour les PME ?', en: 'Do you offer IT solutions for SMEs?', a: "Oui, nous accompagnons aussi bien les grandes entreprises que les PME avec des solutions IT scalables adaptées à votre budget et à vos objectifs." },
  { q: "Quelle est votre zone d'intervention géographique ?", en: 'What is your geographical coverage?', a: "Basés à Dakar Soprime, nous intervenons dans tout le Sénégal et couvrons les pays de la sous-région ouest-africaine (Mali, Côte d'Ivoire, Guinée, etc.)." },
  { q: 'Proposez-vous des contrats de maintenance ?', en: 'Do you offer maintenance contracts?', a: "Absolument. Nous proposons des contrats de maintenance préventive et curative pour vos machines industrielles et systèmes IT, avec différentes formules selon vos besoins." },
  { q: 'Combien de temps dure un projet CNC typique ?', en: 'How long does a typical CNC project take?', a: "Une machine standard prend 4 à 8 semaines. Les projets complexes peuvent nécessiter 3 à 6 mois selon les spécifications techniques." },
  { q: 'Comment démarrer un projet avec Xelkom Valley ?', en: 'How to start a project with you?', a: "Contactez-nous via le formulaire, par téléphone ou WhatsApp. Nous organisons une réunion de cadrage gratuite pour analyser vos besoins et proposer un devis détaillé." },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="faq-section">
      <div className="section-header">
        <div className="section-tag">FAQ</div>
        <h2 className="section-title">Questions fréquentes</h2>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div className={`faq-item ${open===i?'open':''}`} key={i} onClick={() => setOpen(open===i?null:i)}>
            <div className="faq-q">
              <div>
                <span className="faq-q-text">{f.q}</span>
                <span className="faq-q-en">{f.en}</span>
              </div>
              <span className="faq-icon">{open===i?'−':'+'}</span>
            </div>
            {open===i && <div className="faq-answer">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
