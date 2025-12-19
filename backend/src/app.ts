import session from 'express-session';
import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'f4z4gs$Gcg',
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: true, sameSite: 'lax', httpOnly: true },
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/api/auth', authRoutes);

export default app;
