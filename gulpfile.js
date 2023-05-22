var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');


// Nunjucks task.
gulp.task('nunjucks', function () {
  return gulp.src('contents/pages/**/*.+(html|nunjucks)')
    .pipe(nunjucksRender({
      path: ['src/templates']
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-assets', function(done) {
    // Copy image files
    gulp.src('contents/images')
        .pipe(gulp.dest('build/images'));
    
    done();
});

gulp.task('default', gulp.series('nunjucks'));
