import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search as SearchIcon, MapPin, SlidersHorizontal, Heart, ChevronDown } from 'lucide-react'
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
    minRating: 0
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
        const allVerified = teacher.verified.identity && 
          teacher.verified.address && 
          teacher.verified.diploma && 
          teacher.verified.reviews
        if (!allVerified) return false
      }
      if (filters.minRating && teacher.rating < filters.minRating) {
        return false
      }
      return true
    })
  }, [filters])

  const clearFilters = () => {
    setFilters({
      subject: '',
      city: '',
      verifiedOnly: true,
      minRating: 0
    })
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
            <select 
              value={filters.city}
              onChange={(e) => setFilters({...filters, city: e.target.value})}
            >
              <option value="">Toutes les villes</option>
              {cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
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
              <label>Note minimum</label>
              <select 
                value={filters.minRating}
                onChange={(e) => setFilters({...filters, minRating: Number(e.target.value)})}
              >
                <option value={0}>Toutes</option>
                <option value={4}>4+ ★</option>
                <option value={4.5}>4.5+ ★</option>
                <option value={4.8}>4.8+ ★</option>
              </select>
            </div>
            <label className="checkbox-filter">
              <input 
                type="checkbox"
                checked={filters.verifiedOnly}
                onChange={(e) => setFilters({...filters, verifiedOnly: e.target.checked})}
              />
              Profils vérifiés uniquement
            </label>
            <button className="clear-btn" onClick={clearFilters}>
              Effacer les filtres
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="search-results">
        <div className="results-header">
          <h1>
            <strong>{filteredTeachers.length}</strong> professeurs 
            {filters.subject && ` de ${filters.subject}`}
            {filters.city && ` à ${filters.city}`}
            <span className="stars">★★★★★</span>
          </h1>
        </div>

        <div className="results-grid">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map(teacher => (
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
            ))
          ) : (
            <div className="no-results">
              <p>Aucun professeur ne correspond à vos critères.</p>
              <button onClick={clearFilters} className="reset-btn">
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
