---
sidebar: 'auto'
---

# 前端面试总结

## HTML

### HTML定义

HTML 是超文本标记语言，它定义了网页内容的含义和结构。其中“超文本“的含义，链接单个网站内或多个网站间的网页的链接；其中”标记“的含义，用来注明文本、图片和其他内容，以便在Web浏览器中显示；“标签”含义，标签是指用 “<” 和 “>” 包裹的元素组成。

### HTML5新增内容

::: tip
HTML5: 下一代HTML标准；
:::

* 用于绘画的 canvas 元素
* 用于媒介回放的 video 和 audio 元素
* 对本地离线存储的更好的支持
* 语义化标签，比如：article、footer、header、nav、section
* 新的表单控件，比如 calendar、date、time、email、url、search

### HTML 和 XML 的区别

|  | HTML | XML |
| --- | --- | ---|
| 定义 | HTML 是超文本标记语言，用来定义页面内容的含义和结构 | XML是可扩展标记语言，用于创建网页和web应用程序 |
| 作用 | HTML 是显示数据 | XML是动态的，用来传输和存储数据，不是显示数据 |

### canvas和svg的区别

|   | canvas | svg |
| --- | --- | --- |
| 定义 | 通过JavaScript 和 HTML的 `<canvas>` 元素来绘制图形的方式<br />用于动画、游戏布画、数据可视化、图片编辑以及实时视频处理等方式 | 用来描述二维的矢量图形，基于XML的标记语言 |
| 区别 | ① 依赖分辨率<br />② 不支持事件处理器<br />③ canvas是逐像素进行渲染的，一旦图形绘制完成，就不会继续被浏览器关注，所以文本渲染能力弱<br />④ 能够以 .png 或者 .jpg 格式保存结果图像<br />⑤ Canvas 最适合有许多对象要被频繁重绘的图形<br />⑥ 像素位图 | ① 不依赖分辨率<br />② 支持事件处理器<br />③ SVG是通过DOM操作来显示的，最适合带有大型渲染区域的应用程序<br />④ 复杂度高的DOM 会减慢渲染速度<br />⑤ 矢量位图 |

### 水平垂直居中的方法

::: tip
相对位置和绝对位置都是以左上角原点为定位基准点
:::

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
div.parent {
  dispaly: flex;
  justify-content: center;
  align-items: center;
}
```

```css
div.parent {
  position: relative;
}
div.child {
  postion: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

```css
div.parent {
  display: grid;
}
div.child {
  justify-self: center;
  align-self: center;
}
```

``` css
div.parent {
  font-size: 0;
  text-align: center;
}
.parent::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
}
div.child {
  display: inline-block;
  vertical-align: middle;
}
```

## CSS


### 伪元素和伪类的区别和作用
|          | 伪元素                                               | 伪类                                                         |
| -------- | :--------------------------------------------------- | ------------------------------------------------------------ |
| 表示方法 | 开头为双冒号(::)                                     | 开头为单冒号(:)                                              |
| 定义     | 伪元素用于创建一些不在文档树中的元素，并为其添加样式 | 伪类是一种选择器，用于选择处于特定状态的元素，或者是当鼠标指针悬浮在元素上面的时候 |


### 如何清除浮动

*  clear
* 使用CSS的overflow属性
* 使用CSS的:after伪元素
* 给父级元素设置高度 

### css3新增哪些属性

* 边框属性（border-radius、box-shadow、border-image）
* 背景（background-clip、background-origin、background-size）
* 文字（word-wrap、text-overflow、text-shadow、text-decoration）
* transition 过渡
* transform装换
* animation 动画

## JavaScript

### JavaScript定义

[JavaScript](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript) 是一种插入到HTML页面中的客户端和服务端脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画等。

### 数据类型

::: tip
数据类型：分为 值类型（基本类型|原始数据类型）+ 引用数据类型
* 原始数据类型：声明变量的时候系统会给它分配**数据空间**
* 引用数据类型：声明变量的时候系统会分配**引用空间**
:::

* 原始数据类型：string number boolean null undefined symbol
* 引用数据类型：object array function
* 特殊对象： regexp data

### 数据类型检测

1. typeOf：用来判断除了 null 之外的原始类型
2. instanceOf：用来判断存在原型链得类型（判断引用类型）
3. constructor
4. Object.prototype.toString.call()

### 判断数组类型

1. Array.isArray()
2. Object.prototype.toString.call(array) === "[object Array]"
3. Array.prototype.isPrototypeOf(array)
4. a.__proto__ === Array.prototype

### null 和 undefined 区别

* `undefined`表示未定义，声明了变量但是还未被定义；
* `null`表示空对象，尚未创建对象。

### let & var & const区别

通过以下表格来列出三者的差异：

| var                                                      | let                                                      | const                                                        |
| -------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| 函数作用域声明                                           | 块级作用域（通过 {} 包裹的就是块级作用域）声明                                           | 常量声明                                                     |
| 通过var声明的变量，该变量会自动被添加到最近的上下文；    | 块级作用域是通过最近的 {} 来决定上下文                   | 块级作用域是通过最近的 {} 来决定上下文                       |
| 同一个作用域 变量能够重复声明，var会忽略重复声明的变量； | 同个作用域变量被重复声明，会报错（Uncaught SyntaxError） | 声明变量同时初始化值，一经变量声明，在其之后的操作中都不能将该变量重新赋值（但是 对象的键 不受影响） |


### const & object.freeze区别

通过以下表格来列出二者的差异：
| const | object.freeze |
| ----- | ----- |
| 赋值对象为const定义的变量不能再被重新赋值为其他引用值，但是对象的键则不受限制 | object.freeze({}), 返回的对象虽然赋值不会报错，但是会静默失败 |

### call & apply & bind 之间的区别

通过以下表格来列出三者的差异：  

| bind | call | apply |
| ---- | ---- | ---- |
| 函数会创建一个新的绑定函数 | 提供新的this给当前调用的函数/方法；| 提供新的this给当前调用的函数/方法；|
| ① 新函数的 this 被指定为 bind() 的第一个参数 <br/> ② 而其余参数将作为新函数的参数，供调用时使用 | 接受一个参数**列表** | 接受一个参数**数组** |

### ES6新增新特性

* let 和 const
* 箭头函数
* 拓展运算符
* 默认参数
* 对象迭代（Object.values()、Object.entries()）
* promise
* 检测函数是否使用new 关键字调用的 new.target

### 函数类型

* 函数声明：function name（）{}
* 函数表达式：let varFunc = function name（）{}
* 构造函数：new Function（arg1, arg2, ... , argN）
* 箭头函数：（）=> {}
* 立即调用函数：（function（）{ statements })（）
* 闭包函数

### 箭头函数和普通函数区别

* 样式不同，箭头函数 =>，普通函数是 function；
* 箭头函数不能作为构造函数使用，所以就不能使用new关键字；
* 箭头函数无argument参数；
* 箭头函数会捕获其所在上下文的this指向；
* 箭头函数无法通过用 call、apply、bind 修改this指向；
* 箭头函数没有原型属性；
* 箭头函数不能当作Generator函数，不能使用yield关键字

箭头函数没有 this、arguments、super、new.target

### 箭头函数为什么不能作为构造函数使用

因为构造函数是通过new关键字来生成对象实例，`new` 首先会创建一个空的对象，并且将这个对象的 `__proto__` 属性链至构造函数的原型对象上，箭头函数没有prototype属性，所以箭头函数不能作为构造函数。

### 变量提升的理解和如何解决所带来的问题

变量提升就是通过关键字声明的变量会自动提升到函数作用域顶部；此外，反复多次声明同一个变量也不会报错；
1. 重复声明一个变量
  ``` js
  function foo () {
    var age = 16;
    var age = 26;
    var age = 36;
    console.log(age)
  }
  // foo() --> 36
  ```
2. 变量被提升到函数作用域顶部
  ``` js
  function foo() { 
      console.log(age); 
      var age = 26; 
  } 
  foo(); // undefined
  ==等价==>
  function foo () {
    var age;
    console.log(age)
    age = 26;
  }
  foo() --> undefined	
  ```

解决变量提升的问题：使用let、const 来替代 var 声明变量，let和const 声明之前都被称之为暂时性死区，这个区域里面引用后面才声明的变量就会报错

### js存储数据和垃圾回收机制

垃圾回收程序必须跟踪记录哪个变量还会使用，以及哪个变量不会在使用，以便回收内存。垃圾回收程序每隔一定时间就会自动运行；

1. 垃圾回收模式
  1. 引用计数
  2. 标记清除

JavaScript 是在创建变量时自动进行了分配内存，并且在不使用它们时“自动”释放。
1. 内存生命周期
  1. 分配所需的内存
  2. 使用分配到的内存
  3. 不需要的时候将其释放/归还

### 闭包造成的变量不被回收造成内存泄漏

::: tip
定义：函数A中包含着函数B，函数B能够访问函数A中的变量，则函数B则称之为闭包函数。
:::
闭包函数会造成内存泄漏：函数A的活动对象不能在使用完成之后被销毁，因为在闭包函数B中仍然存在对函数A的引用，除非闭包函数B被销毁。所以使其闭包函数相对其他函数更占用内存。

### new关键字

* 首先，创建一个空的对象
* 其次，为新的对象添加proto属性，并且将该属性链至构造函数的原型对象（prototype）上
* 然后，再将该新对象作为this的上下文
* 最后，如果该返回函数没有返回对象，则返回this

### 对原型 & 原型链的理解

原型就是一个原型对象（prototype）；原型链：每一个实例对象都会有一个私有属性（`__proto__`）链至到对应的构造函数的原型对象（`prototype`），该原型对象也有自己的原型对象，层层向上直到一个对象的原型对象（`__proto__`）为null；

### Object 和 Map 区别

  |  | Object | Map |
  | ---- | ---- | ---- |
  |   创建对象   |  ① 对象字面量: const o = {}<br />② 调用构造函数 const o = new Object() <br />③ 创建没有原型的对象: const o = new Object(null)  | ① 调用构造函数: const o = new Map() |
  | size | Object的键值对个数只能自己进行计算 | Map中可通过 size 属性中获取 |
  | 键的类型 | 键必须是一个 String 和 Symbol | Map的键可以是任意值、包括函数、对象或者任意基本类型 |
  | 键的顺序 | Object的键是无序 | Map中的key是有序 |
  | 迭代 | Object只能先通过 Object.keys 获取键，然后才能迭代 | Map 能够直接进行迭代 【 **例如:** for...of; forEach() 】 |
  | 性能 | 频繁添加和删除键值对的场景下未作出优化 | 频繁增删键值对的场景下比较好 |


### Map 和 WeakMap 区别

|   | Map | WeakMap |
| --- | --- | --- |
| 概念 | Map是一种新的集合类型，带来了真正的键/值存储机制 | “弱隐射”是一种新的集合类型，带来了增强的键/值存储机制，其中“weak”描述的是 JavaScript 中的垃圾回收程序对待“弱隐射”中键的方式 |
| 创建 | const o = new Map() | const o = new WeakMap() |
| 基本API | 【添加键/值】: set()<br/>【查询】: get() 和 has()<br/>【删除】: delete() 和 clear()<br />【顺序和迭代】: entrise() 和 Symbol.iterator属性<br />【获取键值】：keys() values()<br />【获取元素数量】: size | 【添加键/值】： set()<br/>【查询】: get() 和 has()<br/>【删除】: delete() |
| 键的类型 | Map的**键可以是任意值**，包含函数、对象或者任意基本类型; 值的类型没有限制 | WeakMap的**键必须是对象类型**(WeakMap的键必须是对象类型：如果允许了原始值，就无法区分初始化时使用的字符串字面量和初始化之后使用的是否是相等的字符串了，所以需保证只有通过键对象的引用才能取得值。)，若是使用非对象键会抛出TypeError，值的类型没有限制 |
| 内存泄漏 | Map会**阻止对象被垃圾回收掉**<br/>例如：<br />let vm = new Map() <br />vm.set({}, "val")<br />==>   vm：{key: {}, value: "val"} | 弱键: 若键没有其他地方的引用，则该对象**键就会被当做垃圾被回收掉**<br />**【例如】**：<br />let vm = new WeakMap()<br />vm.set({}, "val")<br />==> vm: {} <br />**【说明】**：set方法初始化了一个新的对象并且将它用作一个字符串的键。然而没有指向这个对象的引用，所以执行完成后，这个对象键就会被当做垃圾回收；然后键/值就会从弱映射中消失，成为一个空映射 |
| 迭代 | Map **能够**直接进行迭代 | 由于键/值对任何时候都有可能会被销毁，所以就**没有**迭代其键/值迭代得功能 |


### Set 和 WeakSet 区别

|      |   set   |   WeakSet   |
| ---- | :--- | :--- |
|   介绍   |   set是一种新集合类型，带来集合数据结构，Set中的元素只会**出现一次**   |   "弱集合"是一种新集合类型，带来集合数据结构，其中weak描述的是JavaScript垃圾回收程序对待“弱集合”中值的方式   |
|   创建   |   const o = new Set()   |   const o = new WeakMap()   |
|   基本API   |   【添加值】: add()<br/>【查询】: has()<br/>【获取元素数量】: size<br/>【删除元素】: delete()和clear()   | 【添加值】: add()<br/>【查询】: has()<br/>【删除元素】: delete() |
| 存储类型 | 存储任何类型的唯一值，无论是原始值和对象引用 | 只能是对象的集合 |


## Vue2 && Vue3

## React

## TypeScript

## 小程序

## 浏览器

### 如何解决跨域问题

::: tip
跨域定义：`协议+域名+端口号` 三者任意一个不相同，都算作不同域，在不同域之间互相请求资源，就算作`跨域`
:::

解决跨域问题：
jsonp只适合加载get请求，适合加载不同域名的js、css、img等静态资源
1. `jsonp`
    原理：利用script标签的src属性来实现跨域
    支持所有类型的HTTP请求，适合做ajax各种跨域请求
2. `CORS`
    nginx代理跨域都是搭建一个服务器，直接在服务器请求HTTP接口，这适合前后端分离的前端调后端接口<br>
3. `nginx`代理跨域
    通过配置文件设置请求响应头`Access-Control-Allow-Orgin`
4. document.domain+iframe跨域
5. location.hash + iframe 跨域
6. window.name + iframe 跨域
    HTML5新特性，兼容性不是很好	
7. postMessage跨域
8. websocket协议跨域

### 网页加载优化

1. 优化图像（确保图像尽可能的小）
2. 利用浏览器缓存
3. 按需加载
4. 添加loading提升
5. 把css文件放在页面的顶部，而js放在底部
6. 去掉不必要的插件
7. 最小化重定向
8. 减少DNS查询

## 前端工程化

### webpack 理解

webPack是代码打包工具，存在出口、入口、loader和插件。webpack是一个用于现代JavaScript应用程序的静态模块打包工具	<br>

1. loader: 它是一个转换器，将文件A转换陈文件B
2. plugin: 它是一个拓展器，丰富了webpack本身，针对的是loader结束后，webpack打包整个过程，它不直接操作文件，而是基于事件机制工作，会监听打包过程中的节点，执行广泛任务。

## 算法题

