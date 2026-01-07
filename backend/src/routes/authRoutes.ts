import { passwordHash } from '../data/passwordHelperFuncs';
import { createUser, mockUsers } from '../data/mockUsers';
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
  console.log('🔍 Checking mock users before login:');
  console.log(JSON.stringify(mockUsers, null, 2));

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

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await passwordHash(password, 10);

  const newUser = await createUser({ username, email, password: hashedPassword });
  if (newUser) {
    res.status(201).json({
      message: `User ${username} was successfully registered!`,
      newUser,
    });
  } else {
    res.status(500).json({ message: `Oops! Failed to register user ${username}` });
  }
});

// TODO: Add auth with google

router.get('/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

router.get('google/redirect', passport.authenticate('google'), (_req, _res) => {
	
})

export default router;
