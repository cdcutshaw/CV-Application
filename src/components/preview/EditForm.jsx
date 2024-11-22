import { useState } from 'react';

function EditForm ({ entry, onSave, onCancel, fields}) {
    const [formData, setFormData] = useState({...entry});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(entry.id, formData);
    };

    return (
        <form onSubmit={handleSubmit} className='edit=form'>
            {fields.map((field) =>(
                <div key={field.name} className='form-group'>
                    <label htmlFor={field.name}>{field.label}:</label>
                    <input
                        type={field.type || 'text'}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required || false}
                    />
                </div>
            ))}
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}

export default EditForm;