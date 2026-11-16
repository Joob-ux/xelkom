import { useState } from 'react'
import './FAQ.css'

const faqs = [
  { q: 'Combien coûte un site web ?', en: 'How much does a website cost?', a: "Le prix dépend du nombre de pages et des fonctionnalités. Contactez-nous pour un devis gratuit adapté à votre budget." },
  { q: 'Proposez-vous des solutions pour les PME et les commerçants ?', en: 'Do you offer solutions for SMEs?', a: "Oui. Nos logiciels de gestion et nos sites sont pensés pour les PME et boutiques, avec la prise en charge de Wave et Orange Money." },
  { q: 'Quelles formations proposez-vous ?', en: 'What training do you offer?', a: "Des formations pratiques en informatique, développement et outils numériques. Contactez-nous pour connaître les prochaines sessions." },
  { q: 'Pouvez-vous gérer nos réseaux sociaux ?', en: 'Can you manage our social media?', a: "Oui : création de visuels et de textes, planification des publications et animation de vos pages." },
  { q: "Quelle est votre zone d'intervention ?", en: 'What is your coverage area?', a: "Nous sommes basés à Dakar (Soprime) et travaillons dans tout le Sénégal. Les projets web et logiciels peuvent être suivis à distance." },
  { q: 'Comment démarrer un projet avec Xelkom Valley ?', en: 'How to start a project with you?', a: "Écrivez-nous via le formulaire, par téléphone ou WhatsApp. Nous organisons un premier échange gratuit pour comprendre vos besoins et vous proposer un devis." },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="faq-section">
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
