import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./styles/form.css";
import InfoSection from './components/InfoSection'
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';

let nextEduId = 1;
const initialEduList = [{id: 0, school: '', field: '', startDate: '', endDate: ''}];

let nextExpId = 1;
const initialExpList = [{id: 0, company: '', jobTitle: '', desc:'', startDate: '', endDate: ''}];

function App() {
  const [ info, setInfo ] = useState({name: '', email: '', phone: ''});
  const [ educationList, setEducationList ] = useState(initialEduList);
  const [ expList, setExpList ] = useState(initialExpList);

  function handleAdd(setter, list, newEntry) {
      setter([...list, newEntry]);
  }

  function handleDelete(setter, list, selectedId) {
      setter(list.filter(item => item.id !== selectedId));
  }

  function handleChange(setter, list, newItem) {
      setter(list.map(item => {
          if (item.id === newItem.id)
              return newItem;

          return item;
      }));
  }

  return (
    <>
      <header>
        <h1>CV Builder</h1>
        <p>A React assignment for The Odin Project.</p>
      </header>
      <main>
        <form>
          <div>
            <InfoSection 
              info={info} 
              onChange={(newInfo) => setInfo(newInfo)}
            ></InfoSection>
            <EducationSection 
              educationList={educationList}
              onChange={(newEdu) => handleChange(setEducationList, educationList, newEdu)}
              onAdd={() => handleAdd(setEducationList, educationList, {id: nextEduId++, school: '', field: '', startDate: '', endDate: ''})}
              onDelete={(id) => handleDelete(setEducationList, educationList, id)}
            ></EducationSection>
            <ExperienceSection
              expList={expList}
              onChange={(newExp) => handleChange(setExpList, expList, newExp)}
              onAdd={() => handleAdd(setExpList, expList, {id: nextExpId++, company: '', jobTitle: '', desc:'', startDate: '', endDate: ''})}
              onDelete={(id) => handleDelete(setExpList, expList, id)}
            ></ExperienceSection>
          </div>
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </form>
      </main>
    </>
  )
}

export default App