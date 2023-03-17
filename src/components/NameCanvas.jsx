import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useTexture } from '@react-three/drei';
import CanvasLoader from './Loader';


const Name = () => {
    const name = useGLTF('../../public/3d_model/name2.gltf');
    
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={name.scene}
                scale={1}
                rotation={[0, 0, 0]}
                position={[0, -.25, 0]}
            />
        </mesh>
    )
}

const NameCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [0, 5, 0], fov: 15 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />} >
                <OrbitControls
                  autoRotate={true}
                  autoRotateSpeed={1.25}
                  enableZoom={false}
                  enablePan={false}
                  rotateSpeed={.3}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <Name />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default NameCanvas