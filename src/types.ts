export interface ProjectItem {
  id: string;
  title: string;
  category: 'career' | 'media' | 'games' | 'culture';
  categoryLabel: string;
  path: string;
  rawUrl: string;
  description: string;
  detailedInfo: string;
  image: string;
  tags: string[];
  features: string[];
}

export interface CreatorProfile {
  name: string;
  title: string;
  email: string;
  location: string;
  defaultSubdomain: string;
  bio: string;
  avatar?: string;
  aboutText: string[];
  stats: {
    label: string;
    value: string;
  }[];
}
