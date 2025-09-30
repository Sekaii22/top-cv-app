export default function CVPreview({info, educationList, expList}) {
    return (
        <div className="preview">
            <div className="cv-title">
                <h1>{info.name}</h1>
                <span>{info.email}</span>
                <span>{info.phone}</span>
            </div>
            <div className="cv-education">
                <h2>Education</h2>
                <hr></hr>
                {
                    educationList.map(edu => (
                        <div className="info-entry">
                            <div className="flex-row space-between align-center">
                                <h3>{edu.school}</h3>
                                <p>{new Date(edu.startDate).toLocaleDateString()} – {new Date(edu.startDate).toLocaleDateString()}</p>
                            </div>
                            <h4>{edu.field}</h4>
                        </div>
                    ))
                }
            </div>
            <div className="cv-experience">
                <h2>Experience</h2>
                <hr></hr>
                {
                    expList.map(exp => (
                        <div className="info-entry">
                            <div className="flex-row space-between align-center">
                                <h3>{exp.company}</h3>
                                <p>{new Date(exp.startDate).toLocaleDateString()} – {new Date(exp.endDate).toLocaleDateString()}</p>
                            </div>
                            <h4>{exp.jobTitle}</h4>
                            <ul>
                                <li>{exp.desc}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}