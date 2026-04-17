import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async () => {
    if (!form.email || !form.message) return
    setStatus('loading')
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">Parlons de votre projet</h2>
      </div>
      <div className="contact-inner">
        <div className="contact-info-col">
          <p className="section-sub">Que ce soit pour une solution IT ou une machine industrielle, notre équipe est prête à vous accompagner.</p>
          <p className="contact-sub-en">Whether for an IT solution or an industrial machine, our team is ready to assist you.</p>
          <div className="info-list">
            <div className="info-item"><span className="info-ico">📍</span><div><div className="info-lbl">Adresse</div><div className="info-val">Dakar, Soprime, Sénégal</div></div></div>
            <div className="info-item"><span className="info-ico">📞</span><div><div className="info-lbl">Téléphone</div><div className="info-val">+221 77 084 97 36</div><div className="info-val">+221 77 030 75 08</div></div></div>
            <div className="info-item"><span className="info-ico">💬</span><div><div className="info-lbl">WhatsApp</div><a href="https://wa.me/221770307508" target="_blank" rel="noreferrer" className="info-val info-link">+221 77 030 75 08</a></div></div>
            <div className="info-item"><span className="info-ico">✉️</span><div><div className="info-lbl">Email</div><div className="info-val">contact@xelkomvalley.com</div></div></div>
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
                  <option>Service IT</option>
                  <option>Machine CNC / Industrielle</option>
                  <option>Demande de devis</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>
            <div className="cgrp"><label>Message</label><textarea name="message" className="cinput ctextarea" placeholder="Décrivez votre projet..." value={form.message} onChange={handle}/></div>
            <button className="btn-primary" onClick={submit} disabled={status==='loading'} style={{width:'100%'}}>
              {status==='loading' ? 'Envoi en cours...' : 'Envoyer le message →'}
            </button>
            {status==='success' && <p className="csuccess">✅ Message envoyé ! Nous vous répondrons sous 24h.</p>}
            {status==='error'   && <p className="cerror">❌ Erreur. Réessayez ou contactez-nous par WhatsApp.</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
