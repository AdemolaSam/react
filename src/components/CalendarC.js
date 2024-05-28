import React, { useEffect, useState } from 'react'
import { monthCal, currentMonth, currentYear} from '../monthCalendar'
import DateComponent from './DateComponent'

const CalendarC = ({time}) => {
    const [year, setYear] = useState(currentYear() || '')
    const [month, setMonth] = useState(currentMonth() || '')
    const [dates, setDates] = useState(monthCal(month, year) || {})
    const [showTime, setShowTime] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [selectedDates, setSelectedDates] = useState([])

    useEffect(()=> {
        setDates(monthCal(month, year))
    }, [month, year])

    const getNextMonth = () => {
        let m = month
        let y = year
        m++
        setMonth(m)
        if(m > 11){
           y++
           m=0
        }
        setMonth(m)
        setYear(y)
        setDates(monthCal(m, y))
    }

    const getPrevMonth = ()=> {
        let m = month
        let y = year
        m--
        if(m < 0){
           y--
           m=11
        }
        setMonth(m)
        setYear(y)
        setDates(monthCal(m, y))
    }

    useEffect(() => {
        console.log(selectedDates)
    }, [selectedDates])

    const handleSelect = (e) => {
        if(e.target.innerText !== '-') {
            const date = new Date(year, month, parseInt(e.target.innerText))
            const dateFormatted = date.toDateString()
            // const dateFormatted = date.toISOString().split('T')[0]
            let dateArr = selectedDates
            if(dateArr.indexOf(dateFormatted) === -1){
                dateArr.push(dateFormatted)
            }
            setSelectedDates(dateArr)
        }
    }


    const handleShow = (e) => {
        const rect = e.target.getBoundingClientRect();
        setPosition({
            top: rect.top + window.scrollY - 50,
            left: rect.left + window.scrollX,
        });
        setShowTime(!showTime)
    }

  return (
    <div className='m-[2%] mr-[2%] mb-[0%] w-[96%] h-full flex justify-center flex-wrap'>
        <div className='sm:rounded-xl flex-auto h-[70%] outline-black outline-1 outline-offset-0 outline-none bg-indigo-100 rounded-xl md:rounded-tr-none md:rounded-br-none md:rounded-none'>
            <div className='w-auto flex justify-between'>
                <span  
                    className='pl-10 hover:cursor-pointer text-3xl'
                    
                    onClick={() => getPrevMonth()}
                >
                    &larr;
                </span>
                <span className='text-indigo-700 font-extrabold text-xl mt-2'>{months[month]} {year}</span>
                <span 
                    className='pr-10 hover:cursor-pointer text-3xl'
                    onClick={() => getNextMonth()}
                >
                     &rarr;
                </span>
            </div>

            <div className='grid grid-cols-7 text-center relative w-auto lg:text-2xl text-xl'>

                {days.map((day, index) =>
                    <>
                        <div className='lg:font-extrabold font-semibold text-gray-200' key={index}>{day}</div>
                    </>            
                )}
                {dates && Object.keys(dates).map((date, i) => {
                    return(<React.Fragment key={i}>
                            <div
                                onClick={(e)=> {
                                    handleShow(e)
                                    handleSelect(e)
                                }}
                            >  
                                {dates[date] && dates[date].map((d) => {
                                    if(d === ""){
                                        return(
                                            <div className=' w-full p-3 sm:p-2 hover:cursor-pointer'>-</div>
                                        )
                                    }
                                    return(
                                        <div
                                            className={`${d === new Date(Date.now()).getDate()? 'bg-gray-400 rounded-lg' : ''} p-3 sm:p-2 sm:text-lg m-2 hover:bg-blue-200 hover:cursor-pointer hover:rounded-lg`}
                                        >
                                            {d}
                                        </div>)
                                })}
                            </div> 
                        </React.Fragment>)
                    }                    
                )}      
                    {false && (
                        <div
                            className='absolute'
                            onClick={''}
                            style={{
                                top: `${position.top}px`,
                                left: `${position.left}px`,
                            }}
                        >
                            <div className=' border-black border-2 p-2 hover:bg-blue-300 hover:cursor-pointer'>Select Date +</div>
                        </div>
                    )}
                    {/* {showTime && (
                        <div
                            className='absolute'
                            style={{
                                top: `${position.top}px`,
                                left: `${position.left}px`,
                            }}
                        >
                            {time}
                        </div>
                    )} */}
            </div>
        </div>
         
        <div className='w-auto flex-auto text-lg md:text-xl lg:text-xl outline-black outline-1 outline-offset-0 outline-none bg-blue-50 overflow-hidden rounded-xl sm:p-3 md:rounded-none lg:rounded-none'>
            <DateComponent datelist={selectedDates}/>
        </div>
    </div>
    
  )
}

export default CalendarC
