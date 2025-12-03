import { useParams, Link } from 'react-router-dom'
import { 
  Star, MapPin, Clock, Shield, CheckCircle, Award, 
  MessageCircle, Calendar, Users, ArrowLeft, BadgeCheck,
  Mail, Phone, Globe
} from 'lucide-react'
import { teachers } from '../data/teachers'
import './Profile.css'

export default function Profile() {
  const { id } = useParams()
  const teacher = teachers.find(t => t.id === Number(id))

  if (!teacher) {
    return (
      <div className="profile-page">
        <div className="container">
          <div className="not-found">
            <h1>Professeur non trouvé</h1>
            <Link to="/recherche" className="btn btn-primary">
              Retour à la recherche
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const allVerified = teacher.verified.identity && 
    teacher.verified.address && 
    teacher.verified.diploma && 
    teacher.verified.reviews;

  return (
    <div className="profile-page">
      <div className="profile-header-bg" />
      
      <div className="container">
        <Link to="/recherche" className="back-link">
          <ArrowLeft size={18} />
          Retour aux résultats
        </Link>

        <div className="profile-grid">
          <div className="profile-main">
            <div className="profile-card profile-intro">
              <div className="profile-photo-container">
                <img src={teacher.photo} alt={teacher.name} className="profile-photo" />
                {allVerified && (
                  <div className="verified-badge-large">
                    <Shield size={20} />
                    <span>Vérifié</span>
                  </div>
                )}
              </div>

              <div className="profile-info">
                <h1>{teacher.name}</h1>
                <p className="profile-subject">{teacher.subject}</p>
                
                <div className="profile-meta">
                  <span className="meta-item">
                    <Star className="star-filled" />
                    <strong>{teacher.rating}</strong>
                    <span>({teacher.reviewCount} avis)</span>
                  </span>
                  <span className="meta-item">
                    <MapPin size={18} />
                    {teacher.city}
                  </span>
                  <span className="meta-item">
                    <Clock size={18} />
                    Répond {teacher.responseTime}
                  </span>
                </div>

                <div className="profile-stats">
                  <div className="stat-box">
                    <Users size={20} />
                    <div>
                      <strong>{teacher.students}</strong>
                      <span>élèves</span>
                    </div>
                  </div>
                  <div className="stat-box">
                    <Calendar size={20} />
                    <div>
                      <strong>{teacher.experience}</strong>
                      <span>ans exp.</span>
                    </div>
                  </div>
                </div>

                <div className="profile-price">
                  <span className="price-label">Tarif</span>
                  <span className="price-value">GRATUIT</span>
                  <span className="price-note">Aucune commission, jamais</span>
                </div>
              </div>
            </div>

            <div className="profile-card">
              <h2>À propos de {teacher.name.split(' ')[0]}</h2>
              <p className="about-text">{teacher.longDescription}</p>
            </div>

            <div className="profile-card">
              <h2>Matières enseignées</h2>
              <div className="subjects-list">
                {teacher.subjects.map(subject => (
                  <span key={subject} className="subject-tag">{subject}</span>
                ))}
              </div>
            </div>

            <div className="profile-card">
              <h2>Disponibilités</h2>
              <div className="availability-grid">
                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                  <span 
                    key={day} 
                    className={`day-tag ${teacher.availability.includes(day) ? 'available' : ''}`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-card">
              <h2>Langues parlées</h2>
              <div className="languages-list">
                {teacher.languages.map(lang => (
                  <span key={lang} className="language-tag">
                    <Globe size={14} />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="profile-sidebar">
            <div className="profile-card contact-card">
              <h3>Contacter {teacher.name.split(' ')[0]}</h3>
              <p>Envoyez un message pour organiser votre premier cours gratuit.</p>
              <button className="btn btn-primary btn-full">
                <MessageCircle size={18} />
                Envoyer un message
              </button>
              <div className="contact-info">
                <a href="#" className="contact-link">
                  <Mail size={16} />
                  Voir l'email
                </a>
                <a href="#" className="contact-link">
                  <Phone size={16} />
                  Voir le téléphone
                </a>
              </div>
              <p className="contact-note">
                <Shield size={14} />
                Mise en relation directe et gratuite
              </p>
            </div>

            <div className="profile-card verification-card">
              <h3>
                <Shield size={20} />
                Vérifications
              </h3>
              
              <div className="verifications-list">
                <div className={`verification-item ${teacher.verified.identity ? 'verified' : ''}`}>
                  <BadgeCheck size={18} />
                  <span>Identité vérifiée</span>
                  {teacher.verified.identity && <CheckCircle size={16} className="check" />}
                </div>
                <div className={`verification-item ${teacher.verified.address ? 'verified' : ''}`}>
                  <MapPin size={18} />
                  <span>Adresse confirmée</span>
                  {teacher.verified.address && <CheckCircle size={16} className="check" />}
                </div>
                <div className={`verification-item ${teacher.verified.diploma ? 'verified' : ''}`}>
                  <Award size={18} />
                  <span>Diplômes authentifiés</span>
                  {teacher.verified.diploma && <CheckCircle size={16} className="check" />}
                </div>
                <div className={`verification-item ${teacher.verified.reviews ? 'verified' : ''}`}>
                  <Star size={18} />
                  <span>Avis vérifiés (IP + paiement)</span>
                  {teacher.verified.reviews && <CheckCircle size={16} className="check" />}
                </div>
              </div>

              <p className="verification-note">
                Toutes les vérifications sont effectuées par notre équipe conformément aux exigences de la DGCCRF.
              </p>
            </div>

            <div className="profile-card diplomas-card">
              <h3>
                <Award size={20} />
                Diplômes vérifiés
              </h3>
              <ul className="diplomas-list">
                {teacher.diplomas.map(diploma => (
                  <li key={diploma}>
                    <CheckCircle size={14} />
                    {diploma}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

