export default function InfoInput({title, value, onChange, type='text', id}) {
    const appendId = id !== undefined ? '-' + id : '';
    const htmlId = title.toLowerCase().split(' ').join('-') + '-input' + appendId;

    return (
        <div className="info-input">
            <label htmlFor={htmlId}>{title}</label>
            {
                (type === 'textarea') ? (
                    <textarea 
                        id={htmlId}
                        value={value}
                        onChange={onChange}
                    ></textarea>
                ) : (
                    <input 
                        id={htmlId} 
                        type={type} 
                        value={value} 
                        onChange={onChange}
                    />
                )
            }
            
        </div>
    );
}