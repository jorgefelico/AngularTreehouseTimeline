var gulp = require('gulp');
var sass = require('gulp-sass');
var jsminify = require('gulp-minify');

gulp.task('scss', function(){
  gulp.src('./sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function(){
  return gulp.src('./js/*.js')
  .pipe(gulp.dest('./public/js'));
});

gulp.task('default', function(){

  gulp.watch('./sass/*.scss', ['scss']);
  gulp.watch('./js/*.js', ['js']);

});
