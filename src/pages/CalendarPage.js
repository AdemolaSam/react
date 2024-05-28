import React from 'react'
import Calendar from 'react-calendar'
import Bookings from '../components/Bookings'
import TimeSelect from '../components/TimeSelect'
import Dropdown from '../components/Dropdown'
import CalendarC from '../components/CalendarC'
import DateComponent from '../components/DateComponent'

const CalendarPage = () => {
  return (
    <div className='w-[100%] flex flex-wrap'>

        <CalendarC 
            time={<TimeSelect  
                hours={["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]}
                mins={["00","05","10","15","20","25","30","35","40","45","50", "55"]}
            /> }
        />

        <DateComponent/>
        {/* <div>
            <Calendar/>
        </div> */}
        <div>
            {/* <CalendarX 
                dates={[
                    {
                        availableDate: "2024-06-01",
                        availableTimes: ["10:00", "11:00", "12:00", "01:00", "02:00"]

                    },
                    {
                        availableDate: "2024-06-02",
                        availableTimes: ["08:00", "09:00", "10:00", "11:00", "12:00"]

                    },
                    {
                        availableDate: "2024-06-03",
                        availableTimes: ["07:00", "08:00", "11:00", "12:00", "01:00"]

                    },
                    {
                        availableDate: "2024-06-04",
                        availableTimes: ["09:30", "12:00", "02:00", "04:00", "05:00"]

                    },
                    {
                        availableDate: "2024-06-05",
                        availableTimes: ["09:30", "12:00", "02:00", "04:00", "05:00"]

                    },
                    {
                        availableDate: "2024-06-06",
                        availableTimes: ["09:30", "12:00", "02:00", "04:00", "06:00"]

                    },
                    {
                        availableDate: "2024-06-07",
                        availableTimes: ["11:30", "12:30", "12:30", "01:00", "02:00"]

                    },
                    {
                        availableDate: "2024-06-08",
                        availableTimes: ["07:30", "08:30", "09:30", "10:30", "11:30"]

                    },
                    {
                        availableDate: "2024-06-09",
                        availableTimes: ["12:00", "01:00", "02:00", "03:00", "04:00"]

                    },
                    {
                        availableDate: "2024-06-10",
                        availableTimes: ["09:30", "12:00", "02:00", "04:00", "05:30"]

                    },
                ]}
                child={<Dropdown items={["09:30", "12:00", "02:00", "04:00", "05:30"]}/>}
            /> */}
        </div>
    </div>
  )
}

export default CalendarPage
