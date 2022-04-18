### npm与包
  - 快速创建package.json // npm init -y
  - 文件不能使用中文、不能出现空格
    - dependencies节点，记录npm install 命令安装的节点 // npm i name
    - devDependencies节点,只在开发阶段，上线后不用  // npm i name -D
  - 安装所有包 // npm i
  - 卸载包 // npm uninstall name

#### 下包速度慢
  - 查看当前下载包镜像源 // npm config get registry
  - 切换淘宝镜像        // npm config set registry=https://registry.npm.taobao.org/
  - 检查是否成功        // npm config get registry

#### 包的分类
  - 1项目包，被安装到项目的包
    - 开发依赖包，被记录到devDependencies节点中的包，只在开发期间用到
    - 核心依赖包，被记录到dependencies节点中的包，在开发期间和项目上线之后会用到
  - 2全局包，全局都可使用。工具性质的包，才有全局安装的必要性
    - 安装 npm i name -g
    - 卸载 npm uninstall name -g

#### 规范包的结构
  - 1包必须以单独的目录存在
  - 包的顶级目录下要必须包含 package.json 这个包管理配置文件
  - package.json 中必须包含 name version main 这三个属性，分别代表 包名字、版本号、包的入口

### 开发自己的包
  #### 基本结构
  - 新建tools文件
  - 在tools文件中，新建3个文件
    - package.json (包管理配置文件)
    - index.js     (包入口文件)
    - README.md    (包的说明文档) 
  - 发布包
    - 切换到包的根目录
    - registry 切换到官方 https://registry.npmjs.org/
    - 发布包：执行 npm publish
    - 删除包：执行 npm unpublish name --force
      - 命令只能删除72小时以内的包
      - 删除的包24小时不允许重复发布
      - 发些有意义的包

### 模块加载机制
  - 优先从缓存中加载，模块在第一次加载后会被缓存。多次调用require()不会导致模块的代码被执行多次。提高模块加载效率
  - 内置模块加载的优先级最高
  - 自定义模块加载机制 ./ 或 ../ 开头。没有就会当作内置模块或第三方模块
    - 加载时省略了扩展名，会按顺序尝试 --- 确切的文件名加载 -- .js -- .json -- .node -- 加载失败报错
  - 第三方模块 传给require()标识符
    - 会从模块的父目录开始找/node_modules文件夹中加载第三方模块。如果没找到会一直向上找，直到文件系统的根目录
  - 目录作为模块，当把目录作为模块标识符，传给rquire()进行加载时，有3种方式
    - 在被加载的目录下找package.json文件，并找到mian属性，作为require()加载的入口
    - 没有package.json文件，或main属性不存在或无法被解析，则会找index.js文件
    - 如果以上2步都失败，Node.js会在终端打印错误消息，报告模块缺失

