import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

const {log} = console

function App() {
  const[color,setColor]=useState("#253315");
  const[error,setError] = useState(false);
  const[list,setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors);
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
            onChange={e => setColor(e.target.value)}
          />
          <button className='btn' type='submit'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          log(color)
          return <SingleColor key={index} {...color} index={index}/>
        })}
      </section>
    </>
  )
}

export default App