import React from 'react'
import Navbar from './components/navar/Navbar';
import Heros from './components/hero/Heros';
import { Banner } from './components/banner/Banner';
import { WhyChoose } from './components/whyChosse/WhyChoose';
import { About } from './components/about/About';
import { Footer } from './components/Footer/Footer';
import { PopUp } from './components/popup/PopUp';

const App = () => {
  const [showPopUp , setShowPopUP] = React.useState(false);
  const HandlePopUP = () =>{
    setShowPopUP(true);
  }
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Heros/>
      <Banner/>
      <WhyChoose/>
      <About/>
      <Footer/>
      <PopUp showPopUp ={showPopUp} setShowPopUP ={setShowPopUP}/>
    </div>
  )
}

export default App