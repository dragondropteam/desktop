/**
 * @file Builds the compressed files
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2018
 */

const gulp = require('gulp');
const clean = require('gulp-clean');

const builder = require("electron-builder");
const Platform = builder.Platform;
const install = require("gulp-install");
const uglifyjs = require('uglify-es');
const composer = require('gulp-uglify/composer');
const pump = require('pump');
const addsrc = require('gulp-add-src');
const minify = composer(uglifyjs, console);
const del = require('del');
const exec = require('child_process').exec;

const options = {mangle: {reserved: ['require']}};

const buildDeps = ['mainProcess', 'projectTypes', 'ace-builds', 'arduino_core', 'progress_dialog', 'filesystem', 'GoldenLayout', 'images', 'media', 'msg', 'phaser_core', 'project', 'static', 'workspace', 'icon_blocks', 'base_project_manager', 'serial_monitor', 'blockly'];

process.env.ALLOW_ELECTRON_BUILDER_AS_PRODUCTION_DEPENDENCY = 'true';

/**
 * Remove all files besides the application package.json
 */
gulp.task('clean', () => {
    return del(['app/**/*', '!app/*.json']);
    // .pipe(clean({force: true}));
});

/**
 * Install dependencies, in most cases we will really need to update
 * or something else as npm install is a prereq to running this project
 */
gulp.task('install', buildDeps, () => {
    return gulp.src('package.json')
        .pipe(install());
});

gulp.task('mainProcess', () => {
    return gulp.src('*.js')
        .pipe(minify(options))
        .pipe(addsrc('*.html'))
        .pipe(gulp.dest('app'));
});

/**
 * Automatically uses package.json in cwd and the current platform
 */

gulp.task('buildCurrentPlatform', buildDeps, () => {
    return builder.build();
});

gulp.task('publishCurrentPlatform',  buildDeps, () => {
    return builder.build({
      publish: 'always'
    });
});

gulp.task('buildCurrentPlatformNoCheck', () => {
    return builder.build();
});

//region PROJECT TYPES
gulp.task('arduino', () => {
    return gulp.src('project_types/arduino/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/arduino/**/*', '!project_types/arduino/**/*.js']))
        .pipe(gulp.dest('app/project_types/arduino'));
});

gulp.task('basic_javascript', () => {
    return gulp.src('project_types/basic_javascript/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/basic_javascript/**/*', '!project_types/basic_javascript/**/*.js']))
        .pipe(gulp.dest('app/project_types/basic_javascript'));
});

gulp.task('ringo_robot', () => {
    return gulp.src('project_types/ringo_robot/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/ringo_robot/**/*', '!project_types/ringo_robot/**/*.js']))
        .pipe(gulp.dest('app/project_types/ringo_robot'));
});

gulp.task('text_phaser', () => {
    return gulp.src('project_types/text_phaser/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/text_phaser/**/*', '!project_types/text_phaser/**/*.js']))
        .pipe(gulp.dest('app/project_types/text_phaser'));
});

gulp.task('visual_phaser', () => {
    return gulp.src('project_types/visual_phaser/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/visual_phaser/**/*', '!project_types/visual_phaser/**/*.js']))
        .pipe(gulp.dest('app/project_types/visual_phaser'));
});

gulp.task('wink_robot', () => {
    return gulp.src('project_types/wink_robot/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/wink_robot/**/*', '!project_types/wik_robot/**/*.js']))
        .pipe(gulp.dest('app/project_types/wink_robot'));
});

gulp.task('exploring_phaser', () => {
    return gulp.src('project_types/exploring_phaser/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/exploring_phaser/**/*', '!project_types/exploring_phaser/**/*.js']))
        .pipe(gulp.dest('app/project_types/exploring_phaser'));
});

gulp.task('exploring_wink_robot', () => {
    return gulp.src('project_types/exploring_wink_robot/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/exploring_wink_robot/**/*', '!project_types/exploring_wink_robot/**/*.js']))
        .pipe(gulp.dest('app/project_types/exploring_wink_robot'));
});


gulp.task('projectTypes', ['arduino', 'basic_javascript', 'ringo_robot', 'text_phaser', 'visual_phaser', 'wink_robot', 'exploring_phaser', 'exploring_wink_robot'], () => {
    return gulp.src('project_types/project_types.js')
        .pipe(minify(options))
        .pipe(addsrc(['project_types/dragon_drop_style.css', 'project_types/package.json']))
        .pipe(gulp.dest('app/project_types'));
});
//endregion

gulp.task('ace-builds', () => {
    return gulp.src('ace-builds/src-noconflict/**/*')
        .pipe(gulp.dest('app/ace-builds/src-noconflict'));
});

gulp.task('arduino_core', () => {
    gulp.src('arduino_core/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['arduino_core/**/*', '!arduino_core/**/*.js']))
        .pipe(gulp.dest('app/arduino_core'));
});

gulp.task('base_project_manager', () => {
    gulp.src('base_project_manager/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['base_project_manager/**/*', '!base_project_manager/**/*.js']))
        .pipe(gulp.dest('app/base_project_manager'));
});

gulp.task('progress_dialog', () =>{
    gulp.src('progress_dialog/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['progress_dialog/**/*', '!progress_dialog/**/*.js']))
        .pipe(gulp.dest('app/progress_dialog'));
});

gulp.task('filesystem', () => {
    gulp.src('filesystem/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['filesystem/**/*', '!filesystem/**/*.js']))
        .pipe(gulp.dest('app/filesystem'));
});

gulp.task('GoldenLayout', () => {
    gulp.src('GoldenLayout/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['GoldenLayout/**/*', '!GoldenLayout/**/*.js']))
        .pipe(gulp.dest('app/GoldenLayout'));
});

gulp.task('images', () => {
    gulp.src('images/**/*')
        .pipe(gulp.dest('app/images'));
});

gulp.task('media', () => {
    gulp.src('media/**/*')
        .pipe(gulp.dest('app/media'));
});

gulp.task('msg', () => {
    gulp.src('msg/**/*')
        .pipe(gulp.dest('app/msg'));
});

gulp.task('phaser_core', () => {
    gulp.src('phaser_core/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['phaser_core/**/*', '!phaser_core/**/*.js']))
        .pipe(gulp.dest('app/phaser_core'));
});

gulp.task('project', () => {
    gulp.src('project/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['project/**/*', '!project/**/*.js']))
        .pipe(gulp.dest('app/project'));
});

gulp.task('window_manager', () => {
    gulp.src('window_manager/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['window_manager/**/*', '!window_manager/**/*.js']))
        .pipe(gulp.dest('app/window_manager'));
});

gulp.task('serial_monitor', () => {
    gulp.src('serial_monitor/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['serial_monitor/**/*', '!serial_monitor/**/*.js']))
        .pipe(gulp.dest('app/serial_monitor'));
});

gulp.task('static', () => {
    gulp.src('static/**/*')
        .pipe(gulp.dest('app/static'));
});

gulp.task('workspace', () => {
    gulp.src('workspace/**/*.js')
        .pipe(minify(options))
        .pipe(addsrc(['workspace/**/*', '!workspace/**/*.js']))
        .pipe(gulp.dest('app/workspace'));
});

gulp.task('icon_blocks', () => {
   gulp.src('icon_blocks/**/*.js')
       .pipe(minify(options))
       .pipe(addsrc(['icon_blocks/**/*', '!icon_blocks/**/*.js']))
       .pipe(gulp.dest('app/icon_blocks'));
});

gulp.task('blocklyBuild', cb => {
    exec('python build.py', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('blockly', () => {
  return gulp.src('blockly/**/*')
    .pipe(gulp.dest('app/blockly'));
});

gulp.task('default', ['buildCurrentPlatform']);