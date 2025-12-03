import { Link } from 'react-router-dom'
import { Star, MapPin, Shield, CheckCircle } from 'lucide-react'
import { Teacher } from '../data/teachers'
import './TeacherCard.css'

interface Props {
  teacher: Teacher
  variant?: 'list' | 'grid'
}

export default function TeacherCard({ teacher, variant = 'list' }: Props) {
  const allVerified = teacher.verified.identity && 
    teacher.verified.address && 
    teacher.verified.diploma && 
    teacher.verified.reviews;

  if (variant === 'grid') {
    return (
      <Link to={`/profil/${teacher.id}`} className="teacher-card-grid">
        <div className="card-image">
          <img src={teacher.photo} alt={teacher.name} />
          <div className="card-overlay">
            <span className="card-name">{teacher.name}</span>
            <span className="card-location">
              <MapPin size={12} />
              {teacher.city}
            </span>
          </div>
          {allVerified && (
            <div className="verified-corner">
              <Shield size={14} />
            </div>
          )}
          <div className="free-tag">GRATUIT & VÉRIFIÉ</div>
        </div>
        
        <div className="card-content">
          <div className="card-rating">
            <Star className="star" />
            <strong>{teacher.rating}</strong>
            <span>({teacher.reviewCount} avis)</span>
            {allVerified && (
              <span className="verified-text">
                <CheckCircle size={12} />
                Vérifié
              </span>
            )}
          </div>
          
          <p className="card-subject">
            <strong>{teacher.subject}</strong> - {teacher.description.slice(0, 80)}...
          </p>

          <div className="card-footer">
            <span className="response-time">Répond {teacher.responseTime}</span>
          </div>
        </div>
      </Link>
    )
  }

  // List variant (pour la page recherche)
  return (
    <Link to={`/profil/${teacher.id}`} className="teacher-card-list">
      <div className="list-image">
        <img src={teacher.photo} alt={teacher.name} />
        {allVerified && (
          <div className="verified-corner">
            <Shield size={14} />
          </div>
        )}
      </div>

      <div className="list-content">
        <div className="list-header">
          <div>
            <h3>{teacher.name}</h3>
            <p className="list-subject">{teacher.subject}</p>
          </div>
          <div className="list-rating">
            <Star className="star" />
            <strong>{teacher.rating}</strong>
            <span>({teacher.reviewCount})</span>
          </div>
        </div>

        <div className="list-meta">
          <span><MapPin size={14} /> {teacher.city}</span>
          <span>Répond {teacher.responseTime}</span>
        </div>

        <p className="list-description">{teacher.description}</p>

        <div className="list-tags">
          {teacher.verified.diploma && (
            <span className="tag verified"><CheckCircle size={12} /> Diplômes vérifiés</span>
          )}
          {teacher.verified.reviews && (
            <span className="tag verified"><CheckCircle size={12} /> Avis authentifiés</span>
          )}
        </div>

        <div className="list-footer">
          <span className="free-badge">GRATUIT</span>
          <span className="experience">{teacher.experience} ans d'expérience</span>
        </div>
      </div>
    </Link>
  )
}
