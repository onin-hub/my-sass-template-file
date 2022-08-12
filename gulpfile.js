const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss'); //purgecss removes unused css base in the html while compiling

//compile sass to css
function compileSass() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ //purgecss removes unused css base in the html while compiling
            content: ['views/**/*.html']
        }))
        .pipe(dest('public/dist/css'));
}

//watch for changes
function watchTask() {
    watch(['sass/**/*.scss','src/sass/**/*.scss', 'views/**/*.html'], compileSass);
}

//run the function just typing gulp in the terminal
exports.default = series(compileSass, watchTask);