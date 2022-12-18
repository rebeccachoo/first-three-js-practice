const scene = new THREE.Scene();
/* Perspective => (field of view(시야각), aspect ratio(종횡비), near, far) */
// FOV(시야각)는 해당 시점의 화면이 보여지는 정도를 나타냅니다. 값은 각도 값으로 설정합니다.
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//  renderer입니다. 마법이 일어나는 곳입니다.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
// mesh는 기하학을 받아 재질을 적용하고 우리가 화면 안에 삽입하고 자유롭게 움직일 수 있게 해 줍니다.
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 기본 설정상 scene.add()를 불러오면, 추가된 모든 것들은 (0,0,0) 속성을 가집니다. 이렇게 되면 카메라와 큐브가 동일한 위치에 겹치게 되겠죠. 이를 피하기 위해, 카메라를 약간 움직여 두었습니다.
camera.position.z = 5;

// 이 코드는 화면이 새로고침 될 때마다 계속해서 렌더링을 해 줄 것입니다. (일반적인 경우에 1초에 60번 렌더링 됩니다).
//  기본적으로 앱을 실행하는 동안 무언가를 움직이거나 변형하고 싶을때, animate loop를 사용하면 됩니다. 물론 다른 함수를 불러올 수도 있고, animate 함수 안에 수백줄을 작성할 필요도 없습니다.
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // requestAnimationFrame의 가장 큰 이점은 유저가 브라우저 창에서 이탈했을때 멈춰주는 기능일 것입니다. 이를 통해 소중한 전력과 배터리를 아낄 수 있죠.
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
