import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';

function Editor({data, handleChange, handleAddEducation, handleAddWorkExperience}) {

    return (
        <div className="editor">
            <header>
                <h1 className="editorTitle">cv generator</h1>
            </header>
            <GeneralInfo
                data = {data}
                handleChange = {handleChange}
            />

            <EducationInfo
                data = {data}
                handleChange = {handleChange}
                handleAddEducation={handleAddEducation}
            />

            <WorkExperience
                data = {data}
                handleAddWorkExperience={handleAddWorkExperience}
            />
        </div>
    );
}

export default Editor;