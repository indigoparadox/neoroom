
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const gScene = new THREE.Scene();
const gCamera = new THREE.PerspectiveCamera( 90, 800 / 600, 0.1, 1000 );
const gRenderer = new THREE.WebGLRenderer();
const gControls = new OrbitControls( gCamera, gRenderer.domElement );
const gLight = new THREE.AmbientLight( 0xf0f0f0 );
const gLoader = new GLTFLoader();
var gSkybox = null;

const gSkyboxSides = ['north', 'south', 'up', 'down', 'east', 'west'];

function animate() {
   // gSkybox.rotation.x += 0.01;
   requestAnimationFrame( animate );
   gControls.update();
   //console.log( gCamera.position );
   gRenderer.render( gScene, gCamera );
}

$(document).ready( function() {
   gRenderer.setSize( 800, 600 );
   $('#room-view').append( gRenderer.domElement );

   var geoSkybox = new THREE.BoxGeometry( 1000, 1000, 1000 );
   //var matWallpaper = new THREE.MeshBasicMaterial( { color: 0xff0099 } );
   var matSkyboxTextures = gSkyboxSides.map( dir => {
      let tex = new THREE.TextureLoader().load(
         'textures/clouds1_' + dir + '.jpg' );
      return new THREE.MeshBasicMaterial(
         { "map": tex, "side": THREE.BackSide, "reflectivity": 0 } );
   } );
   gSkybox = new THREE.Mesh( geoSkybox, matSkyboxTextures );

   gLoader.load( 'models/room.glb', function( gltf ) {
      //console.log( gltf.scene.children );
      gltf.scene.children[0].scale.set( 50, 50, 50 );
      gScene.add( gltf.scene );
   }, undefined, function( error ) {
      console.error( error );
   } );

   /*
   gLoader.load( 'models/desk.glb', function( gltf ) {
      //console.log( gltf.scene.children );
      //gltf.scene.children[0].scale.set( 0.01, 0.01, 0.01 );
      gScene.add( gltf.scene );
   }, undefined, function( error ) {
      console.error( error );
   } );
   */

   gScene.add( gLight );

   gScene.add( gSkybox );

   // Set camera position and properties.
   gCamera.position.set( 0, 20, 9 );
   gControls.target.set( 0, 20, 10 );
   gControls.enableZoom = false;
   //gCamera.far = 10000; // Outside of skybox.
   gControls.update();

   animate();
} );

