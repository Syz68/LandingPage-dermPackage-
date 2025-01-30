import { useState } from 'react'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import DoctorSlider from './components/DoctorSlider'


function App() {

  return (
    <div className=''>
      <HeroSection />
      <InfoSection />
      <DoctorSlider/>
    </div>
  )
}

export default App
