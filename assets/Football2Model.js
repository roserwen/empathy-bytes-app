import React from 'react'
import { useGLTF } from '@react-three/drei'
const model = '../assets/football2.glb'

export default function Football2Model(props) {
  const { nodes, materials } = useGLTF(require(model))
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.baked_mesh002.geometry} material={materials['g0.001']} position={[0, 0, 1]} rotation={[1.607, 0, -0.362]} />
    </group>
  )
}

useGLTF.preload(model)