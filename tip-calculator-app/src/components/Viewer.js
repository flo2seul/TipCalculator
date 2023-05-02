import React from 'react'
import '../styles/Viewer.css';

const Viewer = ({total, tipAmount, onResetClick}) => {
  
    return (
        <div className='viewer-box'>
            <div>
                <div className='view-tip-amount'>
                    <div className='view-tip-amount-title'>
                        <span>Tip Amount</span>
                        <span>/ person</span>
                    </div>
                    <span>${tipAmount}</span>
                </div>
                <div className='view-total'>
                    <div className='view-total-title'>
                        <span>Total</span>
                        <span>/ person</span>
                    </div>
                    <span>${total || 0.00}</span>
                </div>
            </div>
            <button onClick={onResetClick}>RESET</button>
        </div>
    )
}

export default Viewer;