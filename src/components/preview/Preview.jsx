import { useState } from "react";
import EditForm from './EditForm';

function Preview({ data, handleDeleteEducation, handleEditEducation, handleDeleteWork, handleEditWork}) {
    const { education, workExperience } = data;

    const [editingEntry, setEditingEntry] = useState(null); // Holds the currently edited entry
    const [editingType, setEditingType] = useState(null); // 'education' or 'work'


    const handleEditClick = (entry, type) => {
        setEditingEntry(entry);
        setEditingType(type);
      };

    const handleSave = (id, updatedEntry) => {
        if (editingType === 'education') {
          handleEditEducation(id, updatedEntry);
        } else if (editingType === 'work') {
          handleEditWork(id, updatedEntry);
        }
        setEditingEntry(null);
        setEditingType(null);
      };

    const handleCancel = () => {
        setEditingEntry(null);
        setEditingType(null);
      };

    const fields = {
        education: [
          { name: 'institution', label: 'Institution', required: true },
          { name: 'degree', label: 'Degree', required: true },
          { name: 'edStartDate', label: 'Start Date', type: 'date' },
          { name: 'edEndDate', label: 'End Date', type: 'date' },
        ],
        work: [
          { name: 'position', label: 'Position/Title', required: true },
          { name: 'companyName', label: 'Company Name', required: true },
          { name: 'workStartDate', label: 'Start Date', type: 'date' },
          { name: 'workEndDate', label: 'End Date', type: 'date' },
        ],
      };
    
    
    return (
        <div className="preview">
            <h2>CV Preview</h2>
        
            <h3>General Information</h3>
            <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>About:</strong> {data.about}</p>

            <h3>Education</h3>    
            {education.map((edu) => (
            <div key={edu.id} className="education-item">
                {editingEntry?.id === edu.id && editingType === 'education' ? (
                    <EditForm
                        entry={edu}
                        fields={fields.education}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                ) : (
                    <>
                        <p>{edu.institution} - {edu.degree}</p>
                        <p>{edu.edStartDate} to {edu.edEndDate}</p>
                        <div className="actions">
                            <button onClick={() => handleEditClick(edu, 'education')}>Edit</button>
                            <button onClick={() => handleDeleteEducation(edu.id)}>Delete</button>
                        </div>
                    </>
                )}
            </div>
            ))}

            <h3>Work Experience</h3>    
            {workExperience.map((work) => (
                <div key={work.id} className="work-item">
                    {editingEntry?.id === work.id && editingType === 'work' ? (
                        <EditForm
                            entry={work}
                            fields={fields.work}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                ) : (
                 <>
                    <p>{work.position}</p>
                    <p>{work.companyName}</p>
                    <p>{work.workStartDate} to {work.workEndDate}</p>
                    <div className="actions">
                        <button onClick={() => handleEditClick(work, 'work')}>Edit</button>
                        <button onClick={() => handleDeleteWork(work.id)}>Delete</button>
                    </div>
                </>
            )}
                </div>

            ))}
      </div>
    );
  }
  
export default Preview;