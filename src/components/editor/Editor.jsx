import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';

function Editor({data, handleChange, handleAddEducation, handleAddWorkExperience}) {

    return (
        <div>
            
            <div className="editor">
            
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
        </div>
    );
}

export default Editor;