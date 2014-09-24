module.exports = function( grunt ) {
 
  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },
      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/js/one.js', 'assets/js/two.js' ]
        }
      }
    }, // uglify


    watch : {
      dist : {
        files : [
          'assets/js/**/*',
          'assets/css/**/*'
        ],
        tasks : [ 'uglify' ]
      }
    } // watch
    
  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  
  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify'] );

   // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};