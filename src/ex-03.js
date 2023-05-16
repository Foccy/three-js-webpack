
import { doc } from 'prettier';
import * as THREE from 'three'

import { 
    WEBGL
 } from "./webgl";

 if (WEBGL.isWebGLAvailable()){
    
    //*장면
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xF2F2F2)

    //*카메라
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z=3

    //2. 캔버스 태그를 html에 직접 추가해서 하는 방법
    // //*캔버스
    // const canvas = document.querySelector('#ex-03');


    //*렌더러
    const renderer = new THREE.WebGLRenderer({
        alpha : true,
        antialias : true
    });
    renderer.setSize(window.innerWidth, window.innerHeight) // 윈도우 기준으로 가,세로 꽉차게
    document.body.appendChild(renderer.domElement)

    //렌더러장면을 어떤 태그에 노출을 시켜줄지.

    const pointLight = new THREE.PointLight(0xffffff , 1)
    pointLight.position.set(0,2,12)
    scene.add(pointLight)

    //*매쉬
    const geometry01 = new THREE.BoxGeometry(0.5, 0.5, 0.5); // x y z 값을 설정
    const material01 = new THREE.MeshLambertMaterial({   // 질감 설정 
        color:0x44aa88
    })
    const obj1 = new THREE.Mesh(geometry01 ,material01)
    obj1.position.x=-1
    scene.add(obj1)

    const geometry02 = new THREE.ConeGeometry(0.4, 0.7, 6); // x y z 값을 설정
    const material02 = new THREE.MeshNormalMaterial({   // 질감 설정 
        color:0x667338
    })
    const obj2 = new THREE.Mesh(geometry02 ,material02)
    scene.add(obj2)

    const geometry03 = new THREE.IcosahedronGeometry(0.4, 0); // x y z 값을 설정
    const material03 = new THREE.MeshLambertMaterial({   // 질감 설정 
        color:0X999999
    })
    const obj3 = new THREE.Mesh(geometry03 ,material03)
    obj3.position.x=1
    scene.add(obj3)

    //*도형 추가
    const geometry04 = new THREE.TorusGeometry(0.3, 0.15, 16, 40)
    const material04 = new THREE.MeshStandardMaterial({
        color: 0xE2E8B1,
        metalness:0.6,
        roughness :0.4,
    })
    const obj04 = new THREE.Mesh(geometry04, material04);
    obj04.position.x= 2;
    scene.add(obj04)

    const material05 = new THREE.MeshStandardMaterial({
        color: 0x9CA653,
        metalness:0.6,
        roughness :0.4,
    })
    const obj05 = new THREE.Mesh(geometry04, material05);
    obj05.position.x= 2;
    obj05.position.y= 1;
    scene.add(obj05)

    //1.방법
    document.body.appendChild(renderer.domElement);

    function render(time) {
        time *= 0.0005;  // convert time to seconds
       
        obj1.rotation.x = time;
        obj1.rotation.y = time;
        obj2.rotation.x = time;
        obj2.rotation.y = time;
        obj3.rotation.x = time;
        obj3.rotation.y = time;
        obj04.rotation.y = time;
        obj05.rotation.x = time;

        renderer.render(scene, camera);
       
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);

      //반응형 처리
      function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onWindowResize)

    renderer.render(scene, camera)
 }else {
    var warning = WEBGL.getWebGLErrorMessage()
    document.body.appendChild(warning)
  }
  