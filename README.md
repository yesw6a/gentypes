# Gentypes

## BIG PROBLEMS

现在的问题是无法对被依赖项目的根目录（package.json所在的目录）进行文件操作，或者说是获取不到该层目录。

## 这是什么？

Gentypes 是基于 [quicktype](https://quicktype.io/) 封装的在项目中可以根据后端接口快速生成 [interface].ts 文件的工具（CLI）。

## 解决什么？

1. 我们的项目是基于 ts 的，所以合适。
2. 在我们日常编码中经常需要手动去声明接口相关的 interface，这个 CLI 可以帮助我们生成/更新相关的 interface。
3. 统一输出接口相关的 ts 声明文件路径和命名方式。

## 安装

```bash
yarn add gentypes
```

## 使用

- data
- fetch_api
- cURL

## 配置项

- outputPath
- proxyPath

## Tips

### 为什么我的 .gentypesrc 文件没有 json 提示？

以 vscode 为例：

1. 打开 .gentypesrc 文件
2. 点击右下角的 plain text 按钮
3. 在弹出来的窗口点击选项： `Configure File Association for '.gentypesrc'...`
4. 选择 JSON

这样就可以配置完成了，以后每次打开 .gentypesrc 文件都是 JSON 格式了。
