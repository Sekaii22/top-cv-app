import { useState } from "react";
import InfoInput from "./InfoInput";

export default function EducationSection({educationList, onChange, onAdd, onDelete}) {
    const [ highlightedId, setHighlightedId ] = useState(null);
    
    function handleHover(id) {
        setHighlightedId(id);
    }
    
    return (
        <section id="education" className="input-category">
            <h1>Education</h1>
            <button className="add-btn" onClick={onAdd} type="button">+</button>
            {
                educationList.map((edu, index) => (
                    <div 
                        key={edu.id} 
                        className={highlightedId === edu.id ? "highlighted input-group" : "input-group"}
                    >
                        <InfoInput
                            title="School Name"
                            value={edu.school}
                            id={edu.id}
                            onChange={(e) => onChange({...edu, school: e.target.value})}
                            placeholder="National University of Singapore"
                        ></InfoInput>
                        <InfoInput
                            title="Field of Study"
                            value={edu.field}
                            id={edu.id}
                            onChange={(e) => onChange({...edu, field: e.target.value})}
                            placeholder="Electrical and Electronic Engineering"
                        ></InfoInput>
                        <InfoInput
                            title="Start Date"
                            value={edu.startDate}
                            id={edu.id}
                            onChange={(e) => onChange({...edu, startDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <InfoInput
                            title="End Date"
                            value={edu.endDate}
                            id={edu.id}
                            onChange={(e) => onChange({...edu, endDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <button 
                            className="del-btn" 
                            onClick={() => onDelete(edu.id)} type="button"
                            onMouseEnter={() => handleHover(edu.id)}
                            onMouseLeave={() => handleHover(null)}
                        >Delete</button>
                        {(educationList.length > 1 && index < educationList.length - 1) && <hr />}
                    </div>
                ))
            }
        </section>
    );
}