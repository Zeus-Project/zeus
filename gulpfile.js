var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');


gulp.task('styles', function() {
  return sass('zeus/sass/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('assets/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
    .pipe(notify({ message: 'Styles completados' }));
});

gulp.task('scripts', function() {
  return gulp.src('zeus/js/**/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(notify({ message: 'Scripts completados' }));
});

gulp.task('images', function() {
  return gulp.src('zeus/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/img'))
    .pipe(notify({ message: 'Images completado' }));
});

gulp.task('clean', function(cb) {
    del(['assets/css', 'assets/js', 'assets/img'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

gulp.task('watch', function() {
  gulp.watch('zeus/sass/**/*.scss', ['styles']);
  gulp.watch('zeus/js/**/*.js', ['scripts']);
  gulp.watch('zeus/img/**/*', ['images']);
});