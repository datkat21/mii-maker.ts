import * as THREE from "three";
//@ts-expect-error TS Language server doesn't like this
import fflVertexShader from "./FFLShader.vert" with { type: "text" };
//@ts-expect-error TS Language server doesn't like this
import fflFragmentShader from "./FFLShader.frag" with { type: "text" };

export class FFLShaderMaterial extends THREE.ShaderMaterial {
  constructor({ color = "#fff" }: { color: string }) {
    super({
      lights: true,
      uniforms: {
        ...THREE.UniformsLib.lights,
        // uGlossiness: {
        //   value: 20,
        // },
        uColor: {
          value: new THREE.Color(color),
        },
      },
    });

    this.name = "FFLShader";
    this.glslVersion = "100";
    this.vertexShader = fflVertexShader;
    this.fragmentShader = fflFragmentShader;
  }
}
