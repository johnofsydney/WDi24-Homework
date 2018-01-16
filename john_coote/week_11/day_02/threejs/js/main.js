// console.log(THREE);

let cube = null;
let sphere = null;
let step = 0;
let controls = null;
let gui = null;

const renderer = new THREE.WebGLRenderer({
  antialias: true
});
  // );
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio || 1);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.x = -30;
camera.position.y = 30;
camera.position.z = 30;
camera.lookAt(scene.position);

// when we dadd new before the creation of a funxtion it does two things WRT "this":
// It sets "this" to a new empty function
// It automatically returns the keyword "this" (ie that empty object)
const controller = new function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.02;
}

const animate = () => {
  step += controller.bouncingSpeed;
  cube.rotation.x += controller.rotationSpeed
  cube.rotation.y += controller.rotationSpeed
  cube.rotation.z += controller.rotationSpeed
  // cube.position.x = step

  cube.position.y = 2 + 10 * Math.abs(Math.sin(step))

  sphere.position.y = (10 * Math.abs(Math.sin(step)))
  sphere.position.x = 20 + (10 * Math.abs(Math.cos(step)))


  // change position of meshes
  // change rotation of mesh
  // rerender using the scene and the camera
  renderer.render(scene, camera);
  //showing the user the updated scene
  requestAnimationFrame(animate);
}


const addAxes = () => {
  const axes = new THREE.AxesHelper(20);
  scene.add(axes);
};

const addPointLight = () => {
  const pointLight = new THREE.PointLight(0xffff00);
  pointLight.position.set(-40, 60, 20)
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  scene.add(pointLight)
}




const addCube = () => {
  //1 create material
  //2 create geomoetry
  //3 create mesh (from geometry and material)
  //4 add mesh to scene
  //5 re-render (scene and camera)
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff8f00,
    // wireframe: true
  });
  const cubeGeometry = new THREE.BoxGeometry(4,4,4);

  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = 3
  cube.position.y = 5
  cube.position.z = 3

  cube.castShadow = true;
  scene.add(cube)
}

const addSphere = () => {
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039be5
  })
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
  sphere.position.x = 10
  sphere.position.y = 15
  sphere.position.z = 5

  sphere.castShadow = true;
  sphere.receiveShadow = true;

  scene.add(sphere)
}

const addPlane = () => {
  //Mesh is geometry AND material
  const planeGeometry = new THREE.PlaneGeometry(60, 20);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xcfd8dc,
    side: THREE.DoubleSide
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 20;
  plane.position.y = 0;
  plane.position.z = 0;

  plane.receiveShadow = true;
  scene.add(plane)

}

const init = () => {
  renderer.setClearColor( 0xeceff1);
  renderer.setSize(window.innerWidth, window.innerHeight)

  addAxes();
  addPlane();
  addCube();
  addSphere();
  addPointLight();

  gui = new dat.GUI();
  gui.add(controller, "rotationSpeed", 0, 0.05);
  gui.add(controller, "bouncingSpeed", 0, 0.05);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // render the scene
  renderer.render(scene, camera);
  document.querySelector('#output').appendChild(renderer.domElement)
  animate();
};


window.onload = init;


const onResize = () => {
  // change aspect ratio of the camera
  camera.aspect = window.innerWidth / window.innerHeight
  // update positions of the shapes
  camera.updateProjectionMatrix();
  // update the size of the render
  renderer.setSize(window.innerWidth, window.innerHeight)

};

window.addEventListener("resize", onResize);
