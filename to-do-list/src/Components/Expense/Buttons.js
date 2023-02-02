import './Buttons.css'
import React, { useeffect, useState } from 'react';


const Buttons = () => {

    var number = 0;
    const [num, newNum] = useState(number);
    const increase = () => {
        newNum(
            number = num + 1
        )
    }
    const decrease = () => {
        if (num > 0) {
            newNum(
                number = num - 1
            )
        }
    }


    return (
        <div className='btn'>
            <button className='inc_btn' onClick={increase}>+</button>
            <div className='cont_btn'>{num}</div>
            <button className='dec_btn' onClick={decrease}>-</button>

        </div>
    );
}

export default Buttons;