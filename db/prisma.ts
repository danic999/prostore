import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, Product } from '@prisma/client';  // <-- ovde uzimamo Product iz prisma
import ws from 'ws';

// Setup WebSocket for Neon
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const connectionString = process.env.DATABASE_URL;

// PRAVILNO: prosleđujemo konfiguraciju, NE pool instancu
const adapter = new PrismaNeon({ connectionString });

// Kreiraj PrismaClient s adapterom
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product: Product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: Product) {
          return product.rating.toString();
        },
      },
    },
  },
});
