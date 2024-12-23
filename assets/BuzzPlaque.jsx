/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 BuzzPlaque.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
const model = '../assets/BuzzPlaque.glb'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require(model))
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.baked_mesh001.geometry} material={materials['g0.001']} rotation={[Math.PI / 2, 0, -0.256]} />
    </group>
  )
}

useGLTF.preload(model)
