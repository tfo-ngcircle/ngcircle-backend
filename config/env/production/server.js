module.exports = ({ env }) => ({
  url: env("BACKEND_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
