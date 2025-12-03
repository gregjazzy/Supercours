import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-main">Trust</span><span className="logo-accent">Tutor</span>
          </Link>
          <p>Cours particuliers 100% vérifiés. Mise en relation gratuite.</p>
          <span className="dgccrf-badge">✓ Conforme DGCCRF</span>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Élèves</h4>
            <Link to="/recherche">Trouver un professeur</Link>
            <Link to="/recherche?matiere=Maths">Cours de maths</Link>
            <Link to="/recherche?matiere=Anglais">Cours d'anglais</Link>
          </div>
          <div className="footer-col">
            <h4>Professeurs</h4>
            <Link to="/devenir-professeur">Donner des cours</Link>
            <Link to="/devenir-professeur">Inscription gratuite</Link>
          </div>
          <div className="footer-col">
            <h4>TrustTutor</h4>
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/mentions-legales">CGU</Link>
            <Link to="/mentions-legales">Confidentialité</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 TrustTutor · Mise en relation gratuite · Tous les profils sont vérifiés</p>
      </div>
    </footer>
  )
}
