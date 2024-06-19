import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./Office"
import { Overlay } from "./Overlay"

export const Experience = () => {
  return (
    <> 
        <ambientLight intensity={2.5} />
        <ScrollControls pages={3} distance={0.25}>
          <Office />
          <Overlay />
        </ScrollControls>
    </>
  )
}
