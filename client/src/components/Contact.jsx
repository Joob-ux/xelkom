import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (!form.name || !form.message) { setStatus('error'); return }
    const text = [
      'Bonjour Xelkom Valley,',
      `Nom : ${form.name}`,
      form.email ? `Email : ${form.email}` : null,
      form.phone ? `Téléphone : ${form.phone}` : null,
      form.subject ? `Sujet : ${form.subject}` : null,
      '',
      form.message,
    ].filter(l => l !== null).join('\n')
    window.open(`https://wa.me/221770307508?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setStatus('success')
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">Parlons de votre projet</h2>
      </div>
      <div className="contact-inner">
        <div className="contact-info-col">
          <p className="section-sub">Que ce soit pour un site web, une formation ou un projet électronique, notre équipe est prête à vous accompagner.</p>
          <p className="contact-sub-en">Whether for a website, training or an electronics project, our team is ready to assist you.</p>
          <div className="info-list">
            <div className="info-item"><span className="info-ico">📍</span><div><div className="info-lbl">Adresse</div><div className="info-val">Dakar, Soprime, Sénégal</div></div></div>
            <div className="info-item"><span className="info-ico">📞</span><div><div className="info-lbl">Téléphone</div><div className="info-val">+221 77 084 97 36</div><div className="info-val">+221 77 030 75 08</div></div></div>
            <div className="info-item"><span className="info-ico">💬</span><div><div className="info-lbl">WhatsApp</div><a href="https://wa.me/221770307508" target="_blank" rel="noreferrer" className="info-val info-link">+221 77 030 75 08</a></div></div>
            <div className="info-item"><span className="info-ico">✉️</span><div><div className="info-lbl">Email</div><div className="info-val">moukhtardiop2768@gmail.com</div></div></div>
          </div>
          <a href="https://wa.me/221770307508" target="_blank" rel="noreferrer" className="wa-btn">💬 Écrire sur WhatsApp</a>
        </div>
        <div className="contact-form-col">
          <div className="cform">
            <div className="crow">
              <div className="cgrp"><label>Nom complet</label><input name="name" className="cinput" placeholder="Votre nom" value={form.name} onChange={handle}/></div>
              <div className="cgrp"><label>Email</label><input name="email" type="email" className="cinput" placeholder="votre@email.com" value={form.email} onChange={handle}/></div>
            </div>
            <div className="crow">
              <div className="cgrp"><label>Téléphone</label><input name="phone" className="cinput" placeholder="+221 XX XXX XX XX" value={form.phone} onChange={handle}/></div>
              <div className="cgrp"><label>Sujet</label>
                <select name="subject" className="cinput cselect" value={form.subject} onChange={handle}>
                  <option value="">Choisir un sujet...</option>
                  <option>Site web / application</option>
                  <option>Formation</option>
                  <option>Réseaux sociaux</option>
                  <option>Électronique / IoT / Drones</option>
                  <option>Demande de devis</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>
            <div className="cgrp"><label>Message</label><textarea name="message" className="cinput ctextarea" placeholder="Décrivez votre projet..." value={form.message} onChange={handle}/></div>
            <button className="btn-primary" onClick={submit} style={{width:'100%'}}>
              Envoyer via WhatsApp →
            </button>
            {status==='success' && <p className="csuccess">✅ WhatsApp s'est ouvert avec votre message : il ne reste qu'à l'envoyer.</p>}
            {status==='error'   && <p className="cerror">❌ Merci d'indiquer votre nom et votre message.</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
