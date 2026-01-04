import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { mockUsers } from '../data/mockUsers';
import { comparePasswords } from '../data/passwordHelperFuncs';

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
    async (email, password, done) => {
      try {
        const user = mockUsers.find((u) => u.email === email);

        if (!user || !user.password) return done(null, false, { message: "User hasn't been found" });

				const isValid = await comparePasswords(password, user.password);
        
        if (!isValid) {
          return done(null, false, { message: 'Incorrect password.' });
        }

				const { password: _, ...userWithoutPassword } = user;
        return done(null, userWithoutPassword);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;