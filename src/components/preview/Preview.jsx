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
            <div className="previewPage">
                
                <div className="prevHead">
                    <div>
                        <p className="prevName">{data.firstName} {data.lastName}</p>
                        <p className="prevTitle">{data.professionalTitle}</p>
                    </div>
                    <div>
                        <p> {data.email}</p>
                        <p> {data.phone}</p>
                        <p> {data.location}</p>
                    </div>
                </div>

                <div className="prevBody">
                    <div>
                        <h4>About Me</h4>
                        <p>{data.about}</p>
                    </div>
                    <h4>Education</h4>
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
                                <p><strong>{edu.institution} - {edu.degree}</strong></p>
                                <p>{edu.edStartDate} to {edu.edEndDate}</p>
                                <div className="actions">
                                    <button onClick={() => handleEditClick(edu, 'education')}>Edit</button>
                                    <button onClick={() => handleDeleteEducation(edu.id)}>Delete</button>
                                </div>
                            </>
                        )}
                    </div>
                    ))}
                    <h4>Work Experience</h4>
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
                            <p><strong>{work.position}</strong> - {work.companyName}</p>
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
                          </div>
                </div>
    );
  }
  
export default Preview;