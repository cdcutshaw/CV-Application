import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';

function Editor(props) {

    return (
        <div className="editor">
            <header>
                <h1 className="editorTitle">cv generator</h1>
            </header>
            <GeneralInfo
                data = {props.data}
                handleChange = {props.handleChange}
            />

            <EducationInfo
                data = {props.data}
                handleChange = {props.handleChange}
            />

            <WorkExperience
                data = {props.data}
                handleChange = {props.handleChange}
            />
        </div>
    )
}

export default Editor;