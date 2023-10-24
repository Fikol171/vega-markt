interface Product {
  id: number;
  description: string;
  title: string;
  images: string[];
  price: number;
  brand: string;
  category: string;
}
export default interface Data {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
