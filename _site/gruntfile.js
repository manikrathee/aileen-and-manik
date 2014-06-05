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
      files: ['/*'],
      tasks: ['sass','concat'],
    },
    concat: {
       options: {
         separator: ';',
       },
       dist: {
        src: ['js/libs/ss-social.js','js/libs/ss-symbolicons.js','js/libs/global.js'],
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','concat']);
  grunt.registerTask('w', ['sass','concat','watch']);
  grunt.registerTask('production', ['sass','concat','cssmin','uglify']);
};
