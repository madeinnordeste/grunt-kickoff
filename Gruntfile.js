module.exports = function( grunt ) {
 
  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },
      my_target : {
        files : {
          'examples/js/main.js' : [ 'examples/js/one.js', 'examples/js/two.js' ]
        }
      }
    }, // uglify


    less: {
      production: {
        options: {
          paths: ["examples/css"],
          cleancss: true,
        },
        files: {
          "examples/css/result.css": "examples/less/global.less"
        }
      }
    }, //less


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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  
  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'less'] );

   // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};