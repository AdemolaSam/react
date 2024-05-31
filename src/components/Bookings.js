import React, { useEffect, useState } from 'react'


const Bookings = ({ }) => {
    
    const [dateTimeObjArr, setDateTimeObjArr] = useState([
        {date: 'Wed 12 Mar 2024', times: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']},
        {date: 'Mon 10 Mar 2024', times: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM']},
        {date: 'Tue 11 Mar 2024', times: ['11:00 AM', '12:00 PM', '2:00 PM', '2:00 PM']},
        {date: 'Fri 14 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']},
        {date: 'Sat 15 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']},
        {date: 'Mon 17 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']},
        {date: 'Tue 18 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']},
        {date: 'Wed 19 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']},
        {date: 'Fri 21 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']},
    ])

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(4)
    const [dateList, setDateList] = useState(dateTimeObjArr.slice(0, 4))
    const [timeList, setTimeList] = useState([])
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    const handleScrollRight = () => {
        if(start < dateTimeObjArr.length - 4){
            setStart(start + 1)
        }
        if(end < dateTimeObjArr.length -1){
            setEnd(end + 1)
        }
        setDateList(dateTimeObjArr.slice(start, end))
    }

    const handleScrollLeft = () => {
        if(start > 0){
            setStart(start - 1)
        }
        if(end > 4) {
            setEnd(end - 1)
        }
        setDateList(dateTimeObjArr.slice(start, end))
    }

    const showAvailableTimes = (dateObj) => {
        setTimeList(dateObj.times)
        setSelectedDate(dateObj.date)
        setSelectedTime('')
    }

    const handleSelectTime = (e) => {
        setSelectedTime(e.target.innerText)
    }

  return (
        <section className='container '>
            <h1 className='text-center '>Book an Inspection</h1>
            <div className='lg:w-[50%] sm:w-[80%] md:w-4/5  m-auto outline-1 outline-none outline-black grid grid-cols-10 place-items-center'>
                <span 
                    onClick={handleScrollLeft}
                    className='col-span-1 text-2xl hover:text-red-500 hover:cursor-pointer'
                >
                    &larr;
                </span>
                {dateList.map((item) => 
                    <div 
                        onClick={() => showAvailableTimes(item)}
                        className='w-min border border-black px-3 m-2 col-span-2 hover:bg-blue-900 cursor-pointer'>
                        {item.date}
                    </div>
                )}
                <span
                    onClick={handleScrollRight}
                    className='col-span-1 text-2xl hover:text-red-500 hover:cursor-pointer'
                >
                    &rarr;
                </span>
            </div>

            <div className='mt-[20%] grid grid-cols-4 h-auto place-items-center'>
                {timeList && timeList.map(t => 
                    <div
                        onClick={(e) => handleSelectTime(e)} 
                        className='px-4 py-2 m-2 outline outline-1 hover:bg-blue-900 cursor-pointer'
                    >
                        {t}
                    </div>
                )}
            </div>

            <div className=''>
                <div className='inline-flex justify-between outline outline-1 p-2'>
                    <span className='pr-3'>Date: {selectedDate}</span>
                    <span>Time: {selectedTime}</span>
                </div>
                <button className='p-2 bg-gray-500 hover:bg-blue-900 outline outline-1'>Submit</button>
            </div>

        </section>
  )
}

export default Bookings
