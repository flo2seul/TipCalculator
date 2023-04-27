import React from "react";

const Bill = ({updateBill}) => {
    const [value, setValue] = React.useState('');

    function handleInputChage(e) {
        const userValue = e.target.value;
        updateBill(userValue);
        setValue(userValue);
    }

    return(
        <div className="bill">
            <div>Bill</div>
            <input type="text" value={value} onChange={handleInputChage}></input>
        </div>
    )
}
export default Bill;