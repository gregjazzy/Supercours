export interface Teacher {
  id: number;
  name: string;
  photo: string;
  subject: string;
  subjects: string[];
  city: string;
  description: string;
  longDescription: string;
  rating: number;
  reviewCount: number;
  responseTime: string;
  experience: number;
  students: number;
  verified: {
    identity: boolean;
    address: boolean;
    diploma: boolean;
    reviews: boolean;
  };
  diplomas: string[];
  availability: string[];
  languages: string[];
};

export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Marie Dupont",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    subject: "Mathématiques",
    subjects: ["Mathématiques", "Physique", "Statistiques"],
    city: "Paris",
    description: "Professeure agrégée avec 12 ans d'expérience. Spécialisée dans la préparation aux concours et au baccalauréat.",
    longDescription: "Passionnée par l'enseignement depuis toujours, j'ai obtenu mon agrégation de mathématiques en 2011. J'ai enseigné en lycée pendant 8 ans avant de me consacrer aux cours particuliers. Ma méthode : comprendre les blocages de chaque élève et adapter mon approche. Je prépare activement aux concours (Polytechnique, Centrale, Mines) et au baccalauréat avec un taux de réussite de 98%.",
    rating: 4.9,
    reviewCount: 127,
    responseTime: "< 1h",
    experience: 12,
    students: 89,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["Agrégation de Mathématiques", "Master Mathématiques Fondamentales - Sorbonne", "Licence Physique-Chimie"],
    availability: ["Lundi", "Mardi", "Mercredi", "Vendredi", "Samedi"],
    languages: ["Français", "Anglais"]
  },
  {
    id: 2,
    name: "Thomas Bernard",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    subject: "Anglais",
    subjects: ["Anglais", "TOEFL", "IELTS", "Anglais des affaires"],
    city: "Lyon",
    description: "Natif bilingue, 8 ans d'expérience en entreprise à Londres. Préparation TOEFL/IELTS garantie.",
    longDescription: "Après 8 années passées à Londres dans le secteur bancaire, j'ai décidé de transmettre ma passion pour l'anglais. Je propose une approche immersive et pratique, loin des méthodes scolaires classiques. Spécialiste de la préparation aux tests (TOEFL, IELTS, Cambridge) avec plus de 200 élèves accompagnés vers le succès.",
    rating: 4.8,
    reviewCount: 94,
    responseTime: "< 2h",
    experience: 8,
    students: 156,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["CELTA Cambridge", "Master Finance - LSE London", "Certificateur TOEFL agréé"],
    availability: ["Lundi", "Mardi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    languages: ["Français", "Anglais", "Espagnol"]
  },
  {
    id: 3,
    name: "Sophie Martin",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    subject: "Français",
    subjects: ["Français", "Littérature", "Philosophie", "Méthodologie dissertation"],
    city: "Bordeaux",
    description: "Agrégée de Lettres Modernes. Spécialiste bac français et prépa littéraire. Auteure publiée.",
    longDescription: "Agrégée de Lettres Modernes et auteure de deux romans, j'enseigne avec passion depuis 15 ans. Mon expertise : la préparation au bac français (écrit et oral) et l'accompagnement en prépa littéraire. Je transmets l'amour de la littérature tout en donnant des méthodes concrètes pour réussir les examens.",
    rating: 5.0,
    reviewCount: 78,
    responseTime: "< 3h",
    experience: 15,
    students: 203,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["Agrégation Lettres Modernes", "Doctorat Littérature Comparée - Bordeaux Montaigne", "Master FLE"],
    availability: ["Mardi", "Mercredi", "Jeudi", "Samedi"],
    languages: ["Français", "Italien"]
  },
  {
    id: 4,
    name: "Alexandre Chen",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    subject: "Informatique",
    subjects: ["Python", "JavaScript", "React", "Data Science", "Machine Learning"],
    city: "Paris",
    description: "Ingénieur Google pendant 6 ans. Je forme au développement web et à l'IA de manière pratique.",
    longDescription: "Ancien ingénieur chez Google et Meta, je me consacre maintenant à la formation. Mon approche : des projets concrets dès le premier cours. Que vous souhaitiez vous reconvertir ou approfondir vos compétences, je vous accompagne avec des méthodes éprouvées en entreprise. Spécialités : Python, React, Machine Learning.",
    rating: 4.9,
    reviewCount: 156,
    responseTime: "< 1h",
    experience: 10,
    students: 312,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["Diplôme Ingénieur - École Polytechnique", "Master Computer Science - Stanford", "Certifications Google Cloud"],
    availability: ["Lundi", "Mercredi", "Vendredi", "Samedi", "Dimanche"],
    languages: ["Français", "Anglais", "Mandarin"]
  },
  {
    id: 5,
    name: "Camille Rousseau",
    photo: "https://randomuser.me/api/portraits/women/90.jpg",
    subject: "Musique",
    subjects: ["Piano", "Solfège", "Composition", "MAO"],
    city: "Toulouse",
    description: "Diplômée du Conservatoire de Paris. 20 ans de piano. Tous niveaux, du débutant au concertiste.",
    longDescription: "Formée au Conservatoire National Supérieur de Paris, je joue du piano depuis l'âge de 5 ans. J'ai eu la chance de me produire dans de nombreuses salles européennes. Aujourd'hui, je transmets ma passion avec patience et exigence. Ma pédagogie s'adapte à chaque élève : enfant découvrant la musique ou adulte préparant un concours.",
    rating: 4.7,
    reviewCount: 45,
    responseTime: "< 4h",
    experience: 20,
    students: 167,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["Prix du CNSM Paris", "Licence Musicologie - Sorbonne", "Diplôme d'État de Professeur de Musique"],
    availability: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    languages: ["Français", "Allemand"]
  },
  {
    id: 6,
    name: "Julien Moreau",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    subject: "Physique-Chimie",
    subjects: ["Physique", "Chimie", "SVT", "Prépa scientifique"],
    city: "Marseille",
    description: "Docteur en physique quantique. Vulgarisateur scientifique sur YouTube (50k abonnés).",
    longDescription: "Docteur en physique quantique, je suis convaincu que la science doit être accessible à tous. Ma chaîne YouTube de vulgarisation compte 50 000 abonnés. Dans mes cours, j'utilise cette même approche : rendre simple ce qui paraît complexe. Idéal pour les élèves en difficulté ou ceux visant les meilleures prépas.",
    rating: 4.8,
    reviewCount: 89,
    responseTime: "< 2h",
    experience: 7,
    students: 134,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["Doctorat Physique Quantique - ENS Lyon", "Agrégation Physique-Chimie", "Master Chimie Organique"],
    availability: ["Mardi", "Jeudi", "Samedi", "Dimanche"],
    languages: ["Français", "Anglais"]
  },
  {
    id: 7,
    name: "Emma Petit",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    subject: "Espagnol",
    subjects: ["Espagnol", "Catalan", "Culture hispanique", "DELE"],
    city: "Montpellier",
    description: "Native de Barcelone, installée en France depuis 10 ans. Cours vivants et immersifs.",
    longDescription: "Originaire de Barcelone, j'ai grandi bilingue espagnol-catalan. Après des études de traduction et 10 ans en France, je propose des cours d'espagnol authentiques et vivants. Mon secret : intégrer la culture, la musique et l'actualité dans chaque leçon. Préparation DELE tous niveaux.",
    rating: 4.9,
    reviewCount: 67,
    responseTime: "< 1h",
    experience: 10,
    students: 198,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["Master Traduction - Universitat de Barcelona", "Licence LEA Espagnol-Français", "Examinatrice DELE certifiée"],
    availability: ["Lundi", "Mercredi", "Vendredi", "Samedi"],
    languages: ["Français", "Espagnol", "Catalan", "Anglais"]
  },
  {
    id: 8,
    name: "Lucas Girard",
    photo: "https://randomuser.me/api/portraits/men/86.jpg",
    subject: "Histoire-Géographie",
    subjects: ["Histoire", "Géographie", "Géopolitique", "Sciences Politiques"],
    city: "Nantes",
    description: "Agrégé d'histoire, ancien professeur en prépa. Passionné de géopolitique et d'actualité.",
    longDescription: "Agrégé d'histoire et passionné de géopolitique, j'ai enseigné 5 ans en classe préparatoire avant de me consacrer aux cours particuliers. Mon approche : connecter le passé au présent, donner du sens à l'Histoire. Idéal pour le bac, les concours de Sciences Po et les prépas.",
    rating: 4.6,
    reviewCount: 52,
    responseTime: "< 3h",
    experience: 9,
    students: 87,
    verified: {
      identity: true,
      address: true,
      diploma: true,
      reviews: true
    },
    diplomas: ["Agrégation Histoire", "Master Sciences Politiques - Sciences Po Paris", "Licence Géographie"],
    availability: ["Lundi", "Mardi", "Jeudi", "Samedi"],
    languages: ["Français", "Anglais", "Allemand"]
  }
];

export const subjects = [
  "Mathématiques",
  "Français", 
  "Anglais",
  "Physique-Chimie",
  "SVT",
  "Histoire-Géographie",
  "Espagnol",
  "Allemand",
  "Informatique",
  "Musique",
  "Arts plastiques",
  "Philosophie",
  "Économie",
  "Droit",
  "Comptabilité"
];

export const cities = [
  "Paris",
  "Lyon",
  "Marseille",
  "Toulouse",
  "Bordeaux",
  "Nantes",
  "Nice",
  "Strasbourg",
  "Montpellier",
  "Lille"
];

