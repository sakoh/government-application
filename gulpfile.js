var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver')

gulp.task('jade', function() {
    gulp.src('./templates/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'))

    gulp.src('./assets/**/*/**/*')
        .pipe(gulp.dest('build/assets'))
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
// gulp.watch('./sass/**/*.scss', ['sass'])

gulp.task('default', ['jade', 'webserver'])
