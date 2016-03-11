var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver')

gulp.task('jade', function() {
    gulp.src('./templates/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'))
})

gulp.task('sass', function() {
    gulp.src('./sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'))
})

gulp.task('webserver', function() {
  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }))
})


gulp.watch('./templates/**/*.jade', ['jade'])
gulp.watch('./sass/**/*.scss', ['sass'])

gulp.task('default', ['jade', 'sass', 'webserver'])
