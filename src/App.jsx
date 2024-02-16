import React, { useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState(1)
  return (
    <div className='wholeApp'>
      <div className="counter">
        <button className='button1' onClick={()=>setData(data-1)}>-</button>
        <div className='box'>
          <div className="box2">{data}</div>
        </div>
        <button className='button2' onClick={()=>setData(data+1)}>+</button>
      </div>
    </div>
  )
}

export default App