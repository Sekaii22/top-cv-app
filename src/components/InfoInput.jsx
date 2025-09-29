export default function InfoInput({title, value, onChange, type='text'}) {
    const htmlId = title.toLowerCase() + '-input';

    return (
        <div className="info-input">
            <label htmlFor={htmlId}>{title}</label>
            <input 
                id={htmlId} 
                type={type} 
                value={value} 
                onChange={onChange}
            />
        </div>
    );
}