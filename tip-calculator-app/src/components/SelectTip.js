import React from "react"
import '../styles/SelectTip.css';

const SelectTip = (props) => {

    return (
        <div className="select-tip">
            <div>Select Tip %</div>
            <div className="button-group">
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>20%</button>
                <button>25%</button>
                <button>CUSTOM</button>
            </div>
        </div>
    )

}

export default SelectTip;