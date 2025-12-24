import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { mockUsers } from '../data/mockUsers';

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  const user = mockUsers.find((u) => u.id === id);
  done(null, user || null);
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {
      try {
        const user = mockUsers.find((u) => u.email === email);

        if (!user) return done(null, false, { message: "User hasn't been found" });

        if (user.password !== password) {
          return done(null, false, { message: 'The password is invalid!' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;