import type { Product, InsertProduct, CartItem, InsertCartItem, User, InsertUser } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;

  // Cart
  getCartItems(userId?: string): Promise<CartItem[]>;
  addCartItem(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  deleteCartItem(id: number): Promise<boolean>;
  clearCart(userId?: string): Promise<void>;

  // Users
  getUsers(): Promise<User[]>;
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private products: Product[] = [];
  private cartItems: CartItem[] = [];
  private users: User[] = [];
  private productIdCounter = 1;
  private cartIdCounter = 1;
  private userIdCounter = 1;

  constructor() {
    // Initialize with some sample products
    this.products = [
      {
        id: this.productIdCounter++,
        name: "Classic T-Shirt",
        price: 2999,
        description: "Comfortable cotton t-shirt",
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        featured: true,
      },
      {
        id: this.productIdCounter++,
        name: "Denim Jeans",
        price: 5999,
        description: "Premium quality denim",
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
        featured: true,
      },
      {
        id: this.productIdCounter++,
        name: "Leather Jacket",
        price: 12999,
        description: "Genuine leather jacket",
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        featured: false,
      },
    ];
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.find(p => p.id === id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const newProduct: Product = {
      id: this.productIdCounter++,
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      featured: product.featured ?? false,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return undefined;
    this.products[index] = { ...this.products[index], ...product };
    return this.products[index];
  }

  async deleteProduct(id: number): Promise<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }

  // Cart
  async getCartItems(userId?: string): Promise<CartItem[]> {
    if (userId) {
      return this.cartItems.filter(item => item.userId === userId);
    }
    return this.cartItems.filter(item => !item.userId);
  }

  async addCartItem(item: InsertCartItem): Promise<CartItem> {
    const existing = this.cartItems.find(
      ci => ci.productId === item.productId && ci.userId === item.userId
    );
    
    if (existing) {
      existing.quantity += item.quantity;
      return existing;
    }

    const newItem: CartItem = {
      id: this.cartIdCounter++,
      productId: item.productId,
      quantity: item.quantity,
      userId: item.userId,
    };
    this.cartItems.push(newItem);
    return newItem;
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.find(ci => ci.id === id);
    if (!item) return undefined;
    item.quantity = quantity;
    return item;
  }

  async deleteCartItem(id: number): Promise<boolean> {
    const index = this.cartItems.findIndex(ci => ci.id === id);
    if (index === -1) return false;
    this.cartItems.splice(index, 1);
    return true;
  }

  async clearCart(userId?: string): Promise<void> {
    this.cartItems = this.cartItems.filter(item => 
      userId ? item.userId !== userId : !!item.userId
    );
  }

  // Users
  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find(u => u.email === email);
  }

  async createUser(user: InsertUser): Promise<User> {
    const newUser: User = {
      id: this.userIdCounter++,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }
}
