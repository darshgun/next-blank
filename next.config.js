module.exports = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_USERNAME: process.env.NEXTAUTH_USERNAME,
    NEXTAUTH_PASSWORD: process.env.NEXTAUTH_PASSWORD,
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "styles/_common.scss";`,
  },
};
