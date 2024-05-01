import { useState } from "react"
import { UilAngleDown } from "@iconscout/react-unicons"

function Select({ options=[{label:'l 1',value:'l-1'}], placeholder="Select from options", className="", label="", onChange=(f)=>f, value=null, ...props }){

    const [selected, setSelected] = useState(value === null ? value : options.find(datum => datum.value == value))
    const [open, setOpen] = useState(false)
    
    return (
        <div className="w-fit">
            <label className="text-sm">
                { label }
            </label>
            <div onClick={()=> setOpen(!open)} className={`mt-1 w-full border relative px-4 py-2 rounded-lg bg-white flex items-center justify-between ${className}`}>
                <p className="cursor-pointer w-full text-sm">{selected ? selected?.label : <span className="text-gray-500">{placeholder}</span>}</p>
                {
                    open && (
                        <ul className="p-4 flex flex-col cursor-pointer absolute w-full top-full mt-1 left-0 bg-white rounded-md border z-50 divide-y divide-purple-100 max-h-[400px] overflow-y-auto text-sm">
                            {
                                options?.length > 0 ? 
                                    options.filter(datum => datum.value !== selected?.value).map((datum, idx)=> (
                                        <li className="flex-none text-gray-700 hover:text-gray-900 py-2" key={idx} value={datum.value} onClick={(e)=> {
                                            setSelected(datum)
                                            onChange(datum, e)
                                        }}  {...props}>{datum.label}</li>
                                    )) : <li className="text-gray-300 cursor-default">No Option</li>
                                
                            }
                        </ul>
                    )  
                }
                <div className="ml-4 border-l border-l-gray-400 pl-2">
                    <UilAngleDown className={`transition-all ${open ? 'rotate-180' : ''}`} />
                </div>
            </div>
        </div>
    )
}

export default Select