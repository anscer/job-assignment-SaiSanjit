import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/user';

const strategy = new LocalStrategy.Strategy(
  async function(username, password, done) {
    try {
      const authenticate = User.authenticate();
      authenticate(username, password, (err, user, options) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: options.message });
        return done(null, user);
      });
    } catch (err) {
      return done(err);
    }
  }
);

passport.use(strategy);

passport.serializeUser((user:Express.User, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (err) {
    done(err);
  }
});
