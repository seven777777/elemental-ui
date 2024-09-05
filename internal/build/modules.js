import { rollup } from 'rollup';
import vue from '@vitejs/plugin-vue';
import VueMacros from 'unplugin-vue-macros/rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import glob from 'fast-glob';

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = dirname(__filenameNew);

const projRoot = resolve(__dirnameNew, '..', '..');
const pkgRoot = resolve(projRoot, 'packages');

/** `/dist` */
const buildOutput = resolve(projRoot, 'dist');
/** `/dist/elemental-ui` */
const etOutput = resolve(buildOutput, 'elemental-ui');
const etRoot = resolve(pkgRoot, 'elemental-ui');

const excludeFiles = (files) => {
    const excludes = ['node_modules'];
    return files.filter(
        (path) => !excludes.some((exculde) => path.includes(exculde))
    );
};

// 模块化打包任务函数
export const buildModules = async () => {
    const input = excludeFiles(
        await glob('**/*.{js,ts,vue}', {
            cwd: pkgRoot,
            absolute: true, // 返回绝对路径
            onlyFiles: true, // 只返回文件的路径
        })
    );
    const bundle = await rollup({
        input,
        plugins: [
            // 配置插件
            VueMacros({
                plugins: {
                    vue: vue(),
                },
            }),
            nodeResolve({
                extensions: ['.ts'],
            }),
            replace({
                'process.env.NODE_ENV': '"production"',
                preventAssignment: true, // 这个选项用于防止在字符串后面紧跟一个等号时进行替换。可以用于避免错误的赋值操作
            }),
            esbuild(),
        ],
        external: [
            'vue',
            '@vue/shared',
            '@element-plus/icons-vue',
            '@vueuse/core',
            'async-validator',
        ],
    });
    bundle.write({
        format: 'esm', // 配置输出格式
        dir: resolve(etOutput, 'es'), // 配置输出目录
        preserveModules: true, // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk
        preserveModulesRoot: etRoot,
        entryFileNames: `[name].mjs`, // [name]：入口文件的文件名（不包含扩展名），也就是生产 .mjs 结尾的文件
    });
    bundle.write({
        format: 'cjs', // 配置输出格式
        dir: resolve(etOutput, 'lib'), // 配置输出目录
        preserveModules: true, // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk
        preserveModulesRoot: etRoot,
        entryFileNames: `[name].cjs`, // [name]：入口文件的文件名（不包含扩展名），也就是生产 .cjs 结尾的文件
    });
};
// buildModules();
