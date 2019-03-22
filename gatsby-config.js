var proxy = require("http-proxy-middleware")
module.exports = {
  pathPrefix: "/ide-blog",
  plugins: [`gatsby-plugin-react-helmet`]
}
