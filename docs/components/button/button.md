<script setup>
import demoBase from './demo/demo-base.vue'
import demoGroup from './demo/demo-group.vue'
import demoIcon from './demo/demo-icon.vue'
</script>

# Button 按钮

## 基本用法

### 类型

<demo-base />

::: details 点击查看代码

<<< @/components/button/demo/demo-base.vue

:::

### ButtonGroup 按钮组

<demo-group />

::: details 点击查看代码

<<< @/components/button/demo/demo-group.vue

:::

### ButtonIcon 按钮图标

<demo-icon />

::: details 点击查看代码

<<< @/components/button/demo/demo-icon.vue

:::

## Button Api

### 参数 - Attributes

| 参数        | 说明                     | 类型              | 可选值                                         | 默认值   |
| :---------- | :----------------------- | :---------------- | :--------------------------------------------- | :------- |
| type        | 类型                     | string            | primary, success, warning, danger, error, info | -        |
| size        | 尺寸                     | string            | large, default, small                          | default  |
| disabled    | 是否禁用                 | boolean           | true,false                                     | false    |
| autofocus   | 原生 autofocus 属性      | boolean           | true,false                                     | false    |
| round       | 是否为圆角按钮           | boolean           | true,false                                     | false    |
| plain       | 是否为朴素按钮           | boolean           | true,false                                     | false    |
| plain       | 是否为朴素按钮           | boolean           | true,false                                     | false    |
| icon        | 图标组件                 | string/ Component | -                                              | -        |
| loading     | 是否加载中状态           | boolean           | true,false                                     | false    |
| loadingIcon | 自定义加载中状态图标组件 | string/ Component | -                                              | -Loading |

### 事件 - Events

| 事件名         | 说明                       | 参数   |
| -------------- | -------------------------- | ------ |
| ref            | 按钮 html 元素             | object |
| size           | 按钮尺寸                   | object |
| type           | 按钮类型                   | object |
| disabled       | 按钮已禁用                 | object |
| shouldAddSpace | 是否在两个字符之间插入空格 | object |

### 插槽 - Slot

| slot 名称 | 说明             |
| --------- | ---------------- |
| default   | 自定义默认内容   |
| loading   | 自定义加载中组件 |
| icon      | 自定义图标组件   |

## ButtonGroup Api

### 参数 - Attributes

| 参数 | 说明 | 类型   | 可选值                                         | 默认值  |
| :--- | :--- | :----- | :--------------------------------------------- | :------ |
| type | 类型 | string | primary, success, warning, danger, error, info | -       |
| size | 尺寸 | string | large, default, small                          | default |

### 插槽 - Slot

| slot 名称 | 说明           |
| --------- | -------------- |
| default   | 自定义默认内容 |
