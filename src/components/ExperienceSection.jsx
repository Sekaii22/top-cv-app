import { useState } from "react";
import InfoInput from "./InfoInput";


export default function ExperienceSection({expList, onChange, onAdd, onDelete}) {
    const [ highlightedId, setHighlightedId ] = useState(null);
    
    function handleHover(id) {
        setHighlightedId(id);
    }
    
    return (
        <section id="experience" className="input-category">
            <h1>Work Experience</h1>
            <button className="add-btn" onClick={onAdd} type="button">+</button>
            {
                expList.map((exp, index) => (
                    <div 
                        key={exp.id}
                        className={highlightedId === exp.id ? "highlighted input-group" : "input-group"}
                    >
                        <InfoInput
                            title="Company Name"
                            value={exp.company}
                            id={exp.id}
                            onChange={(e) => onChange({...exp, company: e.target.value})}
                            placeholder="Fakecomp Ptd Ltd"
                        ></InfoInput>
                        <InfoInput
                            title="Job Title"
                            value={exp.jobTitle}
                            id={exp.id}
                            onChange={(e) => onChange({...exp, jobTitle: e.target.value})}
                            placeholder="Engineer"
                        ></InfoInput>
                        <InfoInput
                            title="Accomplishments"
                            value={exp.desc}
                            id={exp.id}
                            onChange={(e) => onChange({...exp, desc: e.target.value})}
                            type="textarea"
                        ></InfoInput>
                        <InfoInput
                            title="Start Date"
                            value={exp.startDate}
                            id={exp.id}
                            onChange={(e) => onChange({...exp, startDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <InfoInput
                            title="End Date"
                            value={exp.endDate}
                            id={exp.id}
                            onChange={(e) => onChange({...exp, endDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <button 
                            className="del-btn" 
                            onClick={() => onDelete(exp.id)} type="button"
                            onMouseEnter={() => handleHover(exp.id)}
                            onMouseLeave={() => handleHover(null)}
                            onFocus={() => handleHover(exp.id)}
                            onBlur={() => handleHover(null)}
                        >Delete</button>
                        {(expList.length > 1 && index < expList.length - 1) && <hr />}
                    </div>
                ))
            }
        </section>
    )
}