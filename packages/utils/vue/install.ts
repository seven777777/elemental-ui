import { NOOP } from '@vue/shared';
import type { Plugin } from 'vue';
// 通过 Vue 提供的 Plugin 类型和传进来的组件类型 T 的集合进行确定我们的组件类型具有 Plugin 类型方法，如 install 方法
export type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = function (app) {
        // 动态设置组件的名称
        const { name } = comp as unknown as { name: string };
        app.component(name, comp as SFCWithInstall<T>);
    };
    return comp as SFCWithInstall<T>;
};

export const withNoopInstall = <T>(component: T) => {
    // NOOP 其实就是 () => void 表示不返回任何内容的函数
    (component as SFCWithInstall<T>).install = NOOP;

    return component as SFCWithInstall<T>;
};
