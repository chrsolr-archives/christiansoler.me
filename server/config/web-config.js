'use strict';

const config = (() => {
    const CLIENT = './public/';

    const server = {
        brand_title: process.env.BRAND_TITLE || 'christiansoler.me-DEV',
        hostname: process.env.HOSTNAME || 'localhost',
        port: process.env.PORT || '3000',
        db_url: process.env.DB_URL || 'mongodb://dummy:dummy@ds161225.mlab.com:61225/kpdb-dev'
    };

    const paths = {
        client: `${CLIENT}`,
        sass: `${CLIENT}sass/`,
        css: `${CLIENT}css/`,
        typescript: `${CLIENT}typescript/`,
        babel: `${CLIENT}babel/`,
        vendors: `${CLIENT}vendors/`,
        js: `${CLIENT}js/`
    };

    const gulp = {
        babel: {
            order: [
                `${paths.babel}core/application-core.js`,
                `${paths.babel}core/application-*.js`,
                `${paths.babel}controllers/*.js`,
            ]
        },
        typescript: {
            order: [
                `${CLIENT}typescript/core/application.ts`,
                `${CLIENT}typescript/core/application-*.ts`,
            ],
            tsConfig: {
                compilerOptions: {
                    //module: 'umd',
                    //moduleResolution: ''
                    target: 'es5',
                    allowJs: false,
                    removeComments: true,
                    noImplicitAny: true,
                    sourceMap: true,
                    noImplicitReturns: false,
                    suppressImplicitAnyIndexErrors: true,
                    suppressExcessPropertyErrors: true,
                    noFallthroughCasesInSwitch: true,
                    allowUnreachableCode: false,
                    //rootDir: `${CLIENT}typescript/`,
                    declaration: true,
                    alwaysStrict: true,
                    noEmitOnError: false,
                    noEmit: false
                }
            }
        },
        minify: {
            js: {
                ext: { min: '.min.js' },
                ignoreFiles: ['-min.js', '.min.js'],
                mangle: false
            },
            css: {
                convertValues: false,
                discardComments: { removeAll: true },
                autoprefixer: false
            }
        }
    };

    return {
        server,
        paths,
        gulp
    }
})();

module.exports = config;