import React from "react";
import '../styles/Bill.css';

const Bill = ({updateBill}) => {
    const [value, setValue] = React.useState('');

    function handleInputChage(e) {
        const userValue = e.target.value;
        updateBill(userValue);
        setValue(userValue);
    }

    return(
        <div className="bill">
            <div className="bill-title">Bill</div>
            <input className="bill-input" type="text" value={value} onChange={handleInputChage}></input>
        </div>
    )
}
export default Bill;