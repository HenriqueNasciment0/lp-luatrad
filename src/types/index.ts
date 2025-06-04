export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  linkedin?: string;
  instagram?: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: string;
}
