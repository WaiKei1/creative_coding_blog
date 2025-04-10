---
title: Week 6
published_at: 2025-04-8
snippet: Three.js
disable_html_sanitization: true
allow_math: true
---

| [W1](https://waikei1-creative-co-63.deno.dev/week1) | [W2](https://waikei1-creative-co-63.deno.dev/week2) | [W3](https://waikei1-creative-co-63.deno.dev/week3) | [W4](https://waikei1-creative-co-63.deno.dev/week4) | [W5](https://waikei1-creative-co-63.deno.dev/week5) | [W7](https://waikei1-creative-co-63.deno.dev/week7) | [W8](https://waikei1-creative-co-63.deno.dev/week8) | [W9](https://waikei1-creative-co-63.deno.dev/week9) | [W10](https://waikei1-creative-co-63.deno.dev/week10) | [W11](https://waikei1-creative-co-63.deno.dev/week11) | [W12](https://waikei1-creative-co-63.deno.dev/week12) |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| [A1](https://waikei1-creative-co-63.deno.dev/A1)    | [A2](https://waikei1-creative-co-63.deno.dev/A2)    | [A3](https://waikei1-creative-co-63.deno.dev/A3)    |

### INDEX

- [Notes](https://waikei1-creative-co-63.deno.dev/week6#notes)

---

# Notes

### requestAnimationFrame()

---

# Homework

### Session 1: 8 Apr

<div id="three_container"></div>

<script type="module">
   import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.module.js'

const container = document.getElementById (`three.js_container`)
const width = container.parentNode.scrollWidth
const height = width * 9 / 16

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/jsm/controls/OrbitControls.js'
import { TeapotGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/jsm/geometries/TeapotGeometry.js'

let camera, scene, renderer
let cameraControls
let effectController
const teapotSize = 300
let ambientLight, light

let tess = - 1	// force initialization
let bBottom
let bLid
let bBody
let bFitLid
let bNonBlinn
let shading

let teapot, textureCube
const materials = {}

const rand_tess = () => {
   const vals = [ 20, 30, 40, 50 ]
   const i = Math.floor (Math.random () * vals.length)
   return vals[i]
}

init ()
// render ()


function init() {

   const canvasWidth = width
   const canvasHeight = height

   // CAMERA
   camera = new THREE.PerspectiveCamera (45, width / height, 1, 80000)
   camera.position.set (-600, 550, 1300)

   // LIGHTS
   ambientLight = new THREE.AmbientLight (0x7c7c7c, 2.0)

   light = new THREE.DirectionalLight (0xFFFFFF, 2.0)
   light.position.set (0.32, 0.39, 0.7)

   // RENDERER
   renderer = new THREE.WebGLRenderer ({ antialias: true })
   renderer.setPixelRatio (window.devicePixelRatio)
   renderer.setSize (canvasWidth, canvasHeight)
   container.appendChild (renderer.domElement)

   // EVENTS
   // window.addEventListener ('resize', onWindowResize)

   // CONTROLS
   cameraControls = new OrbitControls (camera, renderer.domElement)
   // cameraControls.addEventListener ('change', render)

   // TEXTURE MAP
   const textureMap = new THREE.TextureLoader ()
      .load ('250408/three.js/examples/textures/uv_grid_opengl.jpg')
   textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping
   textureMap.anisotropy = 16
   textureMap.colorSpace = THREE.SRGBColorSpace

   // REFLECTION MAP
   const path = '250408/three.js/examples/textures/cube/pisa/'
   const urls = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ]

   textureCube = new THREE.CubeTextureLoader ().setPath (path).load (urls)

   materials[ 'wireframe' ] = new THREE.MeshBasicMaterial ({ 
      wireframe: true 
   })

   materials[ 'flat' ] = new THREE.MeshPhongMaterial ({ 
      specular: 0x000000, 
      flatShading: true, 
      side: THREE.DoubleSide 
   })

   materials[ 'smooth' ] = new THREE.MeshLambertMaterial ({ 
      side: THREE.DoubleSide 
   })

   materials[ 'glossy' ] = new THREE.MeshPhongMaterial ({ 
      color: 0xc0c0c0, 
      specular: 0x404040, 
      shininess: 300, 
      side: THREE.DoubleSide
   })

   materials[ 'textured' ] = new THREE.MeshPhongMaterial ({ 
      map: textureMap, 
      side: THREE.DoubleSide
   })

   materials[ 'reflective' ] = new THREE.MeshPhongMaterial ({ 
      envMap: textureCube, 
      side: THREE.DoubleSide
   })

   // scene itself
   scene = new THREE.Scene();
   scene.background = new THREE.Color( 0xAAAAAA );

   scene.add( ambientLight );
   scene.add( light );

   effectController = {
      newTess: rand_tess (),
      bottom: true,
      lid: true,
      body: true,
      fitLid: false,
      nonblinn: false,
      newShading: 'glossy'
   };
}

let material = materials[ 'wireframe' ] 



// function render() {
//    if (effectController.newTess !== tess ||
//       effectController.bottom !== bBottom ||
//       effectController.lid !== bLid ||
//       effectController.body !== bBody ||
//       effectController.fitLid !== bFitLid ||
//       effectController.nonblinn !== bNonBlinn ||
//       effectController.newShading !== shading ) {

//       tess = effectController.newTess;
//       bBottom = effectController.bottom;
//       bLid = effectController.lid;
//       bBody = effectController.body;
//       bFitLid = effectController.fitLid;
//       bNonBlinn = effectController.nonblinn;
//       shading = effectController.newShading;

//    }}

const mutate_geometry = (g, p) => {
   const p_is_positive = p >= 0.5

   const length = g.index.array.length
   const glitch_amount = Math.abs ((p * 2) - 1) ** 5 // very steep curve from phase
   const glitch_length = Math.floor (glitch_amount * length)   
   const glitch_location = Math.floor (
      Math.random () * (length - glitch_length)
   )
   const front = g.index.array.slice (0, glitch_location)

   const mutation = p_is_positive
      ? () => Math.floor (Math.random () * 8192)
      : () => 0

   const middle = new Uint16Array (glitch_length)
      .fill (0)
      .map (mutation)

   const back = g.index.array.slice (glitch_location + glitch_length)
   const mutated = new Uint16Array (length)
   mutated.set (front)
   mutated.set (middle, front.length)
   mutated.set (back, front.length + middle.length)
   g.index.array = mutated 
}

let next_glitch_time = 0
let is_glitching = false
let geometry = new TeapotGeometry (
   300, // teapotSize
   50,  // tess
   true,
   true,
   true,
   false,
   false,
)


// Whenever the teapot changes, the scene is rebuilt from scratch (not much to it).
const draw_teapot = ms => {

   if (teapot !== undefined) {
      teapot.geometry.dispose ()
      scene.remove (teapot)
   }

   const t = ms / 1000

   if (t > next_glitch_time) {
      const period = Math.random () ** 24 * 2
      next_glitch_time = t + period

      is_glitching = !is_glitching

      if (is_glitching) {
         mutate_geometry (geometry, Math.random ())
      }

      else {
         geometry = new TeapotGeometry (
            teapotSize,
            rand_tess (), // tess,
            Math.random () < 0.8,
            Math.random () < 0.8,
            true,
            true, //Math.random () < 0.5,
            true  //Math.random () < 0.5
         )

         const types = [ 
            `wireframe`, 
            `flat`, 
            `smooth`, 
            `glossy`, 
            `textured`, 
            `reflective` 
         ]
         const i = Math.floor (Math.random () * types.length)
         const type = types[i]
         material = materials[type]

         scene.background = type == `reflective` 
            ? textureCube
            : null

      }
   }

   teapot = new THREE.Mesh (geometry, material)
   scene.add (teapot)

   // render ()


   renderer.render (scene, camera)

   requestAnimationFrame (draw_teapot)
}


requestAnimationFrame (draw_teapot)

</script>

---

### Session 2: 10 Apr

---

## Quick Links

### Assignments:

- [Assignment 1: Cute!](https://waikei1-creative-co-63.deno.dev/A1)
- [Assignment 2: Chaos!](https://waikei1-creative-co-63.deno.dev/A2)
- [Assignment 3: Interesting!](https://waikei1-creative-co-63.deno.dev/A3)

---

### Weekly Study Journey:

- [Week 1](https://waikei1-creative-co-63.deno.dev/week1)
- [Week 2](https://waikei1-creative-co-63.deno.dev/week2)
- [Week 3](https://waikei1-creative-co-63.deno.dev/week3)
- [Week 4](https://waikei1-creative-co-63.deno.dev/week4)
- [Week 6](https://waikei1-creative-co-63.deno.dev/week6)
- [Week 7](https://waikei1-creative-co-63.deno.dev/week7)
- [Week 8](https://waikei1-creative-co-63.deno.dev/week8)
- [Week 9](https://waikei1-creative-co-63.deno.dev/week9)
- [Week 10](https://waikei1-creative-co-63.deno.dev/week10)
- [Week 11](https://waikei1-creative-co-63.deno.dev/week11)
- [Week 12](https://waikei1-creative-co-63.deno.dev/week12)

---
