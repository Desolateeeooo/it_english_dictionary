import dotenv from 'dotenv';

dotenv.config();

interface Env {
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: string;
  SESSION_SECRET: string;
  DATABASE_URL?: string;
  JWT_SECRET?: string;
}

export const env: Env = {
  NODE_ENV: (process.env.NODE_ENV as Env['NODE_ENV']) || 'development',
  PORT: process.env.PORT || '5001',
  SESSION_SECRET: process.env.SESSION_SECRET!,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

export const isProduction = env.NODE_ENV === 'production';
export const isDevelopment = env.NODE_ENV === 'development';
export const isTest = env.NODE_ENV === 'test';

