
import React, { useState, useEffect } from 'react';

const UseEffectComponent = (props) => {
	const [render, setRender] = useState(0)

  useEffect(() => {
    setRender(render + 1)
  }, [props]);

  return (
    <p>Im rendering for {render} time</p>
  )
};

export default UseEffectComponent
