import { Link } from 'react-router-dom'
import { HelpCircle } from 'lucide-react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          supercours
        </Link>

        <nav className="nav">
          <Link to="/mentions-legales" className="nav-icon">
            <HelpCircle size={20} />
          </Link>
          <Link to="/devenir-professeur" className="nav-link">
            Donner des cours
          </Link>
          <button className="nav-link">Connexion</button>
        </nav>
      </div>
    </header>
  )
}
