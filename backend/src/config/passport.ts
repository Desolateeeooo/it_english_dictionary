import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { createUser, getNewId, mockUsers, User } from '../data/mockUsers';
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

        if (!user || !user.password)
          return done(null, false, { message: "User hasn't been found" });

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

// TODO: Google Auth 2.0

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      const currentUser = mockUsers.find((u) => u.providerId === profile.id);

      if (currentUser) {
        console.log(`User ${currentUser.email} already exists!`);
				done(null, currentUser)
      } else {
				// check for the user email
        if (profile.emails) {
          const user: User = {
            id: getNewId(mockUsers),
            username: profile.displayName,
            email: profile.emails[0].value,
            password: null,
            provider: 'Google',
            providerId: profile.id,
          };

          const newUser = await createUser(user);
					if (newUser) {
						done(null, newUser);
					} else {

					}
        } else {
          console.log("Oops! Looks like you haven't provided your email address");
        }
      }

      console.log('passport google callback fired');
    }
  )
);

export default passport;
