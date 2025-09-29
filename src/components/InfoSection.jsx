import { useState } from "react";
import InfoInput from "./InfoInput";

export default function InfoSection() {
    const [ info, setInfo ] = useState({name: '', email: '', phone: ''});

    function handleChange(newInfo) {
        setInfo(newInfo);
    }

    return (
        <section className="input-category">
            <h1>General Information</h1>
            <div>
                <InfoInput 
                    title="Name" 
                    value={info.name} 
                    onChange={(e) => handleChange({...info, name: e.target.value})}
                ></InfoInput>
                <InfoInput 
                    title="Email" 
                    value={info.email} 
                    onChange={(e) => handleChange({...info, email: e.target.value})}
                ></InfoInput>
                <InfoInput 
                    title="Phone" 
                    value={info.phone} 
                    onChange={(e) => handleChange({...info, phone: e.target.value})}
                ></InfoInput>
            </div>
        </section>
    );
}