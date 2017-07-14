const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('rename');

gulp.task('html', () => {
    gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
    gulp.watch('pug/*.pug', ['html']);
});