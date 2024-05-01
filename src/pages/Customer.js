import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NotFound from '../components/NotFound'
import { baseUrl } from '../shared'

export default function Customer() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [customer, setCustomer] = useState()
    const [tempCustomer, setTempCustomer] = useState()
    const [notFound, setNotFound] = useState(false)
    const [changed, setChanged] = useState(false)
    const url= baseUrl + '/api/customers/' + id

    // useEffect(() => console.log({
    //     'customer': customer,
    //     'tempCustomer': tempCustomer
    // }))

    useEffect(() => {
        fetch(url)
            .then((response ) => {
                if(response.status === 404) {
                    // option 1, redirect to 404/NotFound page
                    // navigate('/404')
                    // option 2, render 404/NotFound page
                    setNotFound(true)
                }
                return response.json()
            })
            .then((data) => {
                setCustomer(data.customer)
                setTempCustomer(data.customer)
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, [])

    function handleDelete() {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            }).then((response) => {
                if(!response.ok) {
                    throw new Error('Something went wrong.')
                }
                navigate('/customers')
            })
            .catch(err => console.log(err.message))
    }

    function updateCustomer() {
        const url = baseUrl + 'api/customers/' + id
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(tempCustomer)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setChanged(false)
            setCustomer(data.customer)
        }).catch(err => console.log(err.message))
    }

    return (
        <>
            { notFound? <p>The customer with id {id} was not found.</p>: null}
            { customer
                ?<div>
                    <p className='m-2 py-2 pl-2 block rounded'>Customer ID: {tempCustomer.id}</p>
                    <input
                        className='m-2 py-2 pl-2 block rounded'
                        type='text'
                        value={tempCustomer.name}
                        onChange={(e) => {
                            setTempCustomer({
                                ...tempCustomer,
                                name: e.target.value
                            })
                            setChanged(true)
                        }}
                    />
                    <input
                        className='m-2 py-2 pl-2 block rounded'
                        type='text'
                        value={tempCustomer.industry}
                        onChange={(e) => {
                            setTempCustomer({
                                ...tempCustomer,
                                industry: e.target.value
                            })
                            setChanged(true)
                        }}
                    />

                    {changed && 
                        <>
                            <button
                                className='px-2 py-2 rounded bg-red-300 m-3'
                                onClick={(e) => {
                                    setTempCustomer({ ...customer })
                                    setChanged(false)
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className='px-2 py-2 rounded bg-green-200 m-3'
                                onClick={updateCustomer}
                            >
                                Save
                            </button>
                        </>
                    }
                </div>
                :null 
            }
            <button 
                className='bg-red-400 px-2 py-2 rounded'
                onClick={handleDelete}
            >
                Delete Customer
            </button>
            <br/>

            <Link to={'/customers'}>Go back</Link>
        </>
    )
}