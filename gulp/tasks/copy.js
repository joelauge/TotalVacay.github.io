module.exports = function () {
    $.gulp.task('copy:img', () => {
        return $.gulp.src('./src/img/**/*')
            .pipe($.gulp.dest('./img/'));
    });

    $.gulp.task('copy:fonts', () => {
        return $.gulp.src('./src/fonts/*')
            .pipe($.gulp.dest('./fonts/'));
    });

    $.gulp.task('copy:lib', () => {
        return $.gulp.src('./src/js/lib/*')
            .pipe($.gulp.dest('./js/lib/'));
    });
};