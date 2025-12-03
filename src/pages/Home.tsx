import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Calculator, Languages, BookOpen, Code, Music, Dumbbell, Palette, GraduationCap, Heart, ChevronRight, Shield, CheckCircle, BadgeCheck, FileCheck } from 'lucide-react'
import { teachers } from '../data/teachers'
import { Link } from 'react-router-dom'
import './Home.css'

const categories = [
  { name: "Maths", icon: Calculator },
  { name: "Anglais", icon: Languages },
  { name: "Français", icon: BookOpen },
  { name: "Informatique", icon: Code },
  { name: "Piano", icon: Music },
  { name: "Soutien scolaire", icon: GraduationCap },
  { name: "Coach sportif", icon: Dumbbell },
  { name: "Arts", icon: Palette },
]

const suggestions = ["Guitare", "Yoga", "Photographie", "Cuisine", "Anglais", "Piano", "Dessin", "Espagnol"]

export default function Home() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [placeholder, setPlaceholder] = useState('Maths')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(i => (i + 1) % suggestions.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setPlaceholder(suggestions[placeholderIndex])
  }, [placeholderIndex])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue) {
      navigate(`/recherche?matiere=${encodeURIComponent(searchValue)}`)
    } else {
      navigate('/recherche')
    }
  }

  const handleCategoryClick = (category: string) => {
    navigate(`/recherche?matiere=${encodeURIComponent(category)}`)
  }

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <h1>Trouvez votre<br/>professeur de confiance</h1>
        <p className="hero-sub">Données vérifiées · Mise en relation gratuite · 0% de commission</p>
        
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-box">
            <Search size={20} />
            <input 
              type="text"
              placeholder={`Essayez "${placeholder}"`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <button type="submit" className="search-btn">Rechercher</button>
        </form>

        {/* Categories */}
        <div className="categories">
          {categories.map(cat => (
            <button 
              key={cat.name}
              className="category-item"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="category-icon">
                <cat.icon size={22} />
              </div>
              <span>{cat.name}</span>
            </button>
          ))}
          <button className="category-more">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Verification Banner */}
      <section className="verification-banner">
        <div className="verif-item">
          <BadgeCheck size={20} />
          <span><strong>Identité</strong> vérifiée</span>
        </div>
        <div className="verif-item">
          <FileCheck size={20} />
          <span><strong>Diplômes</strong> authentifiés</span>
        </div>
        <div className="verif-item">
          <Shield size={20} />
          <span><strong>Adresse</strong> confirmée</span>
        </div>
        <div className="verif-item">
          <CheckCircle size={20} />
          <span><strong>Avis</strong> contrôlés</span>
        </div>
      </section>

      {/* Professors */}
      <section className="professors">
        <div className="professors-header">
          <h2>Professeurs vérifiés</h2>
          <p>Données contrôlées · Mise en relation gratuite · 0% de commission pour les professeurs</p>
        </div>
        
        <div className="professors-grid">
          {teachers.map(teacher => (
            <Link to={`/profil/${teacher.id}`} key={teacher.id} className="prof-card">
              <div className="prof-image">
                <img src={teacher.photo} alt={teacher.name} />
                <div className="prof-overlay">
                  <h3>{teacher.name}</h3>
                  <p>{teacher.city}</p>
                </div>
                <button className="fav-btn" onClick={(e) => e.preventDefault()}>
                  <Heart size={18} />
                </button>
                <div className="price-tag">{teacher.hourlyRate}€<span>/h</span></div>
                <div className="verified-tag">
                  <CheckCircle size={12} />
                  Vérifié
                </div>
              </div>
              <div className="prof-details">
                <div className="prof-rating">
                  <span className="stars-small">★</span> {teacher.rating} 
                  <span className="reviews">({teacher.reviewCount})</span>
                </div>
                <p className="prof-subject">
                  <strong>{teacher.subject}</strong> · {teacher.description.slice(0, 50)}...
                </p>
                <p className="prof-free">Mise en relation gratuite</p>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/recherche" className="see-more">
          Voir tous les professeurs →
        </Link>
      </section>

      {/* Why Us */}
      <section className="why-section">
        <h2>Pourquoi TrustTutor ?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>Données vérifiées</h3>
            <p>Identité, diplômes, adresse et avis : tout est contrôlé par notre équipe.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Mise en relation gratuite</h3>
            <p>Contactez les professeurs sans frais. Aucun abonnement, aucune commission cachée.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🎓</div>
            <h3>0% de commission</h3>
            <p>Les professeurs gardent 100% de leurs revenus. Pas de frais prélevés sur les cours.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">⚖️</div>
            <h3>Conforme DGCCRF</h3>
            <p>Plateforme respectant toutes les réglementations de protection des consommateurs.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
