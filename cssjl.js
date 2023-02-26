
(function ( $ ) {

   $.fn.jlDivo = function( obj ) {
      this.append( obj );

      return this;
   };

   $.fn.jlQuadi = function( w, h, color, tx, ty, tz, rx, ry, rz, cls ) {
      var quad = $('<div class="cssjl-quad"></div>');

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

      if( 0 != w && undefined != w ) {
         quad.css( 'width', w + 'px' );
      }

      if( 0 != h && undefined != h ) {
         quad.css( 'height', h + 'px' );
      }

      if( '' != color && undefined != color ) {
         quad.css( 'background-color', color );
      }

      if( undefined != cls ) {
         quad.addClass( cls );
      }

      this.append( quad );
      /* quad.css( 'transition', 'transform 10s' ); */
      quad.css( 'transform', trans_str );

      return this;
   };

}( jQuery ));

