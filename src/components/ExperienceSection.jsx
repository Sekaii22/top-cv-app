import { useState } from "react";
import InfoInput from "./InfoInput";


export default function ExperienceSection({expList, onChange, onAdd, onDelete}) {
    return (
        <section id="experience" className="input-category">
            <h1>Work Experience</h1>
            <button className="add-btn" onClick={onAdd} type="button">+</button>
            {
                expList.map((exp, index) => (
                    <div key={exp.id}>
                        <InfoInput
                            title="Company Name"
                            value={exp.company}
                            id={exp.id}
                            onChange={(e) => onChange({...exp, company: e.target.value})}
                        ></InfoInput>
                        <InfoInput
                            title="Job Title"
                            value={exp.jobTitle}
                            id={exp.id}
                            onChange={(e) => onChange({...exp, jobTitle: e.target.value})}
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
                        <button className="del-btn" onClick={() => onDelete(exp.id)} type="button">Delete</button>
                        {(expList.length > 1 && index < expList.length - 1) && <hr />}
                    </div>
                ))
            }
        </section>
    )
}