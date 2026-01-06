import session from 'express-session';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import passport from 'passport';
import { env, isProduction } from './config';
import './config/passport';

const app = express();

app.use((req, _res, next) => {
  console.log('\n=== NEW REQUEST ===');
  console.log('Time:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Origin:', req.headers.origin);
  console.log('Cookies:', req.headers.cookie);
  console.log('=== END REQUEST LOG ===\n');
  next();
});

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: isProduction,
      sameSite: 'lax',
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/api/auth', authRoutes);

export default app;
