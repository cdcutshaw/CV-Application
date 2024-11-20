function GeneralInfo(props) {
    const {data, handleChange} = props

    return (
        <form className="form generalInfo">
            <h2>general info</h2>
            <fieldset>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text" 
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    value={data.firstName}
                    placeholder="Jane"
                />

                <label htmlFor="">Last Name:</label>
                <input 
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleChange}
                    value={data.lastName}
                    placeholder="Doe"
                />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={data.email}
                    placeholder="janedoe@example.com"
                />
                
                <label htmlFor="phone">Phone Number:</label>
                <input 
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={data.phone}
                    placeholder="555-555-5555"
                />

                <label htmlFor="about">About Me:</label>
                <textarea 
                    name="about" 
                    id="about" 
                    cols="50" 
                    rows="10"
                    onChange={handleChange}
                    value={data.about}
                ></textarea>
                
                
            </fieldset>
        </form>
    )
}

export default GeneralInfo;