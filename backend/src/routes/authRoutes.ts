import express from 'express';
import { mockUsers } from '../data/mockUsers';
import passport from 'passport';

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

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err: Error, user: any, info: any) => {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        error: info?.message || 'Invalid email or password',
      });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      const { password, ...userWithoutPassword } = user;
      res.json({
        message: 'Login successful',
        user: userWithoutPassword,
      });
    });
  })(req, res, next);
});

// Refactor this with passport middleware!!
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

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: 'Logged out' });
  });
});

export default router;
