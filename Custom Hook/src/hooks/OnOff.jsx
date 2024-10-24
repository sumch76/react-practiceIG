import React from 'react'
import useOnOff from './useOnOff';

function OnOff() {
    const isOn=useOnOff();
  return (
    <div>
        <h1>{isOn ? `✅ONLINE `:`❌ Disconnect`}:</h1> 
    </div>
  )
}
export default OnOff;
