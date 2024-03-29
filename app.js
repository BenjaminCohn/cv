const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const canvas = document.querySelector('#canvas')
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 500)


const geometry = new THREE.CubeGeometry(5, 5, 20, 32)// <= fonctionne aussi avec le Cylindre
const material = new THREE.MeshBasicMaterial({ color: 'skyblue' , wireframe: true })
const cylinder = new THREE.Mesh(geometry, material)

scene.add(cylinder)
camera.position.z = 20

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height);
    }
    return needResize;
  }
  
function animate() {
    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()