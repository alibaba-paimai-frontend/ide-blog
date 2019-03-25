var proxy = require("http-proxy-middleware")
module.exports = {
  pathPrefix: "/ide-blog",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns/`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`
  ],
}
