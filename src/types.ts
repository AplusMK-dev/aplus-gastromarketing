export interface ServiceCard {
  id: string;
  num: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

export interface EcosystemCard {
  id: string;
  title: string;
  label: string;
  description: string;
  extendedText: string;
  image: string;
  color: string; // Tailwind color or custom hex
  category: "gastronomia" | "innovacion" | "comunidad" | "restauracion";
}

export interface Partner {
  id: string;
  name: string;
  description: string;
}

export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  detailedPoints: string[];
  image: string;
}

export interface RetoOption {
  id: string;
  num: string;
  title: string;
  description: string;
  placeholderText: string;
  sectionName: string;
}
