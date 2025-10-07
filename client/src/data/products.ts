export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.",
    features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Foldable design"],
    rating: 4.8,
    reviews: 1243,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch Pro",
    category: "Wearables",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and 7-day battery life.",
    features: ["Heart rate monitor", "GPS tracking", "Water resistant", "Sleep tracking"],
    rating: 4.6,
    reviews: 892,
    inStock: true,
  },
  {
    id: "3",
    name: "Ultra HD 4K Webcam",
    category: "Electronics",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1527150122806-f682d2fd8b09?w=500&q=80",
    description: "Professional-grade webcam with 4K resolution, auto-focus, and built-in noise-cancelling microphone.",
    features: ["4K resolution", "Auto-focus", "Noise-cancelling mic", "Wide angle lens"],
    rating: 4.7,
    reviews: 567,
    inStock: true,
  },
  {
    id: "4",
    name: "Ergonomic Gaming Chair",
    category: "Furniture",
    price: 399.99,
    originalPrice: 549.99,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80",
    description: "Premium gaming chair with lumbar support, adjustable armrests, and breathable mesh fabric.",
    features: ["Lumbar support", "Adjustable height", "360° swivel", "Breathable mesh"],
    rating: 4.9,
    reviews: 2156,
    inStock: true,
  },
  {
    id: "5",
    name: "Minimalist Leather Wallet",
    category: "Fashion",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
    description: "Handcrafted genuine leather wallet with RFID protection and slim design.",
    features: ["Genuine leather", "RFID protection", "Slim design", "6 card slots"],
    rating: 4.5,
    reviews: 334,
    inStock: true,
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    description: "Waterproof speaker with 360° sound, 12-hour playtime, and deep bass.",
    features: ["Waterproof", "12-hour battery", "360° sound", "USB-C charging"],
    rating: 4.4,
    reviews: 789,
    inStock: true,
  },
  {
    id: "7",
    name: "Smart Home Security Camera",
    category: "Electronics",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
    description: "HD security camera with night vision, motion detection, and cloud storage.",
    features: ["1080p HD", "Night vision", "Motion alerts", "Cloud storage"],
    rating: 4.6,
    reviews: 1023,
    inStock: true,
  },
  {
    id: "8",
    name: "Premium Yoga Mat",
    category: "Fitness",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
    description: "Extra-thick eco-friendly yoga mat with non-slip surface and carrying strap.",
    features: ["Eco-friendly", "Non-slip surface", "Extra thick", "Carrying strap"],
    rating: 4.7,
    reviews: 445,
    inStock: true,
  },
];

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Fitness",
  "Furniture",
  "Wearables",
];
