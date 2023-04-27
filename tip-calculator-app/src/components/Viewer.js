import React from 'react'

const Viewer = ({total}) => {


    return (
        <div className='viewer-box'>
            <div className='tip-amount'>
                <span>Tip Amount</span>
                <span>/ person</span>
                <span>$0.00</span>
            </div>
            <div>
                <span>Total</span>
                <span>/ person</span>
                <span>${total}</span>
            </div>
            <button>RESET</button>
        </div>
    )
}

export default Viewer;