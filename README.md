# vue2stone

[![npm](https://img.shields.io/badge/npm-v4.2.0-blue.svg)](https://www.npmjs.com/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


> A Vue.js 2.0 Component library（by the way, add some common function）

## Links
* <a href="https://github.com/yuanhaoyu/vue2stone"> github </a>
* <a href="https://www.npmjs.com/package/vue2stone"> npm </a>

## Install

```
 npm install vue2stone -S
``` 

## Quick Start

```javascript
 import vue2stone from 'vue2stone'

 import Css from 'vue2stone/dist/vue2stone.min.css'

 Vue.use(vue2stone)
```


## How to use?
1.Progress bar

```
<s-progress :width="mywidth+'%'"></s-progress>
// mywidth is a string,That means the current progress
```

2.Star

```
<s-star :count="this.myCount" :max="5"></s-star>
// count meaning this star's number
// max meaning all star's number
```

3.Wait 1

```
<s-loading></s-loading>

```

4.Wait 2

```
<s-circle></s-circle>
```

5.Selector

```
<s-select :lists="['xiaoming', 'xiaohong']"></s-select>
// lists meaning a Array
```
8.Switch

```
<s-switch :inColor="'white'" :outColor="'black'"></s-switch>
// inColor is circle's color
// outColor is out's color
```

7.Toast

```
this.$toast.show({msg: 'this a toast'}) 
this.$toast.hide()
// maybe you need be careful msg's length
```

## priview
[![vue2stone](http://www.llamastudio.cn/photo/vue2stone.gif)]()

## Future
more components , more friendly , more common function

