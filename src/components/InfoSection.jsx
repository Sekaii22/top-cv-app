import { useState } from "react";
import InfoInput from "./InfoInput";

export default function InfoSection({info, onChange}) {
    return (
        <section id="general" className="input-category">
            <h1>General Information</h1>
            <div>
                <InfoInput 
                    title="Name" 
                    value={info.name} 
                    onChange={(e) => onChange({...info, name: e.target.value})}
                ></InfoInput>
                <InfoInput 
                    title="Email" 
                    value={info.email} 
                    onChange={(e) => onChange({...info, email: e.target.value})}
                ></InfoInput>
                <InfoInput 
                    title="Phone" 
                    value={info.phone} 
                    onChange={(e) => onChange({...info, phone: e.target.value})}
                ></InfoInput>
            </div>
        </section>
    );
}