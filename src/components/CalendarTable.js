import React from 'react'
import ElipsisIcon from './ElipsisIcon';

const CalendarTable = ({ details }) => {

  return (
    <>
          {details.length > 0 

            ?   (<div className='w-full'>
                    <div className='relative left-[70%]'>
                        <p className='bg-blue-800 w-[20%] text-end p-2 text-white'>Add New Inspection</p>
                    </div>

                    <section className='w-[90%] m-auto mt-3 outline outline-1 rounded text-sm lg:text-lg'>
                    <div className='headings grid grid-cols-7 border-b border-b-black p-2 text-center font-bold'>
                        <div>Action</div>
                        <div>Title</div>
                        <div>Status</div>
                        <div>Applied</div>
                        <div>Frequency</div>
                        <div>Start Date</div>
                        <div>End Date</div>
                    </div>
    
                    {details.length > 0 && details.map((d, index) => (
                            <div 
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white': '' } grid grid-cols-7 p-2 text-center place-items-center`}
                            >
                                <div
                                    className='hover:cursor-pointer inline-flex justify-center hover:text-green-700'
                                >
                                    <ElipsisIcon/>
                                </div>
                                <div>{d.title}</div>
                                <div 
                                    className={`${d.status === "active" ? 'bg-green-400' : 'bg-yellow-800'} rounded-3xl px-3 py-2`}
                                >
                                    {d.status}
                                </div>
                                <div>{d.applied}</div>
                                <div>{d.frequency}</div>
                                <div>{d.startDate}</div>
                                <div>{d.endDate}</div>
                            </div>
                            
                        ))}
            
                </section>
                </div>
                )
            :   
                <div className='container inline-flex justify-center absolute'>
                    <p className='py-2 px-3 lg:text-lg text-sm font-semibold bg-blue-800 text-white lg:mt-[30%] hover:cursor-pointer hover:bg-black'>Add New Inspection</p>
                </div>
          
        }
    </>    
  )
}

export default CalendarTable
