import type { Express } from "express";
import { z } from "zod";
import type { IStorage } from "./storage";
import { insertProductSchema, insertCartItemSchema, insertUserSchema } from "@shared/schema";

export function registerRoutes(app: Express, storage: IStorage) {
  // Products
  app.get("/api/products", async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get("/api/products/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await storage.getProduct(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  });

  app.post("/api/products", async (req, res) => {
    const result = insertProductSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    const product = await storage.createProduct(result.data);
    res.json(product);
  });

  // Cart
  app.get("/api/cart", async (req, res) => {
    const userId = req.query.userId as string | undefined;
    const items = await storage.getCartItems(userId);
    res.json(items);
  });

  app.post("/api/cart", async (req, res) => {
    const result = insertCartItemSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    const item = await storage.addCartItem(result.data);
    res.json(item);
  });

  app.patch("/api/cart/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const quantity = req.body.quantity;
    if (typeof quantity !== "number") {
      return res.status(400).json({ error: "Quantity must be a number" });
    }
    const item = await storage.updateCartItem(id, quantity);
    if (!item) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.json(item);
  });

  app.delete("/api/cart/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const success = await storage.deleteCartItem(id);
    if (!success) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.json({ success: true });
  });

  app.delete("/api/cart", async (req, res) => {
    const userId = req.query.userId as string | undefined;
    await storage.clearCart(userId);
    res.json({ success: true });
  });

  // Users
  app.get("/api/users", async (req, res) => {
    const users = await storage.getUsers();
    res.json(users);
  });

  app.get("/api/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await storage.getUser(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  });

  app.post("/api/users", async (req, res) => {
    const result = insertUserSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    
    const existingUser = await storage.getUserByEmail(result.data.email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user = await storage.createUser(result.data);
    res.json(user);
  });
}
