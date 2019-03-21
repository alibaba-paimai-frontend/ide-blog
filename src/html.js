import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src="//unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
        <script charset="utf-8"
          src="//g-assets.daily.taobao.net/gourd/??widget-next/0.1.5/schema.js,widget-next/0.1.5/list.js"></script>

        <script src="//unpkg.com/react@16.8.0/umd/react.production.min.js"></script>
        <script src="//unpkg.com/react-dom@16.8.0/umd/react-dom.production.min.js"></script>
        <script src="//unpkg.com/mobx@4.6.0/lib/mobx.umd.min.js"></script>
        <script src="//unpkg.com/mobx-react@5.3.6/index.min.js"></script>
        <script src="//unpkg.com/mobx-react-lite@1.0.1/dist/index.min.js"></script>
        <script src="//unpkg.com/mobx-state-tree@3.7.1/dist/mobx-state-tree.umd.js"></script>
        <script src="//unpkg.com/ss-tree@1.0.5/dist/index.umd.min.js"></script>

        <script src="//unpkg.com/ette/dist/index.umd.min.js"></script>
        <script src="//unpkg.com/ette-router/dist/index.umd.min.js"></script>
        <script src="//unpkg.com/ette-proxy/dist/index.umd.js"></script>
        <script src="//unpkg.com/moment@2.22.2/min/moment.min.js"></script>

        <script src="//unpkg.com/antd@3.10.7/dist/antd.min.js"></script>
        <link rel="stylesheet" href="//unpkg.com/antd@3.10.7/dist/antd.min.css"></link>
        <script src="https://unpkg.com/styled-components@4.1.3/dist/styled-components.min.js"></script>
        <script src="//unpkg.com/ide-lib-utils/dist/index.umd.js"></script>
        <script src="//unpkg.com/ide-lib-base-component/dist/index.umd.js"></script>


        <script src="//unpkg.com/ide-code-editor/dist/index.umd.js"></script>
        <script src="//unpkg.com/ide-code-editor/dist/1.index.umd.js"></script>
        <script src="//unpkg.com/ide-code-editor/dist/2.index.umd.js"></script>
        <script src="//unpkg.com/ide-code-editor/dist/3.index.umd.js"></script>
        <script src="//unpkg.com/ide-code-editor/dist/4.index.umd.js"></script>
        <script src="//unpkg.com/ide-code-editor/dist/editor.worker.js"></script>
        <script src="//unpkg.com/ide-code-editor/dist/json.worker.js"></script>
        <script src="//unpkg.com/ide-code-editor/dist/typescript.worker.js"></script>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
