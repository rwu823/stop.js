require('shelljs/global')
const { rollup } = require('rollup')
const babel = require('rollup-plugin-babel')
const fs = require('fs')
const pkg = require('../package.json')
const gu = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const size = require('gulp-size')

const copy = (file) => {
  fs.createReadStream(file)
    .pipe(fs.createWriteStream(`npm/${file}`))
}

rm('-rf', ['npm'])

rollup({
  entry: 'src/index.js',
  plugins: [
    babel()
  ],
})
.then((bundle) => {
  bundle.write({
    format: 'cjs',
    moduleName: 'Stop',
    dest: `npm/${pkg.main}`,
    globals: {
      setimmediate: 'setImmediate'
    }
  })

  copy('README.md')

  delete pkg.devDependencies
  delete pkg.scripts

  fs.writeFile('npm/package.json', JSON.stringify(pkg, null, 2), (err) => {

  })
})
.then(() => {
  gu.src('npm/dist/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gu.dest('npm/dist'))
    .on('finish', () => {
      gu.src('npm/**')
        .pipe(size({
          showFiles: true,
          pretty: true,
        }))
    })
})
