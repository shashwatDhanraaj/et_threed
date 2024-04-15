import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
// import { useControls } from "leva";
// import { bezier } from "@leva-ui/plugin-bezier";

import { useRef, useEffect, useMemo, useLayoutEffect } from "react";
import { R3FPointsFXRefType, R3FPointsFX } from "r3f-points-fx";
import vertFunctions from "./vertFunctions";
import fragFunctions from "./fragFunctions";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type earthGLTFResult = GLTF & {
  nodes: {
    earth: THREE.Mesh;
  };
  materials: {};
};

type threejsGLTFResult = GLTF & {
  nodes: {
    a: THREE.Mesh;
  };
  materials: {};
};

type mobiusGLTFResult = GLTF & {
  nodes: {
    Cube002: THREE.Mesh;
  };
  materials: {};
};

type properties = {
  current: number;
};

function Scene({ current }: properties) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ scroller: ".mainContainer" });

  function setupScrollanimation() {
    const { scene, camera } = useThree();

    useLayoutEffect(() => {
      new ScrollTrigger({});

      const tl = gsap.timeline();
      tl.to(camera.position, {
        x: 2.5,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".section--one--container1",
          start: "top top",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
        .to(scene.position, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--one--container1",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--one--container1",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(camera.position, {
          x: 2.5,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--two--container1",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.position, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--two--container1",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.rotation, {
          x: 0,
          y: -1.57,
          z: 0,
          scrollTrigger: {
            trigger: ".section--two--container1",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(camera.position, {
          x: 2.5,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--three--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.position, {
          x: 1.55,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--three--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.rotation, {
          x: 0,
          y: -1.57,
          z: 0,
          scrollTrigger: {
            trigger: ".section--three--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(camera.position, {
          x: 2.5,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--four--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.position, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--four--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.rotation, {
          x: 0,
          y: 1.5,
          z: 0,
          scrollTrigger: {
            trigger: ".section--four--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(camera.position, {
          x: 0.50,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--five--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.position, {
          x: -1.45,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--five--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.rotation, {
          x: 0,
          y: 3.14,
          z: 0,
          scrollTrigger: {
            trigger: ".section--five--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(camera.position, {
          x: 2.50,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".section--six--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.position, {
          x: -3.45,
          y: -2.3,
          z: 0.
          ,
          scrollTrigger: {
            trigger: ".section--six--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(scene.rotation, {
          x: 0,
          y: 1.5,
          z: 0,
          scrollTrigger: {
            trigger: ".section--six--container",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        });
    }, []);
    const t2 = gsap.timeline();

    t2.to(".section--one--container1", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".section--one--container1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        immediateRender: false,
        // markers: true,
      },
    })

      .to(".section--one--container2", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "top center",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(".section--two--container1", {
        scrollTrigger: {
          trigger: ".section--two--container1",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "activeRightSpecific",
          scrub: true,
        },
      })
      .to(".section--two--container2", {
        scrollTrigger: {
          trigger: ".section--two--container2",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--three--container", {
        scrollTrigger: {
          trigger: ".section--three--container",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--four--container", {
        scrollTrigger: {
          trigger: ".section--four--container",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--five--container ", {
        scrollTrigger: {
          trigger: ".section--five--container ",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--six--container ", {
        scrollTrigger: {
          trigger: ".section--six--container ",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      });
  }
  setupScrollanimation();
  const earth = useGLTF("earth.glb") as earthGLTFResult;
  const threejs = useGLTF("etthreejs.glb") as threejsGLTFResult;
  const mobius = useGLTF("mobius_strip.glb") as mobiusGLTFResult;

  const meshes = [threejs.nodes.a, earth.nodes.earth, mobius.nodes.Cube002];

  const startTime = useRef(0);
  const progress = useRef(0);
  const previousIndex = useRef<number | null>(null);
  const FBORef = useRef<R3FPointsFXRefType>(null);

  // const { duration, curve } = useControls({
  //   duration: {
  //     value: 2,
  //     min: 0,
  //     max: 5,
  //     step: 0.1,
  //   },
  //   curve: bezier([0.16, 1, 0.3, 1]),
  // });

  const generateRandomnArray = (size: number) => {
    const length = size * size * 3;
    const data = new Float32Array(length);

    for (let i = 0; i < length; i++) {
      const stride = i * 3;

      data[stride] = Math.random() * 3 - 1;
      data[stride + 1] = Math.random() * 3 - 1;
      data[stride + 2] = Math.random() * 3 - 1;
    }
    return data;
  };

  const randomArray = useMemo(() => {
    return generateRandomnArray(128);
  }, []);

  //Model swithcing logic
  const changeModel = () => {
    startTime.current = 0;
    FBORef.current?.setModelB(current);
    // setModelB(current);
  };

  useEffect(() => {
    changeModel();
  }, [current]);

  useFrame((state) => {
    if (startTime.current === 0) {
      startTime.current = state.clock.elapsedTime;
    }

    const elapsed = state.clock.elapsedTime - startTime.current;

    // progress.current = curve.evaluate(Math.min(elapsed / duration, 1));
    progress.current = Math.min(elapsed / 2, 1);
    if (progress.current >= 1) {
      FBORef.current?.setModelA(current);
      previousIndex.current = current;
      //setModelA(modelB);
    }

    FBORef.current?.updateProgress(progress.current);
    FBORef.current?.updateTime(state.clock.elapsedTime);
  });

  return (
    <>
      <R3FPointsFX
        modelsArray={meshes}
        pointSize={2}
        baseColor="#D0BFFF"
        // baseColor="#00c2ff"
        modelA={previousIndex.current}
        modelB={current}
        ref={FBORef}
        uniforms={{
          // uColor1: new THREE.Color("#D0BFFF"),
          uColor1: new THREE.Color("#D0BFFF"),
          uColor2: new THREE.Color("#FF4B91"),
          uColor3: new THREE.Color("#FFCD4B"),
        }}
        attributes={[
          {
            name: "aRandom",
            array: randomArray,
            itemSize: 3,
          },
        ]}
        pointsVertFunctions={vertFunctions}
        pointsFragFunctions={fragFunctions}
        // rotation={[0, 0, 0]}
        // rotation={
        //   current === 0 ? [0, 0, 0] : current === 1 ? [0, 0, 0] : [0, 0, 0]
        // }
        // position={[0,0.5,0]}
        // position={
        //   current === 0 ? [0, 0.55, 0] : current === 1 ? [0, 0, 0] : [0, 0, 0]
        // }

        // scale={
        //   current === 0
        //     ? [0.8, 1, 0.4] // Scale for the 2nd mesh (index 1)
        //     : current === 1
        //     ? [2.2, 2.2, 2.2] // Scale for the 1st mesh (index 0)
        //     : [4, 4, 4] // Scale for the 3rd mesh (index 2)
        // }
      />
    </>
  );
}

export default Scene;
