import React, { useEffect, useRef, useState } from 'react'
import TrashIcon from './TrashIcon'
import AddTimeModal from './AddTimeModal'

const DateComponent = ({ datelist }) => {
    const [dateList, setDateList] = useState(datelist || [])
    const [selectedDates, setSelectedDates] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const [timeSelected, setTimeSelected] = useState([]);

    const handleTimeSelect = (date, time) => {
        setTimeSelected(prevTimes => {
            const existing = prevTimes.find(item => item.date === date);
            if (existing) {
                existing.times.push(time);
            } else {
                prevTimes.push({ date, times: [time] });
            }
            return [...prevTimes];
        });
    };



    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleRemove = (e, date) => {
        setDateList(dateList.filter(d => d !== date));
        setSelectedDates(selectedDates.filter(d => d !== date));
        setTimeSelected(timeSelected.filter(t => t.date !== date));
    };


    useEffect(() => {
        setDateList(dateList)
    }, [dateList])

    useEffect(() => {
        setSelectedDates(selectedDates)
    }, [selectedDates])

    const handleRemoveAll = () => {
        setDateList([]);
        setSelectedDates([]);
        setTimeSelected([]);
    };

    const handleDateSelect = (date) => {
        if(!selectedDates.includes(date)) {
            setSelectedDates([...selectedDates, date])
        }
    }

  return (
    <div className='w-auto h-auto'>
        <div className='pb-2 inline-flex justify-between w-[100%]'>
            <h3 className='text-center font-bold'>Add Dates</h3>
            <button 
                onClick={handleOpenModal}
                className='outline-1 outline p-2 rounded-2xl hover:bg-blue-900 hover:text-gray-100 underline lg:text-sm'
            >
                View Selected
            </button>
        </div>

        <div>
            {dateList.length > 0? dateList.map((date, index) => {
                return (
                    <div className='p-1' key={index}>
                        
                        <button 
                            onClick={() => {
                                handleDateSelect(date)
                                handleOpenModal()
                            }}
                            className='p-1 outline outline-1 ml-2 rounded-tl-md rounded-bl-md hover:bg-blue-900 hover:text-gray-100 text-lg'
                        >
                            {date}
                        </button>
                        <button 
                            onClick={(e)=> handleRemove(e, date)}
                            className='p-1 hover:bg-red-700 rounded-tr-md rounded-br-md outline outline-1'
                        >
                            <TrashIcon/>
                        </button>
                    </div>
                )
            }): <div>No date Added yet</div>}
        </div>
        

        {dateList.length > 0 && 
            <div className='w-[96%] mx-[2%] text-center inline-flex pt-2'>
                <button 
                    onClick={''}
                    className='w-full mr-2 p-1 bg-indigo-100 rounded-lg hover:cursor-pointer hover:bg-blue-900 hover:text-gray-100 text-lg'
                >
                    Add All
                </button>
                <button 
                    onClick={handleRemoveAll}
                    className='w-full ml-2 p-1 bg-red-300 rounded-lg hover:cursor-pointer hover:bg-black hover:text-gray-100 text-lg'
                >
                    Remove All
                </button>
            </div>}

        {openModal && (
            <div>
            <AddTimeModal
                dates={selectedDates}
                open={openModal}
                // 
                timeSelected={timeSelected}
                onTimeSelect={handleTimeSelect}
            />
        </div>
        )}
        
    </div>
  )
}

export default DateComponent
