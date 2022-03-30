const gulp = require('gulp');
const { parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;

function serve() {
   browserSync.init({
      server: {
         baseDir: "./",
         port: 9000
     }
   });
}

function build() {
   return gulp
   .src('scss/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError)
   )
   .pipe(autoprefixer())
   .pipe(csscomb())
   .pipe(gulp.dest('css/'))
   .pipe(cleancss())
   .pipe(rename({ suffix: '.min' }))
   .pipe(gulp.dest('css/'))
   .pipe(browserSync.stream());
   
};

function watch() {
   gulp.watch('scss/**/*.scss', parallel(build)).on("change", reload);
 }

exports.build = build;
exports.watch = watch;
exports.serve = serve;
exports.default = build;