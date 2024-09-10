import { DefaultTheme } from 'vitepress';
export default {
    '/guide': [
        {
            text: '指南',
            items: [
                { text: '安装', link: '/guide/install' },
                { text: '快速开始', link: '/guide/quick-start' },
            ],
        },
    ],
    '/components': [
        {
            text: 'Form 表单组件',
            items: [{ text: 'Button', link: '/components/button/button' }],
        },
    ],
} as DefaultTheme.Sidebar;
