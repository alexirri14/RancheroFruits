export interface Product {
  id: string;
  name: string;
  category: 'hortalizas' | 'frutas' | 'tuberculos';
  image: string;
  description: string;
  benefits: string;
  presentation: string;
  exportType: string;
  processLine: string;
  gallery: string[];
}

export interface StarProduct {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  label: string;
}

export interface ServiceStep {
  number: number;
  name: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}
