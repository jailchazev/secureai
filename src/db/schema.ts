import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Tabla de usuarios administradores
export const admins = sqliteTable("admins", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(), // Hash bcrypt
  role: text("role").notNull().default("editor"), // admin | editor
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de servicios
export const services = sqliteTable("services", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  icon: text("icon").notNull(), // Nombre del icono o emoji
  features: text("features").notNull(), // JSON array de características
  category: text("category").notNull(), // monitoring | cctv | access | integration | iot
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  order: integer("order").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de soluciones por tipo de cliente
export const solutions = sqliteTable("solutions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  clientType: text("client_type").notNull(), // home | pyme | enterprise
  description: text("description").notNull(),
  features: text("features").notNull(), // JSON array
  benefits: text("benefits").notNull(), // JSON array
  image: text("image"), // URL de imagen
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  order: integer("order").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de planes de precios
export const plans = sqliteTable("plans", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // Precio en centavos
  currency: text("currency").notNull().default("USD"),
  billingPeriod: text("billing_period").notNull().default("monthly"), // monthly | yearly
  features: text("features").notNull(), // JSON array
  isPopular: integer("is_popular", { mode: "boolean" }).notNull().default(false),
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  order: integer("order").notNull().default(0),
  maxDevices: integer("max_devices"),
  maxLocations: integer("max_locations"),
  includesInsurance: integer("includes_insurance", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de testimonios
export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role").notNull(), // Ej: "CEO de TechCorp"
  company: text("company"),
  content: text("content").notNull(),
  rating: integer("rating").notNull().default(5), // 1-5
  avatar: text("avatar"), // URL de imagen
  clientType: text("client_type").notNull(), // home | pyme | enterprise
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  isFeatured: integer("is_featured", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de casos de uso
export const useCases = sqliteTable("use_cases", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  challenge: text("challenge").notNull(), // El problema que se resolvió
  solution: text("solution").notNull(), // Cómo se resolvió
  results: text("results").notNull(), // JSON array de resultados
  clientType: text("client_type").notNull(), // home | pyme | enterprise
  industry: text("industry"), // Ej: retail, healthcare, etc.
  image: text("image"), // URL de imagen
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  isFeatured: integer("is_featured", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de características de IA
export const aiFeatures = sqliteTable("ai_features", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  benefits: text("benefits").notNull(), // JSON array
  technicalDetails: text("technical_details"), // Detalles técnicos opcionales
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  order: integer("order").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de configuración del sitio
export const siteConfig = sqliteTable("site_config", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  type: text("type").notNull().default("text"), // text | json | boolean | number
  description: text("description"),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de contactos/leads
export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  clientType: text("client_type"), // home | pyme | enterprise
  message: text("message").notNull(),
  source: text("source").notNull().default("website"), // website | chatbot | demo
  status: text("status").notNull().default("new"), // new | contacted | qualified | converted
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tabla de artículos del blog (opcional)
export const blogPosts = sqliteTable("blog_posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  coverImage: text("cover_image"),
  author: text("author").notNull(),
  category: text("category").notNull(), // security | technology | tips | news
  tags: text("tags"), // JSON array
  isPublished: integer("is_published", { mode: "boolean" }).notNull().default(false),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});
