export interface App {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  technologies: string[];
  thumbnail?: string;
  favicon?: string;
  status: 'live' | 'development';
  featured: boolean;
  createdAt: string;
  githubUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  appId?: string;
  coverImage?: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  role: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface ScrapedMetadata {
  title: string;
  description: string;
  ogImage?: string;
  favicon?: string;
  technologies: string[];
}
