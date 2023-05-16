
import * as THREE from 'three'

import { 
    WEBGL
 } from "./webgl";

 if (WEBGL.isWebGLAvailable()){
    
    //*장면
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x004fff)

    //*카메라
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z=3

    //*렌더러
    const renderer = new THREE.WebGLRenderer({
        alpha : true,
        antialias : true
    });
    renderer.setSize(window.innerWidth, window.innerHeight)
 }