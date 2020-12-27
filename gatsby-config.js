module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://www.test.zielarskawiesblanki.pl/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400,500,700`],
        display: "swap",
      },
    },
  ],
}
