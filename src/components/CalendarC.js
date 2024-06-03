import React, { useEffect, useState } from 'react';
import { monthCal, currentMonth, currentYear } from '../monthCalendar';
import DateComponent from './DateComponent';

const CalendarC = () => {
    const [year, setYear] = useState(currentYear() || '');
    const [month, setMonth] = useState(currentMonth() || '');
    const [dates, setDates] = useState(monthCal(month, year) || {});
    const [showTime, setShowTime] = useState(false);
    const [selectedDates, setSelectedDates] = useState([]);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    useEffect(() => {
        setDates(monthCal(month, year));
    }, [month, year]);

    const thisMonth = () => {
        setMonth(currentMonth());
        setYear(currentYear());
        setDates(monthCal(currentMonth(), currentYear()));
    };

    const getNextMonth = () => {
        let m = month;
        let y = year;
        m++;
        if (m > 11) {
            y++;
            m = 0;
        }
        setMonth(m);
        setYear(y);
        setDates(monthCal(m, y));
    };

    const getPrevMonth = () => {
        let m = month;
        let y = year;
        m--;
        if (m < 0) {
            y--;
            m = 11;
        }
        setMonth(m);
        setYear(y);
        setDates(monthCal(m, y));
    };

    useEffect(() => {
        console.log(selectedDates);
    }, [selectedDates]);

    const handleSelect = (e) => {
        if (e.target.innerText !== '-') {
            const date = new Date(year, month, parseInt(e.target.innerText));
            const dateFormatted = date.toDateString();
            let dateArr = selectedDates;
            if (dateArr.indexOf(dateFormatted) === -1) {
                dateArr.push(dateFormatted);
            }
            setSelectedDates(dateArr);
        }
    };

    const handleShow = (e) => {
        setShowTime(!showTime);
    };

    return (
        <div className={`mx-2 w-[96%] h-[80%] lg:mt-[10%] md:mt-[10%] grid sm:grid-flow-row lg:grid-flow-col gap-4 `}>
            <div className='flex-auto outline-black shadow-lg rounded-xl md:rounded-none lg:col-span-2 lg:p-10'>
                <div className='w-full flex justify-between pt-3 px-4 sm:py-1 lg:py-8'>

                    <span className='text-blue-900 font-extrabold text-xl mt-2'>{months[month]} {year}</span>
                    <div className='flex items-center'>
                        <span
                            className='hover:cursor-pointer lg:text-3xl sm:text-2xl md:text-2xl hover:text-blue-900'
                            onClick={() => getPrevMonth()}
                        >
                            &larr;
                        </span>

                        <span
                            onClick={() => thisMonth()}
                            className='text-xl font-semibold hover:text-blue-900 px-3 sm:px-4 lg:px-5 hover:cursor-pointer'
                        >
                            Today
                        </span>

                        <span
                            className='hover:cursor-pointer lg:text-3xl sm:text-2xl md:text-2xl hover:text-blue-900'
                            onClick={() => getNextMonth()}
                        >
                            &rarr;
                        </span>
                    </div>
                </div>

                <div className='grid grid-cols-7 place-items-center text-center w-full text-sm sm:text-base lg:text-xl'>
                    {days.map((day, index) => (
                        <div className='font-semibold text-gray-500' key={index}>{day}</div>
                    ))}
                    {dates && Object.keys(dates).map((date, i) => (
                        <React.Fragment key={i}>
                            <div
                                onClick={(e) => {
                                    handleShow(e);
                                    handleSelect(e);
                                }}
                                className='p-1'
                            >
                                {dates[date] && dates[date].map((d, idx) => (
                                    <div
                                        key={idx}
                                        className={`${d === new Date(Date.now()).getDate() ? 'bg-gray-400 rounded-lg' : ''} p-2 sm:p-3 lg:p-4 m-1 hover:bg-blue-900 hover:text-gray-100 hover:cursor-pointer hover:rounded-lg`}
                                    >
                                        {d || '-'}
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className='w-full md:w-auto flex-auto text-sm sm:text-base md:text-lg lg:text-xl shadow-lg overflow-hidden rounded-xl p-3 md:rounded-none lg:col-span-1'>
                <DateComponent datelist={selectedDates} />
            </div>
        </div>
    );
};

export default CalendarC;
