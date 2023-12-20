/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
           
            "gatsby-plugin-postcss", 
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            {
              resolve:"gatsby-source-filesystem",
              options: {
                name: "blog",
                path: `${__dirname}/blog`
              }
            },
            "gatsby-plugin-mdx",
            "gatsby-transformer-sharp",
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `Dhinakar's`,
                short_name: `Portfolio`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // Specify the path to your favicon
              },
            },
          ],
};