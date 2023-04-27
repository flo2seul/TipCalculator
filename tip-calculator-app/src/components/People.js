import React from "react"

const People = ({updatePerson}) => {
    const [value, setValue] = React.useState('');

    function handleInputChange(e) {
        const userValue = e.target.value;
        updatePerson(userValue);
        setValue(userValue);
    }
    return (
        <div className="people">
            <div>Number of People</div>
            <input type="text" value={value} onChange={handleInputChange}></input>
        </div>
    )
}

export default People;