import { DefaultTheme } from 'vitepress';
export default [
    { text: '指南', link: '/guide/install' },
    { text: '组件', link: '/components/' },
    {
        text: '更多',
        items: [
            { text: 'Blog', link: 'https://seven777777.github.io/myblog/' },
        ],
    },
] as DefaultTheme.NavItem[];
