export interface Review {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    rating: number;
    description: string;
    genre: string;
    price: string;
    publishDate: string;
    publisher: string;
    pages: number;
    language: string;
    isbn: string;
    preview: string;
    reviews: Review[];
  }
  
  export interface Tab {
    id: TabId;
    label: string;
  }
  
  export type TabId = 'preview' | 'details' | 'reviews';
  