import React, { useState } from 'react'

const DateComponent = ({datelist}) => {
    const [dateList, setDateList] = useState(datelist || [])
    const [addTime, setAddTime] = useState('')
  return (
    <div className='w-auto border-2 border-black m-3 '>
        <div className='border-b-2 border-black'>
            <h1>Dates added</h1>
        </div>
        {dateList.length > 0? dateList.map((date) => {
            return (
                <div>
                    {date}
                </div>
            )
        }): <div>No date Added yet</div>}
    </div>
  )
}

export default DateComponent
