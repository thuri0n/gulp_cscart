var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    notify = require("gulp-notify"),
    uglify = require('gulp-uglify');

var local = {
    addons: 'cp_addon'
}

gulp.task('less', function() {
    return gulp.src('./css/addons/' + local.addons + '/assets/main.less')
        .pipe(less({}))
        .on("error", notify.onError({
            message: 'LESS mazafaka error: <%= error.message %>'
        }))
        .pipe(concat('common.css'))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./css/addons/' + local.addons))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify('css complete'));
});


gulp.task('js', function() {
    gulp.src('./js/addons/' + local.addons + '/assets/**/*.js')
        .pipe(concat('common.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./js/addons/' + local.addons))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify('js complete'));
});

gulp.task('imagemin', function() {
    gulp.src('./media/images/addons/' + local.addons + '/images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./media/images/addons/' + local.addons + '/images/'))
        .pipe(notify('imagemin complete'));
});
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost/test/",
        logLevel: 'debug',
        logConnections: true
    });
    gulp.watch("templates/**/*.tpl").on('change', reload);
});
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./media/images/addons/' + local.addons + '/sprites/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprites.less',
            cssFormat: 'less',
            imgPath: '../../../../media/images/addons/' + local.addons + '/sprite/sprite.png',
            algorithm: 'binary-tree',
            cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name
            }
        }));
    spriteData.img.pipe(gulp.dest('./media/images/addons/' + local.addons + '/sprite/'));
    spriteData.css.pipe(gulp.dest('./css/addons/' + local.addons + '/assets/sprites/'));
});
gulp.task('watch', function() {
    gulp.watch('./css/addons/' + local.addons + '/assets/**/*.less', ['less']);
    gulp.watch('./media/images/addons/' + local.addons + '/sprites/*.*', ['sprite']);
    gulp.watch('./media/images/addons/' + local.addons + '/images/*', ['imagemin']);
    gulp.watch('./js/addons/' + local.addons + '/assets/**/*.js', ['js']);
});
gulp.task('default', ['watch', 'browser-sync', 'less', 'sprite', 'imagemin', 'js']);
