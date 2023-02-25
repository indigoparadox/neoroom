
function objTable( tx, ty, tz ) {
   return $('#room').objBase( tx, ty, tz )
      /* Tabletop                       tx   ty   tz  rx  ry*/
      .jlQuadi( 30, 30, 'sienna',   0,   0,  14, 90 )
      .jlQuadi( 30, 10, 'sienna',   0,   1, 15,  0, 90 )
      .jlQuadi( 30, 10, 'sienna',   0,   1, 15,  0,-90 )
      .jlQuadi( 30, 10, 'saddlebrown',        0,   1,  15 )

      .jlQuadi( 10, 20, 'saddlebrown',        0,  10,  15,  0,  0 )
      .jlQuadi( 10, 20, 'saddlebrown',       20,  10,  15,  0,  0 )

      .jlQuadi( 10, 20, 'sienna',  10,  10, 25,  0, 90 )
      .jlQuadi( 10, 20, 'sienna', -10,  10, 25,  0, 90 )

      .jlQuadi( 10, 20, 'sienna',  10,  10,  5,  0, -90 )
      .jlQuadi( 10, 20, 'sienna', -10,  10,  5,  0, -90 );
}

function objWindow( tx, ty, tz ) {
   const ch = 'sienna';
   const cl = 'saddlebrown';

   return $('#room').objBase( tx, ty, tz )
      /*          w,  h,clr,   tx,    ty,    tz,  rx,  ry,  rz, cls */
      
      /* Top */
      .jlQuadi( 100, 10, ch,    0,  -195,     5,  90,   0,   0, 'sill' )
      .jlQuadi( 100, 10, cl,    0,     0,  -190,   0,   0,   0, 'sill' )
      .jlQuadi(  80, 10, ch,   10,   195,     5, -90,   0,   0, 'sill' )

      /* Bottom */
      .jlQuadi(  80, 10, ch,   10,  -195,  -130,  90,   0,   0, 'sill' )
      .jlQuadi( 100, 10, cl,    0,   135,  -190,   0,   0,   0, 'sill' )
      .jlQuadi( 100, 10, ch,    0,   195,   140, -90,   0,   0, 'sill' )

      /* Middle */
      .jlQuadi(  80, 10, ch,   10,  -195,   -60,  90,   0,   0, 'sill' )
      .jlQuadi( 100, 10, cl,    0,    65,  -190,   0,   0,   0, 'sill' )
      .jlQuadi( 100, 10, ch,    0,   195,    70, -90,   0,   0, 'sill' )

      /* Right */
      .jlQuadi( 125, 10, ch, 67.5,   195, -27.5,   0, -90,  90, 'sill' )
      .jlQuadi( 125, 10, cl, 67.5, -32.5,  -190,   0,   0,  90, 'sill' )
      .jlQuadi( 145, 10, ch, 67.5,  -195,  27.5,   0,  90,  90, 'sill' )

      /* Left */
      .jlQuadi( 145, 10, ch, 67.5,   195,  72.5,   0, -90,  90, 'sill' )
      .jlQuadi( 125, 10, cl, 67.5,  57.5,  -190,   0,   0,  90, 'sill' )
      .jlQuadi( 125, 10, ch, 67.5,  -195, -52.5,   0,  90,  90, 'sill' )

      .jlQuadi(  80,  130,   'cyan', 10, 10, -200,   0,   0,   0, 'pane' );
}

function objCarpet( tx, ty, tz ) {
   return $('#room').objBase( tx, ty, tz )
      .jlQuadi( 200, 200, 'darkred',       100, 0, -200, 90, 0, 0, 'carpet' )
      .jlQuadi( 180, 180, 'darkgoldenrod', 110, 0, -210, 90, 0, 0, 'carpet' )
      .jlQuadi( 160, 160, 'darkred',       120, 0, -220, 90, 0, 0, 'carpet' );
}

function objDesk( tx, ty, tz ) {
   var cd = 'saddlebrown';
   var cl = 'sienna';
   var ch = 'red';

   return $('#room').objBase( tx, ty, tz )
      /*         w,    h, clr,  tx,   ty,   tz,  rx,  ry,  rz, cls */

      /* Desk Front */
      .jlQuadi( 20,  260,  cl, -10,    0,    10,   90,  -90,   0, 'desk' )
      .jlQuadi( 70,   10,  cl, -180,    125,    35,   90,  -90,   0, 'desk' )
      .jlQuadi( 70,   10,  cl, -180,    -125,    35,   90,  -90,   0, 'desk' )

      /* Desk Right */
      .jlQuadi( 100,  90,  cd,   0,  130,   130,   0,    0,   0, 'desk' )
      .jlQuadi( 100,  70,  cd,   0,  150,  -120,   0, -180,   0, 'desk' )

      /* Desk Left */
      .jlQuadi( 100,  90,  cd,   0,  130,   130,   0, -180,   0, 'desk' )
      .jlQuadi( 100,  70,  cd,   0,  150,  -120,   0,    0,   0, 'desk' )

      /* Desk Top */
      .jlQuadi( 100, 260,  cl,   0,    0,    0,   90,    0,   0, 'desk' );
}

$(document).ready( function() {
   var endTable = objTable( 60, 270, -170 );
   var window1 = objWindow( 100, 90, 0 );
   var carpet = objCarpet( 0, 0, 0 );
   var desk = objDesk( 300, 80, -20 );

   $('#room')
      
      /* Add walls. */
      .jlQuadi( 400, 300,  'lightgray', 0, 0, -200,  0,   0, 0, 'wall-west' )
      .jlQuadi( 400, 300, 'white', 0, 0, -200,  0, -90, 0, 'wall-east' )

      /* Add floor. */
      .jlQuadi( 400, 400,  'navy', 0, 0, -100, 90,   0, 0, 'floor' )

      /* Add furniture. */
      .jlDivo( carpet )
      .jlDivo( window1 )
      .jlDivo( endTable )
      .jlDivo( desk )

      /* Fade in room. */
      .animate( { 'opacity': 1 } )

      /* Rotate the room to isometric-ish view. */
      .rotateRoomY( 45 );
} );

