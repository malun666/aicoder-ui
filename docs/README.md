# AIcoder-ui

## 安装

```shell
npm install aicoder-ui -S
```

---

## 快速使用

- 在 main.js 中配置

```javascript
import Vue from "vue";
import AicoderUI from "aicoder-ui";

Vue.use(AicoderUI);

// or
import {
  Button
  // ...
} from "aicoder-ui";

Vue.component(Button.name, Button);
```

---

# 组件

- ## button 按钮

```javascript
<Button type="is-danger" ButtonTitle="成功" />
```

属性:

- **ButtonTitle** : 用户传入的按钮文字

* **type** : 用户传入的按钮类型

属性 | 类型 | 说明
---------| |-------------
**is-danger** | String | 删除类型
**is-info** | String | 普通类型
**is-success** | String | 成功类型
**is-warning** | String | 警告类型

---

- ## input 输入框

```javascript
<Input disabled clearable />
```

- **普通文本框**

属性 | 类型 | 说明
---------| |-------------
**disabled** | Boolean | 设置是否可用
**clearable** | Boolean | 设置文本框清空按钮
**showPassword** | Boolean | 设置文本框为密码框

---

```javascript
<Input  showSearch @AI-search="searchdemo" />
```

- **搜索查询框**

属性 | 类型 | 说明
---------| |-------------
**showSearch** | Boolean | 搜索框类型
**@AI-search** | 事件 | 搜素按钮点击触发的事件

---

- ## Collapse 折叠面板

```javascript
<Collapse ConciseMode>
  <Panel PanelTitle="1">这是一段简单文本</Panel>
  <Panel PanelTitle="2" />
  <Panel PanelTitle="3" />
</Collapse>
```
- **折叠面板属性**

属性 | 类型 | 说明
---------| |-------------
**ConciseMode** | Boolean | 折叠面板设置简洁模式
