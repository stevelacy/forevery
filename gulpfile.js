var gulp = require('gulp');
var coffee = require("gulp-coffee");
var rename = require('gulp-rename');


gulp.task('coffee', function(){
  gulp.src('./src/index.coffee')
  .pipe(coffee())
  .pipe(rename('./forevery.js'))
  .pipe(gulp.dest('./'));
  gulp.src('./test/main.coffee')
  .pipe(coffee())
  .pipe(rename('main.js'))
  .pipe(gulp.dest('./test/browser/'));
});

gulp.task('watch', function(){
  gulp.watch(['./src/*.coffee', './test/*.coffee'], ['coffee']);
});
gulp.task('default', ['watch']);
