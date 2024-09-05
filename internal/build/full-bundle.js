import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';
import VueMacros from 'unplugin-vue-macros/rollup';

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = dirname(__filenameNew);

// 确定根目录，目前执行目录是在./internal/build,所以需要跳出两层
const projRoot = resolve(__dirnameNew, '..', '..');
// 拼接./packages目录路径
const pkgRoot = resolve(projRoot, 'packages');
// 拼接./packages/elemental-ui目录路径
const etRoot = resolve(pkgRoot, 'elemental-ui');
// 拼接 ./packages/elemental-ui/index.ts 目录路径
// resolve(etRoot, 'index.ts')

// 拼接打包根目录
const buildOutput = resolve(projRoot, 'dist');
// 拼接包目录
const etOutput = resolve(buildOutput, 'elemental-ui');

export const buildFullEntry = async () => {
    const bundle = await rollup({
        input: resolve(etRoot, 'index.ts'), //配置入口文件
        plugins: [
            // 配置插件
            vue(),
            nodeResolve({
                extensions: ['.ts'],
            }),
            esbuild(),
            replace({
                'process.env.NODE_ENV': '"production"',
                preventAssignment: true, //这个选项用于防止在字符串后面紧跟一个等号时进行替换。可以用于避免错误的赋值操作
            }),
            VueMacros({
                plugins: [{ vue: vue() }],
            }),
        ],
        // 排除不进行打包的npm包，例如Vue，以便减少包的体积
        external: ['vue'],
    });
    // 配置输出文件格式
    bundle.write({
        format: 'umd',
        file: resolve(etOutput, 'dist', 'index.full.js'),
        name: 'ElementalUI', //将整个组件库要设置一个变量名称：`ElementalUI`
        globals: {
            vue: 'Vue', // 组件中需要使用到的全局变量vue
        },
    });
};
// buildFullEntry();
