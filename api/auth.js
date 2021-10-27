const jwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: "secret", // ToDo should be in enviroment var
  };
  passport.use(
    new jwtStrategy(opts, (decoded, done) => {
      console.log("decoded jwt", decoded);
      return done(null, false);
    })
  );
};
