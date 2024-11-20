function WorkExperience(props) {
    const {data, handleChange} = props

    return (
        <form className="form workEcperience">
            <h2>Work Experience:</h2>
            <fieldset>
                <label htmlFor="position">Title/Position:</label>
                <input
                    type="text" 
                    name="position"
                    id="position"
                    onChange={handleChange}
                    value={data.position}
                    placeholder="General Manager"
                />

                <label htmlFor="companyName">Company Name:</label>
                <input 
                    type="text"
                    name="companyName"
                    id="companyName"
                    onChange={handleChange}
                    value={data.companyName}
                />

                <label htmlFor="workStartDate">Start Date:</label>
                <input 
                    type="date"
                    name="workStartDate"
                    id="workStartDate"
                    onChange={handleChange}
                    value={data.workStartDate}
                />
                
                <label htmlFor="workEndtDate">End Date:</label>
                <input 
                    type="date"
                    name="workEndtDate"
                    id="workEndtDate"
                    onChange={handleChange}
                    value={data.workEndtDate}
                />

                <button>
                    Add
                </button>
                
            </fieldset>
        </form>
    )
}

export default WorkExperience;