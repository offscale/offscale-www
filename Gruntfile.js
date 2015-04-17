module.exports = function(grunt) {
 
 
  grunt.initConfig({   
    less: {
      development:{
        files: {
          "source/stylesheets/offscale.css": "source/stylesheets/less/offscale.less"
        }
      }
    },
    watch: {
      less: {
        files: 'source/stylesheets/less/*.less',
        tasks: ['less']
      }
    }
  });
 
  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  grunt.registerTask('default', ['watch']);
 
};
