import React from 'react'
import Navbar from './components/navar/Navbar';
import Heros from './components/hero/Heros';
import { Banner } from './components/Banner';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Heros/>
      <Banner/>
    </div>
  )
}

export default App