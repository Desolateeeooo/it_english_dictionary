import express from 'express';
import { mockUsers } from '../data/mockUsers';

const router = express.Router();

declare module 'express-session' {
  interface SessionData {
    userId?: number;
    authenticated?: boolean;
  }
}

router.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Cookies:', req.cookies);
  console.log('Session ID:', req.sessionID);
  console.log('Session:', req.session);
  next();
});

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Modify input validation!!

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required.',
      });
    }

    // 2. Modify this to find user in Database instead of mockData!!

    const user = mockUsers.find((u) => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({
        error: 'Invalid email or password',
      });
    }

    req.session.userId = user.id;
    req.session.authenticated = true;

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successfull',
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log('Login error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }

  return;
});

// Check auth status
router.get('/me', (req, res) => {
  // 3. Refactor this checking to middleware

  if (!req.session.authenticated || !req.session.userId) {
    return res.status(401).json({ user: null });
  }

  const user = mockUsers.find((u) => u.id === req.session.userId);
  if (!user) {
    return res.status(401).json({ user: null });
  }

  const { password, ...userWithoutPassword } = user;
  res.json({ user: userWithoutPassword });

  return;
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to logout.' });
    }

    res.clearCookie('connect.sid');
    res.json({ message: 'Logout successfull.' });

    return;
  });

  return;
});

export default router;
