export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // Or Date if you want to parse it as a Date object
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string; // Or Date if you want to parse it as a Date object
  updatedAt: string; // Or Date if you want to parse it as a Date object
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}
