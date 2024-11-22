import { useState } from 'react';

function EducationInfo({handleAddEducation }) {
  const [tempEducation, setTempEducation] = useState({
    institution: '',
    degree: '',
    edStartDate: '',
    edEndDate: '',
  });

  const handleTempChange = (e) => {
    const { name, value } = e.target;
    setTempEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    handleAddEducation(tempEducation);
    setTempEducation({
      institution: '',
      degree: '',
      edStartDate: '',
      edEndDate: '',
    });
  };

  return (
    <form className="form educationExperience">
      <h2>Education</h2>
      <fieldset>
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          name="institution"
          id="institution"
          onChange={handleTempChange}
          value={tempEducation.institution}
          placeholder="University of Utah"
          required
        />

        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          onChange={handleTempChange}
          value={tempEducation.degree}
          placeholder="MBA Management"
          required
        />

        <label htmlFor="edStartDate">Start Date:</label>
        <input
          type="date"
          name="edStartDate"
          id="edStartDate"
          onChange={handleTempChange}
          value={tempEducation.edStartDate}
          required
        />

        <label htmlFor="edEndDate">End Date:</label>
        <input
          type="date"
          name="edEndDate"
          id="edEndDate"
          onChange={handleTempChange}
          value={tempEducation.edEndDate}
          required
        />

        <button type='submit' onClick={handleAdd}>Add</button>
      </fieldset>
    </form>
  );
}

export default EducationInfo;
