import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Services','À propos','Équipe','Réalisations','FAQ','Contact']
  const hrefs = ['#services','#about','#team','#portfolio','#faq','#contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Xelkom Valley" className="nav-logo-img" />
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l, i) => (
          <li key={i}><a href={hrefs[i]} onClick={() => setOpen(false)}>{l}</a></li>
        ))}
      </ul>
      <div className="nav-right">
        <a href="#contact" className="nav-cta">
          Nous contacter
        </a>
        <button className="burger" onClick={() => setOpen(o => !o)}>☰</button>
      </div>
    </nav>
  )
}