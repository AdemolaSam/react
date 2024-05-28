import React, { useEffect, useState } from 'react'


const MonthCalendar = () => {
    
}

const Bookings = ({ dates, child }) => {
    
    const [dateArr, setDateObj] = useState(dates || [])
    const [timeList, setTimeList] = useState(dates[0]?.availableTimes || [])

    useEffect(() => {
        console.log(timeList)
    },[timeList])


    const handleDateClick = (availableTimes) => {
        setTimeList(availableTimes);
    };

  return (
    <div className='w-[100%] h-[100%]  border-2 border-black '>
        <div className='w-[90%] mx-[5%] grid grid-flow-col gap-5'>
            {dateArr && dateArr.map((d, i) => 
                <div 
                    className='m-2 p-2 border-2 border-green-600 text-center hover:cursor-pointer hover:bg-blue-gray-400'
                    key={i}
                    onClick={() =>  handleDateClick(d.availableTimes)}
                >
                    {d.availableDate}
                </div>
            )}
        </div>

        <div
            className={`time-list grid w-[90%] mx-[5%] my-5 grid-flow-col gap-5`}
        >
            {timeList &&
                timeList.map((time, j)=> 
                    <div key={j}
                        className='border-2 border-blue-gray-900 p-2 '
                    >
                        {time}
                    </div>)
            }
        </div>

        <div>
            {child}
        </div>
    </div>
  )
}

export default Bookings
