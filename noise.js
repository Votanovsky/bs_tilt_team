const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer({
    canvas: document.querySelector('.canvas_noise')
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new PlaneGeometry(3, 3);
const clock = new Clock();
const uniforms = {
    time: { 
        type: 'f',
        value: clock.getElapsedTime()
    }
}
const material = new ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }   
    `,
    fragmentShader: `
        uniform float time;
        float random2d(vec2 coord) {
            return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 143758.5453);
        }
        void main() {
            float grain = random2d(vec2(sin(gl_FragCoord.xy)) * time * 1.0);
            gl_FragColor = vec4(vec3(grain), 1.0);
            // gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
        }
    `,
});
const plane = new Mesh( geometry, material );
scene.add( plane );

camera.position.z = 1;

function animate() {
    uniforms.time.value = clock.getElapsedTime();
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();