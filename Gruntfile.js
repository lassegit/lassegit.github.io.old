module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    inlinecss: {
      main: {
        options: {},
        files: {
          'index.html': 'assets/index.html'
        }
      }
    },
    assets_inline: {
      all: {
        options: {
          inlineImg: true,
          inlineSvg: true,
          minify: true,
        },
        files: {
          'index.html': 'assets/index.html'
        }
      },
    },
    htmlmin: {
      dist: {
        options: { // Reference: https://github.com/kangax/html-minifier#options-quick-reference
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
        files: {
          'index.html': 'index.html'
        }
      }
    },
    watch: {
      scripts: {
        files: ['assets/**/*.html', 'assets/**/*.css',],
        tasks: ['assets_inline'],
      }
    },
  });

  grunt.registerTask('build', 'assets_inline', 'htmlmin');
};