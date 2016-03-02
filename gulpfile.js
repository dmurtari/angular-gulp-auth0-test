var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var Server = require('karma').Server;

gulp.task('default', ['dev'])

gulp.task('lint', function() {
  gulp.src([
    './app/src/**/*.js',
    '!./app/src/**/*.spec.js'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
  gulp.src(['app/src/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist/src'))
  .pipe(refresh(lrserver));
});

gulp.task('watch', ['lint'], function() {
  gulp.watch(['app/src/*.js', 'app/src/**/*.js'],[
    'lint',
    'browserify'
  ]);
  gulp.watch(['app/index.html', 'app/src/**/*.html'], [
    'views'
  ]);
});

gulp.task('clean', function() {
  return gulp.src('dist', {read: false, force: true})
  .pipe(clean());
});

gulp.task('views', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('dist/'))
  .pipe(refresh(lrserver));

  gulp.src('app/src/**/*.html', {base: 'app'})
  .pipe(gulp.dest('dist/'))
  .pipe(refresh(lrserver));
});

gulp.task('static', function() {
  gulp.src(['app/css/*', 'app/fonts/*', 'app/js/*'], {base: 'app'})
  .pipe(gulp.dest('dist/'))
  .pipe(refresh(lrserver));
})

var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 3000;

var server = express();
server.use(livereload({port: livereloadport}));
server.use(express.static('./dist'));

gulp.task('dev', ['static', 'browserify', 'views'], function() {
  server.listen(serverport);
  lrserver.listen(livereloadport);
  gulp.run('watch');
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  }, done).start();
});
