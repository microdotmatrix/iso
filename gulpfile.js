const gulp = require('gulp');
const { parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

function build() {
   return gulp
   .src('scss/**/*.scss')
   .pipe(sass()
      .on('error', sass.logError)
   )
   .pipe(autoprefixer())
   .pipe(csscomb())
   .pipe(cleancss())
   .pipe(rename({
      suffix: '.min'
   }))
   .pipe(gulp.dest('css/'));
};

function watch() {
   gulp.watch('scss/**/*.scss', parallel(build));
 }

exports.build = build;
exports.watch = watch;
exports.default = build;