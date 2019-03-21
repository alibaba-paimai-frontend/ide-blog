var proxy = require("http-proxy-middleware")
module.exports = {
  pathPrefix: "/ide-blog",
  plugins: [`gatsby-plugin-react-helmet`],
  developMiddleware: app => {
    app.use(
      [
        "/page-creator/json.worker.js",
        "/page-creator/editor.worker.js",
        "/page-creator/typescript.worker.js",
      ],
      proxy({
        target: "//unpkg.com/ide-code-editor/dist/",
          pathRewrite:{
              "/page-creator/": "/"
          }
      })
    )
  },
}
