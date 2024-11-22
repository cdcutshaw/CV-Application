import { useState } from 'react';

function WorkExperience({ handleAddWorkExperience }) {
  const [tempWork, setTempWork] = useState({
    position: '',
    companyName: '',
    workStartDate: '',
    workEndDate: '',
  });

  const handleTempChange = (e) => {
    const { name, value } = e.target;
    setTempWork((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    handleAddWorkExperience(tempWork);
    setTempWork({
      position: '',
      companyName: '',
      workStartDate: '',
      workEndDate: '',
    });
  };

  return (
    <form className="form workExperience">
      <h2>Work Experience:</h2>
      <fieldset>
        <label htmlFor="position">Title/Position:</label>
        <input
          type="text"
          name="position"
          id="position"
          onChange={handleTempChange}
          value={tempWork.position}
          placeholder="General Manager"
        />

        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          onChange={handleTempChange}
          value={tempWork.companyName}
        />

        <label htmlFor="workStartDate">Start Date:</label>
        <input
          type="date"
          name="workStartDate"
          id="workStartDate"
          onChange={handleTempChange}
          value={tempWork.workStartDate}
        />

        <label htmlFor="workEndDate">End Date:</label>
        <input
          type="date"
          name="workEndDate"
          id="workEndDate"
          onChange={handleTempChange}
          value={tempWork.workEndDate}
        />

        <button onClick={handleAdd}>Add</button>
      </fieldset>
    </form>
  );
}

export default WorkExperience;
