module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: false,
      },
      dist: {
        files: {
          'assets/style.css': 'assets/sass/style.scss',
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
        files: ['assets/**/*.html', 'assets/**/*.scss', 'assets/**/*.svg'],
        tasks: ['sass','assets_inline', 'htmlmin'],
      }
    },
  });

  grunt.registerTask('build', 'assets_inline', 'htmlmin');
};