export type Category = {
  id: string;
  slug: string;
  name: string;
};

export type Product = {
  category: string;
  description: string;
  id: string;
  images: string[]
  name: string;
  rating: number;
  price: number;
};
