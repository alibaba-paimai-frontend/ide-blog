import React from "react"
import Link from "gatsby-link"
import { Helmet } from "react-helmet"

// import { createSchemaModel, ISchemaProps } from "ide-tree"
// // import { schemaConverter, ESchemaOrigin } from "ide-component-tree"
// import { debounce } from "ts-debounce"
// import { schema as newSchemajson } from "../datas/new-schema.js"

// import {
//   PageCreatorFactory,
// } from "page-creator-ide"

// const schemaJSONv2 = {};//schemaConverter(newSchemajson.components)

// const schema = createSchemaModel(schemaJSONv2)

// const onExpand = function(keys) {
//   // console.log(888, keys);
// }

// const onSelectNode = node => {
//   console.log("当前选中的 node:", node.id, node.name)
// }

// /**
//  * context menu 部分
//  */
// const menu = {
//   id: "component-tree",
//   name: "组件树右键菜单",
//   children: [
//     { id: "createSub", name: "添加组件", icon: "plus", shortcut: "⌘+Alt+G" },
//     // { id: 'createTmpl', name: '添加模板', icon: 'plus', shortcut: '' },
//     { id: "createUp", name: "前面插入组件", icon: "arrow-up", shortcut: "" },
//     {
//       id: "createDown",
//       name: "后面插入组件",
//       icon: "arrow-down",
//       shortcut: "",
//     },
//     {
//       id: "divider",
//       name: "分割线",
//       icon: "file",
//       type: "separator",
//     },
//     { id: "copy", name: "复制", icon: "copy", shortcut: "⌘+C" },
//     { id: "paste", name: "粘贴", icon: "switcher", shortcut: "⌘+V" },
//     {
//       id: "divider",
//       name: "分割线",
//       icon: "file",
//       type: "separator",
//     },
//     { id: "delete", name: "删除", icon: "delete", shortcut: "⌘+Delete" },
//   ],
// }

// const { PageCreatorWithStore, client } = PageCreatorFactory()

// function onClick(value) {
//   console.log("当前点击：", value)
// }

// function onRightClick({ node, event }) {
//   console.log("onRightClick...")
// }

// function onSwitchWithClient(panel, index) {
//   console.log("[with client]当前点击：", panel, index)
//   // client.put('/clients/switchPanel/clients/codeEditor/editor', {
//   //   name: 'value',
//   //   value: `${index}: panel name: ${panel.id}`
//   // });
// }
// // 经过 debounce 处理的函数，提高性能
// const schemaModelChange = debounce(
//   (key, value) => {
//     if (key === "schema") {
//       const result = value.schemaJSON ? value.schemaJSON : value
//       console.log(777, "schema changed:", key)

//       // 更改 ide 的内容
//       client.put("/clients/switchPanel/clients/codeEditor/editor", {
//         name: "value",
//         value: JSON.stringify(result.children, null, 4),
//       })

//       // 然后传递数据给 iframe
//       newSchemajson.components = result.children
//       client.put("/clients/switchPanel/clients/previewer/iframe", {
//         name: "data",
//         value: {
//           event: "data-from-ide",
//           type: "updateSchema",
//           data: newSchemajson,
//         },
//       })
//     }
//   },
//   400,
//   {
//     isImmediate: true,
//   }
// )

// const componentTree = {
//   schemaTree: {
//     onSelectNode: onSelectNode,
//     onRightClickNode: onRightClick,
//     onModelChange: schemaModelChange,
//     onExpand,
//   },
// }

// const switchPanel = {
//   onSwitch: onSwitchWithClient,
//   codeEditor: {
//     language: "json",
//   },
//   previewer: {
//     url: "http://localhost:9006/gourd2/pi/demo/index.html?from=ide",
//   },
// }

// // 创建组件树和右键菜单
// client.post("/clients/componentTree/clients/schemaTree/tree", {
//   schema: schema,
// }) // 注意这里的 schema 需要用 createSchemaModel 转换一层，否则因为缺少 parentId ，导致无法创建成功
// client.post("/clients/componentTree/clients/contextMenu/menu", { menu: menu })

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>页面可视化搭建平台</title>
    </Helmet>

    <Link to="/">back home</Link>
    {/* <PageCreatorWithStore
      componentTree={componentTree}
      switchPanel={switchPanel}
      onClick={onClick}
    /> */}
  </div>
)
