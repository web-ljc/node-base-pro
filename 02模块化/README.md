### target
  - 模块化的好处
  - CommonJS规定了哪些内容
  - Node.js中模块的三大分类各自是什么
  - 使用npm管理包
  - 了解什么是规范的包结构
  - 了解模块的加载机制

### contents
  - 模块化的概念
    + 模块化指解决一个复杂问题时，自上向下逐层把系统划分成若干模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元
    + 编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并相互依赖的多个小模块
      + 提高了代码的复用性
      + 提高了代码的可维护性
      + 实现按需加载

  - Node.js中模块的分类
    + 内置模块（node.js官方提供，fs、path、http）
    + 自定义模块（用户创建的每个js文件）
    + 第三方模块（由第三方开发出来的模块，需要下载）

  - npm与包
    + Node.js中的第三方模块又叫包
    + 包是基于内置模块封装的，极大的提高了开发效率。包于内置模块的关系，类似于Jquery和浏览器内置API之间的关系
    + 搜索包 https://www.npmjs.com   下载包 https://registry.npmjs.org
    + npm包管理工具 （Node Package Manager）
      - 安装包 npm i name
      - npm i name@2.22.2 // 指定版本 第1位数字：大版本 第2位数字：功能版本 第3位数字：bug修复版本

  - 模块的加载机制
    + 使用 require() 方法记载
      + const fs = require('fs')
      + const custom = require('./test.js')
    + module.exports 将属性、方法暴露
      + 可以直接使用exports，但是最终以module.exports指向对象为主。不建议一个模块中同时使用
    + CommonJS规定
      + 每个模块内部，module变量代表当前模块
      + module变量是一个对象，它的exports属性是对外接口，exports属性默认空对象
      + 加载某个模块，其实是加载该模块的module.exports属性。require() 方法用于加载模块
