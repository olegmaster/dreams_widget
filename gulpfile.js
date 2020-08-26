const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

function style() {
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./less/**/*.less', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;