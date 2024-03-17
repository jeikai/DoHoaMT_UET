import * as THREE from 'three';

// container chứa đối tượng sẽ được render
const scene = new THREE.Scene();

// khởi tạo camera góc nhìn với các tham số: góc nhìn 75 độ, tỷ lệ khung hình, mặt cắt gần, mặt cắt xa ( xác định phạm vi hiển thị )
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// đặt vị trí camera tại 0 0 100 trong scene ( x, y, z)
camera.position.set( 0, 0, 100 );
// hướng camera nhìn về điểm 0, 0, 0 trong scene
camera.lookAt( 0, 0, 0 );

// tạo một render để vẽ scene 3D
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

// tạo material cho line
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// tạo mảng lưu trữ các điểm
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );

scene.add( line );
// tạp vòng lặp animation với 60 fps
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();