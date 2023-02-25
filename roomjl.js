
(function ( $ ) {

   $.fn.objBase = function( tx, ty, tz ) {
      var objOut = $('<div class="roomjl-obj"></div>');
      var trans_str = '';

      if( 0 != tx && undefined != tx ) {
         trans_str += 'translateX( ' + tx + 'px ) ';
      }

      if( 0 != ty && undefined != ty ) {
         trans_str += 'translateY( ' + ty + 'px ) ';
      }

      if( 0 != tz && undefined != tz ) {
         trans_str += 'translateZ( ' + tz + 'px ) ';
      }

      objOut.css( 'transform', trans_str );

      return objOut;
   }

   var gRoomRotateY = 0;

   $.fn.rotateRoomY = function( yr ) {
      gRoomRotateY = gRoomRotateY + yr;
      $('#room').css(
         'transform',
         'rotate3d( -1, 0, 0, 25deg ) rotate3d( 0, 1, 0, ' +
            gRoomRotateY + 'deg )' );
   }

}( jQuery ));

