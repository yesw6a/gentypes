# Gentypes

Gentypes 是基于 [quicktype](https://quicktype.io/) 封装的在项目中可以根据后端接口快速生成 [interface].ts 文件的工具（CLI）。

## 解决什么？

帮助生成接口 interface 声明文件。

## 什么情况下推荐使用？

✅ &nbsp; 我们的项目是基于 ts 的，所以合适。

✅ &nbsp; 在我们日常编码中经常需要手动去声明接口相关的 interface，这个 CLI 可以帮助我们生成/更新相关的 interface。

✅ &nbsp; 统一输出接口相关的 ts 声明文件路径和命名方式。

## 安装

```bash
yarn global add @wuhuanda/gentypes
```

## 使用

### 创建 `gentypes.json` 文件

在项目根目录创建或者通过 `gentypes config` 指令创建\更新 `gentypes.json` 文件。

### gentypes.json

- outputPath

  声明文件输出路径

- debug

  打开调试模式

### 生成声明文件

目前支持三种方式生成对应的声明文件：

- data
- fetch_api
- cURL

#### data

```sh
gentypes data
```

#### fetch_api

```sh
gentypes -n api_name -url https://xxxxxx.com/api/
```

#### cURL

```sh
gentypes cURL
```
