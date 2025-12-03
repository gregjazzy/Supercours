import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin } from 'lucide-react'
import { subjects, cities } from '../data/teachers'
import './SearchBar.css'

interface Props {
  variant?: 'hero' | 'compact'
}

export default function SearchBar({ variant = 'hero' }: Props) {
  const navigate = useNavigate()
  const [subject, setSubject] = useState('')
  const [city, setCity] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (subject) params.set('matiere', subject)
    if (city) params.set('ville', city)
    navigate(`/recherche?${params.toString()}`)
  }

  return (
    <form className={`search-bar ${variant}`} onSubmit={handleSearch}>
      <div className="search-field">
        <Search className="search-icon" />
        <select 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)}
          className="search-select"
        >
          <option value="">Quelle matière ?</option>
          {subjects.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="search-divider" />

      <div className="search-field">
        <MapPin className="search-icon" />
        <select 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
          className="search-select"
        >
          <option value="">Où ?</option>
          {cities.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="search-button">
        <Search size={20} />
        <span>Rechercher</span>
      </button>
    </form>
  )
}

