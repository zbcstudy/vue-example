#Vue

## 由Vue管理的函数一定不能使用箭头函数 一旦使用箭头函数 this就不再是Vue实例了

## Vue模板语法
### 插值语法
    用于解析标签体内容 {{msg}}
### 指令语法
    用于解析标签 （标签属性 绑定事件 标签体内容）
    v-bind:href='' 简写 ：href=''

## 数据绑定
### 单向绑定
    v-bind
### 双向绑定
    v-model 只能用于表单元素绑定 用于数据交互
