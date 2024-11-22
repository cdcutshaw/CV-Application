import { useState } from 'react';
import Editor from './components/editor/Editor';
import Preview from './components/preview/Preview';
import { v4 as uuidv4 } from 'uuid';

import './App.css'

function App() {
  document.title = 'cv generator';

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    about: '',
    education: [],
    workExperience: [],
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddEducation = (newEducation) => {
    setData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { ...newEducation, id: uuidv4() }],
    }));
  };

  const handleDeleteEducation = (id) => {
    setData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((edu) => edu.id !== id),
    }));
  };

  const handleEditEducation = (id, updatedEntry) => {
    setData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu) =>
        edu.id === id ? { ...edu, ...updatedEntry } : edu
      ),
    }));
  };
  

  const handleAddWorkExperience = (newWork) => {
    setData((prevData) => ({
      ...prevData,
      workExperience: [...prevData.workExperience, { ...newWork, id: uuidv4() }],
    }));
  };

  const handleDeleteWork = (id) => {
    setData((prevData) => ({
      ...prevData,
      workExperience: prevData.workExperience.filter((work) => work.id !== id),
    }));
  };

  const handleEditWork = (id, updatedEntry) => {
    setData((prevData) => ({
      ...prevData,
      workExperience: prevData.workExperience.map((work) =>
        work.id === id ? { ...work, ...updatedEntry } : work
      ),
    }));
  };
  

  return (
    <>
      
        <Editor
          data = {data} 
          handleChange={handleChange}
          handleAddEducation={handleAddEducation}
          handleAddWorkExperience={handleAddWorkExperience}
        />
     
      
        <Preview
          data = {data}
          handleDeleteEducation={handleDeleteEducation}
          handleEditEducation={handleEditEducation}

          handleDeleteWork={handleDeleteWork}
          handleEditWork={handleEditWork}
        />
      
    </>
  )
}

export default App
