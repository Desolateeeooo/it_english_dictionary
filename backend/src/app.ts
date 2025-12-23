import session from 'express-session';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

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
    secret: process.env.SESSION_SECRET || 'f4z4gs$Gcg',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      // secure: process.env.NODE_ENV === 'production',
      secure: false,
      // sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none',
      sameSite: 'lax',
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
  })
);

// TEST ENDPOINT - BEFORE any other routes
app.get('/api/test-cors', (req, res) => {
  console.log('✅ Test CORS endpoint HIT!');
  res.json({ 
    message: 'CORS is working!',
    timestamp: new Date().toISOString(),
    sessionId: req.sessionID
  });
});

app.use('/api/auth', authRoutes);

export default app;
