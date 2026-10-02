import {
  ACESFilmicToneMapping,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  CylinderGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  Group,
  HemisphereLight,
  InstancedMesh,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  LineSegments,
  Material,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  SRGBColorSpace,
  Texture,
  Vector3,
  WebGLRenderer,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export type ArchitectureSceneController = {
  setPointer(x: number, y: number): void;
  setExploded(value: boolean): void;
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

/** A small, self-contained scene: no model, environment map, or asset requests. */
export function createArchitectureScene(
  host: HTMLElement,
  options: SceneOptions,
): ArchitectureSceneController {
  const geometries = new Set<BufferGeometry>();
  const materials = new Set<Material>();
  const textures = new Set<Texture>();
  const geometry = <T extends BufferGeometry>(value: T): T => {
    geometries.add(value);
    return value;
  };
  const material = <T extends Material>(value: T): T => {
    materials.add(value);
    return value;
  };

  // Construction can throw when WebGL is unavailable; the caller retains its SVG.
  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  const canvas = renderer.domElement;
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
    geometries.forEach((value) => value.dispose());
    materials.forEach((value) => value.dispose());
    textures.forEach((value) => value.dispose());
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
    renderer.toneMappingExposure = 0.95;
    renderer.setClearColor(0x000000, 0);
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.addEventListener("webglcontextlost", handleContextLoss, false);

    const scene = new Scene();
    const camera = new OrthographicCamera(-2.7, 2.7, 2.7, -2.7, 0.1, 40);
    camera.position.set(6.8, 6.2, 8.6);
    camera.lookAt(0, -0.08, 0);

    scene.add(new HemisphereLight("#fff8e9", "#686c59", 2.4));
    const keyLight = new DirectionalLight("#fff4df", 3.8);
    keyLight.position.set(-3, 7, 5);
    scene.add(keyLight);
    const rimLight = new DirectionalLight("#ffffff", 2.0);
    rimLight.position.set(4, 3, -4);
    scene.add(rimLight);

    const sculpture = new Group();
    scene.add(sculpture);
    const top = new Group();
    const middle = new Group();
    const base = new Group();
    sculpture.add(top, middle, base);

    const orange = material(new MeshStandardMaterial({
      color: "#e85a2a", roughness: 0.36, metalness: 0.12,
    }));
    const forest = material(new MeshStandardMaterial({
      color: "#424b3d", roughness: 0.5, metalness: 0.22,
    }));
    const porcelain = material(new MeshStandardMaterial({
      color: "#e6e5d9", roughness: 0.4, metalness: 0.25,
    }));
    const cream = material(new MeshStandardMaterial({
      color: "#fff1d4", roughness: 0.32, metalness: 0.05,
    }));
    const hardware = material(new MeshStandardMaterial({
      color: "#aeb49e", roughness: 0.31, metalness: 0.55,
    }));
    const chipMaterial = material(new MeshStandardMaterial({
      color: "#252e27", roughness: 0.62, metalness: 0.1,
    }));
    const warmTrace = material(new LineBasicMaterial({ color: "#eec6a3", transparent: true, opacity: 0.7 }));
    const greenTrace = material(new LineBasicMaterial({ color: "#a8b78e", transparent: true, opacity: 0.78 }));
    const baseTrace = material(new LineBasicMaterial({ color: "#a5ad98", transparent: true, opacity: 0.63 }));

    const plateGeometry = geometry(new RoundedBoxGeometry(2.72, 0.19, 2.72, 3, 0.055));
    top.add(new Mesh(plateGeometry, orange));
    middle.add(new Mesh(plateGeometry, forest));
    base.add(new Mesh(plateGeometry, porcelain));

    function line(parent: Group, points: number[][], lineMaterial: LineBasicMaterial) {
      const path = geometry(new BufferGeometry().setFromPoints(points.map((point) => new Vector3(point[0], point[1], point[2]))));
      parent.add(new Line(path, lineMaterial));
    }

    function outline(parent: Group, half: number, height: number, lineMaterial: LineBasicMaterial) {
      line(parent, [
        [-half, height, -half], [half, height, -half],
        [half, height, half], [-half, height, half], [-half, height, -half],
      ], lineMaterial);
    }

    outline(top, 1.18, 0.101, warmTrace);
    outline(middle, 1.18, 0.101, greenTrace);
    outline(base, 1.18, 0.101, baseTrace);

    // Raised glyphs are actual geometry, so their light and perspective match the lid.
    const glyphGeometry = geometry(new CylinderGeometry(0.039, 0.039, 1, 10));
    const glyph = new Group();
    glyph.rotation.y = 0.82;
    top.add(glyph);
    const up = new Vector3(0, 1, 0);
    function glyphSegment(from: [number, number], to: [number, number]) {
      const start = new Vector3(from[0], 0.14, from[1]);
      const end = new Vector3(to[0], 0.14, to[1]);
      const direction = new Vector3().subVectors(end, start);
      const segment = new Mesh(glyphGeometry, cream);
      segment.position.copy(start).add(end).multiplyScalar(0.5);
      segment.scale.y = direction.length();
      segment.quaternion.setFromUnitVectors(up, direction.normalize());
      glyph.add(segment);
    }
    glyphSegment([-0.48, -0.34], [-0.88, 0]);
    glyphSegment([-0.88, 0], [-0.48, 0.34]);
    glyphSegment([0.48, -0.34], [0.88, 0]);
    glyphSegment([0.88, 0], [0.48, 0.34]);
    glyphSegment([0.17, -0.45], [-0.17, 0.45]);

    // Every detail shares simple geometry; instancing keeps the hardware inexpensive.
    const screwGeometry = geometry(new CylinderGeometry(0.047, 0.047, 0.022, 12));
    const scratchMaterial = material(new LineBasicMaterial({ color: "#5d624f" }));
    for (const plate of [top, middle, base]) {
      const screws = new InstancedMesh(screwGeometry, hardware, 4);
      const dummy = new Object3D();
      let index = 0;
      for (const x of [-1.19, 1.19]) {
        for (const z of [-1.19, 1.19]) {
          dummy.position.set(x, 0.113, z);
          dummy.updateMatrix();
          screws.setMatrixAt(index++, dummy.matrix);
          line(plate, [[x - 0.021, 0.126, z], [x + 0.021, 0.126, z]], scratchMaterial);
        }
      }
      plate.add(screws);
    }

    // Circuit paths expose the middle layer's purpose without decorative text.
    const circuitVertices: number[] = [];
    const circuitNodes: [number, number][] = [];
    for (let quadrant = 0; quadrant < 4; quadrant++) {
      const angle = quadrant * Math.PI / 2;
      const rotate = (x: number, z: number): [number, number] => [
        x * Math.cos(angle) - z * Math.sin(angle),
        x * Math.sin(angle) + z * Math.cos(angle),
      ];
      for (let route = 0; route < 3; route++) {
        const path = [
          rotate(0.17 + route * 0.13, 0.32),
          rotate(0.17 + route * 0.13, 0.57 + route * 0.13),
          rotate(0.73 + route * 0.13, 0.57 + route * 0.13),
          rotate(0.73 + route * 0.13, 1.04),
        ];
        for (let segment = 0; segment < path.length - 1; segment++) {
          circuitVertices.push(path[segment][0], 0.102, path[segment][1], path[segment + 1][0], 0.102, path[segment + 1][1]);
        }
        circuitNodes.push(path[path.length - 1]);
      }
    }
    const circuitGeometry = geometry(new BufferGeometry());
    circuitGeometry.setAttribute("position", new Float32BufferAttribute(circuitVertices, 3));
    middle.add(new LineSegments(circuitGeometry, greenTrace));
    const nodes = new InstancedMesh(screwGeometry, hardware, circuitNodes.length);
    const nodeTransform = new Object3D();
    circuitNodes.forEach(([x, z], index) => {
      nodeTransform.position.set(x, 0.103, z);
      nodeTransform.scale.setScalar(0.55);
      nodeTransform.updateMatrix();
      nodes.setMatrixAt(index, nodeTransform.matrix);
    });
    middle.add(nodes);

    const chip = new Mesh(geometry(new RoundedBoxGeometry(0.66, 0.07, 0.66, 2, 0.025)), chipMaterial);
    chip.position.y = 0.128;
    middle.add(chip);
    outline(middle, 0.25, 0.165, greenTrace);
    const chipPinGeometry = geometry(new BoxGeometry(0.038, 0.019, 0.1));
    const pins = new InstancedMesh(chipPinGeometry, hardware, 20);
    const pinTransform = new Object3D();
    for (let side = 0; side < 4; side++) {
      for (let pin = 0; pin < 5; pin++) {
        const angle = side * Math.PI / 2;
        const offset = (pin - 2) * 0.1;
        pinTransform.position.set(
          offset * Math.cos(angle) - 0.37 * Math.sin(angle),
          0.113,
          offset * Math.sin(angle) + 0.37 * Math.cos(angle),
        );
        pinTransform.rotation.y = -angle;
        pinTransform.updateMatrix();
        pins.setMatrixAt(side * 5 + pin, pinTransform.matrix);
      }
    }
    middle.add(pins);

    const gridVertices: number[] = [];
    for (let index = -3; index <= 3; index++) {
      const offset = index * 0.28;
      gridVertices.push(-1.12, 0.102, offset, 1.12, 0.102, offset);
      gridVertices.push(offset, 0.102, -1.12, offset, 0.102, 1.12);
    }
    const gridGeometry = geometry(new BufferGeometry());
    gridGeometry.setAttribute("position", new Float32BufferAttribute(gridVertices, 3));
    base.add(new LineSegments(gridGeometry, baseTrace));

    // A thin underside lip makes the stack feel assembled, not like floating cards.
    const lipGeometry = geometry(new RoundedBoxGeometry(2.56, 0.045, 2.56, 2, 0.018));
    for (const plate of [top, middle, base]) {
      const lip = new Mesh(lipGeometry, plate === top ? orange : chipMaterial);
      lip.position.y = -0.11;
      plate.add(lip);
    }

    const guideMaterial = material(new LineDashedMaterial({
      color: "#969d88", transparent: true, opacity: 0.42,
      dashSize: 0.046, gapSize: 0.068,
    }));
    const guides = new Group();
    sculpture.add(guides);
    for (const [x, z] of [[-1.19, -1.19], [1.19, -1.19], [-1.19, 1.19], [1.19, 1.19]]) {
      const guide = new Line(geometry(new BufferGeometry().setFromPoints([
        new Vector3(x, -1, z), new Vector3(x, 1, z),
      ])), guideMaterial);
      guide.computeLineDistances();
      guides.add(guide);
    }

    // A generated contact shadow avoids continuous shadow-map passes and downloads.
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = shadowCanvas.height = 128;
    const shadowContext = shadowCanvas.getContext("2d");
    if (shadowContext) {
      const gradient = shadowContext.createRadialGradient(64, 64, 9, 64, 64, 64);
      gradient.addColorStop(0, "rgba(53, 57, 43, 0.28)");
      gradient.addColorStop(0.4, "rgba(53, 57, 43, 0.14)");
      gradient.addColorStop(1, "rgba(53, 57, 43, 0)");
      shadowContext.fillStyle = gradient;
      shadowContext.fillRect(0, 0, 128, 128);
      const shadowTexture = new CanvasTexture(shadowCanvas);
      shadowTexture.colorSpace = SRGBColorSpace;
      textures.add(shadowTexture);
      const shadow = new Mesh(geometry(new PlaneGeometry(5.6, 5.6)), material(new MeshBasicMaterial({
        map: shadowTexture, transparent: true, depthWrite: false, toneMapped: false,
      })));
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(0.12, -1.38, 0.15);
      scene.add(shadow);
    }

    let motionEnabled = options.motionEnabled;
    let visible = true;
    let exploded = options.exploded ? 1 : 0;
    let targetExploded = exploded;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scroll = 0;
    let targetScroll = 0;
    let elapsed = 0;
    let previousTime = 0;
    let mobile = false;

    function compose() {
      const breathing = motionEnabled ? Math.sin(elapsed * 0.72) * 0.032 : 0;
      const drift = motionEnabled ? Math.sin(elapsed * 0.24) * 0.065 : 0;
      sculpture.rotation.set(pointerY * 0.065 + scroll * 0.035, -0.12 + pointerX * 0.15 + drift + scroll * 0.1, 0);
      sculpture.position.y = breathing;
      const gap = MathUtils.lerp(0.24, 1.04, exploded);
      top.position.set(0, gap + breathing * exploded, 0);
      middle.position.y = 0;
      base.position.y = -gap;
      top.rotation.y = exploded * (-0.045 + pointerX * 0.025);
      base.rotation.y = exploded * 0.025;
      guides.scale.y = gap;
      guideMaterial.opacity = exploded * 0.42;
      guides.visible = exploded > 0.01;
    }

    function render() {
      if (disposed || contextLost || !visible) return;
      compose();
      renderer.render(scene, camera);
    }

    function animate(time: number) {
      frame = 0;
      if (disposed || contextLost || !visible || !motionEnabled) return;
      // Phone displays need fewer pixels and frames for this ambient sculpture.
      const interval = mobile ? 1000 / 30 : 1000 / 60;
      const sincePrevious = time - previousTime;
      if (previousTime && sincePrevious < interval - 1) {
        frame = requestAnimationFrame(animate);
        return;
      }
      const delta = previousTime ? Math.min(sincePrevious / 1000, 0.06) : 1 / 60;
      previousTime = time;
      elapsed += delta;
      const ease = 1 - Math.exp(-delta * 5.4);
      pointerX = MathUtils.lerp(pointerX, targetPointerX, ease);
      pointerY = MathUtils.lerp(pointerY, targetPointerY, ease);
      scroll = MathUtils.lerp(scroll, targetScroll, ease);
      exploded = MathUtils.lerp(exploded, targetExploded, ease);
      render();
      frame = requestAnimationFrame(animate);
    }

    function wake() {
      if (disposed || contextLost || !visible) return;
      if (motionEnabled) {
        if (!frame) {
          previousTime = 0;
          frame = requestAnimationFrame(animate);
        }
      } else {
        exploded = targetExploded;
        render();
      }
    }

    function resize() {
      if (disposed || contextLost) return;
      const { width, height } = host.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      mobile = window.matchMedia("(max-width: 700px)").matches;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.75));
      renderer.setSize(width, height, false);
      const aspect = width / height;
      // A square-safe frustum leaves breathing room even for the widest rotation.
      const halfHeight = Math.max(2.56, 2.5 / aspect);
      camera.left = -halfHeight * aspect;
      camera.right = halfHeight * aspect;
      camera.top = halfHeight;
      camera.bottom = -halfHeight;
      camera.updateProjectionMatrix();
      render();
    }

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
      setExploded(value) {
        targetExploded = value ? 1 : 0;
        wake();
      },
      setMotionEnabled(value) {
        if (motionEnabled === value) return;
        motionEnabled = value;
        if (!value) {
          cancelAnimationFrame(frame);
          frame = 0;
          pointerX = pointerY = targetPointerX = targetPointerY = 0;
          scroll = targetScroll = 0;
          exploded = targetExploded;
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
