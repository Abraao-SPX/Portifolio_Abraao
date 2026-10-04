import {
  ACESFilmicToneMapping,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  Group,
  HemisphereLight,
  InstancedMesh,
  Line,
  LineBasicMaterial,
  Material,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  Quaternion,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Texture,
  TorusGeometry,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export type ArchitectureSceneController = {
  setPointer(x: number, y: number): void;
  setExploded(value: boolean): void;
  setChapter(index: number): void;
  replay(): void;
  setMotionEnabled(value: boolean): void;
  setVisible(value: boolean): void;
  setScrollProgress(value: number): void;
  resize(): void;
  dispose(): void;
};

type SceneOptions = {
  motionEnabled: boolean;
  exploded: boolean;
  onError?: () => void;
};

type Module = {
  group: Group;
  sign: Vector3;
  fromPosition: Vector3;
  fromQuaternion: Quaternion;
  fromScale: number;
  targetPosition: Vector3;
  targetQuaternion: Quaternion;
};

/** An original kinetic sculpture, generated entirely locally without model downloads. */
export function createArchitectureScene(
  host: HTMLElement,
  options: SceneOptions,
): ArchitectureSceneController {
  const geometries = new Set<BufferGeometry>();
  const materials = new Set<Material>();
  const textures = new Set<Texture>();
  const instances = new Set<InstancedMesh>();
  const geometry = <T extends BufferGeometry>(value: T): T => {
    geometries.add(value);
    return value;
  };
  const material = <T extends Material>(value: T): T => {
    materials.add(value);
    return value;
  };
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  const canvas = renderer.domElement;
  let environmentTarget: WebGLRenderTarget | undefined;
  let environment: RoomEnvironment | undefined;
  let pmrem: PMREMGenerator | undefined;
  let disposed = false;
  let contextLost = false;
  let frame = 0;
  let resizeObserver: ResizeObserver | undefined;

  function release() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    resizeObserver?.disconnect();
    canvas.removeEventListener("webglcontextlost", handleContextLoss);
    instances.forEach((value) => value.dispose());
    geometries.forEach((value) => value.dispose());
    materials.forEach((value) => value.dispose());
    textures.forEach((value) => value.dispose());
    environmentTarget?.dispose();
    environment?.dispose();
    pmrem?.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    canvas.remove();
  }

  function handleContextLoss(event: Event) {
    event.preventDefault();
    contextLost = true;
    cancelAnimationFrame(frame);
    frame = 0;
    options.onError?.();
  }

  try {
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setClearColor(0x000000, 0);
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "display:block;width:100%;height:100%";
    canvas.addEventListener("webglcontextlost", handleContextLoss, false);

    const scene = new Scene();
    const camera = new PerspectiveCamera(34, 1, 0.1, 45);
    // The local studio environment supplies broad, photographic highlights on metal.
    pmrem = new PMREMGenerator(renderer);
    environment = new RoomEnvironment();
    environmentTarget = pmrem.fromScene(environment, 0.045, 0.1, 100);
    scene.environment = environmentTarget.texture;
    scene.environmentIntensity = 1.05;
    environment.dispose();
    environment = undefined;
    pmrem.dispose();
    pmrem = undefined;

    scene.add(new HemisphereLight("#fff7df", "#4d5145", 1.25));
    const key = new DirectionalLight("#fff8e9", 2.6);
    key.position.set(-3, 5, 6);
    scene.add(key);
    const rim = new DirectionalLight("#ffffff", 2);
    rim.position.set(4, 3, -5);
    scene.add(rim);
    const fill = new DirectionalLight("#f4a16f", 0.5);
    fill.position.set(-4, -2, 2);
    scene.add(fill);

    const sculpture = new Group();
    const shell = new Group();
    const core = new Group();
    const mechanics = new Group();
    const network = new Group();
    sculpture.add(shell, mechanics, core, network);
    scene.add(sculpture);

    const orange = material(new MeshPhysicalMaterial({
      color: "#e85a2a", metalness: 0.35, roughness: 0.26,
      clearcoat: 0.65, clearcoatRoughness: 0.2,
    }));
    const innerOrange = material(new MeshStandardMaterial({ color: "#ae3a1b", metalness: 0.42, roughness: 0.31 }));
    const chrome = material(new MeshStandardMaterial({ color: "#d6d8d0", metalness: 0.98, roughness: 0.19 }));
    const satin = material(new MeshStandardMaterial({ color: "#9ba195", metalness: 0.86, roughness: 0.33 }));
    const ink = material(new MeshStandardMaterial({ color: "#232923", metalness: 0.55, roughness: 0.28 }));
    const rubber = material(new MeshStandardMaterial({ color: "#181d19", metalness: 0.08, roughness: 0.71 }));
    const ivory = material(new MeshStandardMaterial({ color: "#f7e6c4", metalness: 0.35, roughness: 0.22 }));
    const lightOrange = material(new MeshStandardMaterial({
      color: "#ff9b46", emissive: "#e85a2a", emissiveIntensity: 1.2, metalness: 0.25, roughness: 0.24,
    }));
    const tinyDark = material(new MeshBasicMaterial({ color: "#383e35" }));

    const dummy = new Object3D();
    const zAxis = new Vector3(0, 0, 1);
    const up = new Vector3(0, 1, 0);
    const moduleGeometry = geometry(new RoundedBoxGeometry(0.94, 0.94, 0.16, 3, 0.065));
    const linerGeometry = geometry(new RoundedBoxGeometry(0.81, 0.81, 0.09, 2, 0.035));
    const railGeometry = geometry(new RoundedBoxGeometry(0.028, 0.64, 0.032, 2, 0.012));
    const screwGeometry = geometry(new CylinderGeometry(0.032, 0.032, 0.012, 10));
    const slotGeometry = geometry(new BoxGeometry(0.036, 0.006, 0.006));
    const insetGeometry = geometry(new RoundedBoxGeometry(0.23, 0.086, 0.012, 2, 0.02));
    const pipGeometry = geometry(new CylinderGeometry(0.012, 0.012, 0.01, 8));
    const modules: Module[] = [];
    const axes = [new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1)];

    // Eight independent three-sided, hollow corner hoods form the segmented shell.
    for (const x of [-1, 1]) {
      for (const y of [-1, 1]) {
        for (const z of [-1, 1]) {
          const group = new Group();
          const sign = new Vector3(x, y, z);
          shell.add(group);
          axes.forEach((axis, index) => {
            const normal = axis.clone().multiplyScalar(sign.getComponent(index));
            const panel = new Group();
            panel.position.copy(normal).multiplyScalar(0.38);
            panel.quaternion.setFromUnitVectors(zAxis, normal);
            group.add(panel);
            panel.add(new Mesh(moduleGeometry, orange));
            const liner = new Mesh(linerGeometry, innerOrange);
            liner.position.z = -0.106;
            panel.add(liner);
            const trim = new Mesh(railGeometry, chrome);
            trim.position.set(-0.367, 0, 0.079);
            panel.add(trim);
            const inset = new Mesh(insetGeometry, rubber);
            inset.position.set(0.17, -0.325, 0.085);
            panel.add(inset);
            const screws = new InstancedMesh(screwGeometry, satin, 2);
            const slots = new InstancedMesh(slotGeometry, tinyDark, 2);
            const pips = new InstancedMesh(pipGeometry, ivory, 3);
            instances.add(screws);
            instances.add(slots);
            instances.add(pips);
            for (let i = 0; i < 2; i++) {
              dummy.position.set(0.342, i ? 0.342 : -0.342, 0.085);
              dummy.rotation.set(Math.PI / 2, 0, 0);
              dummy.scale.setScalar(1);
              dummy.updateMatrix();
              screws.setMatrixAt(i, dummy.matrix);
              dummy.position.z = 0.093;
              dummy.rotation.set(0, 0, 0.6);
              dummy.updateMatrix();
              slots.setMatrixAt(i, dummy.matrix);
            }
            for (let i = 0; i < 3; i++) {
              dummy.position.set(0.105 + i * 0.064, -0.325, 0.097);
              dummy.rotation.set(Math.PI / 2, 0, 0);
              dummy.updateMatrix();
              pips.setMatrixAt(i, dummy.matrix);
            }
            panel.add(screws, slots, pips);
          });
          modules.push({
            group, sign,
            fromPosition: sign.clone().multiplyScalar(1.85),
            fromQuaternion: new Quaternion(),
            fromScale: 0.5,
            targetPosition: new Vector3(),
            targetQuaternion: new Quaternion(),
          });
        }
      }
    }

    // Central micro-machinery: a rotating block, concentric bearings, and three gimbals.
    const hub = new Group();
    core.add(hub);
    const heart = new Mesh(geometry(new RoundedBoxGeometry(0.69, 0.69, 0.69, 3, 0.10)), ink);
    hub.add(heart);
    const collarGeometry = geometry(new TorusGeometry(0.26, 0.035, 10, 40));
    const hubFaceGeometry = geometry(new CylinderGeometry(0.2, 0.2, 0.035, 32));
    const indicatorGeometry = geometry(new BoxGeometry(0.028, 0.11, 0.012));
    for (let index = 0; index < 6; index++) {
      const axis = axes[index % 3].clone().multiplyScalar(index > 2 ? -1 : 1);
      const face = new Group();
      face.position.copy(axis).multiplyScalar(0.352);
      face.quaternion.setFromUnitVectors(zAxis, axis);
      hub.add(face);
      face.add(new Mesh(collarGeometry, chrome));
      const disk = new Mesh(hubFaceGeometry, satin);
      disk.rotation.x = Math.PI / 2;
      face.add(disk);
      const indicator = new Mesh(indicatorGeometry, lightOrange);
      indicator.position.z = 0.027;
      indicator.rotation.z = -0.48;
      face.add(indicator);
    }

    const rings: Group[] = [];
    for (let index = 0; index < 3; index++) {
      const radius = 0.54 + index * 0.18;
      const gimbal = new Group();
      const bearing = new Mesh(geometry(new TorusGeometry(radius, index === 2 ? 0.047 : 0.035, 10, 72)), chrome);
      gimbal.add(bearing);
      const ringInset = new Mesh(geometry(new TorusGeometry(radius - 0.039, 0.014, 6, 72)), rubber);
      ringInset.position.z = 0.011;
      gimbal.add(ringInset);
      const arcGeometry = geometry(new TorusGeometry(radius + 0.009, 0.027, 8, 22, Math.PI * 0.37));
      for (let arcIndex = 0; arcIndex < 3; arcIndex++) {
        const arc = new Mesh(arcGeometry, index === 1 ? orange : satin);
        arc.rotation.z = arcIndex * (Math.PI * 2 / 3);
        arc.position.z = 0.03;
        gimbal.add(arc);
      }
      const ticks = new InstancedMesh(geometry(new BoxGeometry(0.012, 0.06, 0.023)), index === 2 ? ink : orange, 24);
      instances.add(ticks);
      for (let tick = 0; tick < 24; tick++) {
        const angle = tick / 24 * Math.PI * 2;
        dummy.position.set(Math.sin(angle) * radius, Math.cos(angle) * radius, 0.047);
        dummy.rotation.set(0, 0, -angle);
        dummy.scale.setScalar(tick % 3 === 0 ? 1 : 0.6);
        dummy.updateMatrix();
        ticks.setMatrixAt(tick, dummy.matrix);
      }
      gimbal.add(ticks);
      const pivotGeometry = geometry(new SphereGeometry(0.08, 12, 8));
      for (const side of [-1, 1]) {
        const pivot = new Mesh(pivotGeometry, index === 1 ? orange : chrome);
        pivot.position.x = side * radius;
        gimbal.add(pivot);
      }
      core.add(gimbal);
      rings.push(gimbal);
    }

    const rods = new InstancedMesh(geometry(new CylinderGeometry(0.026, 0.026, 1, 10)), chrome, 12);
    const joints = new InstancedMesh(geometry(new SphereGeometry(0.064, 10, 8)), ink, 8);
    instances.add(rods);
    instances.add(joints);
    mechanics.add(rods, joints);
    let rodIndex = 0;
    for (let axis = 0; axis < 3; axis++) {
      for (const a of [-1, 1]) {
        for (const b of [-1, 1]) {
          dummy.position.set(0, 0, 0);
          dummy.position.setComponent((axis + 1) % 3, a * 0.68);
          dummy.position.setComponent((axis + 2) % 3, b * 0.68);
          dummy.quaternion.setFromUnitVectors(up, axes[axis]);
          dummy.scale.set(1, 1.36, 1);
          dummy.updateMatrix();
          rods.setMatrixAt(rodIndex++, dummy.matrix);
        }
      }
    }
    modules.forEach(({ sign }, index) => {
      dummy.position.copy(sign).multiplyScalar(0.68);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      joints.setMatrixAt(index, dummy.matrix);
    });

    const pathMaterial = material(new LineBasicMaterial({ color: "#71806d", transparent: true, opacity: 0, depthWrite: false }));
    const orbitMaterial = material(new LineBasicMaterial({ color: "#8b9484", transparent: true, opacity: 0, depthWrite: false }));
    const connections: Line[] = [];
    for (let i = 0; i < 8; i++) {
      const path = geometry(new BufferGeometry());
      path.setAttribute("position", new Float32BufferAttribute(new Float32Array(25 * 3), 3));
      const line = new Line(path, pathMaterial);
      line.frustumCulled = false;
      connections.push(line);
      network.add(line);
    }
    const orbitPoints: Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const angle = i / 128 * Math.PI * 2;
      orbitPoints.push(new Vector3(Math.cos(angle) * 2.15, Math.sin(angle) * 1.58, Math.sin(angle * 2) * 0.55));
    }
    const orbit = new Line(geometry(new BufferGeometry().setFromPoints(orbitPoints)), orbitMaterial);
    network.add(orbit);
    const particleCount = 24;
    const particles = new InstancedMesh(geometry(new SphereGeometry(0.023, 7, 5)), lightOrange, particleCount);
    particles.frustumCulled = false;
    instances.add(particles);
    network.add(particles);

    // A single generated shadow avoids per-frame shadow-map and postprocessing passes.
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext("2d");
    let shadow: Mesh | undefined;
    if (ctx) {
      const gradient = ctx.createRadialGradient(64, 64, 6, 64, 64, 62);
      gradient.addColorStop(0, "rgba(35,42,30,0.16)");
      gradient.addColorStop(0.45, "rgba(35,42,30,0.055)");
      gradient.addColorStop(1, "rgba(35,42,30,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
      const shadowTexture = new CanvasTexture(shadowCanvas);
      shadowTexture.colorSpace = SRGBColorSpace;
      textures.add(shadowTexture);
      shadow = new Mesh(geometry(new PlaneGeometry(5.2, 5.2)), material(new MeshBasicMaterial({
        map: shadowTexture, transparent: true, depthWrite: false, toneMapped: false,
      })));
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(0, -1.85, 0);
      scene.add(shadow);
    }

    let motionEnabled = options.motionEnabled;
    let visible = true;
    let chapter = options.exploded ? 1 : 0;
    let transitionTime = motionEnabled ? 0 : 3;
    let previousTime = 0;
    let elapsed = 0;
    let mobile = false;
    let aspect = 1;
    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    // A shared continuous playhead lets scrolling scrub the same poses as the buttons.
    // The assembly clock stays independent, so an initial scroll value of zero is a no-op.
    let scroll = chapter / 2;
    let targetScroll = scroll;
    const coreScales = [1, 1.18, 1.28];
    const cameraPositions = [new Vector3(4.1, 2.9, 6.2), new Vector3(3.5, 2.5, 8.65).multiplyScalar(1.08), new Vector3(2.5, 2.0, 10.1)];
    const cameraPosition = cameraPositions[chapter].clone();
    const cameraTarget = new Vector3();
    const targetEuler = new Object3D();
    const smooth = (value: number) => {
      const t = MathUtils.clamp(value, 0, 1);
      return t * t * t * (t * (t * 6 - 15) + 10);
    };
    const workVector = new Vector3();
    const pathPoint = new Vector3();
    const nextPosition = new Vector3();
    const nextQuaternion = new Quaternion();

    function modulePose(item: Module, index: number, stage: number, position: Vector3, quaternion: Quaternion) {
      const { sign } = item;
      if (stage === 0) {
        const spread = 0.67 + Math.sin(elapsed * 0.9 + index * 0.75) * 0.035;
        position.copy(sign).multiplyScalar(spread);
        targetEuler.rotation.set(0, 0, 0);
      } else if (stage === 1) {
        const spread = 1.14 + Math.sin(elapsed * 0.8 + index * 0.7) * 0.075;
        position.copy(sign).multiplyScalar(spread);
        position.y *= 1.13;
        targetEuler.rotation.set(sign.z * 0.23, sign.x * 0.3, sign.y * 0.17);
      } else {
        const orbitAngle = index / 8 * Math.PI * 2 + Math.PI / 8 + elapsed * 0.09;
        position.set(Math.cos(orbitAngle) * 2.15, Math.sin(orbitAngle) * 1.58, Math.sin(orbitAngle * 2) * 0.55);
        targetEuler.rotation.set(Math.sin(orbitAngle) * 0.55, -orbitAngle + Math.PI / 4, Math.cos(orbitAngle) * 0.36);
      }
      quaternion.setFromEuler(targetEuler.rotation);
    }

    function compose() {
      const t = elapsed;
      // elapsed advances only in animate; a paused render preserves every mechanism's phase.
      const activeTime = t;
      const intro = smooth(transitionTime / 2.35);
      const stage = scroll * 2;
      const lowerStage = Math.min(1, Math.floor(stage));
      const blend = smooth(stage - lowerStage);
      const coreScale = MathUtils.lerp(coreScales[lowerStage], coreScales[lowerStage + 1], blend);
      const networkVisibility = smooth(stage - 1);
      cameraPosition.lerpVectors(cameraPositions[lowerStage], cameraPositions[lowerStage + 1], blend);
      sculpture.rotation.set(
        -0.035 + pointerY * 0.43 + scroll * 0.06,
        pointerX * 0.64 + Math.sin(activeTime * 0.18) * 0.11 + scroll * 0.20,
        -0.04 + Math.sin(activeTime * 0.26) * 0.018,
      );
      sculpture.position.y = 0.04 + Math.sin(activeTime * 0.85) * 0.055;
      core.scale.setScalar(coreScale);
      core.rotation.y = activeTime * 0.13;
      hub.rotation.set(activeTime * 0.18, -activeTime * 0.31, 0.26);
      rings[0].rotation.set(Math.PI / 2 + activeTime * 0.36, 0.25, -activeTime * 0.29);
      rings[1].rotation.set(-0.32, Math.PI / 2 - activeTime * 0.29, activeTime * 0.2);
      rings[2].rotation.set(0.3 + Math.sin(activeTime * 0.38) * 0.45, activeTime * 0.23, -0.32);
      mechanics.rotation.y = Math.sin(activeTime * 0.22) * 0.06;
      mechanics.scale.setScalar(MathUtils.lerp(1, 1.16, coreScale - 1));

      modules.forEach((item, index) => {
        const { group, targetPosition, targetQuaternion } = item;
        const angle = index / 8 * Math.PI * 2 + Math.PI / 8;
        modulePose(item, index, lowerStage, targetPosition, targetQuaternion);
        modulePose(item, index, lowerStage + 1, nextPosition, nextQuaternion);
        targetPosition.lerp(nextPosition, blend);
        targetQuaternion.slerp(nextQuaternion, blend);
        const progress = smooth((transitionTime - index * 0.055) / 1.85);
        group.position.lerpVectors(item.fromPosition, targetPosition, progress);
        group.quaternion.slerpQuaternions(item.fromQuaternion, targetQuaternion, progress);
        const size = MathUtils.lerp(1, 0.63, networkVisibility);
        group.scale.setScalar(MathUtils.lerp(item.fromScale, size, progress));

        // Each curved connection terminates at the moving shell component.
        const attribute = connections[index].geometry.getAttribute("position");
        for (let point = 0; point < 25; point++) {
          const p = point / 24;
          pathPoint.copy(group.position).multiplyScalar(p);
          const bend = Math.sin(p * Math.PI) * 0.3;
          pathPoint.x += Math.sin(angle + t * 0.12) * bend;
          pathPoint.y += Math.cos(angle + t * 0.12) * bend;
          pathPoint.z += Math.sin(p * Math.PI) * 0.4;
          attribute.setXYZ(point, pathPoint.x, pathPoint.y, pathPoint.z);
        }
        attribute.needsUpdate = true;
      });
      pathMaterial.opacity = networkVisibility * 0.38;
      orbitMaterial.opacity = networkVisibility * 0.2;
      orbit.rotation.z = activeTime * 0.09;
      network.visible = networkVisibility > 0.01;
      if (network.visible) {
        for (let index = 0; index < particleCount; index++) {
          const moduleIndex = index % 8;
          const p = ((activeTime * 0.25 + Math.floor(index / 8) / 3) % 1);
          const positions = connections[moduleIndex].geometry.getAttribute("position");
          const vertex = Math.min(23, Math.floor(p * 24));
          const localProgress = p * 24 - vertex;
          pathPoint.fromBufferAttribute(positions, vertex);
          workVector.fromBufferAttribute(positions, vertex + 1);
          dummy.position.lerpVectors(pathPoint, workVector, localProgress);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.setScalar(networkVisibility * Math.sin(p * Math.PI) * 1.7);
          dummy.updateMatrix();
          particles.setMatrixAt(index, dummy.matrix);
        }
        particles.instanceMatrix.needsUpdate = true;
      }
      if (shadow) shadow.scale.setScalar(0.83 + coreScale * 0.17);
      // Widen the framing gracefully for a portrait stage and unusually narrow embeds.
      const assemblyDistance = 1 + (1 - intro) * 0.7;
      camera.position.copy(cameraPosition).multiplyScalar(Math.max(1, 0.98 / aspect) * assemblyDistance);
      cameraTarget.set(0, 0.02 + scroll * 0.15, 0);
      camera.lookAt(cameraTarget);
      // Intro exposure is deliberately immediate; only the mechanical assembly animates.
      lightOrange.emissiveIntensity = 1.0 + Math.sin(activeTime * 2.1) * 0.23 + (1 - intro) * 0.4;
    }

    function render() {
      if (disposed || contextLost || !visible) return;
      compose();
      renderer.render(scene, camera);
    }

    function animate(time: number) {
      frame = 0;
      if (disposed || contextLost || !visible || !motionEnabled) return;
      const interval = mobile ? 1000 / 30 : 1000 / 60;
      const sincePrevious = time - previousTime;
      if (previousTime && sincePrevious < interval - 1) {
        frame = requestAnimationFrame(animate);
        return;
      }
      const delta = previousTime ? Math.min(sincePrevious / 1000, 0.065) : 1 / 60;
      previousTime = time;
      elapsed += delta;
      transitionTime += delta;
      const ease = 1 - Math.exp(-delta * 4.2);
      pointerX = MathUtils.lerp(pointerX, targetPointerX, ease);
      pointerY = MathUtils.lerp(pointerY, targetPointerY, ease);
      scroll = MathUtils.lerp(scroll, targetScroll, 1 - Math.exp(-delta * 5.4));
      if (Math.abs(scroll - targetScroll) < 0.0001) scroll = targetScroll;
      render();
      frame = requestAnimationFrame(animate);
    }

    function settle() {
      transitionTime = 3;
      scroll = targetScroll;
    }

    function wake() {
      if (disposed || contextLost || !visible) return;
      if (motionEnabled) {
        if (!frame) {
          previousTime = 0;
          frame = requestAnimationFrame(animate);
        }
      } else {
        render();
      }
    }

    function setChapter(index: number) {
      const next = MathUtils.clamp(Math.round(index), 0, 2);
      if (motionEnabled && next === chapter && targetScroll === next / 2) return;
      chapter = next;
      targetScroll = next / 2;
      if (!motionEnabled) settle();
      wake();
    }

    function resize() {
      if (disposed || contextLost) return;
      const { width, height } = host.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      mobile = window.matchMedia("(max-width: 700px)").matches;
      aspect = width / height;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.1 : 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      render();
    }

    if (!motionEnabled) settle();
    resize();
    host.appendChild(canvas);
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
    }
    wake();

    return {
      setPointer(x, y) {
        if (!motionEnabled) return;
        targetPointerX = MathUtils.clamp(x, -1, 1);
        targetPointerY = MathUtils.clamp(y, -1, 1);
        wake();
      },
      setExploded(value) { setChapter(value ? 1 : 0); },
      setChapter,
      replay() {
        if (!motionEnabled) { render(); return; }
        chapter = 0;
        scroll = targetScroll = 0;
        modules.forEach((item, index) => {
          item.fromPosition.copy(item.sign).multiplyScalar(1.85);
          targetEuler.rotation.set(index * 0.16, index * -0.22, 0.32);
          item.fromQuaternion.setFromEuler(targetEuler.rotation);
          item.fromScale = 0.5;
        });
        transitionTime = 0;
        elapsed = 0;
        wake();
      },
      setMotionEnabled(value) {
        if (motionEnabled === value) return;
        motionEnabled = value;
        if (!value) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
        wake();
      },
      setVisible(value) {
        if (visible === value) return;
        visible = value;
        if (!value) {
          cancelAnimationFrame(frame);
          frame = 0;
        } else {
          render();
          wake();
        }
      },
      setScrollProgress(value) {
        if (!motionEnabled) return;
        targetScroll = MathUtils.clamp(value, 0, 1);
        chapter = Math.round(targetScroll * 2);
        wake();
      },
      resize,
      dispose: release,
    };
  } catch (error) {
    release();
    throw error;
  }
}
