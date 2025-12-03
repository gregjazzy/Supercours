import { useState } from 'react'
import { 
  Shield, Award, CheckCircle, Upload, User, Mail, Phone, 
  MapPin, BookOpen, FileText, Camera, ArrowRight
} from 'lucide-react'
import { subjects, cities } from '../data/teachers'
import './BecomeTeacher.css'

export default function BecomeTeacher() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    subjects: [] as string[],
    experience: '',
    description: '',
    acceptTerms: false,
    acceptVerification: false
  })

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi
    setStep(4)
  }

  return (
    <div className="become-teacher-page">
      <div className="become-header">
        <div className="container">
          <h1>Devenez professeur sur Supercours</h1>
          <p>Partagez vos connaissances gratuitement et rejoignez notre communauté vérifiée</p>
        </div>
      </div>

      <div className="container">
        <div className="become-grid">
          <div className="become-main">
            {/* Progress Steps */}
            <div className="progress-steps">
              <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                <span className="step-number">1</span>
                <span className="step-label">Informations</span>
              </div>
              <div className="progress-line" />
              <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                <span className="step-number">2</span>
                <span className="step-label">Compétences</span>
              </div>
              <div className="progress-line" />
              <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                <span className="step-number">3</span>
                <span className="step-label">Vérification</span>
              </div>
              <div className="progress-line" />
              <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
                <span className="step-number">4</span>
                <span className="step-label">Confirmation</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="form-card">
                  <h2>Vos informations personnelles</h2>
                  <p className="form-description">
                    Ces informations seront vérifiées pour garantir la confiance sur notre plateforme.
                  </p>

                  <div className="form-row">
                    <div className="form-group">
                      <label>
                        <User size={16} />
                        Prénom
                      </label>
                      <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <User size={16} />
                        Nom
                      </label>
                      <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      <Mail size={16} />
                      Email
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <Phone size={16} />
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="06 00 00 00 00"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>
                        <MapPin size={16} />
                        Ville
                      </label>
                      <select 
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                      >
                        <option value="">Sélectionnez une ville</option>
                        {cities.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        <MapPin size={16} />
                        Adresse complète
                      </label>
                      <input 
                        type="text" 
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        placeholder="123 rue Example"
                        required
                      />
                    </div>
                  </div>

                  <button type="button" className="btn btn-primary btn-large" onClick={() => setStep(2)}>
                    Continuer
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {/* Step 2: Skills */}
              {step === 2 && (
                <div className="form-card">
                  <h2>Vos compétences</h2>
                  <p className="form-description">
                    Sélectionnez les matières que vous souhaitez enseigner.
                  </p>

                  <div className="form-group">
                    <label>
                      <BookOpen size={16} />
                      Matières enseignées
                    </label>
                    <div className="subjects-selector">
                      {subjects.map(subject => (
                        <button
                          key={subject}
                          type="button"
                          className={`subject-btn ${formData.subjects.includes(subject) ? 'selected' : ''}`}
                          onClick={() => handleSubjectToggle(subject)}
                        >
                          {subject}
                          {formData.subjects.includes(subject) && <CheckCircle size={14} />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      <Award size={16} />
                      Années d'expérience
                    </label>
                    <select 
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      required
                    >
                      <option value="">Sélectionnez</option>
                      <option value="0-2">0-2 ans</option>
                      <option value="2-5">2-5 ans</option>
                      <option value="5-10">5-10 ans</option>
                      <option value="10+">Plus de 10 ans</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      <FileText size={16} />
                      Description de votre profil
                    </label>
                    <textarea 
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Présentez-vous aux futurs élèves : votre parcours, votre méthode d'enseignement, vos spécialités..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="form-buttons">
                    <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                      Retour
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => setStep(3)}>
                      Continuer
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Verification */}
              {step === 3 && (
                <div className="form-card">
                  <h2>Vérification de votre profil</h2>
                  <p className="form-description">
                    Pour garantir la confiance et la sécurité, nous vérifions tous les profils.
                  </p>

                  <div className="upload-section">
                    <div className="upload-card">
                      <div className="upload-icon">
                        <Camera size={24} />
                      </div>
                      <h4>Photo de profil</h4>
                      <p>Photo claire de votre visage</p>
                      <button type="button" className="btn btn-outline">
                        <Upload size={16} />
                        Télécharger
                      </button>
                    </div>

                    <div className="upload-card">
                      <div className="upload-icon">
                        <User size={24} />
                      </div>
                      <h4>Pièce d'identité</h4>
                      <p>CNI ou passeport en cours de validité</p>
                      <button type="button" className="btn btn-outline">
                        <Upload size={16} />
                        Télécharger
                      </button>
                    </div>

                    <div className="upload-card">
                      <div className="upload-icon">
                        <Award size={24} />
                      </div>
                      <h4>Diplômes</h4>
                      <p>Vos diplômes seront vérifiés</p>
                      <button type="button" className="btn btn-outline">
                        <Upload size={16} />
                        Télécharger
                      </button>
                    </div>

                    <div className="upload-card">
                      <div className="upload-icon">
                        <MapPin size={24} />
                      </div>
                      <h4>Justificatif de domicile</h4>
                      <p>Facture ou attestation récente</p>
                      <button type="button" className="btn btn-outline">
                        <Upload size={16} />
                        Télécharger
                      </button>
                    </div>
                  </div>

                  <div className="form-checkboxes">
                    <label className="checkbox-container">
                      <input 
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}
                        required
                      />
                      <span className="checkmark" />
                      J'accepte les <a href="/mentions-legales">conditions générales d'utilisation</a> et la <a href="/mentions-legales">politique de confidentialité</a>
                    </label>

                    <label className="checkbox-container">
                      <input 
                        type="checkbox"
                        checked={formData.acceptVerification}
                        onChange={(e) => setFormData({...formData, acceptVerification: e.target.checked})}
                        required
                      />
                      <span className="checkmark" />
                      J'accepte que mes informations soient vérifiées conformément à la réglementation DGCCRF
                    </label>
                  </div>

                  <div className="form-buttons">
                    <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                      Retour
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Soumettre mon inscription
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="form-card confirmation-card">
                  <div className="confirmation-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h2>Inscription reçue !</h2>
                  <p>
                    Merci pour votre inscription sur Supercours. Notre équipe va maintenant vérifier vos documents.
                  </p>
                  
                  <div className="confirmation-steps">
                    <div className="conf-step">
                      <span className="conf-number">1</span>
                      <span>Vérification de votre identité (24-48h)</span>
                    </div>
                    <div className="conf-step">
                      <span className="conf-number">2</span>
                      <span>Authentification de vos diplômes (48-72h)</span>
                    </div>
                    <div className="conf-step">
                      <span className="conf-number">3</span>
                      <span>Confirmation de votre adresse</span>
                    </div>
                    <div className="conf-step">
                      <span className="conf-number">4</span>
                      <span>Activation de votre profil</span>
                    </div>
                  </div>

                  <p className="confirmation-note">
                    Vous recevrez un email à chaque étape de la vérification.
                  </p>
                </div>
              )}
            </form>
          </div>

          <aside className="become-sidebar">
            <div className="sidebar-card">
              <h3>Pourquoi Supercours ?</h3>
              <ul className="benefits-list">
                <li>
                  <CheckCircle size={18} />
                  <span><strong>100% gratuit</strong> - Aucune commission prélevée</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>Contact direct avec les élèves</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>Profil vérifié = plus de confiance</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>Visibilité auprès de milliers d'élèves</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-card trust-card">
              <Shield className="trust-icon" />
              <h3>Vérification complète</h3>
              <p>
                Nous vérifions systématiquement :
              </p>
              <ul>
                <li>✓ Identité (pièce d'identité)</li>
                <li>✓ Adresse (justificatif de domicile)</li>
                <li>✓ Diplômes (auprès des établissements)</li>
                <li>✓ Avis (contrôle IP et paiement)</li>
              </ul>
              <p className="trust-note">
                Conformité totale avec les exigences de la DGCCRF.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

