import { defineConfig } from 'vitepress';
import head from './config/head';
import nav from './config/nav';
import sidebar from './config/sidebar';

const env = process.env.NODE_ENV;
// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: env === 'production' ? '/elemental-ui/' : '/',
    lastUpdated: true,
    lang: 'zh-CN',
    cleanUrls: true, // 简洁化URL
    title: 'elemental-ui',
    description: '一个好用的前端组件库~',
    head,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon-32x32.png', //请注意，应使用根绝对路径来引用放置在 public 中的文件——例如，public/icon.png 应始终在源代码中使用 /icon.png 引用
        nav,
        sidebar,
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/seven777777/elemental-ui',
            },
        ],
    },
});
