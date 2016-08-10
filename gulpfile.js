var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var replace = require('gulp-replace')
var rename = require('gulp-rename')
gulp.task('dev', function () {
  gulp.src(['./layout/layout_dev.ejs'])
    .pipe(replace('simple_script', 'js/simple_dev'))
    .pipe(rename({
      basename: 'layout'
    }))
    .pipe(gulp.dest('./layout/'))
  return gulp.src([
    './source/lib/zepto/zepto.js',
    './source/lib/zepto/fx.js',
    './source/lib/zepto/event.js',
    './source/js/simple.js'])
    .pipe(concat('simple_dev.js'))
    .pipe(gulp.dest('./source/js/'))
})
gulp.task('build', function () {
  gulp.src(['./layout/layout_dev.ejs'])
    .pipe(replace('simple_script', 'js/simple_build'))
    .pipe(rename({
      basename: 'layout'
    }))
    .pipe(gulp.dest('./layout/'))
  return gulp.src([
    './source/lib/zepto/zepto.js',
    './source/lib/zepto/fx.js',
    './source/lib/zepto/event.js',
    './source/js/simple.js'])
    .pipe(concat('simple_build.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./source/js/'))
})

gulp.task('watch', function () {
  gulp.watch('./source/js/simple.js', ['dev'])
})