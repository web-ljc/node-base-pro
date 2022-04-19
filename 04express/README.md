## express

### target
- express.static()快速托管静态资源
- experss路由精简项目结构
- express中间件
- experss创建API接口
- express中启用cors跨域资源共享

### contents
  - 初始Express
    + 基于Node.js平台，快速开发极简的web开发框架
    + Express的作用和Node.js内置的http模块类似，专门创建web服务器
    + 
  - Express路由
    + 创建路由模块：expresss.Router()
    + 挂载路由：router.get('/', () => {})
  - Express中间件
    + 中间处理环节，一个请求到达Express的服务器后，可以连续调用多个中间件，对这次请求进行预处理
    + 本质是一个function处理函数，中间件函数的形参列表中，必须包含next参数
    + 全局生效中间件：app.use(中间件函数)
    + 中间件的作用
      - 多个中间件共享一份req和res。我们可以在上游的中间件中，统一为req和res对象添加自定义的属性或方法，供下游的中间件、路由使用
      - 可连续定义多个全局中间件，会按顺序执行
    + 注意：
      - 要在路由之前注册中间件
      - 客户端发送过来的请求，可以连续调用多个中间件进行处理
      - 执行完中间件的业务代码后，不要忘记调用next()函数
      - 为防止代码逻辑混乱，调用next()函数后不要再写额外的代码
      - 连续调用多个中间件时，多个中间件共享req和res对象
    + 中间件分类
      - 应用级别中间件
        - 绑定到app实例上的中间件  app.use()
      - 路由级别中间件
        - 绑定到express.Router()实例上的中间件  router.use()
      - 错误级别中间件
        - 专门用来捕获整个项目中发生的异常错误。一定要注册到所有路由之后
      - Express 内置中间件
        - express.static 快速托管静态资源的内置中间件
        - express.json 解析JSON格式的请求体数据 4.16+
        - express.urlencoded 解析URL-encoded格式的请求体数据 4.16+
      - 第三方中间件
        - body-parser 第三方中间件。 express.urlencoded中间件就是基于body-parser第三方中间件封装的
  - Express写接口


