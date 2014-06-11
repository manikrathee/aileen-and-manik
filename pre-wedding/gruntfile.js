module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css' : ['css/style.scss'],
        },
        options: {
          style: 'expanded'
        },
      },
    },
    cssmin: {
      compress: {
        files: {
          'css/style.css': 'css/style.css',
        }
      }
    },
    watch: {
      files: ['**/*'],
      tasks: ['sass','concat'],
    },
    concat: {
       options: {
         separator: ';',
       },
       dist: {
        src: [
          'js/libs/backstretch.js',
          'js/libs/fitvid.js',
          'js/libs/froogaloop.js',
          'js/libs/script.js',
          ],
        dest: 'js/script.js',
        nonull: true,
       },
    },
    removelogging: {
      dist: {
        'js/script.js' : ['js/script.js'],
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
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','concat']);
  grunt.registerTask('w', ['sass','concat','watch']);
  grunt.registerTask('production', ['sass','concat','uglify','cssmin','imagemin']);
};
