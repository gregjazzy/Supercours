import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Calculator, Languages, BookOpen, Code, Music, Dumbbell, Palette, GraduationCap, Heart, ChevronRight } from 'lucide-react'
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
        <h1>Trouvez le<br/>professeur parfait</h1>
        
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

      {/* Professors */}
      <section className="professors">
        <h2>8 500+ professeurs vérifiés <span className="stars">★★★★★</span></h2>
        
        <div className="professors-grid">
          {teachers.map(teacher => (
            <Link to={`/profil/${teacher.id}`} key={teacher.id} className="prof-card">
              <div className="prof-image">
                <img src={teacher.photo} alt={teacher.name} />
                <div className="prof-overlay">
                  <h3>{teacher.name}</h3>
                  <p>{teacher.city} (face à face & webcam)</p>
                </div>
                <button className="fav-btn" onClick={(e) => e.preventDefault()}>
                  <Heart size={18} />
                </button>
                <span className="free-badge">GRATUIT & VÉRIFIÉ</span>
              </div>
              <div className="prof-details">
                <div className="prof-rating">
                  <span className="stars-small">★</span> {teacher.rating} 
                  <span className="reviews">({teacher.reviewCount} avis)</span>
                  <span className="ambassador">✓ Vérifié</span>
                </div>
                <p className="prof-subject">
                  <strong>{teacher.subject}</strong> · {teacher.description.slice(0, 55)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/recherche" className="see-more">
          + de professeurs près de chez vous
        </Link>
      </section>

      {/* Trust */}
      <section className="trust-section">
        <div className="trust-grid">
          <div className="trust-item">
            <span className="trust-icon">🛡️</span>
            <strong>Identité vérifiée</strong>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🎓</span>
            <strong>Diplômes authentifiés</strong>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⭐</span>
            <strong>Avis vérifiés (IP)</strong>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💚</span>
            <strong>100% Gratuit</strong>
          </div>
        </div>
      </section>
    </div>
  )
}
