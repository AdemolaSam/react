import React, { useEffect, useState, useRef } from 'react';

const Bookings = () => {
  const [dateTimeObjArr, setDateTimeObjArr] = useState([
    { date: 'Wed 12 Mar 2024', times: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
    { date: 'Mon 10 Mar 2024', times: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'] },
    { date: 'Tue 11 Mar 2024', times: ['11:00 AM', '12:00 PM', '2:00 PM', '2:00 PM'] },
    { date: 'Fri 14 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
    { date: 'Sat 15 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
    { date: 'Mon 17 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
    { date: 'Tue 18 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
    { date: 'Wed 19 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
    { date: 'Fri 21 Mar 2024', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
  ]);

  const [scrollX, setScrollX] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const { scrollWidth, clientWidth } = containerRef.current;
    setMaxScrollWidth(scrollWidth - clientWidth);
  }, []);

  const handleScrollLeft = () => {
    setScrollX((prev) => Math.max(prev - 200, 0));
  };

  const handleScrollRight = () => {
    setScrollX((prev) => Math.min(prev + 200, maxScrollWidth));
  };

  useEffect(() => {
    containerRef.current.scrollLeft = scrollX;
  }, [scrollX]);

  const [timeList, setTimeList] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const showAvailableTimes = (dateObj) => {
    setTimeList(dateObj.times);
    setSelectedDate(dateObj.date);
    setSelectedTime('');
  };

  const handleSelectTime = (e) => {
    setSelectedTime(e.target.innerText);
  };

  return (
        <section className=''>
            <h1 className='text-center text-2xl font-bold mb-4'>Book an Inspection</h1>
            <div className='flex items-center justify-center space-x-4 mb-4'>
                <button
                className={`p-2 bg-gray-300 rounded ${scrollX === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
                onClick={handleScrollLeft}
                disabled={scrollX === 0}
                >
                &larr;
                </button>
                <div className='flex overflow-hidden w-full' ref={containerRef}>
                <div className='flex space-x-4 transition-transform duration-300 ease-in-out' style={{ transform: `translateX(-${scrollX}px)` }}>
                    {dateTimeObjArr.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => showAvailableTimes(item)}
                        className='lg:text-xl p-3 px-5 outline outline-1 m-2 rounded cursor-pointer hover:bg-blue-700 hover:text-white flex flex-col text-center'
                    >
                        <span className=''>{item.date.split(' ')[0]}</span>
                        <span className='text-3xl lg:text-4xl font-semibold'>{item.date.split(' ')[1]}</span>
                        <span>{item.date.split(' ')[2]}</span>
                    </div>
                    ))}
                </div>
                </div>
                <button
                className={`p-2 bg-gray-300 rounded ${scrollX >= maxScrollWidth ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
                onClick={handleScrollRight}
                disabled={scrollX >= maxScrollWidth}
                >
                &rarr;
                </button>
            </div>

            <div className='grid grid-cols-5  gap-4 mb-4 m-auto w-5/6'>
                {timeList &&
                timeList.map((t, index) => (
                    <div
                    key={index}
                    onClick={(e) => handleSelectTime(e)}
                    className='py-3 sm:py-2 outline outline-1 rounded cursor-pointer hover:bg-blue-700 hover:text-white text-center lg:text-2xl sm:text-sm'
                    >
                    {t}
                    </div>
                ))}
            </div>

            <div className='w-3/4 mx-auto mt-10 outline outline-1 p-4 rounded'>
                <div className='flex justify-between items-center border border-gray-400 p-2 rounded'>
                <div className='pr-3'>
                    Date:
                    <span className='font-bold pl-2'>{selectedDate}</span>
                </div>
                <div>
                    Time:
                    <span className='font-bold pl-2'>{selectedTime}</span>
                </div>
                <button className='p-2 bg-gray-500 rounded hover:bg-blue-700 hover:text-white'>
                    Book &rarr;
                </button>
                </div>
            </div>
        </section>
    );
};

export default Bookings;

