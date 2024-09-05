import { copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { resolve, dirname, join } from 'path';

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = dirname(__filenameNew);
const projRoot = resolve(__dirnameNew, '..', '..');

const pkgRoot = resolve(projRoot, 'packages');
const etRoot = resolve(pkgRoot, 'elemental-ui');
const etPackage = resolve(etRoot, 'package.json');

/** `/dist` */
const buildOutput = resolve(projRoot, 'dist');
/** `/dist/elemental-ui` */
const etOutput = resolve(buildOutput, 'elemental-ui');

// 复制
export const copyFiles = () =>
    copyFile(etPackage, join(etOutput, 'package.json'));

// copyFiles();
