import React from "react"
import '../styles/People.css';

const People = ({updatePerson}) => {
    const [value, setValue] = React.useState('');

    function handleInputChange(e) {
        const userValue = e.target.value;
        updatePerson(userValue);
        setValue(userValue);
    }

 
    return (
        <div className="people">
            <div className="people-title">Number of People</div>
            <input className="people-input" type="text" value={value} onChange={handleInputChange}></input>
        </div>
    )
}

export default People;