export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  iconName: string;
  longDescription: string;
  imageUrl?: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  topics: string[];
  iconName: string;
  imageUrl?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  type: 'service' | 'course';
}

export type PaymentMethod = 'whatsapp' | 'email';
