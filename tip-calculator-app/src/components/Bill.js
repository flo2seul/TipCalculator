import React from "react";

const Bill = ({updateTotal, updateBill}) => {
    const [value, setValue] = React.useState('');

    function handleInputChage(e) {
        const userValue = e.target.value;
        updateTotal(userValue);
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