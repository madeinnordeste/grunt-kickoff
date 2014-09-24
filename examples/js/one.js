(function( window, document, undefined ){
  var one = function() {
    return {

      init : function() {
        console.log( this.soma_valor( 3, 5 ) );
      }, // init


      soma_valor : function( num1, num2 ) {
        return num1 + num2;
      }, // soma_valor
     
    }; // return
  }; // obj

  one().init();
})( window, document );