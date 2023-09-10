import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(5);

const loader = new THREE.TextureLoader();
            const frontTexture = loader.load('erekisyugaru5.png');
            const backTexture = loader.load('card.png');

            const geometry = new THREE.PlaneGeometry(2, 3.5);
            const material1 = new THREE.MeshBasicMaterial({ map: frontTexture, side: THREE.DoubleSide  }) // 前面
            const material2 = new THREE.MeshBasicMaterial({ map: backTexture, side: THREE.DoubleSide  }) // 裏面
            const frontCard = new THREE.Mesh(geometry, material1);
            const backCard = new THREE.Mesh(geometry, material2);
            backCard.position.z = -0.01; 
            const cardGroup = new THREE.Group();
            cardGroup.add(frontCard);
            cardGroup.add(backCard);
            scene.add(cardGroup);


// OrbitControlsの設定
const controls = new OrbitControls(camera, renderer.domElement);

const summonTexture = new THREE.TextureLoader().load('summon2.png');
scene.background = summonTexture;

function animate() {
  requestAnimationFrame(animate);
  cardGroup.rotation.y += 0.01;  
  controls.update();
  renderer.render(scene, camera);
}

animate();

//document.addEventListener('click', function() {
  //window.location.href = "/";  
//});
