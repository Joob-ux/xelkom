import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import './Navbar.css'

export default function Navbar() {
  const [lang, setLang] = useState('fr')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = {
    fr: ['Services','À propos','Équipe','Portfolio','Blog','Contact'],
    en: ['Services','About','Team','Portfolio','Blog','Contact'],
  }
  const hrefs = ['#services','#about','#team','#portfolio','#blog','#contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Xelkom Valley" className="nav-logo-img" />
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links[lang].map((l, i) => (
          <li key={i}><a href={hrefs[i]} onClick={() => setOpen(false)}>{l}</a></li>
        ))}
      </ul>
      <div className="nav-right">
        <button className="lang-btn" onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}>
          {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
        </button>
        <a href="#contact" className="nav-cta">
          {lang === 'fr' ? 'Nous contacter' : 'Contact us'}
        </a>
        <button className="burger" onClick={() => setOpen(o => !o)}>☰</button>
      </div>
    </nav>
  )
}