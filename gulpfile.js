var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    yaml = require('js-yaml'),
    fs = require('fs')

gulp.task('jade', function() {
    var content = yaml.safeLoad(fs.readFileSync('./content.yml', 'utf8'));

    gulp.src('./templates/index.jade')
        .pipe(jade({
          locals: content
        }))
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
