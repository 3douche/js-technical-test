var gulp = require('gulp');
var gulpAutoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var gulpConcat = require('gulp-concat');
var gulpSourcemaps = require('gulp-sourcemaps');

var browserify = require('browserify');
var reactify = require('reactify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var watchify = require('watchify');


/**
 *
 * Function
 *
 **/
// Build javascript files with browserify, reactify and babelify
function compile(watch) {
    var plugin = [];
    if (watch) {
        plugin = [[watchify, { ignoreWatch: ['**/node_modules/**'] }]]
    }
    var bundler = browserify({
        entries: "./src/index.js",
        debug: true,
        cache: {},
        packageCache: {},
        plugin: plugin
    });

    function rebundle() {
        console.log('-> bundling...');
        return bundler.bundle()
            .on('error', function (err) {
                console.error(err);
            })
            .pipe(vinylSourceStream('build.js'))
            .pipe(vinylBuffer())
            .pipe(gulpSourcemaps.init({ loadMaps: true }))
            .pipe(gulpSourcemaps.write('./'))
            .pipe(gulp.dest('./build'));
    }

    if (watch) {
        bundler.on('update', function () {
            rebundle();
        });
        bundler.on("time", function (time) {
            console.log("   bundling done in " + time + "ms");
        });
    }
    return rebundle();
}

//Copy all static files
function materialLite() {
    return gulp.src([
        './node_modules/material-design-lite/material.min.js'])
        .pipe(gulp.dest('build/'))
}

function font() {
    return gulp.src([
        'src/assets/font/*'])
        .pipe(gulp.dest('build/font'))
}

function img() {
    return gulp.src([
        'src/assets/img/*'])
        .pipe(gulp.dest('build/img'))
}

function css(){
    return gulp.src([
        'src/css/*'])
        .pipe(gulp.dest('build/css'))
}


/**
 *
 * Task
 *
 **/

gulp.task('compile', function(){return compile();});

gulp.task('materialLite', function(){return materialLite();});

gulp.task('font', function(){return font();});
gulp.task('img', function(){return img();});
gulp.task('css', function(){return css();});

gulp.task('browsersync', function () {
    // Just want static server, no need for hot reload as of now
    return browserSync({
        server: {
            baseDir: '.'
        },
        notify: false
    });
});


gulp.task('build', gulp.parallel([
    'compile',
    'materialLite',
    'font',
    'img',
    'css'
]));

gulp.task('watch', function () {
    compile(true);
    materialLite();
    font();
    img();
    css();
    gulp.watch('src/css/*.css', css);
});

gulp.task('default', gulp.parallel('watch', 'browsersync'));