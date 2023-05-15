import React from "react"
import '../styles/People.css';

const People = ({updatePerson, reset}) => {

    const input = React.useRef();
    const alert = React.useRef();
    const [value, setValue] = React.useState('');

    function handleInputChange(e) {
        const userValue = e.target.value;
        setValue(userValue);
            
    
        updatePerson(userValue);
        
    }
    function onAlertMode() {
        input.current.classList.add("zero");
        alert.current.classList.remove("off");
    }
    function offAlertMode() {
        input.current.classList.remove("zero");
        alert.current.classList.add("off");

    }
    React.useEffect(() => {
        if(value == "0") {
            onAlertMode();
        } else {
            offAlertMode();
        }
  
    }, [value])
    React.useEffect(()=> {
        if(reset) {
         setValue('')
        }
       },[reset])
 
    return (
        <div className="people">
            <div className="people-title">Number of People
            <div className="people-alert off" ref={alert}>Can't be zero</div>
                </div>
            <input className="people-input" type="text" value={value} onChange={handleInputChange} ref={input}></input>
        </div>
    )
}

export default People;