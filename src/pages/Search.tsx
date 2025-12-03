import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, SlidersHorizontal, Shield, X } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import TeacherCard from '../components/TeacherCard'
import { teachers, subjects, cities } from '../data/teachers'
import './Search.css'

export default function Search() {
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
      if (filters.subject && !teacher.subjects.includes(filters.subject) && teacher.subject !== filters.subject) {
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

  const hasActiveFilters = filters.subject || filters.city || filters.minRating > 0

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="container">
          <h1>Trouver un professeur</h1>
          <p>Tous nos professeurs sont vérifiés et les cours sont 100% gratuits</p>
          <SearchBar variant="compact" />
        </div>
      </div>

      <div className="search-content container">
        <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
          <div className="filters-header">
            <h3>
              <SlidersHorizontal size={20} />
              Filtres
            </h3>
            <button className="close-filters" onClick={() => setShowFilters(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="filter-group">
            <label>Matière</label>
            <select 
              value={filters.subject}
              onChange={(e) => setFilters({...filters, subject: e.target.value})}
            >
              <option value="">Toutes les matières</option>
              {subjects.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Ville</label>
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

          <div className="filter-group">
            <label>Note minimum</label>
            <select 
              value={filters.minRating}
              onChange={(e) => setFilters({...filters, minRating: Number(e.target.value)})}
            >
              <option value={0}>Toutes les notes</option>
              <option value={4}>4+ étoiles</option>
              <option value={4.5}>4.5+ étoiles</option>
              <option value={4.8}>4.8+ étoiles</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="checkbox-label">
              <input 
                type="checkbox"
                checked={filters.verifiedOnly}
                onChange={(e) => setFilters({...filters, verifiedOnly: e.target.checked})}
              />
              <Shield size={16} />
              Profils 100% vérifiés uniquement
            </label>
          </div>

          {hasActiveFilters && (
            <button className="clear-filters" onClick={clearFilters}>
              Effacer les filtres
            </button>
          )}

          <div className="filter-info">
            <Shield size={16} />
            <span>Tous les profils affichés ont été vérifiés : identité, adresse, diplômes et avis.</span>
          </div>
        </aside>

        <div className="search-results">
          <div className="results-header">
            <span className="results-count">
              <strong>{filteredTeachers.length}</strong> professeur{filteredTeachers.length > 1 ? 's' : ''} trouvé{filteredTeachers.length > 1 ? 's' : ''}
            </span>
            <button 
              className="toggle-filters"
              onClick={() => setShowFilters(true)}
            >
              <Filter size={18} />
              Filtres
            </button>
          </div>

          <div className="results-grid">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map(teacher => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))
            ) : (
              <div className="no-results">
                <p>Aucun professeur ne correspond à vos critères.</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

