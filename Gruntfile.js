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


    smushit: {
      mygroup: {
        src: ['examples/img/**/*'],
        dest: 'examples/img'
      }
    }, //smushit


    watch : {
      dist : {
        files : [
          'examples/js/**/*',
          'examples/less/**/*'
        ],
        tasks : [ 'uglify', 'less' ]
      }
    } // watch

  });


  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-smushit');
  
  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'less'] );

   // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};