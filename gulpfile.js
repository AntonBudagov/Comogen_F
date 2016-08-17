var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

gulp.task('compress', function (cb) {
  var options = {
        compress: false
    };
  pump([
        gulp.src('app/js/*.js'),
        uglify({
          mangle: false,
          compress: true
         // output: { beautify: true }
         }),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('serve', function() {
  browserSync.init({
    server: "dist/"
  });
  return browserSync.watch('dist/').on('change', browserSync.reload);
});

gulp.task('jade', function() {
  return gulp.src('app/jade/*.jade').pipe(jade({
    pretty: true
  }).on('error', notify.onError())).pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('app/sass/*.sass').pipe(sass({
    //outputStyle: 'expanded'
    outputStyle: 'compressed'
  }).on('error', notify.onError())).pipe(autoprefixer('last 2 version', '> 1%', 'IE 9')).pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('app/jade/**/*.jade', ['jade']);
  gulp.watch('app/sass/*.sass', ['sass']);
  gulp.watch('app/js/*.js', ['compress']);
});

gulp.task('default', ['jade', 'sass', 'compress', 'watch', 'serve']);

//https://github.com/JeremyFagis