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
    - get接口
    - post接口
  - CORS跨域资源共享
    - cors请求的分类
      - 根据请求方式和请求头的不同，可将CORS的请求分为2大类
        + 简单请求
          + 客户端与服务器之间只会发生一次请求
          + 请求方式：GET、POST、HEAD
        + 预检请求：在浏览器与服务器正式通信之前，浏览器会发送OPTION请求进行预检，以获知服务器是否允许该实际请求。
          + 客户端和服务端会发生两次请求，OPTION预检请求成功之后，才会发起真正请求
          + 请求方式：GET、POST、HEAD之外的需求Method类型
          + 请求头中包含了自定义头部字段
          + 向服务器发送了 application/json 格式的数据
  - JSONP接口
    - JSONP不属于真正的AJAX请求，因为没有使用XMLHttpRequest这个对象
    - JSONP仅支持GET请求
    - 项目中配置了CORS跨域资源共享，必须在CORS中间件之前声明JSONP的接口，否则JSONP接口会被开启成CORS的接口


