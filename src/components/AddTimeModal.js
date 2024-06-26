import React, { useEffect, useState } from 'react'
import TimeSelect from './TimeSelect'

const AddTimeModal = ({ dates, open, timeSelected, onTimeSelect }) => {

    const [isOpen, setIsOpen] = useState(open)
    const [showDateTimes, setShowDateTimes] = useState('')
    const [showAddTime, setShowAddTime] = useState(false)

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const handleClose =()=> {
        setIsOpen(false)
    }


    const passSelectedTime = (date, time) => {
        onTimeSelect(date, time);
    };


    const handleShowDatesTimes = (e) => {
        setShowDateTimes(e.target.innerText);
    };

    const handleShowAddTime = () => {
        setShowAddTime(!showAddTime)
    }

  return (
    <div className={`${isOpen ? 'absolute' : 'hidden'} top-[15%] left-[10%] w-[80%] h-[80%] rounded-xl border border-black bg-gray-200`}>
        <div className='w-full px-3 py-3 inline-flex justify-between border-b-2 border-black'>
            <span className='underline text-xl font-semibold'>Add Inspection Times</span>
            <span 
                onClick={handleClose}
                className='text-2xl hover:text-red-500 font-bold hover:cursor-pointer'
            >
                x
            </span>
        </div>
        <div className=''>
            {dates.length > 0 && dates.map((date, index) => 
            
            <div 
                key={index} 
                className='lg:px-10 px-3 text-lg'
            >
                <div 
                     onClick={(e) => handleShowDatesTimes(e)}
                     className='mt-2'
                >
                    <span className='hover:cursor-pointer hover:text-indigo-200 p-2'>{date}</span>
                    <button 
                        onClick={handleShowAddTime}
                        className='p-1 bg-gray-700'
                    >
                        Add Time
                    </button>   
                </div>
                
                <div className={`${showDateTimes === date ? 'block' : 'hidden'} w-full -translate-x-[20%] ml-[18%] p-4 `}>  
                    <div className='outline outline-1 col-span-2'>
                        {timeSelected && timeSelected.filter(item => item.date === date)[0]?.times.map((time, tIndex) => (
                            <div key={tIndex} className=''>{time}</div>
                        ))}  
                    </div>
                    <div className={`${showAddTime ? 'block' : 'hidden'} col-span-1 w-min`} >
                        <TimeSelect 
                            hours={["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]}
                            mins={["00","05","10","15","20","25","30","35","40","45","50", "55"]}
                            display={showAddTime}
                            passSelectedTime={(time) => passSelectedTime(date, time)}
                        />
                    </div>            
                </div>
            
            </div>
            )}

        </div>
    </div>
  )
}

export default AddTimeModal
