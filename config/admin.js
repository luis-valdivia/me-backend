module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c972cf609aa1ed01278045ce74b5ee5'),
  },
});
