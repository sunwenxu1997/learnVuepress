# Markdown 扩展

## 链接
### 内部链接
网站内部的链接，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。

以如下的文件结构为例：
<br>
```.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 `foo/one.md` 中：

``` markdown
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```
* [Home](/)
* [foo](/foo/)
* [指南 它是如何工作的？](./#它是如何工作的？)

### 链接的重定向

VuePress 支持重定向到干净链接。如果一个链接 `/foo` 找不到，VuePress 会自行寻找一个可用的 `/foo/` 或 `/foo.html`。反过来，当 `/foo/` 或 `/foo.html` 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 
[vuepress-plugin-clean-urls](https://vuepress.github.io/zh/plugins/clean-urls/)定制你的网站路径。

## 自定义容器
**输出**
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
## 代码块中的语法高亮

``` js
export default {
  name: 'MyComponent',
  // ...
}
```
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
除了单行以外，你也可指定多行，行数区间，或是两者都指定。

* 行数区间: 例如 `{5-8}`, `{3-10}`, `{10-17}`
* 多个单行: 例如 `{4,7,9}`
* 行数区间与多个单行: 例如 `{4,7-13,16,23-27,40}`
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
## GitHub 风格的表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji
:tada: :100:
你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji。

## 目录
[[toc]]

## 图片引入
![Image from alias](../images/hero.png)
# 123