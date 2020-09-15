/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5cnhbtaprym6`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: `HMfa56Tj2_pqicvlMRiR0kKuWLVHjUJnuBiH_i3jrTY`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Ubuntu:400,500']
        }
      }
    }
  ],
}
