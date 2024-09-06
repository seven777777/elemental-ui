import { App } from 'vue';
import Theme from 'vitepress/theme';
import ElementalUi from '../../../packages/elemental-ui';
import '../../../dist/elemental-ui/dist/index.css';

export default {
    ...Theme,
    enhanceApp({ app }: { app: App }) {
        app.use(ElementalUi); // 进行组件注册，这样我们可以直接在 markdown 中使用组件啦！
    },
};
