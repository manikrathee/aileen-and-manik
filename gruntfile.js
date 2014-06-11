module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css' : ['css/style.scss']
        },
        options: {
          style: 'expanded'
        },
      },
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass','concat'],
        options: {
          livereload: true,
        },
      },
      scripts: {
        files: '**/*.js',
        tasks: ['concat'],
        options: {
          livereload: true,
        },
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! Aileen and Manik - www.aileenandmanik.com */',
        separator: ';',
      },
      dist: {
        src: ['js/libs/ss-symbolicons.js','js/libs/waypoints.js','js/libs/mailchimp.js','js/libs/global.js'],
        dest: 'js/script.js',
        nonull: true,
      },
    },
    cssmin: {
      minify: {
        src: ['css/style.css'],
        dest: 'css/style.css',
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/script.js' : ['js/script.js'],
        }
      }
    },
    jekyll: {
      dist: {
        options: {
          config: '_config.yml'
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 7,
          progressive: true,
        },
        files: [{
          expand: true,
          src: ['img/**.{png,jpg,gif}'],
          dest: 'img/',
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass','concat']);
  grunt.registerTask('server', ['sass','concat','connect']);
  grunt.registerTask('w', ['sass','concat','watch']);
  grunt.registerTask('production', ['sass','concat','cssmin','uglify','imagemin']);
};
