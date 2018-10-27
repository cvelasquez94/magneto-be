const gulp = require('gulp');
const config = require('./config.json');

gulp.task('eslint', () => {
    const eslint = require('gulp-eslint');

    return gulp.src(config.eslint.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
