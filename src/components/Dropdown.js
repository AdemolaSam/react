import React from 'react'
import { useState } from 'react'

// /**
//  * props for the dropdown component
//  */
// interface DropdownProps {
//     /**
//      * array of dropdown items
//      */
//     items: string[];
//     /**
//      * Optional argument for the styling the dropdown ul element
//      */
//     style?: string
//   }

// /**
//  * 
//  * @param {DropdownProps} props This takes two argument, style(optional), and an array of items
//  * @returns {JSX.Element} returns a dropdown of list elements with the provided items
//  */

const Dropdown = ({ style, items }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    return (
            <div className='w-min'>
                <button onClick={toggleDropdown} className='container border bg-slate-400 border-gray-300 px-2 py-2 rounded-md'>
                    {isOpen? 'Close': 'Open'}
                </button>
                {isOpen && (
                    <ul
                        className={style ? style : 'p-0 w-max h-max rounded bg-gray-100'}
                    >
                        {items.map((item, index) => (
                            <li 
                                className='px-4 py-2 hover:text-gray-50 cursor-pointer hover:bg-slate-600'
                                key={index}
                                onClick={toggleDropdown} 
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                ) }
            </div>
    )
}

export default Dropdown