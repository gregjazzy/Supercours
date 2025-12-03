import { Link } from 'react-router-dom'
import { BookOpen, Shield, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <BookOpen className="footer-logo-icon" />
              <span>Super<span className="accent">cours</span></span>
            </Link>
            <p className="footer-tagline">
              La plateforme 100% gratuite de cours particuliers avec professeurs vérifiés.
            </p>
            <div className="footer-trust">
              <Shield className="trust-icon" />
              <span>Plateforme conforme DGCCRF</span>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Élèves</h4>
              <Link to="/recherche">Trouver un professeur</Link>
              <Link to="/recherche/mathematiques">Cours de maths</Link>
              <Link to="/recherche/anglais">Cours d'anglais</Link>
              <Link to="/recherche/francais">Cours de français</Link>
            </div>

            <div className="footer-column">
              <h4>Professeurs</h4>
              <Link to="/devenir-professeur">Donner des cours</Link>
              <Link to="/devenir-professeur">Inscription gratuite</Link>
              <Link to="/mentions-legales">Charte qualité</Link>
            </div>

            <div className="footer-column">
              <h4>Supercours</h4>
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/mentions-legales">Politique de confidentialité</Link>
              <Link to="/mentions-legales">CGU</Link>
              <Link to="/mentions-legales">Nos vérifications</Link>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:contact@supercours.fr" className="footer-contact">
                <Mail size={16} />
                contact@supercours.fr
              </a>
              <a href="tel:+33100000000" className="footer-contact">
                <Phone size={16} />
                01 00 00 00 00
              </a>
              <span className="footer-contact">
                <MapPin size={16} />
                Paris, France
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Supercours. Tous droits réservés.</p>
          <p className="footer-legal">
            Plateforme gratuite de mise en relation. Aucune commission prélevée.
            <br />
            Tous les profils sont vérifiés : identité, adresse, diplômes et avis authentifiés.
          </p>
        </div>
      </div>
    </footer>
  )
}

