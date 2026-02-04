
export interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
