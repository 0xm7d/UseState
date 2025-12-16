import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [Value, setValue] = useState("")
  const [Size, setSize] = useState()
  const [Color, setColor] = useState()
  const [IsUpper, setIsUpper] = useState(false)
  const [Text, setText] = useState('salam')
  return (
    <>      
      <div>
           <span>backgroundColor</span>
           <input type="color" value={Color} onChange={(e) => {setColor(e.target.value);}} />
         </div>
           <div>
                    <span>Upper / Lower :</span>
                    <button onClick={() => setIsUpper(true)} >Upper</button>
                    <button onClick={() => setIsUpper(false)} >Lower</button>
            </div>
             <div>
              <span>Size :</span>
              <input type="range"min="0"max="100"step="1"value={Size}onChange={(e) => {setSize(e.target.value);}}/>
            </div>
            <h1 style={{
                backgroundColor: Color,
                fontSize: Size + "px"
              }}> {IsUpper ? Text.toUpperCase() : Text.toLowerCase() } </h1>
            <div>
              <input type="Text" Value={Value} placeholder='write something' onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div>
              <button onClick={() => setText(Value)}>Add</button>
              
            </div>
    </>
  )
}