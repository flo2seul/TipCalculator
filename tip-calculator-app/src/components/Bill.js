import React from "react";
import '../styles/Bill.css';

const Bill = ({updateBill, reset}) => {

    const input = React.useRef();
    const [value, setValue] = React.useState('');

    function handleInputChage(e) {
        const userValue = e.target.value;
        updateBill(userValue);
        setValue(userValue);
    }
    React.useEffect(()=> {
       if(reset) {
        setValue('')
       }
      },[reset])

    return(
        <div className="bill">
            <div className="bill-title">Bill</div>
            <input className="bill-input" type="text" value={value} onChange={handleInputChage} ref={input}></input>
        </div>
    )
}
export default Bill;