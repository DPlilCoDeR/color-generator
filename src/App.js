import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

const {log} = console

function App() {
  const[color,setColor]=useState('');
  const[error,setError] = useState(false);
  const[list,setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      log(colors);
    } catch (error) {
      setError(true);
      log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            className={`${error? 'error' : null}`} 
            type='text' 
            value={color} 
            placeholder="#553355" 
            onChange={e => setColor(e.target.value)}
          />
          <button className='btn' type='submit'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        <h4>List of colors</h4>
      </section>
    </>
  )
}

export default App