import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {incNum , decNum} from './actions/index'


function App() {
  const myState = useSelector((state)=> state.changeNum)
  const dispatch = useDispatch();
  return (
    <div className='wholeApp'>
      <div className="counter">
        <button className='button1'  onClick={()=> dispatch(decNum())}>-</button>
        <div className='box'>
          <input className="box2" defaultValue={myState}></input>
        </div>
        <button className='button2' onClick={()=> dispatch(incNum())}>+</button>
      </div>
    </div>
  )
}

export default App