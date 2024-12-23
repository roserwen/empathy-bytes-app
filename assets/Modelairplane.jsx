/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 modelairplane.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
const model = '../assets/modelairplane.glb'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require(model))
  return (
    <group {...props} dispose={null}>
      <group position={[1, 0.142, 0.796]} rotation={[1.71, 0, 0]} scale={0.469}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Black.001']} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Yellow} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['Black.002']} position={[1, -0.118, -0.583]} scale={0.081} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[1, 0.121, -3.003]} scale={0.042} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.002']} position={[1, -0.074, -3.059]} rotation={[0.66, 0, 0]} scale={0.083} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.Black} position={[1, 0, 0]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.003']} position={[1, 0.426, 1.495]} scale={[0.132, 0.181, 0.132]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[1.017, 0.111, 1.827]} rotation={[0, 0, 0.294]} scale={0.087} />
    </group>
  )
}

useGLTF.preload(model)
