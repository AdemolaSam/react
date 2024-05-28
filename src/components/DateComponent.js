import React, { useState } from 'react'
import TrashIcon from './TrashIcon'

const DateComponent = ({ datelist }) => {
    const [dateList, setDateList] = useState(datelist || [])
    const [addTime, setAddTime] = useState('')

    const handleRemove = (e)=> {
        e.target.parentElement.remove()
    }

  return (
    <div className='w-auto h-auto'>
        <div className='pb-2'>
            <h3 className='text-center'>Add Dates</h3>
        </div>
        {dateList.length > 0? dateList.map((date) => {
            return (
                <div className='p-2 ml-2'>
                    
                    {date}
                    <span className='p-1 bg-blue-gray-200 ml-2 rounded hover:cursor-pointer hover:bg-indigo-200'>&oplus;</span>
                    <span 
                        onClick={(e)=> handleRemove(e)}
                        className='p-1 ml-2 rounded hover:cursor-pointer hover:bg-red-400 bg-red-300'
                    >
                        Remove
                    </span>
                </div>
            )
        }): <div>No date Added yet</div>}

        {dateList.length > 0 && 
            <div className='w-[96%] mx-[2%] text-center inline-flex'>
                <button className='w-full p-1 bg-indigo-100 rounded-lg hover:cursor-pointer hover:bg-indigo-300 mr-2'>Add All</button>
                <button className='w-full p-1 bg-red-300 rounded-lg hover:cursor-pointer hover:bg-red-600 ml-2'>Remove All</button>
            </div>}
    </div>
  )
}

export default DateComponent
