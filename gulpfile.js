'use strict';

const config = require('./server/config/web-config');
const gulp = require('gulp');
const glp = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('sass-compile', () => gulp.src(`${config.paths.sass}style.scss`)
    .pipe(glp.sass().on('error', glp.sass.logError))
    .pipe(gulp.dest(config.paths.css)));

gulp.task('autoprefixer', ['sass-compile'], () => gulp.src(`${config.paths.css}style.css`)
    .pipe(glp.autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.paths.css)));

gulp.task('minify-css', ['autoprefixer'], () => gulp.src(`${config.paths.css}style.css`)
    .pipe(glp.cssnano(config.gulp.minify.css))
    .pipe(glp.rename('style.min.css'))
    .pipe(gulp.dest(config.paths.css)));

gulp.task('prismjs-js', ['prismjs-css'], () => {
    const languages = [
        './node_modules/prismjs/prism.js',
        './node_modules/prismjs/components/prism-csharp.js',
        './node_modules/prismjs/components/prism-jade.js',
        './node_modules/prismjs/components/prism-typescript.js',
        './node_modules/prismjs/components/prism-scss.js',
        './node_modules/prismjs/components/prism-bash.js',
        './node_modules/prismjs/components/prism-markup.js',
        './node_modules/prismjs/plugins/toolbar/prism-toolbar.js',
        './node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js'
    ];

    return gulp.src(languages)
        .pipe(glp.concat('prism.js'))
        .pipe(glp.minify(config.gulp.minify_opts))
        .pipe(gulp.dest(`${config.paths.vendors}prism/`));
});

gulp.task('prismjs-css', () => {
    const themes = [
        './node_modules/prismjs/themes/prism-okaidia.css',
        './node_modules/prismjs/plugins/toolbar/prism-toolbar.css',
        './node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css'
    ];

    return gulp.src(themes)
        .pipe(glp.concat('prism.css'))
        .pipe(glp.cssnano(config.gulp.minify.css))
        .pipe(glp.rename('prism.min.css'))
        .pipe(gulp.dest(`${config.paths.vendors}prism/`));
});

gulp.task('tsconfig', () => {
    var tsConfig = glp.tsconfig(config.gulp.typescript);

    return gulp.src(config.gulp.typescript.order)
        .pipe(tsConfig())
        .pipe(gulp.dest('./'));
});

gulp.task('ts-compile', ['tsconfig'], () => {
    var ts = glp.typescript;
    var tsProject = ts.createProject('./tsconfig.json');

    return gulp.src(config.gulp.typescript.order)
        .pipe(tsProject(ts.reporter.nullReporter())).js
        .pipe(glp.sourcemaps.init())
        .pipe(glp.concat('application.js'))
        .pipe(glp.minify(config.gulp.minify.js))
        .pipe(glp.sourcemaps.write(`./`))
        .pipe(gulp.dest(`${config.paths.js}`));
});

gulp.task('babel-compile', () => gulp.src(config.gulp.babel.order)
    .pipe(glp.sourcemaps.init())
    .pipe(glp.babel())
    .pipe(glp.concat('application.js'))
    .pipe(glp.minify(config.gulp.minify.js))
    .pipe(glp.sourcemaps.write(`.`))
    .pipe(gulp.dest(`${config.paths.js}`))
);

gulp.task('default', ['minify-css', 'babel-compile']);