import { Link } from 'react-router-dom'
import { HelpCircle, Shield } from 'lucide-react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-main">Trust</span><span className="logo-accent">Tutor</span>
        </Link>
        
        <div className="header-right">
          <Link to="/mentions-legales" className="header-link">
            <Shield size={16} />
            Garanties
          </Link>
          <Link to="/aide" className="header-link">
            <HelpCircle size={16} />
            Aide
          </Link>
          <Link to="/devenir-professeur" className="header-btn-secondary">
            Donner des cours
          </Link>
          <Link to="/connexion" className="header-btn-primary">
            Connexion
          </Link>
        </div>
      </div>
    </header>
  )
}
