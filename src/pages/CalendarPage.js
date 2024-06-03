import React from 'react'
import Calendar from 'react-calendar'
import Bookings from '../components/Bookings'
import TimeSelect from '../components/TimeSelect'
import Dropdown from '../components/Dropdown'
import CalendarC from '../components/CalendarC'
import DateComponent from '../components/DateComponent'
import CalendarTable from '../components/CalendarTable'

const CalendarPage = () => {

  // const details = [
  //   {title: "Lekki Estate", status: "Paused", applied: "Some listing Prop", frequency: "Weekly", startDate: "7 June 2024", endDate: "Indefinite" },
  //   {title: "Lekki Estate", status: "Paused", applied: "Some listing Prop", frequency: "Weekly", startDate: "7 June 2024", endDate: "Indefinite" },
  //   {title: "Lekki Estate", status: "Paused", applied: "Some listing Prop", frequency: "Weekly", startDate: "7 June 2024", endDate: "Indefinite" },
  //   {title: "Lekki Estate", status: "Paused", applied: "Some listing Prop", frequency: "Weekly", startDate: "7 June 2024", endDate: "Indefinite" }
  // ]

  const details =[]
  return (
    <div className='w-[100%] h-full'>

        {/* <CalendarC /> */}
        <CalendarTable details={details}/>
    </div>
  )
}

export default CalendarPage
