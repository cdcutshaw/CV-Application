function EducationInfo(props) {
    const {data, handleChange} = props

    return (
        <form className="form educationExperience">
            <h2>Education</h2>
            <fieldset>
                <label htmlFor="institution">Institution:</label>
                <input
                    type="text" 
                    name="institution"
                    id="institution"
                    onChange={handleChange}
                    value={data.institution}
                    placeholder="University of Utah"
                />

                <label htmlFor="degree">Degree:</label>
                <input 
                    type="text"
                    name="degree"
                    id="lastName"
                    onChange={handleChange}
                    value={data.degree}
                    placeholder="MBA Management"
                />

                <label htmlFor="edStartDate">Start Date:</label>
                <input 
                    type="date"
                    name="edStartDate"
                    id="edStartDate"
                    onChange={handleChange}
                    value={data.edStartDate}
                />
                
                <label htmlFor="edEndDate">End Date:</label>
                <input 
                    type="date"
                    name="edEndDate"
                    id="edEndDate"
                    onChange={handleChange}
                    value={data.edEndDate}
                />

                <button>
                    Add
                </button>
                
            </fieldset>
        </form>
    )
}

export default EducationInfo;