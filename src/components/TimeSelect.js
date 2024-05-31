
import React, { useState } from 'react';

const TimeSelect = ({ hours, mins, display, passSelectedTime }) => {
    const [h, setH] = useState('00')
    const [m, setM] = useState('00')
    const [amOrPm, setAmOrPm] = useState('AM')
    const [show, setShow] = useState(display)

    const handlepassSelectedTime = () => {
        passSelectedTime(`${h} : ${m} ${amOrPm}`)
    }

    const handleHourChange = (e) => {
        setH(e.target.innerText)
    }

    const handleMinChange =(e) => {
        setM(e.target.innerText)
    }

    const toggleAM = () => {
        if(amOrPm === 'AM'){
            setAmOrPm('PM')
        }
        else {
            setAmOrPm('AM')
        }
    }

  return (
    <section className='w-auto left-[50%] marker absolute bg-white grid grid-flow-row place-items-center outline-1 outline-none outline-black'>
        <div>
            <button
                onClick={handlepassSelectedTime}
                className='border-b-2 border-b-gray-600 w-full hover:bg-indigo-300'
            >
                Add
            </button>
            <button
                className={`${amOrPm == 'AM'? 'bg-orange-200': 'bg-gray-400'} block w-full text-center hover:bg-gray-500 hover:cursor-pointer border-b-2 border-b-gray-600`}
                onClick={toggleAM}
            >
                    {amOrPm}
            </button>
        </div>
         <div className='w-full text-2xl font-bold p-2 border-b-2 border-b-gray-700 text-center'>
            {h}:{m}
        </div>
        
        <div className='flex h-40 text-xl font-bold text-center'>
            <div className='flex-1 h-full overflow-y-scroll  overflow-x-scroll'>
                {hours && hours.map((hour, i) => 
                <div 
                    className='w-full hover:bg-blue-gray-700 hover:cursor-pointer p-3'
                    onClick={(e) => handleHourChange(e)}
                    key={i}>
                    {hour}
                </div>
                )}
            </div>
            
            <div className='flex-1 h-full overflow-y-scroll'>
                {mins && mins.map((min, i) => 
                <div
                    className='w-full hover:cursor-pointer hover:bg-gray-700 first-line p-3'
                    onClick={(e) => handleMinChange(e)}
                    key={i}>
                    {min}
                </div>
                )}
            </div>
        </div>
    </section>
  );
}

export default TimeSelect;
