/* ===== THREE.JS COMPONENTS - MODERN PORTFOLIO ===== */

class ThreeJSManager {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.centralModel = null;
    this.floatingElements = [];
    this.mouse = { x: 0, y: 0 };
    this.isInitialized = false;
    
    this.init();
  }

  init() {
    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupLights();
    this.createParticleSystem();
    this.createFloatingElements();
    this.setupEventListeners();
    this.animate();
    
    this.isInitialized = true;
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x0a0a0a, 50, 200);
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 30);
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('three-canvas'),
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  setupLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    this.scene.add(ambientLight);

    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0x00ff88, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);

    // Accent light
    const accentLight = new THREE.PointLight(0x0095ff, 0.8, 50);
    accentLight.position.set(-10, 5, 10);
    this.scene.add(accentLight);

    // Rim light
    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 0.5);
    rimLight.position.set(-5, 0, -10);
    this.scene.add(rimLight);
  }

  createParticleSystem() {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color(0x00ff88),
      new THREE.Color(0x0095ff),
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0xff6b35)
    ];

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      // Color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 3 + 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Add floating animation
          mvPosition.y += sin(time + position.x * 0.01) * 2.0;
          mvPosition.x += cos(time + position.z * 0.01) * 1.0;
          
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;
          
          float alpha = 1.0 - distance * 2.0;
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      vertexColors: true
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  createFloatingElements() {
    // Create geometric floating elements
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1.2),
      new THREE.TetrahedronGeometry(1.5),
      new THREE.DodecahedronGeometry(0.8)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x00ff88, 
        transparent: true, 
        opacity: 0.7,
        wireframe: true 
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x0095ff, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true 
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.8,
        wireframe: true 
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xff6b35, 
        transparent: true, 
        opacity: 0.5,
        wireframe: true 
      })
    ];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Store initial position for animation
      mesh.userData = {
        initialPosition: mesh.position.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatRange: Math.random() * 3 + 2
      };

      this.floatingElements.push(mesh);
      this.scene.add(mesh);
    }
  }

  createCentralModel() {
    // Create a complex central 3D model
    const group = new THREE.Group();

    // Main sphere with dynamic material
    const sphereGeometry = new THREE.SphereGeometry(3, 32, 32);
    const sphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x00ff88) },
        color2: { value: new THREE.Color(0x0095ff) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 pos = position;
          pos += normal * sin(time + position.x * 2.0) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float noise = sin(vPosition.x * 10.0 + time) * 0.5 + 0.5;
          vec3 color = mix(color1, color2, noise);
          
          float fresnel = pow(1.0 - dot(normalize(vPosition), vec3(0.0, 0.0, 1.0)), 2.0);
          color += fresnel * 0.3;
          
          gl_FragColor = vec4(color, 0.9);
        }
      `,
      transparent: true
    });

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);

    // Orbiting rings
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(5 + i * 2, 0.1, 8, 100);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: [0x00ff88, 0x0095ff, 0x8b5cf6][i],
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.userData = {
        rotationSpeed: (Math.random() + 0.5) * 0.01,
        axis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize()
      };
      
      group.add(ring);
    }

    group.position.set(0, 0, 0);
    this.centralModel = group;
    this.scene.add(group);
  }

  setupEventListeners() {
    // Mouse movement
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Scroll effects
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (this.centralModel) {
        this.centralModel.rotation.y = scrollY * 0.001;
        this.centralModel.position.y = -scrollY * 0.01;
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const time = Date.now() * 0.001;

    // Animate particles
    if (this.particles && this.particles.material.uniforms) {
      this.particles.material.uniforms.time.value = time;
      this.particles.rotation.y += 0.001;
    }

    // Animate floating elements
    this.floatingElements.forEach((element, index) => {
      const userData = element.userData;
      
      // Rotation
      element.rotation.x += userData.rotationSpeed.x;
      element.rotation.y += userData.rotationSpeed.y;
      element.rotation.z += userData.rotationSpeed.z;
      
      // Floating motion
      element.position.y = userData.initialPosition.y + 
        Math.sin(time * userData.floatSpeed + index) * userData.floatRange;
      
      // Mouse interaction
      const mouseInfluence = 0.1;
      element.position.x += (this.mouse.x * mouseInfluence - element.position.x * 0.01) * 0.1;
      element.position.z += (this.mouse.y * mouseInfluence - element.position.z * 0.01) * 0.1;
    });

    // Animate central model
    if (this.centralModel) {
      this.centralModel.rotation.y += 0.005;
      
      // Update shader uniforms
      const sphere = this.centralModel.children[0];
      if (sphere.material.uniforms) {
        sphere.material.uniforms.time.value = time;
      }
      
      // Animate rings
      this.centralModel.children.forEach((child, index) => {
        if (index > 0 && child.userData.rotationSpeed) {
          child.rotateOnAxis(child.userData.axis, child.userData.rotationSpeed);
        }
      });
      
      // Mouse interaction
      this.centralModel.rotation.x = this.mouse.y * 0.1;
      this.centralModel.rotation.z = this.mouse.x * 0.1;
    }

    // Camera movement
    this.camera.position.x += (this.mouse.x * 2 - this.camera.position.x) * 0.02;
    this.camera.position.y += (-this.mouse.y * 2 - this.camera.position.y) * 0.02;
    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
  }

  // Public methods for external control
  showCentralModel() {
    if (!this.centralModel) {
      this.createCentralModel();
    }
    this.centralModel.visible = true;
  }

  hideCentralModel() {
    if (this.centralModel) {
      this.centralModel.visible = false;
    }
  }

  updateParticleIntensity(intensity) {
    if (this.particles) {
      this.particles.material.opacity = intensity;
    }
  }

  dispose() {
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    // Clean up geometries and materials
    this.scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }
}

// Initialize Three.js when DOM is loaded
let threeManager = null;

document.addEventListener('DOMContentLoaded', () => {
  // Check if Three.js is loaded
  if (typeof THREE !== 'undefined') {
    threeManager = new ThreeJSManager();
  } else {
    console.warn('Three.js not loaded. 3D components will not be available.');
  }
});

// Export for external use
window.ThreeJSManager = ThreeJSManager;
window.threeManager = threeManager;