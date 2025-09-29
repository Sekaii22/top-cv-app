import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./styles/form.css";
import InfoSection from './components/InfoSection'
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <>
      <header>
        <h1>CV Builder</h1>
        <p>A React assignment for The Odin Project.</p>
      </header>
      <main>
        {/* <InfoSection></InfoSection> */}
        {/* <EducationSection></EducationSection> */}
        <ExperienceSection></ExperienceSection>
      </main>
    </>
  )
}

export default App