import React, { useRef, useState } from 'react'
import LeftArrow from './LeftArrow'
import CancelIcon from './CancelIcon'
import { HomeIcon, XMarkIcon } from '@heroicons/react/16/solid'

const NewInspection = ({  }) => {

    const [selectedTimes, setSelectedTimes] = useState([])
    const [listings, setListings] = useState([]) // This will be lifted

    const addDateRef = useRef(null)

    const handleTimeSelect = (e) => {
        e.preventDefault();
        const from = document.getElementById('timeFrom').value;
        const to = document.getElementById('timeTo').value;
        const time = { from, to };

        if (!selectedTimes.some(t => t.from === time.from && t.to === time.to)) {
            setSelectedTimes([...selectedTimes, time]);
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted from function")
    }

  return (
    <div>
      <section className='outline outline-1 lg:w-5/6 m-auto'>
        <div
            className='w-[100%] inline-flex justify-between bg-black text-white font-semibold py-2 text-lg'
        >   
            <span className='pl-3 hover:cursor-pointer hover:text-orange-400'>
                <LeftArrow/>
            </span>
            <span>New Inspection</span>
            <span className='pr-3 hover:cursor-pointer hover:text-red-400'>
                <CancelIcon/>
            </span>
        </div>
        <div className='w-[90%] m-auto lg:pr-10'>
            <h3 className='mt-3'>New Inspection</h3>
            <form
                className=''
                onSubmit={(e) => handleFormSubmit(e)}
            >
                <div className='mt-5'>
                    <p>Inspection Type</p>
                    <input 
                        type='radio' value={'In-Person'} name='Itype'
                        className='mr-3'
                    />
                    <label for='Itype'>In-Person</label><br/>
                    <input 
                        type='radio' value={'Live Video'} name='Itype'
                        className='mr-3'
                    />
                    <label for='Itype'>Live Video</label><br/>
                    <input 
                        type='radio' value={'In-Person & Live Video'} name='Itype'
                        className='mr-3'
                    />
                    <label for='Itype'>In-Person & Live Video</label><br/>
                </div>

                <div className='mt-5'>
                    <p>Inspection Title *</p>
                    <input 
                        type='text' placeholder='Enter the title here'
                        className='w-full rounded-lg p-3 bg-transparent outline outline-gray-600 outline-1'
                    />
                </div>

                <div className='mt-5'>
                    <p>Frequency *</p>
                    <select 
                        id='frequency'
                        name='frequency'
                        className='w-full p-3 rounded-lg bg-transparent outline outline-gray-600 outline-1'
                    >
                        <option>Saturdays</option>
                        <option>Sundays</option>
                        <option>Week Days</option>
                        <option>Every two days</option>
                        <option>Custom</option>
                    </select>
                </div>

                <div className='mt-5'>
                    <p
                        className='font-semibold '
                    >
                        When should this inspection first start? *
                    </p>
                    <p>Set a starting date at which these inspections become due for potential buyers. Note that any frequency or day of the week you have select will still be applied and respected.</p>
                    <p>Starting Date *</p>
                    <input 
                        name='start-date' type='date'
                        className='w-full rounded-lg p-3 bg-transparent outline outline-1 outline-gray-600'
                    />
                </div>

                <div className='mt-5'>
                    <p className='font-semibold'>What are your times for the inspections? *</p>
                    <p>You can set as many time range for your property inspection. Note that inspection date and time selected by a potential buyer is subject to your approval. Once approved by you, the client receives a notification of your availability</p>
                    <div className='mt-3'>
                        {selectedTimes.length > 0 && selectedTimes.map((time, index) => (
                            <div className='w-[60%] grid grid-cols-4 text-black text-sm lg:text-lg text-center'>
                                <span className='text-blue-800 bg-gray-500 p-1 mb-2'>{time.from}</span>
                                <span className=''>To</span>
                                <span className='text-blue-800 bg-gray-500 p-1 mb-2'>{time.to}</span>
                                <span className='pr-3 hover:cursor-pointe text-red-400 inline-flex p-2'>
                                    <CancelIcon/>
                                    Remove
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className='mt-3'>
                        <label 
                            for='from'
                            className='mr-3'
                        >From</label>
                        <select 
                            id='timeFrom' name='timeFrom'
                            className='rounded p-2'
                        >
                            <option>09:00AM</option>
                            <option>10:00AM</option>
                            <option>03:00PM</option>
                            <option>04:00PM</option>
                            <option>05:00PM</option>
                            <option>06:00PM</option>
                        </select>
                        <label 
                            for='to'
                            className='mx-3'
                        >To</label>
                        <select 
                            id='timeTo' name='timeTo'
                            className='rounded p-2'
                        >
                            <option>09:00AM</option>
                            <option>10:00AM</option>
                            <option>03:00PM</option>
                            <option>04:00PM</option>
                            <option>05:00PM</option>
                            <option>06:00PM</option>
                        </select>

                        <button
                            ref={addDateRef}
                            onClick={(e) => handleTimeSelect(e)}
                            className='p-2 bg-gray-700 ml-3 text-gray-50 rounded hover:bg-black'
                        >
                            Add
                        </button>
                    </div>
                </div>

                <div className='mt-5'>
                    <p>Seller Note (optional)</p>
                    <textarea 
                        className='w-full rounded-lg p-4 bg-transparent outline outline-1 outline-gray-600'
                        placeholder='What should the buyer be aware regarding the inspection.'
                    />
                </div>

                <div className='mt-5'>
                    {listings?.length > 0 && listings.map((l) => 
                        <div className='bg-gray-600'>
                            <HomeIcon/>
                            {l.title}
                            <span className='ml-2'><XMarkIcon/></span>
                            
                        </div>
                    
                    )}
                    <div className='w-full lg:inline-flex'>
                        <span className='mr-3 p-2 font-semibold'>Estate</span>
                        <div className='w-full rounded-lg outline outline-gray-600 outline-1 p-4'></div>
                    </div>
                </div>

                <div className='mt-5 text-sm lg:text-lg'>
                    <input type='submit' className='bg-blue-700 rounded py-3 sm:px-4 lg:px-10 text-white mb-5 mr-4' value={'Create'}/>
                    <button className='text-blue-700 lg:px-5 py-3 px-4 rounded hover:bg-red-600 hover:text-gray-50'>Cancel</button>
                </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default NewInspection
