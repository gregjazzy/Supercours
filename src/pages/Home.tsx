import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin, BookOpen, Languages, Calculator, Music, Dumbbell, Code, Palette, GraduationCap, Heart, ChevronLeft, ChevronRight, Shield, Star, CheckCircle } from 'lucide-react'
import TeacherCard from '../components/TeacherCard'
import { teachers, subjects, cities } from '../data/teachers'
import './Home.css'

const categories = [
  { name: "Maths", icon: Calculator },
  { name: "Anglais", icon: Languages },
  { name: "Français", icon: BookOpen },
  { name: "Informatique", icon: Code },
  { name: "Musique", icon: Music },
  { name: "Sport", icon: Dumbbell },
  { name: "Arts", icon: Palette },
  { name: "Sciences", icon: GraduationCap },
]

export default function Home() {
  const navigate = useNavigate()
  const [searchSubject, setSearchSubject] = useState('')
  const [searchCity, setSearchCity] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchSubject) params.set('matiere', searchSubject)
    if (searchCity) params.set('ville', searchCity)
    navigate(`/recherche?${params.toString()}`)
  }

  const handleCategoryClick = (category: string) => {
    navigate(`/recherche?matiere=${encodeURIComponent(category)}`)
  }

  return (
    <div className="home">
      {/* Hero Search */}
      <section className="hero-search">
        <h1>Trouvez le professeur parfait</h1>
        <p className="hero-subtitle">
          <Shield size={16} /> 100% gratuit · Profils vérifiés · Conforme DGCCRF
        </p>
        
        <form className="main-search" onSubmit={handleSearch}>
          <div className="search-input-group">
            <Search size={20} />
            <input 
              type="text"
              placeholder="Que souhaitez-vous apprendre ?"
              value={searchSubject}
              onChange={(e) => setSearchSubject(e.target.value)}
              list="subjects-list"
            />
            <datalist id="subjects-list">
              {subjects.map(s => <option key={s} value={s} />)}
            </datalist>
          </div>
          <div className="search-input-group">
            <MapPin size={20} />
            <input 
              type="text"
              placeholder="Où ?"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              list="cities-list"
            />
            <datalist id="cities-list">
              {cities.map(c => <option key={c} value={c} />)}
            </datalist>
          </div>
          <button type="submit" className="search-btn">
            Rechercher
          </button>
        </form>

        {/* Quick Categories */}
        <div className="categories">
          <button className="cat-nav cat-prev"><ChevronLeft size={20} /></button>
          <div className="categories-list">
            {categories.map(cat => (
              <button 
                key={cat.name}
                className="category-btn"
                onClick={() => handleCategoryClick(cat.name)}
              >
                <cat.icon size={24} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
          <button className="cat-nav cat-next"><ChevronRight size={20} /></button>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="teachers-section">
        <div className="section-header">
          <h2>
            {teachers.length} professeurs vérifiés 
            <span className="verified-badge"><CheckCircle size={16} /> 100% Gratuit</span>
          </h2>
        </div>

        <div className="teachers-grid">
          {teachers.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} variant="grid" />
          ))}
        </div>

        <button className="load-more" onClick={() => navigate('/recherche')}>
          Voir plus de professeurs
        </button>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="trust-item">
          <Shield size={24} />
          <div>
            <strong>Identité vérifiée</strong>
            <span>Pièce d'identité contrôlée</span>
          </div>
        </div>
        <div className="trust-item">
          <CheckCircle size={24} />
          <div>
            <strong>Diplômes authentifiés</strong>
            <span>Vérification auprès des établissements</span>
          </div>
        </div>
        <div className="trust-item">
          <Star size={24} />
          <div>
            <strong>Avis vérifiés</strong>
            <span>Contrôle IP & moyen de paiement</span>
          </div>
        </div>
        <div className="trust-item">
          <Heart size={24} />
          <div>
            <strong>100% Gratuit</strong>
            <span>Aucune commission, jamais</span>
          </div>
        </div>
      </section>
    </div>
  )
}
