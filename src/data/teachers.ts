export interface Teacher {
  id: number;
  name: string;
  photo: string;
  subject: string;
  subjects: string[];
  city: string;
  hourlyRate: number;
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
}

// Photos HD depuis Unsplash
export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Marie Dupont",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    subject: "Mathématiques",
    subjects: ["Mathématiques", "Physique", "Statistiques"],
    city: "Paris",
    hourlyRate: 35,
    description: "Professeure agrégée avec 12 ans d'expérience. Spécialisée dans la préparation aux concours et au baccalauréat.",
    longDescription: "Passionnée par l'enseignement depuis toujours, j'ai obtenu mon agrégation de mathématiques en 2011. J'ai enseigné en lycée pendant 8 ans avant de me consacrer aux cours particuliers.",
    rating: 4.9,
    reviewCount: 127,
    responseTime: "< 1h",
    experience: 12,
    students: 89,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["Agrégation de Mathématiques", "Master Mathématiques - Sorbonne"],
    availability: ["Lundi", "Mardi", "Mercredi", "Vendredi", "Samedi"],
    languages: ["Français", "Anglais"]
  },
  {
    id: 2,
    name: "Thomas Bernard",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    subject: "Anglais",
    subjects: ["Anglais", "TOEFL", "IELTS", "Anglais des affaires"],
    city: "Lyon",
    hourlyRate: 28,
    description: "Natif bilingue, 8 ans d'expérience en entreprise à Londres. Préparation TOEFL/IELTS garantie.",
    longDescription: "Après 8 années passées à Londres dans le secteur bancaire, j'ai décidé de transmettre ma passion pour l'anglais.",
    rating: 4.8,
    reviewCount: 94,
    responseTime: "< 2h",
    experience: 8,
    students: 156,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["CELTA Cambridge", "Master Finance - LSE London"],
    availability: ["Lundi", "Mardi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    languages: ["Français", "Anglais", "Espagnol"]
  },
  {
    id: 3,
    name: "Sophie Martin",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    subject: "Français",
    subjects: ["Français", "Littérature", "Philosophie"],
    city: "Bordeaux",
    hourlyRate: 32,
    description: "Agrégée de Lettres Modernes. Spécialiste bac français et prépa littéraire. Auteure publiée.",
    longDescription: "Agrégée de Lettres Modernes et auteure de deux romans, j'enseigne avec passion depuis 15 ans.",
    rating: 5.0,
    reviewCount: 78,
    responseTime: "< 3h",
    experience: 15,
    students: 203,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["Agrégation Lettres Modernes", "Doctorat Littérature"],
    availability: ["Mardi", "Mercredi", "Jeudi", "Samedi"],
    languages: ["Français", "Italien"]
  },
  {
    id: 4,
    name: "Alexandre Chen",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    subject: "Informatique",
    subjects: ["Python", "JavaScript", "React", "Data Science"],
    city: "Paris",
    hourlyRate: 45,
    description: "Ingénieur Google pendant 6 ans. Je forme au développement web et à l'IA de manière pratique.",
    longDescription: "Ancien ingénieur chez Google et Meta, je me consacre maintenant à la formation.",
    rating: 4.9,
    reviewCount: 156,
    responseTime: "< 1h",
    experience: 10,
    students: 312,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["Polytechnique", "Master Stanford"],
    availability: ["Lundi", "Mercredi", "Vendredi", "Samedi", "Dimanche"],
    languages: ["Français", "Anglais", "Mandarin"]
  },
  {
    id: 5,
    name: "Camille Rousseau",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    subject: "Piano",
    subjects: ["Piano", "Solfège", "Composition", "MAO"],
    city: "Toulouse",
    hourlyRate: 40,
    description: "Diplômée du Conservatoire de Paris. 20 ans de piano. Tous niveaux.",
    longDescription: "Formée au Conservatoire National Supérieur de Paris, je joue du piano depuis l'âge de 5 ans.",
    rating: 4.7,
    reviewCount: 45,
    responseTime: "< 4h",
    experience: 20,
    students: 167,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["Prix du CNSM Paris", "Licence Musicologie"],
    availability: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    languages: ["Français", "Allemand"]
  },
  {
    id: 6,
    name: "Julien Moreau",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    subject: "Physique-Chimie",
    subjects: ["Physique", "Chimie", "SVT"],
    city: "Marseille",
    hourlyRate: 30,
    description: "Docteur en physique quantique. Vulgarisateur YouTube (50k abonnés).",
    longDescription: "Docteur en physique quantique, je suis convaincu que la science doit être accessible à tous.",
    rating: 4.8,
    reviewCount: 89,
    responseTime: "< 2h",
    experience: 7,
    students: 134,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["Doctorat Physique - ENS Lyon", "Agrégation"],
    availability: ["Mardi", "Jeudi", "Samedi", "Dimanche"],
    languages: ["Français", "Anglais"]
  },
  {
    id: 7,
    name: "Emma Petit",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    subject: "Espagnol",
    subjects: ["Espagnol", "Catalan", "DELE"],
    city: "Montpellier",
    hourlyRate: 25,
    description: "Native de Barcelone. Cours vivants et immersifs. Préparation DELE.",
    longDescription: "Originaire de Barcelone, j'ai grandi bilingue espagnol-catalan.",
    rating: 4.9,
    reviewCount: 67,
    responseTime: "< 1h",
    experience: 10,
    students: 198,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["Master Traduction - Barcelona", "Examinatrice DELE"],
    availability: ["Lundi", "Mercredi", "Vendredi", "Samedi"],
    languages: ["Français", "Espagnol", "Catalan", "Anglais"]
  },
  {
    id: 8,
    name: "Lucas Girard",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    subject: "Histoire-Géo",
    subjects: ["Histoire", "Géographie", "Géopolitique"],
    city: "Nantes",
    hourlyRate: 28,
    description: "Agrégé d'histoire, ancien prof en prépa. Passionné de géopolitique.",
    longDescription: "Agrégé d'histoire et passionné de géopolitique, j'ai enseigné 5 ans en prépa.",
    rating: 4.6,
    reviewCount: 52,
    responseTime: "< 3h",
    experience: 9,
    students: 87,
    verified: { identity: true, address: true, diploma: true, reviews: true },
    diplomas: ["Agrégation Histoire", "Sciences Po Paris"],
    availability: ["Lundi", "Mardi", "Jeudi", "Samedi"],
    languages: ["Français", "Anglais", "Allemand"]
  }
];

export const subjects = [
  "Mathématiques", "Français", "Anglais", "Physique-Chimie", "SVT",
  "Histoire-Géographie", "Espagnol", "Allemand", "Informatique", "Musique",
  "Arts plastiques", "Philosophie", "Économie", "Droit", "Comptabilité"
];

export const cities = [
  "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux",
  "Nantes", "Nice", "Strasbourg", "Montpellier", "Lille"
];
