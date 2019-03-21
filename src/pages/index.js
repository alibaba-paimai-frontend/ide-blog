import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <div style={{ color: `purple` }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>首页</title>
    </Helmet>
    <h1>Hello Buddy!</h1>
    <p>Welcome to IDE World</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />

    <br />
    <div>
      <Link to="/page-creator/">page-creator-ide - 页面可视化搭建平台</Link>
    </div>
  </div>
)
