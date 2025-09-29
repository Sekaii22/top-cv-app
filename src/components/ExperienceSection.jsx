import { useState } from "react";
import InfoInput from "./InfoInput";

let nextId = 1;
const initialExpList = [{id: 0, company: '', jobTitle: '', desc:'', startDate: '', endDate: ''}];

export default function ExperienceSection() {
    const [ expList, setExpList ] = useState(initialExpList);

    function handleAdd() {
        setExpList([...expList, {id: nextId++, company: '', jobTitle: '', desc:'', startDate: '', endDate: ''}]);
    }

    function handleDelete(selectedId) {
        setExpList(expList.filter(exp => exp.id !== selectedId));
    }

    function handleChange(newExp) {
        setExpList(expList.map(exp => {
            if (exp.id === newExp.id)
                return newExp;

            return exp;
        }));
    }

    return (
        <section className="input-category">
            <h1>Work Experience</h1>
            <button className="add-btn" onClick={handleAdd}>+</button>
            {
                expList.map((exp, index) => (
                    <div key={exp.id}>
                        <InfoInput
                            title="Company Name"
                            value={exp.company}
                            id={exp.id}
                            onChange={(e) => handleChange({...exp, company: e.target.value})}
                        ></InfoInput>
                        <InfoInput
                            title="Job Title"
                            value={exp.jobTitle}
                            id={exp.id}
                            onChange={(e) => handleChange({...exp, jobTitle: e.target.value})}
                        ></InfoInput>
                        <InfoInput
                            title="Accomplishments"
                            value={exp.desc}
                            id={exp.id}
                            onChange={(e) => handleChange({...exp, desc: e.target.value})}
                            type="textarea"
                        ></InfoInput>
                        <InfoInput
                            title="Start Date"
                            value={exp.startDate}
                            id={exp.id}
                            onChange={(e) => handleChange({...exp, startDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <InfoInput
                            title="End Date"
                            value={exp.endDate}
                            id={exp.id}
                            onChange={(e) => handleChange({...exp, endDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <button className="del-btn" onClick={() => handleDelete(exp.id)}>Delete</button>
                        {(expList.length > 1 && index < expList.length - 1) && <hr />}
                    </div>
                ))
            }
        </section>
    )
}