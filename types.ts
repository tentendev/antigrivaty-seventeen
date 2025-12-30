export enum UnitType {
  HIPHOP = 'HIP-HOP TEAM',
  VOCAL = 'VOCAL TEAM',
  PERFORMANCE = 'PERFORMANCE TEAM'
}

export interface Member {
  id: string;
  stageName: string;
  fullName: string; // Chinese or Real Name
  birthDate: string;
  bloodType: string;
  unit: UnitType;
  image: string; // URL
  description: string;
}