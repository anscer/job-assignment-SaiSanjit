import passport from "passport";
import LocalStrategy from "passport-local";
import User from '../models/user';

passport.use(new LocalStrategy.Strategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err:any, user:any) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));


passport.serializeUser(function(user, done) {
    done(null, User); 
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err:any, user:any) {
        done(err, user);
    });
});