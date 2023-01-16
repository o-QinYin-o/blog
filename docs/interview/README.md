---
sidebar: 'auto'
---

# 前端面试总结

## HTML 🚩

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

## CSS 🚩


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

## JavaScript 🚩

### JavaScript定义

[JavaScript](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript) 是一种插入到HTML页面中的客户端和服务端脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画等。

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


### new关键字

* 首先，创建一个空的对象
* 其次，为新的对象添加proto属性，并且将该属性链至构造函数的原型对象（prototype）上
* 然后，再将该新对象作为this的上下文
* 最后，如果该返回函数没有返回对象，则返回this

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

### 浅拷贝和深拷贝

* 浅拷贝
	* object.assign方法
	* es6的  展开符号（...）
* 深拷贝
	* `JSON.parse(JSON.stringify(object))`：会忽略 undefined，会忽略symbol、不能序列化函数、不能解决循环引用的对象；
  * `lodash` 第三方库来实现深拷贝
	* 封装函数进行深拷贝
		``` javascript
		function deepClone (obj) {
			let objClone = Array.isArray(obj) ? [] : {}
			if (obj && typeof obj === 'object') {
				for (key in obj) {
					if (obj.hasOwnProperty(key)) {
						if (obj[key] && typeof obj[key] === 'object') {
							objclone[key] = deepClone(obj[key]);
						} else {
							objclone[key] = obj[key];
						}
					}
				}
			}
			return objclone;
		}
		```

### call & apply & bind 之间的区别

通过以下表格来列出三者的差异：  

| bind | call | apply |
| ---- | ---- | ---- |
| 函数会创建一个新的绑定函数 | 提供新的this给当前调用的函数/方法；| 提供新的this给当前调用的函数/方法；|
| ① 新函数的 this 被指定为 bind() 的第一个参数 <br/> ② 而其余参数将作为新函数的参数，供调用时使用 | 接受一个参数**列表** | 接受一个参数**数组** |

### 浏览器存储差别

| 特性 | 周期 | 大小 | 方式 | 作用 |
| ---- | ---- | ---- | ---- | ---- |
| cookie | 时间前后端都可以进行设置 | 4k | 每一次请求都会自动携带再请求里面 | 携带token |
| localStorage | 除非清理掉，否则永久存在 | 5m | 需要手动设置到请求体中 | 暂存用户习惯类的信息 |
| sessionStorage | 页面关闭就会被清理 | 5m | 需要手动设置到请求体中 | 页面上的一些信息，需要暂时缓存下来 |
| indexDB | 除非清理掉，否则永久存在 | 根据本地硬件大小 | 需要手动设置到请求体中 | 页面上的数据，配置，提示 |

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

### AMD 和 CMD

:::tip
插件加载方式
:::
* AMD就是一上来就将需要的插件下载下来
* CMD就是当用到这个插件时才将该插件下载下来


### 异步

#### 并行和并发

::: tip 概念理解
并行：是微观概念，可以同时完成任务A和任务B，同时完成多个任务的情况下就可以称之为并行<br/>
并发：是宏观概念，现在有任务A和任务B,在一段时间内，通过任务之间的切换来完成这两个任务，这种情况则称为并发
:::

#### promise理解

`promise`一共有三种状态：`pending`(等待中)、`resolve`(完成)和`reject`(拒绝)，异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未来某个时候把值交给使用者。


## Vue2 & Vue3 🚩

### MVC 和 MVVM 区别

MVC全名是 Model View Controller, 就是Controller负责将Model的数据用View显示出来，换句话说就是在Controller里面把Model的数据赋值给View。<br/>
MVVM: 实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再手动操作Dom元素来改变View的显示。 而是改变属性后该属性对应的View层显示会自动改变。<br/>
Vue并没有完全遵循MVVM的思想：严格的MVVVM要求View不能和Model直接通信，而Vue提供了$refs这个属性，让Model可以直接操作View，违反了这一规定，所以是Vue没有完全遵循MVVM。

### 为什么data是一个函数

组件data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件都会返回一个新的data，类似给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。

### vue组件通讯方式有哪些方式

* props 和 $emit。父组件向子组件传递数据是通过props传递的，子组件传递给父组件是通过$emit触发事件来做到的。
* $parent 和 $children 获取单签组件的父组件和当前组件的子组件。
* $attrs 和 $listeners
* provide 和 inject; 父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。（官方不推荐在实际业务中适用，但是写组件库时很常用。）
* $refs 获取组件实例
* envetBus 兄弟组件数据传递，这种情况下可以使用事件总线的方式
* vuex 状态管理

### vue的生命周期

* beforeCreate: 在实例初始化之后，数据观测（data observe）和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed以及watch上的数据和方法都不能被访问
* created: 实例已经创建完成之后被调用。在这一步，实例已经完成以下的配置：数据观测（data observe）,属性和方法的运算，watch/event实践回调。这里没有$el，如果非要想与DOM进行交互，可以通过vm.$nextTick来访问DOM；
* beforeMount: 在挂载开始之前被调用：相关的 render 函数首次被调用;
* mounted:  在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom节点;
* beforeUpdate: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁 （patch）之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
* updated: 发生在更新完成之后，当前阶段组件 Dom 已经完成更新。要注意的是避免在此期间更新数据，因为这个可能导致无限循环的更新，该钩子在服务器渲染期间不被调用。
* beforeDestroy: 实例销毁之前调用。在这一步，实力仍然完全可用。我们可以在这时进行 善后收尾工作，比如清除定时器。
* destory:  Vue实例销毁后调用。调用后，Vue实例指示的东西都会解绑定，所有的事件监听器会被移除，左右的子实例也会被销毁，该钩子在服务器端渲染不被调用。
* activated  keep-alive 专属，组件被激活时调用
* deactivated keep-alive 专属，组件被销毁时调用

在 created 钩子函数中调用异步请求有以下优点：

* 能更快获取到服务端数据，减少页面loading时间；
* ssr 不支持 beforeMount、mounted 钩子函数，所以放在 created 中有助于一致性。

### v-if 和 v-show 区别

* v-if 编译的过程中会转化成三元表达式，若条件不满足时不渲染此节点
* v-show 会被编译成指令，条件不满足时候该节点会隐藏（`display:none`）

拓展补充：display: none、visibility: hidden 和 opacity: 0 区别？

| 属性 | 占据空间 | 继承 | 事件绑定 | 过度动画 |
| ---- | ---- | ---- | ---- | ---- |
| display: none | 隐藏之后不占据空间 | 不会被子元素继承 | 无法触发绑定事件 | ransition对于display是无效的 |
| visibility: hidden | 隐藏之后会占据空间 | 会被子元素继承，可以通过设置子元素 visibility:visible来显示 | 不会触发绑定事件 | ransition对于visibility是无效的 |
| opacity: 0 | 隐藏之后会占据空间 | 会被子元素继承，但是不能通过设置opacity:1来重新显示 | 可以触发绑定事件 | transition对于opacity是有效的 |

### 内置指令

* v-once
* v-cloak
* v-bind
* v-on
* v-html
* v-text
* v-model
* v-if/v-else/v-else-if
* v-show
* v-for
* v-pre

### 怎样理解 Vue 的单项数据流

数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父组件的状态，从而导致你的应用的数据流向难以理解。

### computed 和 watch 的区别

* watch 是监听的值发生变化就 会执行的回调
* computed 是计算属性，依赖的是计算内容，如果计算的内容发生变化就会执行

### v-if 和 v-for 为什么不建议一起使用
v-for和v-if不要在同一标签中使用，因为解析时先解析v-for在解析v-if。如果遇到需要同时使用时可以考虑写成计算属性的方式。

### vue2.0 响应式数据的原理
1. object.defineProperty 数据劫持
2. 使用getter收集依赖，setter通知watcher派发更新
3. watcher发布订阅模式

### vue如何检测数组变化

数组考虑性能的问题没有用definePropety对数组的每一项进行拦截，而是选择对7种数组方法进行重写（push shift pop unshift splice reserve sort），需要通过以上7种变异方法修改数组才会触发数组对应的watcher进行更新。

### 对vue3.0的了解

* 使用 proxy 取代 object.defineProperty
* 组件选项声明方式：vue3.x使用 Composition API
* 模板语法变化：slot具名插槽语法，自定义指令v-model升级

### 父子组件生命周期钩子函数执行顺序

* 加载渲染过程：父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted
* 子组件更新过程：父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated
* 父组件更新过程：父beforeUpdate -> 父updated
* 销毁过程：父beforeDestory -> 子beforeDetory -> 子destory -> 父destoryed

### 虚拟DOM

::: tip 定义
虚拟DOM本质就是用一个原生的JS对象去描述一个DOM节点
:::

优点:
1. 保证性能下限
2. 无需手动操作DOM
3. 跨平台

### v-model原理

v-model 只是语法糖而已。
v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件。
* text 和 textarea 元素使用 value property 和 input 事件；
* checkbox 和 radio 使用 checked property 和 change事件；
* select 字段将 value 作为 prop 并将 change 作为事件。

::: warning 注意
对于需要使用输入法的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。
:::

在普通元素上： `input v-model='sth'
input v-bind:value='sth' v-on:input='sth = $event.target.value'`

### v-for 为什么要加key

key是为vue中vnode的唯一标识，可以通过这个key，diff操作可以更准确、更快速，可以提高性能。


### vue事件绑定原理

Vue中通过v-on或其语法糖@指令来给元素绑定事件并且提供了事件修饰符，基本流程是进行模板编译生成AST，生成render函数后并执行得到VNode，VNode生成真实DOM节点或者组件时候使用addEventListener方法进行事件绑定。

### vue-router 路由钩子函数
::: tip 种类
全局守卫、路由守卫、组件守卫
:::
导航解析流程：
1. 导航被触发。
2. 在失活的组件里调用 beforeRouterLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件调用 beforeRouterUpdate 守卫（2.2+）。
5. 在路由配置里面 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouterEnter。
8. 调用全局的 beforeResolve 守卫（2.5+）。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 调用 beforeRouterEnter 守卫中传给next的回调函数，创建好的组件实例会作为回调函数的参数传入。


### vue-router动态路由

经常需要把某种模式匹配到所有的路由，全部映射到同个组件。
```javascript
new VueRouter({routes: [{path: '/user/:id', component: User}]})
```
问题：vue-router组件复用导致路由参数失效怎么办？
解决方案：
1. 通过watch监听路由参数，并根据参数加载重新数据
  缺点：组件被重新渲染，组件上的内容随路由参数变化而丢失。如果不想每次切换页面的时候重新渲染，需要另找办法。
  ```javascript
  watch: {
    "$route": function () {
      let dataId = this.$route.params.dataId;
      this.initData(dataId);
    }
  }
  ```
2. router-view key：将router-view的key设置为`$route.fullPath`，由于前后两个路由的$route.fullPath并不一样, 组件不会被强制复用。
  ```javascript
  <keep-alive>
    <router-view :key="key"></router-view>
  </keep-alive>

  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name : this.$route
    }
  }
  ```

### vuex的理解

vuex是专门为vue提供的全局状态管理系统，用于多个组件中数据共享、数据缓存等。

包括如下模块：
* state: 定义应用状态的数据结构，可以在这里设置默认初始化状态
* getter: 允许组件从store中获取数据，mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性
* mutation: 唯一更改store中状态的方法，且必须是同步函数
* action: 用于提交mutation，而不直接变更状态，可以包含任意异步请求
* module: 允许将单一的store拆分更多个store且同时保存在单一的状态树种。

### vuex分模块并且加命名空间

* 模块: 若将所有的状态集中在一个比较大的对象中，当应用变得复杂时候，store对象有可能就会变得相当臃肿。为了解决以上问题，vuex允许将store分割成模块，每个模块都有自己的state、mutation、action和getter
* 命名空间: 默认情况下，模块内部的action、mutation、getter是注册在全局命名空间，若需提高模块的封装度和复用性，通过添加`namespaced: true`的方式使其成为带命名的模块，当模块被注册后，随之getter、action、mutation都会自动根据模块注册的路径调整命名

### 对 vue ssr 的理解

::: tip 定义
SSR就是服务端渲染，就是将vue在客户端把标签渲染成html的工作放在服务器完成，在把html直接返回客户端;
:::

**优点**：SSR有着更好的SEO、并且首屏加载速度更快 <br/>
**缺点**：开发条件受限制，服务器端渲染只支持beforeCreate和created两个钩子，若需要一些外部拓展库的时候需要特殊处理，服务端渲染应用程序也需要处理node.js的运行环境。服务器会有更大的负载需求。

### vue 中使用了哪些设计模式？
1. 工厂模式 - 传入参数即可创建实例
虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode。

2. 单例模式 - 整个程序有且仅有一个实例
vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉。

3. 发布-订阅模式。（vue 事件机制）

4. 观察者模式。（响应式数据原理）

5. 装饰器模式（@装饰器的用法）

6. 策略模式，策略模式指对象有某个行为，但是在不同的场景中，该行为有不同的实现方案 - 比如选项的合并策略。

### Vue 的性能优化

* 不需要响应式的数据不要放在 data 中（可以使用 Object.freeze() 冻结数据）
* v-if 和 v-show 区分使用场景
* computed 和 watch 区分场景使用
* v-for 遍历必须加 key，key最好是id值，且避免同时使用 v-if
* 大数据列表和表格性能优化 - 虚拟列表 / 虚拟表格
* 防止内部泄露，组件销毁后把全局变量和时间销毁
* 图片懒加载
* 路由懒加载
* 异步路由
* 第三方插件的按需加载
* 适当采用 keep-alive 缓存组件
* 防抖、节流的运用
* 服务端渲染 SSR or 预渲染

### vue.mixin使用场景和原理

在不同组件中经常用到一些相同或者相似的代码，这些代码的功能相对独立，可以通过vue的mixin功能抽离公共逻辑，当组件促使化时会调用mergeOptions方法进行合并，采用策略模式针对不同的属性进行合并。

### nextTick使用场景和原理

nextTick中的回调是在下次DOM更新循环结束之后执行的延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。主要思路就是采用微任务优先的方式调用异步方法去执行nextTick包装的方法。

### keep-alive使用场景和原理

keep-alive是 Vue 内置的一个组件，可以实现组件缓存，当组件切换时不会对当前组件进行卸载。
* 常用的属性：include/exclude，运行组件有条件的进行缓存；
* 声明周期 activated/deactivated;
* keep-alive运用LRU算法，选择最近最久未使用的组件予以淘汰

拓展补充：LRU算法是什么？
1. 将新数据从尾部插入到`this.keys`中
2. 每当缓存命中，将数据移动到`this.keys`的尾部
3. 当`this.keys`满的时候，将头部的数据丢弃

### vue.set 方法原理

::: tip vue.set原理
响应式数据，给对象和数组本身新增了__ob__属性，代表的是 Observe 实例。当给对象新增不存在的属性，首先会把新的属性进行响应式跟踪 然后会触发对象__ob__的dep收集到watcher去更新，当修改数组索引时候会调用数组本身的splice方法去更新数组
:::

有两种情况下修改vue是不会触发视图更新
1. 在实例创建之后添加新的属性到实例上（给响应式对象新增属性）
2. 直接更改数组下标来修改数组的值

使用方法：
`this.$set(this.student,"age", 24) Vue.set(Vue.set(app.data, 'b', 2))`

### vue.extend 作用和原理

::: tip 原理
使用基础 vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象
:::

实现思路：使用原型继承的方法返回vue的子类，并且利用mergeOptions把传入组件的options就和父类的options进行了合并。

### 自定义指令及其原理

如何进行自定义指令？
```javascript
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当被绑定的元素插入到DOM中
  inserted: function (el) {
    el.foucus()
  }
})

// 注册局部指令
directive: {
  foucs: {
    inserted: function (el) {
      el.foucs()
    }
  }
}
```

::: tip 指令内部提供的钩子函数
bind: 可以进行一次性的初始化设置 <br/>
inserted: 被绑定的元素插入父节点调用 <br/>
update: vnode更新时调用<br/>
componentUpdated: vnode及其子vnode全部更新后调用<br/>
unbind: 指令与元素解绑时候调用
:::

**原理:**

1. 在生成 ast 语法树时，遇到指令会给当前元素添加 directives 属性
2. 通过 genDirectives 生成指令代码
3. 在 patch 前将指令的钩子提取到 cbs 中，在 patch 过程中调用对应的钩子。
4. 当执行指令对应钩子函数时，调用对应指令定义方法。


### vue模板编译原理

Vue 的编译过程就是将 template 转化为 render 函数的过程
1. 模板字符串转换成 element ASTs（解析器）
2. 对 AST 进行静态节点标记，主要用来做虚拟 DOM 的渲染优化（优化器）
3. 使用element ASTs 生成 render 函数代码字符串（代码生成器）

### 生命周期钩子是如何实现

Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的生命周期钩子订阅好（内部采用数组的方法存储）然后在创建组件实例的过程中会一次执行对应的钩子方法（发布）

### 函数式组件使用场景和原理

函数式组件与普通组件的区别

1. 函数式组件需要在声明组件时指定 functional:true
2. 不需要实例化，所以没有this，this通过render函数的第二个参数context代替
3. 没有生命周期钩子函数，不能使用计算属性，watch
4. 不能通过$emit对外暴露事件，调用事件只能通过context.listeners.click的方式调用外部传入的事件
5. 因为函数组件时没有实例化的，所以在外部通过ref去引用组件时，实际引用的是HTMLElement
6. 函数式组件的props可以不用显示声明，所以没有在props里面声明的属性都会被自动隐式解析为prop，而普通的组件所有未声明的属性都解析到$attrs里面，并自动挂载到组件根元素上（可以通过inheritAttrs属性禁止）

```vue
<template functional>
  <div>
    <i class="el-icon-time"></i>
    <span style="margin-left: 10px; color: blue;">{{ props.row.date }}</span>
  </div>
</template>
```

```javaScript
Vue.component('my-component', {
  functional: true,
  props: {
  },
  render: function (createElement, context) {
  }
})
```

<span style="color: green;font-weight: 500">优点</span>
1. 由于函数式组件不需要实例化，无状态，没有生命周期，所以渲染性能要好于普通组件 
2. 函数式组件结构比较简单，代码结构更清晰

**使用场景** 一些详情页面，列表界面等，它们有一个共同的特点是只需要将外部传入的数据进行展现，不需要有内部状态，不需要在生命周期钩子函数里面做处理，这时候你就可以考虑使用函数式组件。

### vue-router中常用的路由模式和实现原理

***hash模式*** (兼容性好但是不美观)
1. location.has 的值实际就是 URL 中 # 后面的东西。它的特点在于：hash虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
2. 可以为 hash 的改变添加监听事件
`window.addEventListener("hashchange",funcRef,false)`
每一次改变 hash (window.location.hash)，都会在浏览器的访问历史中增加一个记录，利用hash的以上特点，就可以实现前端路由“更新视图但不重新请求页面”的功能了

***history 模式*** (虽然美观，但是刷新会出现 404 需要后端进行配置)
 pushState() 和 replaceState() 。这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础上，他们提供了对历史记录进行修改的功能。这两个方法有个共同点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页面应用前端路由“更新视图但不重新请求页面”提供了基础

### diff算法理解
diff算法采用同级比较

## React 🚩

### 对“在react中，一切都是组件”的理解

在 React 中，组件是 React 应用程序的构建块。这些组件将整个 React 应用程序的 UI 划分为小的、独立的、可重用的代码片段。React 独立渲染这些组件中的每一个，而不会影响应用程序 UI 的其余部分。因此，可以说，在 React 中，一切都是组件。
### react的优势和缺点
<span style="color: green; font-weight: 500">优点</span>
* react提供了良好的文档、教程和培训资源

<span style="color: red; font-weight: 500">缺点</span>
* react是一个库，不是个完整的框架
* react有一个庞大的库，需要时间去理解
* react使用内联模板和JSX，会让编码变得复杂

### JSX是什么

JSX 是JavaScript XML 的简写。是 React 使用的一种文件，它利用 JavaScript 的表现力和类似 HTML 的模板语法。这使得 HTML 文件非常容易理解。此文件能使应用非常可靠，并能够提高其性能。

### 浏览器为什么不能读取JSX

浏览器不能直接读取JSX，只能理解JavaScript对象，而JSX不是常规的JavaScript对象。因此需要使用Babel等转译器将JSX文件转换成JavaScript对象，然后将其传递给浏览器。

### 为什么要使用JSX

它比常规 JavaScript 更快，因为它在将代码转换为 JavaScript 时执行优化。SX是类型安全的，大部分错误都可以在编译时发现。JSX使创建模板变得更加容易。

### React 中 render() 的用途

### 无状态组件和有状态组件的区别


### React 事件机制

React并不是将click事件绑定到了div的真实DOM上，而是在document处监听了所有的事件，当事件发生并且冒泡到document处的时候，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅仅减少了内存的消耗，还能在组件挂在销毁时统一订阅和移除事件。

### 区分有状态和无状态组件


## TypeScript 🚩

## 小程序 🚩

### 微信小程序的相关文件类型

微信小程序项目目录结构主要有四个文件类型：
* wxml
* wxss
* js
* json
* app.json
* app.js
* app.wxss

### 小程序的双向绑定和vue哪里不一样

小程序直接 this.data 的属性是不可以同步到视图的，必须通过 `this.setData({})`

### 小程序的生命周期函数

* onLoad: 页面加载时触发
* onShow: 页面显示/切入前台时触发
* onReady: 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
* onhide: 页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
* onUnload: 页面卸载时触发。如 redirectTo 或 navigateBack 到其他页面时

### 微信小程序的优劣势
<span style="color: green;font-weight: 500">优势</span>

* 即用即走，不用安装，省流量，省安装时间，不占用桌面
* 依托微信流量，天生推广传播优势
* 开发成本比 App 低

<span style="color: red;font-weight: 500">缺点</span>

* 用户留存，即用即走是优势，也存在一些问题
* 入口相对传统 App 要深很多
* 限制较多,页面大小不能超过2M。不能打开超过10个层级的页面

### 常用指令

wx:if wx:for

### 简述路由跳转
* wx.navigateTo()：保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
* wx.redirectTo()：关闭当前页面，跳转到新的页面（类似重定向）。但是不允许跳转到 tabbar 页面
* wx.switchTab()：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
* wx.navigateBack():关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层
* wx.reLaunch()：关闭所有页面，打开到应用内的某个页面


### bindtap和catchtap的区别
* 相同点：首先他们都是作为点击事件函数，就是点击时触发。在这个作用上他们是一样的，可以不做区分
* 不同点：他们的不同点主要是bindtap是不会阻止冒泡事件的，catchtap是阻值冒泡的


### 如何实现下拉刷新
首先在全局 config 中的 window 配置 enablePullDownRefresh <br/>
在 Page 中定义 onPullDownRefresh 钩子函数,到达下拉刷新条件后，该钩子函数执行，发起请求方法 <br/>
请求返回后，调用 wx.stopPullDownRefresh 停止下拉刷新 <br/>



## 浏览器 🚩

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

## 前端工程化 🚩

### webpack 理解

webPack是代码打包工具，存在出口、入口、loader和插件。webpack是一个用于现代JavaScript应用程序的静态模块打包工具	<br>

1. loader: 它是一个转换器，将文件A转换陈文件B
2. plugin: 它是一个拓展器，丰富了webpack本身，针对的是loader结束后，webpack打包整个过程，它不直接操作文件，而是基于事件机制工作，会监听打包过程中的节点，执行广泛任务。

## 算法题 🚩

