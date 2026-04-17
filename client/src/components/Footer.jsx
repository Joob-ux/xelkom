import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">XELKOM<span>VALLEY</span></div>
          <p>Votre partenaire en solutions IT et machines industrielles de précision au Sénégal et en Afrique de l'Ouest.</p>
          <p className="footer-en">Your partner in IT solutions and precision industrial machines in West Africa.</p>
        </div>
        <div className="footer-col"><h4>Services IT</h4><ul><li>Développement logiciel</li><li>Cloud & Infrastructure</li><li>Cybersécurité</li><li>Data & Analytics</li><li>Intelligence Artificielle</li></ul></div>
        <div className="footer-col"><h4>Industrie</h4><ul><li>Machines CNC</li><li>Automatisation</li><li>Robotique</li><li>Bureau d'études</li><li>Maintenance SAV</li></ul></div>
        <div className="footer-col"><h4>Contact</h4><ul>
          <li>📍 Dakar, Soprime</li>
          <li>📞 +221 77 084 97 36</li>
          <li>📞 +221 77 030 75 08</li>
          <li>✉️ moukhtardiop2768@.com</li>
          <li><a href="https://wa.me/221770307508" target="_blank" rel="noreferrer" className="footer-wa">💬 WhatsApp</a></li>
        </ul></div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Xelkom Valley. Tous droits réservés. / All rights reserved.</p>
        <p>Fait avec ❤️ à Dakar, Sénégal</p>
      </div>
    </footer>
  )
}
