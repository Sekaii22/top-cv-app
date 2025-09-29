import { useState } from "react";
import InfoInput from "./InfoInput";

let nextId = 1;
const initialEduList = [{id: 0, school: '', field: '', startDate: '', endDate: ''}];

export default function EducationSection() {
    const [ educationList, setEducationList ] = useState(initialEduList);

    function handleAdd() {
        setEducationList([...educationList, {id: nextId++, school: '', field: '', startDate: '', endDate: ''}]);
    }

    function handleDelete(selectedId) {
        setEducationList(educationList.filter(edu => edu.id !== selectedId));
    }

    function handleChange(newEdu) {
        setEducationList(educationList.map(edu => {
            if (edu.id === newEdu.id)
                return newEdu;

            return edu;
        }));
    }

    return (
        <section>
            <h1>Education</h1>
            <button className="add-btn" onClick={handleAdd}>+</button>
            {
                educationList.map((edu, index) => (
                    <div key={edu.id}>
                        <InfoInput
                            title="School Name"
                            value={edu.school}
                            onChange={(e) => handleChange({...edu, school: e.target.value})}
                        ></InfoInput>
                        <InfoInput
                            title="Field of Study"
                            value={edu.field}
                            onChange={(e) => handleChange({...edu, field: e.target.value})}
                        ></InfoInput>
                        <InfoInput
                            title="Start Date"
                            value={edu.startDate}
                            onChange={(e) => handleChange({...edu, startDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <InfoInput
                            title="End Date"
                            value={edu.endDate}
                            onChange={(e) => handleChange({...edu, endDate: e.target.value})}
                            type="date"
                        ></InfoInput>
                        <button className="del-btn" onClick={() => handleDelete(edu.id)}>Delete</button>
                        {(educationList.length > 1 && index < educationList.length - 1) && <hr />}
                    </div>
                ))
            }
        </section>
    );
}