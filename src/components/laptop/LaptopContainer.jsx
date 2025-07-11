import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Laptop } from './Laptop'

const LaptopContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="Loading...">
                <Stage environment="lobby" intensity={0.3}>
                    <Laptop />
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera position={[-2, 1, 0]} zoom={0.6} makeDefault />
                </Stage>
            </Suspense>
        </Canvas>
    )
}

export default LaptopContainer