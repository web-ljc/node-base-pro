## 安装
```js
const tools = require('web-tools-ljc')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = tools.dateFormat(new Date())
// 结果 2020-01-01 12:00:00
console.info(dtStr)
```

## 转义 HTML 中的特殊字符
```js
// 带转换的 HTML 字符串
const htmlStr = '<h1>这是h1标签</h1>'
// 调用 htmlEscape 方法进行转换
const str = tools.htmlEscape(htmlStr)
// 转换的结果  &lt;h1&gt;这是h1标签&lt;/h1&gt;
console.info(str)
```

## 还原 HTML 中的特殊字符
```js
// 待还原的 HTML 字符串
const str2 = tools.htmlUnEscape(str)
// 转换的结果  <h1>这是h1标签</h1>
console.info(str2)
```

## 开源协议
ISC
