import express from 'express';
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

router.get('/me', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ user: null });
  }
  const user = req.user as any;

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
