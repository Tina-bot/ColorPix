import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';
import ColorGrid from './components/ColorGrid';

function App() {
  const [list, setList] = useState(new Values('pink').all(10));

  return (
    <div className='flex flex-col items-center justify-center max-w-full w-screen'>
      <FormColor setList={setList} />
      <ColorGrid ListColors={list} />
    </div>
  )
}

export default App
