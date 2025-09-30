import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./styles/form.css";
import "./styles/preview.css";
import InfoSection from './components/InfoSection'
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import CVPreview from './components/CVPreview';

let nextEduId = 1;
const initialEduList = [{id: 0, school: '', field: '', startDate: '', endDate: ''}];

let nextExpId = 1;
const initialExpList = [{id: 0, company: '', jobTitle: '', desc:'', startDate: '', endDate: ''}];

function App() {
  const [ info, setInfo ] = useState({name: '', email: '', phone: ''});
  const [ educationList, setEducationList ] = useState(initialEduList);
  const [ expList, setExpList ] = useState(initialExpList);
  const [ isSubmit, setIsSubmit ] = useState(false);

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
        {
          isSubmit ? (
            <div>
              <CVPreview
                info={info}
                educationList={educationList}
                expList={expList}
              ></CVPreview>
              
              <button 
                className="edit-btn" 
                type='button' 
                onClick={() => setIsSubmit(false)}
              >Edit</button>
              <button type='button' onClick={window.print}>Print</button>
            </div>
          ) : (
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log("submitted");
              setIsSubmit(true);
            }}>
              <div>
                <InfoSection 
                  info={info} 
                  onChange={(newInfo) => setInfo(newInfo)}
                ></InfoSection>

                <EducationSection 
                  educationList={educationList}
                  onChange={(newEdu) => handleChange(setEducationList, educationList, newEdu)}
                  onAdd={() => 
                    handleAdd(
                      setEducationList, 
                      educationList, 
                      {id: nextEduId++, school: '', field: '', startDate: '', endDate: ''}
                    )}
                  onDelete={(id) => handleDelete(setEducationList, educationList, id)}
                ></EducationSection>

                <ExperienceSection
                  expList={expList}
                  onChange={(newExp) => handleChange(setExpList, expList, newExp)}
                  onAdd={() => 
                    handleAdd(
                      setExpList, 
                      expList, 
                      {id: nextExpId++, company: '', jobTitle: '', desc:'', startDate: '', endDate: ''}
                    )}
                  onDelete={(id) => handleDelete(setExpList, expList, id)}
                ></ExperienceSection>
              </div>
              
              <button type="submit">Submit</button>
            </form>
          )
        }

      </main>
    </>
  )
}

export default App