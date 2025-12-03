import { Shield, CheckCircle, FileText, Lock, Eye, AlertCircle } from 'lucide-react'
import './Legal.css'

export default function Legal() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="container">
          <h1>Mentions légales & Nos garanties</h1>
          <p>Transparence totale, conformité DGCCRF</p>
        </div>
      </div>

      <div className="container">
        <div className="legal-grid">
          <nav className="legal-nav">
            <a href="#garanties" className="active">Nos garanties</a>
            <a href="#mentions">Mentions légales</a>
            <a href="#cgu">CGU</a>
            <a href="#confidentialite">Confidentialité</a>
            <a href="#verifications">Processus de vérification</a>
          </nav>

          <div className="legal-content">
            <section id="garanties" className="legal-section">
              <div className="section-icon">
                <Shield size={32} />
              </div>
              <h2>Nos garanties de confiance</h2>
              
              <div className="guarantee-cards">
                <div className="guarantee-card">
                  <CheckCircle className="guarantee-icon" />
                  <h3>Mise en relation gratuite</h3>
                  <p>
                    TrustTutor est et restera toujours 100% gratuit. Nous ne prélevons aucune commission 
                    sur les cours, ni de frais d'inscription. Notre modèle repose sur des dons volontaires 
                    et des partenariats éducatifs.
                  </p>
                </div>

                <div className="guarantee-card">
                  <Shield className="guarantee-icon" />
                  <h3>Profils vérifiés</h3>
                  <p>
                    Chaque professeur passe par un processus de vérification rigoureux : identité, 
                    adresse, diplômes. Nous garantissons l'authenticité de chaque profil affiché 
                    sur notre plateforme.
                  </p>
                </div>

                <div className="guarantee-card">
                  <Eye className="guarantee-icon" />
                  <h3>Avis authentiques</h3>
                  <p>
                    Tous les avis sont vérifiés par contrôle d'adresse IP et vérification du moyen 
                    de paiement. Impossible de publier un faux avis sur TrustTutor.
                  </p>
                </div>

                <div className="guarantee-card">
                  <Lock className="guarantee-icon" />
                  <h3>Données protégées</h3>
                  <p>
                    Vos données personnelles sont protégées conformément au RGPD. Nous ne revendons 
                    jamais vos informations et vous gardez le contrôle total sur vos données.
                  </p>
                </div>
              </div>
            </section>

            <section id="mentions" className="legal-section">
              <div className="section-icon">
                <FileText size={32} />
              </div>
              <h2>Mentions légales</h2>
              
              <div className="legal-text">
                <h3>Éditeur du site</h3>
                <p>
                  <strong>TrustTutor</strong><br />
                  Société par Actions Simplifiée (SAS)<br />
                  Capital social : 10 000 €<br />
                  RCS Paris : XXX XXX XXX<br />
                  Siège social : [Adresse à compléter], 75000 Paris<br />
                  Directeur de la publication : [Nom à compléter]
                </p>

                <h3>Hébergement</h3>
                <p>
                  Le site est hébergé par [Hébergeur à compléter]<br />
                  [Adresse hébergeur]<br />
                  Téléphone : [Numéro]
                </p>

                <h3>Contact</h3>
                <p>
                  Email : contact@trusttutor.com<br />
                  Téléphone : 01 00 00 00 00
                </p>
              </div>
            </section>

            <section id="cgu" className="legal-section">
              <h2>Conditions Générales d'Utilisation</h2>
              
              <div className="legal-text">
                <h3>Article 1 - Objet</h3>
                <p>
                  Les présentes CGU régissent l'utilisation de la plateforme TrustTutor, service gratuit 
                  de mise en relation entre professeurs particuliers et élèves. L'utilisation du site 
                  implique l'acceptation pleine et entière de ces conditions.
                </p>

                <h3>Article 2 - Gratuité du service</h3>
                <p>
                  TrustTutor est un service entièrement gratuit. Aucune commission n'est prélevée sur 
                  les cours dispensés via notre plateforme. Aucun frais d'inscription n'est demandé 
                  aux utilisateurs, qu'ils soient professeurs ou élèves.
                </p>

                <h3>Article 3 - Inscription et vérification</h3>
                <p>
                  L'inscription en tant que professeur nécessite la fourniture de documents permettant 
                  la vérification de l'identité, de l'adresse et des diplômes déclarés. Cette 
                  vérification est effectuée conformément à la réglementation en vigueur.
                </p>

                <h3>Article 4 - Responsabilités</h3>
                <p>
                  TrustTutor agit en qualité d'intermédiaire et ne peut être tenu responsable du 
                  contenu des cours dispensés ni des éventuels litiges entre professeurs et élèves. 
                  Les cours sont organisés directement entre les parties.
                </p>

                <h3>Article 5 - Avis et commentaires</h3>
                <p>
                  Les avis publiés sur la plateforme font l'objet d'une vérification systématique 
                  (contrôle IP, vérification du moyen de paiement). Tout avis frauduleux sera supprimé 
                  et pourra entraîner la suspension du compte utilisateur.
                </p>
              </div>
            </section>

            <section id="confidentialite" className="legal-section">
              <h2>Politique de confidentialité</h2>
              
              <div className="legal-text">
                <h3>Données collectées</h3>
                <p>
                  Dans le cadre de l'utilisation du site, nous collectons les données suivantes :
                </p>
                <ul>
                  <li>Données d'identification (nom, prénom, email, téléphone)</li>
                  <li>Données de localisation (adresse, ville)</li>
                  <li>Données professionnelles (diplômes, expérience)</li>
                  <li>Données de connexion (adresse IP, logs)</li>
                </ul>

                <h3>Utilisation des données</h3>
                <p>
                  Vos données sont utilisées exclusivement pour :
                </p>
                <ul>
                  <li>La vérification de votre profil</li>
                  <li>La mise en relation avec les élèves/professeurs</li>
                  <li>L'amélioration de nos services</li>
                  <li>La prévention des fraudes</li>
                </ul>

                <h3>Vos droits</h3>
                <p>
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, 
                  de suppression et de portabilité de vos données. Pour exercer ces droits, 
                  contactez-nous à : dpo@trusttutor.com
                </p>
              </div>
            </section>

            <section id="verifications" className="legal-section">
              <div className="section-icon">
                <AlertCircle size={32} />
              </div>
              <h2>Notre processus de vérification</h2>
              
              <div className="verification-process">
                <div className="process-step">
                  <span className="process-number">1</span>
                  <div className="process-content">
                    <h4>Vérification d'identité</h4>
                    <p>
                      Chaque professeur fournit une copie de sa pièce d'identité (CNI ou passeport). 
                      Notre équipe vérifie l'authenticité du document et la correspondance avec 
                      les informations déclarées.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span className="process-number">2</span>
                  <div className="process-content">
                    <h4>Confirmation d'adresse</h4>
                    <p>
                      L'adresse est vérifiée par l'envoi d'un courrier de confirmation ou par 
                      la fourniture d'un justificatif de domicile récent (facture, attestation).
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span className="process-number">3</span>
                  <div className="process-content">
                    <h4>Authentification des diplômes</h4>
                    <p>
                      Nous vérifions les diplômes déclarés auprès des établissements émetteurs 
                      ou via les bases de données officielles. Seuls les diplômes authentifiés 
                      apparaissent sur le profil.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span className="process-number">4</span>
                  <div className="process-content">
                    <h4>Contrôle des avis</h4>
                    <p>
                      Chaque avis fait l'objet d'une vérification : analyse de l'adresse IP, 
                      vérification que l'auteur a bien eu un contact avec le professeur, 
                      et le cas échéant, vérification du moyen de paiement utilisé.
                    </p>
                  </div>
                </div>
              </div>

              <div className="dgccrf-badge">
                <Shield size={24} />
                <div>
                  <strong>Conformité DGCCRF</strong>
                  <p>
                    Notre plateforme respecte l'ensemble des obligations légales relatives à la 
                    protection des consommateurs, à la transparence des informations et à la 
                    lutte contre les pratiques commerciales trompeuses.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
