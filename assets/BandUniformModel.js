import React from 'react'
import { useGLTF } from '@react-three/drei'
const model = '../assets/band_uniform.glb'

export default function BandUniformModel(props) {
  const { nodes, materials } = useGLTF(require(model))
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.5, -1]} rotation={[Math.PI / 2, 0, -0.70]}>
        <mesh geometry={nodes.mesh_lowpoly_1.geometry} material={materials.material0000} />
        <mesh geometry={nodes.mesh_lowpoly_2.geometry} material={materials.material0001} />
        <mesh geometry={nodes.mesh_lowpoly_3.geometry} material={materials.material0002} />
        <mesh geometry={nodes.mesh_lowpoly_4.geometry} material={materials.material0003} />
        <mesh geometry={nodes.mesh_lowpoly_5.geometry} material={materials.material0004} />
        <mesh geometry={nodes.mesh_lowpoly_6.geometry} material={materials.material0005} />
        <mesh geometry={nodes.mesh_lowpoly_7.geometry} material={materials.material0006} />
        <mesh geometry={nodes.mesh_lowpoly_8.geometry} material={materials.material0007} />
      </group>
    </group>
  )
}

useGLTF.preload(model)