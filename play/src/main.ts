import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElementalUi from 'elemental-ui';
import '@elemental-ui/theme-chalk/src/index.scss';

const app = createApp(App);
app.use(ElementalUi);
app.mount('#app');
