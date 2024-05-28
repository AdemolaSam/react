import React, { useEffect, useState } from 'react'
import { monthCal, currentMonth} from '../monthCalendar'

const CalendarC = ({time}) => {
    const [month, setMonth] = useState(currentMonth() || '')
    const [dates, setDates] = useState(monthCal(month) || {})
    const [showTime, setShowTime] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [selectDate, setSelectDate] = useState([])

    const getNextMonth = () => {
        let m = month
        m++
        setMonth(m)
        setDates(monthCal(m))
    }

    const getPrevMonth = ()=> {
        let m = month
        m--
        setMonth(m)
        setDates(monthCal(m))
    }

    const addDate = () => {
        const now = new Date()
        const year = now.getFullYear
        const date = new Date(year, month, parseInt(selectDate[0]))
    }

    useEffect(() => {
        console.log(selectDate)
    }, [selectDate])


    const handleShow = (e) => {
        const rect = e.target.getBoundingClientRect();
        setPosition({
            top: rect.top + window.scrollY - 50,
            left: rect.left + window.scrollX,
        });
        setShowTime(!showTime)
    }

  return (
    <div className='m-3'>
         <div className='flex justify-between border-t border-l border-r border-2 border-black'>
            <span 
                className='pl-3 hover:cursor-pointer'
                onClick={() => getPrevMonth()}
            >
                prev
            </span>
            <span className='text-blue-300 font-bold'>{months[month]}</span>
            <span 
                className='pr-3 hover:cursor-pointer'
                onClick={() => getNextMonth()}
            >
                Next
            </span>
        </div>
        <div className='grid grid-cols-7 border-2 border-black text-center relative w-max'>

        {days.map((day, index) =>
            <>
                 <div key={index}>{day}</div>
            </>            
        )}
        {dates && Object.keys(dates).map((date, i) => {
               return(<React.Fragment key={i}>
                    <div
                        onClick={(e)=> {
                            handleShow(e)
                            setSelectDate(...selectDate, e.target.innerText)
                        }}
                    >  
                        {dates[date] && dates[date].map((d) => {
                            if(d === ""){
                                return(
                                    <div className='p-4 hover:bg-blue-200 hover:cursor-pointer hover:rounded-2xl'>-</div>
                                )
                            }
                            return(
                                <div
                                    className={`${d === new Date(Date.now()).getDate()? 'bg-gray-400 rounded-full' : ''} p-3 m-2 hover:bg-blue-200 hover:cursor-pointer hover:rounded-full`}
                                >
                                    {d}
                                </div>)
                        })}
                    </div> 
                </React.Fragment>)
            }                    
        )}      
            {selectDate && (
                <div
                    className='absolute'
                    onClick={()=> addDate()}
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
    
  )
}

export default CalendarC
