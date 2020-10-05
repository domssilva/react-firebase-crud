import React from 'react';
import {analyticsLogger} from '../../firebase/utils'

function Analytics() {
  
  const handleClick = () => {
    let data = {
      label: 'comprar',
      trigger: 'button',
      local: window.location.pathname,
      date: new Date().toLocaleDateString("en-UK"),
    }
    analyticsLogger.btnClick(data);
  }
    
  return (
    <div>
      <h1>Analytics button:</h1>
      <button onClick={handleClick}>COMPRAR</button>
    </div>
  )
}

export default Analytics
