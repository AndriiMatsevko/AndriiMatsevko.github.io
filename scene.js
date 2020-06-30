// import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from '/scripts/FBXLoader.js';
// import { OBJLoader } from '/scripts/OBJLoader.js';

let scene, camera, renderer, light;
let skybox;
let i = 0;
let responsivWindow;
let loader = new FBXLoader();
// let loaderOBJ = new OBJLoader();
let raycasterHover = new THREE.Raycaster();
let raycasterClickDeskInfo = new THREE.Raycaster();
let raycasterClickDeskPortfolio = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let mouseClick = new THREE.Vector2();
let mouseObjects = [];
let mouseDeskInfo = [];
let mouseDeskPortfolio = [];
let deskInfo;
let deskPortfolio;

var isOpenInfo = true;


init();
animate();

function init() {

  createScene();
  createSkybox();

  addSimpleObjects('objects/fontan/fontan.fbx', 0, -550, -800, 0, 0.15, 0, 100, 100, 100);//lavka TL
  addSimpleObjects('objects/lavka/lavka.fbx', -1000, -400, -810, 1.5, 0, 1.6, 100, 100, 100);//lavka TL
  addSimpleObjects('objects/lavka/lavka.fbx', -1110, -400, -350, 1.5, 0, 1.6, 100, 100, 100);//lavka BL
  addSimpleObjects('objects/lavka/lavka.fbx', 1000, -400, -810, 1.5, 0, -1.6, 100, 100, 100);//lavka TR
  addSimpleObjects('objects/lavka/lavka.fbx', 1110, -400, -350, 1.5, 0, -1.6, 100, 100, 100);//lavka BR
  addSimpleObjects('objects/Garbedj/Garbedj1.fbx', -1100, -500, -630, 0, 0.7, 0, 150, 150, 100);//Garbedj L
  addSimpleObjects('objects/Garbedj/Garbedj1.fbx', 1100, -500, -630, 0, -2.4, 0, 150, 150, 100);//Garbedj R

  addSakuraTree(-900, -500, -1300);// L
  addSakuraTree(900, -500, -1300);// R

  addSimpleObjects('objects/streetlamp/streetlamp.fbx', -1150, -500, -630, 0, -0.3, 0, 100, 150, 100);//streetlamp L
  addSimpleObjects('objects/streetlamp/streetlamp.fbx', 1150, -500, -630, 0, 2.8, 0, 100, 150, 100);//streetlamp R
  addSimpleObjects('objects/Desks/DeskInfo.fbx', -150, -500, -300, 0, 1.57, 0, 150, 150, 150);//
  addSimpleObjects('objects/Desks/DeskPortf.fbx', 180, -500, -305, 0, 1.6, 0, 150, 150, 150);//


  var bushMap = new THREE.TextureLoader().load('objects/bush/street_zhiwu01.png');
  var bushenvMap = new THREE.TextureLoader().load('objects/bush/street_zhiwu01.png');
  loader.load('objects/bush/bushBig.fbx', function (object) {
    object.scale.set(100, 200, 200);
    object.position.set(2300, -700, -2000);
    object.rotation.set(0, -1.55, 0);
    object.traverse(function (child) {

      child.material = new THREE.MeshLambertMaterial({
        color: '#B5F7A4',
        map: bushMap,
        emissive: 0,
        envMap: bushenvMap,
        reflectivity: 0.30,
        refractionRatio: 0.98,
        combine: 0,
        side: 2,
        transparent: true,
        alphaTest: 0.26
      });

      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(object);
  });

  createMouseController();




  // let controls = new OrbitControls(camera, renderer.domElement);
  // controls.addEventListener('change', renderer);

}

function animate() {


  mouseEventsMove();
  mouseEventsClick();
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  skybox.rotation.set(0, i += 0.0004, 0, 'XYZ');

}



function createMouseController() {
  var deskInfoG = new THREE.BoxGeometry(270, 200, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.0 });
  deskInfo = new THREE.Mesh(deskInfoG, material);
  deskInfo.position.set(-140, -300, -270);
  scene.add(deskInfo);
  mouseObjects.push(deskInfo);
  mouseDeskInfo.push(deskInfo);

  var deskPortfolioG = new THREE.BoxGeometry(230, 200, 1);
  deskPortfolio = new THREE.Mesh(deskPortfolioG, material);
  deskPortfolio.position.set(160, -300, -270);
  scene.add(deskPortfolio);
  mouseObjects.push(deskPortfolio);
  mouseDeskPortfolio.push(deskPortfolio);
}





function mouseEventsMove() {
  raycasterHover.setFromCamera(mouse, camera);
  var intersectsHover = raycasterHover.intersectObjects(mouseObjects);
  if (intersectsHover.length == 1) {
    $('body').css('cursor', 'pointer');
  } else {
    $('body').css('cursor', 'default');
  }
}


function mouseEventsClick() {
  raycasterClickDeskInfo.setFromCamera(mouseClick, camera);
  var intersectsClick = raycasterClickDeskInfo.intersectObjects(mouseDeskInfo);
  if (intersectsClick.length == 1) {
    $('#layer-content').css('display', 'flex');
  }

  raycasterClickDeskPortfolio.setFromCamera(mouseClick, camera);
  var intersectsClick1 = raycasterClickDeskPortfolio.intersectObjects(mouseDeskPortfolio);
  if (intersectsClick1.length == 1) {
    if (isOpenInfo) {
      window.open('works/works.html', '_blank');
      isOpenInfo = false;
    }

  } else {
    isOpenInfo = true;
  }
}

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mouseup', onMouseClick, false);

function onMouseMove(event) {

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

function onMouseClick(event) {

  mouseClick.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseClick.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

function createScene() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 55, 30000);
  camera.position.set(0, 0, 500);

  var ambient = new THREE.AmbientLight(0xFFC8FF, 1);
  scene.add(ambient);

  var spotLight = new THREE.SpotLight(0xffffff, 2);
  spotLight.position.set(0, 1000, 1500);
  spotLight.target.position.set(0, 0, -810);

  spotLight.castShadow = true;
  spotLight.target.updateMatrixWorld();
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 36;
  scene.add(spotLight);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  let container = document.getElementById("wrapper");
  container.appendChild(renderer.domElement);

  var Ground_geometry = new THREE.BoxGeometry(2500, 0.1, 1000);

  let texture_grass = new THREE.TextureLoader().load('objects/road.png');
  texture_grass.wrapS = texture_grass.wrapT = THREE.RepeatWrapping;
  texture_grass.repeat.set(15, 10);
  var Ground_material = new THREE.MeshLambertMaterial({ map: texture_grass });

  var ground = new THREE.Mesh(Ground_geometry, Ground_material);
  ground.position.set(0, -500, 0);
  ground.scale.multiplyScalar(3);
  ground.receiveShadow = true;
  scene.add(ground);
}





function createSkybox() {

  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load('imgs/MoodySunrise02_FR.jpg');
  let texture_bk = new THREE.TextureLoader().load('imgs/MoodySunrise02_BK.jpg');
  let texture_up = new THREE.TextureLoader().load('imgs/MoodySunrise02_UP.jpg');
  let texture_dn = new THREE.TextureLoader().load('imgs/MoodySunrise02_DN.jpg');
  let texture_rt = new THREE.TextureLoader().load('imgs/MoodySunrise02_RT.jpg');
  let texture_lf = new THREE.TextureLoader().load('imgs/MoodySunrise02_LF.jpg');

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
  let skyboxGeo = new THREE.BoxGeometry(10000, 20000, 10000);
  skybox = new THREE.Mesh(skyboxGeo, materialArray);

  scene.add(skybox);
}

function addSimpleObjects(src, pX, pY, pZ, rX, rY, rZ, sX, sY, sZ) {

  loader.load(src, function (object) {
    object.scale.set(sX, sY, sZ);
    object.position.set(pX, pY, pZ);
    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.rotation.set(rX, rY, rZ);
      }
    });
    scene.add(object);
  });

}

function addSakuraTree(pX, pY, pZ) {

  var sakureMap = new THREE.TextureLoader().load('objects/sakuraTree/stage17_sakuraleaf01c.png');
  var sakurelightMap = new THREE.TextureLoader().load('objects/sakuraTree/stage17_sakuraleaf01c.png');

  loader.load('objects/sakuraTree/sakuraTreeS1.fbx', function (object) {
    object.scale.set(150, 150, 150);
    object.position.set(pX, pY, pZ);
    object.traverse(function (child) {

      if (child.name == 'stage17_sakuraleaf02_0' || child.name == 'stage17_sakuraleaf01_0') {

        child.material = new THREE.MeshLambertMaterial({
          color: '#FF80FF',
          map: sakureMap,
          emissive: 0,
          lightMap: sakurelightMap,
          reflectivity: 0.56,
          refractionRatio: 0.98,
          combine: 0,
          side: 2,
          transparent: true,
          alphaTest: 0.66
        });
      }
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(object);
  });

}

