import { Link } from 'react-router-dom'
import { BookOpen, Menu, X, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <BookOpen className="logo-icon" />
          <span className="logo-text">supercours</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/mentions-legales" className="nav-link" onClick={() => setMenuOpen(false)}>
            <HelpCircle size={18} />
          </Link>
          <Link to="/devenir-professeur" className="nav-link" onClick={() => setMenuOpen(false)}>
            Donner des cours
          </Link>
          <button className="nav-btn">Connexion</button>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
