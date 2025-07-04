"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/laptop.glb')
  return (
    <group {...props} dispose={null} >
      <mesh
        geometry={nodes.victus_aiStandardSurface1_0.geometry}
        material={materials.aiStandardSurface1}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/laptop.glb')
