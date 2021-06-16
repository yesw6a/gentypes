# Gentypes

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

## gentypes.json

- outputPath
- debug 
