import {React} from 'react';
import {useGLTF} from '@react-three/drei';
const model = '../assets/left_converse.glb'

export default function LeftConverseModel(props) {
    const { nodes, materials } = useGLTF(require(model))
    return (
        <group {...props} dispose={null}>
        <mesh geometry={nodes.baked_mesh001.geometry} material={materials['g0.001']} position={[1, 0, 0]} rotation={[1.619, 0.037, -0.16]} />
      </group>
    )
}
useGLTF.preload(model);