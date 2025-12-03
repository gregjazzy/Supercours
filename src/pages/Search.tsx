import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search as SearchIcon, MapPin, SlidersHorizontal, Heart, ChevronDown, CheckCircle } from 'lucide-react'
import { teachers, cities } from '../data/teachers'
import './Search.css'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  
  const initialSubject = searchParams.get('matiere') || ''
  const initialCity = searchParams.get('ville') || ''
  
  const [filters, setFilters] = useState({
    subject: initialSubject,
    city: initialCity,
    verifiedOnly: true,
    minRating: 0,
    maxPrice: 100
  })

  const filteredTeachers = useMemo(() => {
    return teachers.filter(teacher => {
      if (filters.subject && !teacher.subjects.some(s => s.toLowerCase().includes(filters.subject.toLowerCase())) && !teacher.subject.toLowerCase().includes(filters.subject.toLowerCase())) {
        return false
      }
      if (filters.city && teacher.city !== filters.city) {
        return false
      }
      if (filters.verifiedOnly) {
        const allVerified = teacher.verified.identity && teacher.verified.address && teacher.verified.diploma && teacher.verified.reviews
        if (!allVerified) return false
      }
      if (filters.minRating && teacher.rating < filters.minRating) {
        return false
      }
      if (filters.maxPrice && teacher.hourlyRate > filters.maxPrice) {
        return false
      }
      return true
    })
  }, [filters])

  const clearFilters = () => {
    setFilters({ subject: '', city: '', verifiedOnly: true, minRating: 0, maxPrice: 100 })
  }

  return (
    <div className="search-page">
      {/* Search Header */}
      <div className="search-header">
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <SearchIcon size={18} />
            <input 
              type="text"
              placeholder="Quelle matière ?"
              value={filters.subject}
              onChange={(e) => setFilters({...filters, subject: e.target.value})}
            />
          </div>
          <div className="search-input-wrapper">
            <MapPin size={18} />
            <select value={filters.city} onChange={(e) => setFilters({...filters, city: e.target.value})}>
              <option value="">Toutes les villes</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal size={18} />
            Filtres
            <ChevronDown size={16} />
          </button>
        </div>

        {showFilters && (
          <div className="filters-dropdown">
            <div className="filter-group">
              <label>Tarif max</label>
              <select value={filters.maxPrice} onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}>
                <option value={100}>Tous les tarifs</option>
                <option value={20}>≤ 20€/h</option>
                <option value={30}>≤ 30€/h</option>
                <option value={40}>≤ 40€/h</option>
                <option value={50}>≤ 50€/h</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Note min</label>
              <select value={filters.minRating} onChange={(e) => setFilters({...filters, minRating: Number(e.target.value)})}>
                <option value={0}>Toutes</option>
                <option value={4}>4+ ★</option>
                <option value={4.5}>4.5+ ★</option>
                <option value={4.8}>4.8+ ★</option>
              </select>
            </div>
            <label className="checkbox-filter">
              <input type="checkbox" checked={filters.verifiedOnly} onChange={(e) => setFilters({...filters, verifiedOnly: e.target.checked})} />
              Profils vérifiés uniquement
            </label>
            <button className="clear-btn" onClick={clearFilters}>Effacer</button>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="search-results">
        <div className="results-header">
          <h1>
            <strong>{filteredTeachers.length}</strong> professeurs vérifiés
            {filters.subject && ` · ${filters.subject}`}
            {filters.city && ` · ${filters.city}`}
          </h1>
          <p className="results-sub">Mise en relation gratuite · 0% de commission</p>
        </div>

        <div className="results-grid">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map(teacher => (
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
            ))
          ) : (
            <div className="no-results">
              <p>Aucun professeur trouvé.</p>
              <button onClick={clearFilters} className="reset-btn">Réinitialiser</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
