const { series, src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass')); // 确保sass是Dart Sass
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer'); // 从PostCSS获取autoprefixer
const cssnano = require('cssnano'); // 用于压缩CSS，替代gulp-cssmin

function compile() {
    return src('./src/**/*.scss')
        .pipe(sass()) // 异步转换SCSS到CSS
        .pipe(
            postcss([
                autoprefixer({
                    cascade: false,
                }),
                cssnano(), // 压缩CSS
            ])
        )
        .pipe(dest('./lib')); // 输出到lib文件夹
}

function copyFiles() {
    return src('./lib/**/*.css').pipe(
        dest('../../dist/elemental-ui/theme-chalk')
    );
}
function copyCoreFile() {
    return src('./lib/index.css').pipe(dest('../../dist/elemental-ui/dist'));
}

exports.build = series(compile, parallel(copyFiles, copyCoreFile));
