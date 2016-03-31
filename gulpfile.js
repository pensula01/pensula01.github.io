var gulp      = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concat    = require('gulp-concat');
var rename    = require('gulp-rename');

gulp.task('compressCSS', function () {
    gulp.src(['src/typo.css','src/fontello.css','src/style.css'])
        .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch(['src/css/*.css'], ['compressCSS']);
});

gulp.task('default', ['compressCSS', 'watch']);
