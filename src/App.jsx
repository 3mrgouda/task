import React, { useEffect } from 'react'
import Navbar from './components/navar/Navbar';
import Heros from './components/hero/Heros';
import { Banner } from './components/banner/Banner';
import { WhyChoose } from './components/whyChosse/WhyChoose';
import { About } from './components/about/About';
import { Footer } from './components/Footer/Footer';
import { PopUp } from './components/popup/PopUp';
import Aos from 'aos';
import "aos/dist/aos.css"

const App = () => {
  const [showPopUp , setShowPopUP] = React.useState(true);
  const HandlePopUP = () =>{
    setShowPopUP(false);};
     useEffect(()=>{
      Aos.init({
        offset:100,
        duration:800,
        easing:"ease-in-sine",
        delay:100,
      })
      Aos.refresh();
     },[])

  return (
    <div className='overflow-x-hidden'>
      <Navbar HandlePopUP={HandlePopUP}/>
      <Heros/>
      <Banner/>
      <WhyChoose/>
      <About HandlePopUP={HandlePopUP}/>
      <Banner/>
      <Footer/>
      <PopUp showPopUp ={showPopUp} setShowPopUP ={setShowPopUP}/>
    </div>
  )
}

export default App