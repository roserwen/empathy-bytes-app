/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Bookend2.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
const model = '../assets/Bookend2.glb'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require(model))
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.baked_mesh002.geometry} material={materials['g0.002']} position={[0.01, 0.31, 0]} rotation={[Math.PI / 2, 0, 0.887]} />
    </group>
  )
}

useGLTF.preload(model)