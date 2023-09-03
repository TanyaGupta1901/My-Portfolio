import React from 'react'
import Tilt from "react-parallax-tilt";

function TiltImage({children}) {
  return (
    <Tilt >{children}</Tilt>
  )
}

export default TiltImage