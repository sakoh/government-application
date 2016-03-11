var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

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

gulp.watch('./templates/**/*.jade', ['jade'])
gulp.watch('./sass/**/*.scss', ['sass'])

gulp.task('default', ['jade', 'sass'])
