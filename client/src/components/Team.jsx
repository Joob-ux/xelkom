import './Team.css'
import moukhtar from '../assets/moukhtar.png'
import khadim from '../assets/khadim.png'

const members = [
  { photo: moukhtar, initials: 'MD', name: 'Mouhamadou Moukhtar Diop', role: 'Fondateur & CEO',  en: 'Founder & Chief Executive Officer' },
  { photo: khadim,   initials: 'KN', name: 'Khadim Niang',  role: 'Co-fondateur',                   en: 'Co-Founder' },
  { photo: null,     initials: 'CP', name: 'Cheikh Pouye',  role: 'Manager',                        en: 'Manager' },
]

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="section-header">
        <div className="section-tag">Notre équipe / Our Team</div>
        <h2 className="section-title">Les experts Xelkom Valley</h2>
        <p className="section-sub">Une équipe pluridisciplinaire alliant maîtrise technologique et expertise industrielle.</p>
      </div>
      <div className="team-grid">
        {members.map((m, i) => (
          <div className="team-card" key={i}>
            {m.photo
              ? <img src={m.photo} alt={m.name} className="team-photo" />
              : <div className="team-avatar">{m.initials}</div>
            }
            <h3>{m.name}</h3>
            <p className="team-role">{m.role}</p>
            <p className="team-role-en">{m.en}</p>
          </div>
        ))}
      </div>
    </section>
  )
}