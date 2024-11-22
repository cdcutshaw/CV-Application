function Preview({ data, handleDeleteEducation, handleEditEducation, handleDeleteWork, handleEditWork}) {
    const { education, workExperience } = data;
  
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
                <p>{edu.institution} - {edu.degree}</p>
                <p>{edu.edStartDate} to {edu.edEndDate}</p>
                <div className="actions">
                <button onClick={() => handleEditEducation(edu.id, { institution: 'New Institution' })}>
                 Edit
                </button>
                <button onClick={() => handleDeleteEducation(edu.id)}>
                Delete
                </button>
                </div>
            </div>
            ))}

            <h3>Work Experience</h3>    
            {workExperience.map((work) => (
            <div key={work.id} className="work-item">
                <p>{work.position}</p>
                <p>{work.companyName}</p>
                <p>{work.workStartDate} to {work.workEndDate}</p>
                <div className="actions">
                <button onClick={() => handleEditWork(work.id, { institution: 'New Institution' })}>
                 Edit
                </button>
                <button onClick={() => handleDeleteWork(work.id)}>
                Delete
                </button>
                </div>
            </div>
            ))}
      </div>
    );
  }
  
export default Preview;