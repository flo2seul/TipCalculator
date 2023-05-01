import React from 'react'
import '../styles/Viewer.css';

const Viewer = ({total, tipAmount}) => {
  
    return (
        <div className='viewer-box'>
            <div className='view-tip-amount'>
                <span>Tip Amount</span>
                <span>/ person</span>
                <span>${tipAmount}</span>
            </div>
            <div className='view-total'>
                <span>Total</span>
                <span>/ person</span>
                <span>${total || 0.00}</span>
            </div>
            <button>RESET</button>
        </div>
    )
}

export default Viewer;