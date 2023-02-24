
(function ( $ ) {

   $.fn.jlDivo = function( obj ) {
      this.append( obj );

      return this;
   };

   $.fn.jlQuadi = function( w, h, color, tx, ty, tz, rx, ry, rz, cls ) {
      var quad =
         $('<div class="cssjl-quad" style="width: ' + w + 'px; height: ' +
         h + 'px; background: ' + color + '"></div>');

      var trans_str = '';
      
      if( 0 != rx && undefined != rx ) {
         trans_str += 'rotateX( ' + rx + 'deg ) ';
      }

      if( 0 != ry && undefined != ry ) {
         trans_str += 'rotateY( ' + ry + 'deg ) ';
      }

      if( 0 != rz && undefined != rz ) {
         trans_str += 'rotateZ( ' + rz + 'deg ) ';
      }

      if( 0 != tx && undefined != tx ) {
         trans_str += 'translateX( ' + tx + 'px ) ';
      }

      if( 0 != ty && undefined != ty ) {
         trans_str += 'translateY( ' + ty + 'px ) ';
      }

      if( 0 != tz && undefined != tz ) {
         trans_str += 'translateZ( ' + tz + 'px ) ';
      }

      if( undefined != cls ) {
         quad.addClass( cls );
      }

      console.log( trans_str );

      this.append( quad );
      /* quad.css( 'transition', 'transform 10s' ); */
      quad.css( 'transform', trans_str );

      return this;
   };

}( jQuery ));

