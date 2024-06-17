import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {
  
  return (
    <div class="relative h-screen">
      <div class="fixed top-0 left-0 w-screen h-screen z-40"></div>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
        touch-action="auto">
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
