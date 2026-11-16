import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">XELKOM<span>VALLEY</span></div>
          <p>Votre partenaire en solutions digitales, électronique et robotique au Sénégal.</p>
          <p className="footer-en">Your partner in digital solutions, electronics and robotics in Senegal.</p>
        </div>
        <div className="footer-col"><h4>Numérique</h4><ul><li>Sites web & applications</li><li>Logiciels de gestion</li><li>Formation IT</li><li>Réseaux sociaux</li><li>Cybersécurité</li></ul></div>
        <div className="footer-col"><h4>Électronique</h4><ul><li>Systèmes embarqués</li><li>IoT & capteurs</li><li>Robotique</li><li>Drones</li><li>Conception 3D</li></ul></div>
        <div className="footer-col"><h4>Contact</h4><ul>
          <li>📍 Dakar, Soprime</li>
          <li>📞 +221 77 084 97 36</li>
          <li>📞 +221 77 030 75 08</li>
          <li>✉️ moukhtardiop2768@gmail.com</li>
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
