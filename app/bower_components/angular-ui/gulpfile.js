// independencies
var gulp          = require('gulp'),
    gulputil      = require('gulp-util'),
    watch         = require('gulp-watch'),
    cssmin         = require('gulp-cssmin'),
    uglify         = require('gulp-uglify'),
    rename         = require('gulp-rename'),
    concat         = require('gulp-concat');


gulp.task('concat', function(){
    return gulp.src(['src/intro.js', 'src/directive/draggable.js', 'src/directive/resizable.js', 'src/outro.js'])
               .pipe(concat('angular-ui.js'))
               .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function(){
    gulp.watch('src/directive/*.js', ['concat']);
});

gulp.task('build', function(){
    gulp.src('dist/*.js').pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('build'));
});

gulp.task('default', ['watch']);