import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotionPref } from '../hooks/useMedia';

export default function Hero3D({ className = '' }: { className?: string }) {
  const mount = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x07070a, 8, 22);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const red = new THREE.Color('#e5132b');
    const pink = new THREE.Color('#ff3d5a');

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const key = new THREE.PointLight(pink, 40, 30);
    key.position.set(4, 3, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0x5a1478, 30, 30);
    rim.position.set(-6, -2, 2);
    scene.add(rim);

    const world = new THREE.Group();
    scene.add(world);

    // core
    const core = new THREE.Group();
    const solid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 1),
      new THREE.MeshStandardMaterial({ color: 0x14060a, emissive: red, emissiveIntensity: 0.25, metalness: 0.7, roughness: 0.3, flatShading: true }),
    );
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.1, 1)),
      new THREE.LineBasicMaterial({ color: pink, transparent: true, opacity: 0.55 }),
    );
    const shell = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.8, 0)),
      new THREE.LineBasicMaterial({ color: red, transparent: true, opacity: 0.18 }),
    );
    core.add(solid, wire, shell);
    world.add(core);

    // rings
    const rings: THREE.Mesh[] = [];
    [3.4, 4.2, 5.1].forEach((r, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.012, 8, 160),
        new THREE.MeshBasicMaterial({ color: i === 1 ? pink : red, transparent: true, opacity: 0.45 - i * 0.1 }),
      );
      ring.rotation.x = Math.PI / 2 + (i - 1) * 0.35;
      ring.rotation.y = (i - 1) * 0.5;
      rings.push(ring);
      world.add(ring);
    });

    // satellites on the rings
    const sats: { mesh: THREE.Mesh; ring: number; r: number; speed: number; angle: number }[] = [];
    const satGeo = new THREE.OctahedronGeometry(0.11, 0);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    [3.4, 4.2, 5.1].forEach((r, i) => {
      for (let k = 0; k < 2; k++) {
        const mesh = new THREE.Mesh(satGeo, satMat);
        sats.push({ mesh, ring: i, r, speed: 0.25 - i * 0.05, angle: k * Math.PI + i });
        rings[i].add(mesh);
      }
    });

    // floating blocks
    const blocks: { mesh: THREE.Mesh; spin: THREE.Vector3; base: THREE.Vector3; phase: number }[] = [];
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    for (let i = 0; i < 26; i++) {
      const s = 0.12 + Math.random() * 0.32;
      const mesh = new THREE.Mesh(
        boxGeo,
        new THREE.MeshStandardMaterial({
          color: 0x1a0a0e,
          emissive: Math.random() > 0.7 ? pink : red,
          emissiveIntensity: 0.15 + Math.random() * 0.5,
          metalness: 0.8,
          roughness: 0.35,
        }),
      );
      mesh.scale.setScalar(s);
      const angle = Math.random() * Math.PI * 2;
      const dist = 4 + Math.random() * 6;
      const base = new THREE.Vector3(Math.cos(angle) * dist, (Math.random() - 0.5) * 8, Math.sin(angle) * dist - 3);
      mesh.position.copy(base);
      blocks.push({ mesh, base, phase: Math.random() * 10, spin: new THREE.Vector3(Math.random(), Math.random(), Math.random()).multiplyScalar(0.6) });
      world.add(mesh);
    }

    // star dust
    const dustCount = 700;
    const pos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xff8a9a, size: 0.035, transparent: true, opacity: 0.7, depthWrite: false }));
    scene.add(dust);

    const placeWorld = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      const wide = w >= 1024;
      world.position.set(wide ? 3.6 : 0, wide ? 0 : 1.6, 0);
      world.scale.setScalar(wide ? 1 : 0.75);
    };
    placeWorld();
    const ro = new ResizeObserver(placeWorld);
    ro.observe(el);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);

    const clock = new THREE.Clock();
    let raf = 0;
    let visible = true;

    const draw = () => {
      const t = clock.getElapsedTime();
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const scroll = Math.min(window.scrollY / window.innerHeight, 1.2);

      core.rotation.y = t * 0.25 + mouse.x * 0.4;
      core.rotation.x = t * 0.12 + mouse.y * 0.3;
      wire.rotation.y = -t * 0.18;
      shell.rotation.z = t * 0.08;
      const pulse = 1 + Math.sin(t * 1.6) * 0.03;
      solid.scale.setScalar(pulse);

      rings.forEach((ring, i) => (ring.rotation.z = t * (0.1 + i * 0.05) * (i % 2 ? -1 : 1)));
      sats.forEach((s) => {
        const a = s.angle + t * s.speed;
        s.mesh.position.set(Math.cos(a) * s.r, Math.sin(a) * s.r, 0);
        s.mesh.rotation.y = t * 2;
      });

      blocks.forEach((b) => {
        b.mesh.rotation.x += b.spin.x * 0.01;
        b.mesh.rotation.y += b.spin.y * 0.01;
        b.mesh.position.y = b.base.y + Math.sin(t * 0.6 + b.phase) * 0.35;
      });

      dust.rotation.y = t * 0.015;

      world.rotation.y = mouse.x * 0.25;
      world.rotation.x = mouse.y * 0.15 + scroll * 0.4;
      camera.position.z = 10 + scroll * 4;
      camera.position.x = mouse.x * 0.6;
      camera.position.y = -mouse.y * 0.4;
      camera.lookAt(world.position.x * 0.5, world.position.y * 0.5, 0);

      key.intensity = 36 + Math.sin(t * 2) * 6;
      renderer.render(scene, camera);
    };

    const loop = () => {
      draw();
      if (visible) raf = requestAnimationFrame(loop);
    };

    let io: IntersectionObserver | null = null;
    if (reduced) {
      draw();
    } else {
      io = new IntersectionObserver(([entry]) => {
        const was = visible;
        visible = entry.isIntersecting;
        if (visible && !was) raf = requestAnimationFrame(loop);
      });
      io.observe(el);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      visible = false;
      io?.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh;
        m.geometry?.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduced]);

  return <div ref={mount} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} />;
}
