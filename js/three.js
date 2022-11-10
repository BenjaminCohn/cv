const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

const geometry = new THREE.CubeGeometry(5, 5, 20, 32);// <=fonctionne aussi avec le Cylinders
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const cylinder = new THREE.Mesh(geometry, material)

scene.add(CubeGeometry)
camera.position.z = 20

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
                          
function animate() {
    CubeGeometry.rotation.x += 0.01
    CubeGeometry.rotation.y += 0.01
    CubeGeometry.render(scene, camera)
    requestAnimationFrame(animate)
}
animate()