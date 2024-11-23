function GeneralInfo({data, handleChange}) {
    

    return (
        <form className="form generalInfo">
            <h2>General Info</h2>
            <fieldset>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text" 
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    value={data.firstName}
                />

                <label htmlFor="lastName">Last Name:</label>
                <input 
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleChange}
                    value={data.lastName}
                />

                <label htmlFor="professionalTitle">Professional Title:</label>
                <input 
                    type="text"
                    name="professionalTitle"
                    id="professionalTitle"
                    onChange={handleChange}
                    value={data.professionalTitle}
                />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={data.email}
                />
                
                <label htmlFor="phone">Phone Number:</label>
                <input 
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={data.phone}
                />

                <label htmlFor="location">Location:</label>
                <input 
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleChange}
                    value={data.location}
                />

                <label htmlFor="about">About Me:</label>
                <textarea 
                    name="about" 
                    id="about" 
                    cols="30" 
                    rows="10"
                    onChange={handleChange}
                    value={data.about}
                    placeholder="brief summary about yourself"
                    required
                ></textarea>
                
                
            </fieldset>
        </form>
    )
}

export default GeneralInfo;