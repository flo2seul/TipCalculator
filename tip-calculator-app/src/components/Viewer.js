import React from 'react'

const Viewer = ({total, tipAmount}) => {
  
    return (
        <div className='viewer-box'>
            <div className='tip-amount'>
                <span>Tip Amount</span>
                <span>/ person</span>
                <span>${tipAmount}</span>
            </div>
            <div>
                <span>Total</span>
                <span>/ person</span>
                <span>${total || 0.00}</span>
            </div>
            <button>RESET</button>
        </div>
    )
}

export default Viewer;