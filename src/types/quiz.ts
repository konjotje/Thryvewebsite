export interface Answer {
  text: string;
  points: number;
}

export interface Question {
  id: string;
  pillar: Pillar;
  text: string;
  answers: Answer[];
}

export type Pillar = 
  | 'Slaapoptimalisatie' 
  | 'Voeding & suppletie' 
  | 'Training & beweging' 
  | 'Stressregulatie' 
  | 'Focus & productiviteit' 
  | 'Lifestyle & routines';

export interface PerformanceTestData {
  totalScore: number;
  pillarScores: Record<Pillar, number>;
  type: string;
  weakestPillar: Pillar;
  recommendation: string;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
