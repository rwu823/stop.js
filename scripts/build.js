import gu from 'gulp'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import babel from 'gulp-babel'

gu.src('src/index.js')
  .pipe(babel())
  .pipe(rename('stop.js'))
  .pipe(gu.dest('dist'))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gu.dest('dist'))
