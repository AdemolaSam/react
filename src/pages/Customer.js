import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import NotFound from '../components/NotFound'
import { baseUrl } from '../shared'
import { LoginContext } from '../App'

export default function Customer() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const location = useLocation()
    const [customer, setCustomer] = useState()
    const [tempCustomer, setTempCustomer] = useState()
    const [notFound, setNotFound] = useState(false)
    const [changed, setChanged] = useState(false)
    const [error, setError] = useState()
    const url= baseUrl + '/api/customers/' + id

    useEffect(() => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            }
        })
            .then((response) => {
                if(response.status === 404) {
                    setNotFound(true)
                } else if(response.status === 401) {
                    setLoggedIn(false)
                    navigate('/login', {
                        state: {
                            previousUrl: location.pathname
                        }
                    })
                }

                // if(!response.ok) {
                //     throw new Error('Something went wrong. Try again later.')
                // }
                return response.json()
            })
            .then((data) => {
                setCustomer(data.customer)
                setTempCustomer(data.customer)
                setError(undefined)
            })
            .catch((err) => {
                console.log(err.message)
                setError(err.message)
            })

    }, [])

    function handleDelete() {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            }
            }).then((response) => {
                if(response.status === 401) {
                    setLoggedIn(false)
                    navigate('/login',{
                        state: {
                            previousUrl: location.pathname
                        }
                    })
                }
                if(!response.ok) {
                    throw new Error('Something went wrong.')
                }
                navigate('/customers')
            })
            .catch(err => setError(err.message))
    }

    function updateCustomer(event) {
        event.preventDefault()
        const url = baseUrl + 'api/customers/' + id + '/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            },
            body: JSON.stringify(tempCustomer)
        }).then((response) => {
            if(response.status === 401) {
                setLoggedIn(false)
                navigate('/login', {
                    state: {
                        previousUrl: location.pathname
                    }
                })
            }
            if(!response.ok) {
                throw new Error('Something went wrong')
            }
            return response.json()
        }).then((data) => {
            console.log(data)
            setChanged(false)
            setCustomer(data.customer)
            setError(undefined)
        }).catch((err) => {
            setError(err.message)
        })
    }

    useEffect(() => {
        if(!customer) return
        if(!customer) return

        let equal = true
        if(customer.name !== tempCustomer.name) equal = false
        if(customer.industry !== tempCustomer.industry) equal = false

        if(equal) setChanged(false)
    },[changed])

    return (
        <>
            { notFound? <p>The customer with id {id} was not found.</p>: null}
            { customer
                ? (<form id='customer' onSubmit={updateCustomer}  className="max-w-sm w-full">
                    <p className='m-2 py-2 pl-2 block rounded'>Customer ID: {tempCustomer.id}</p>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                                Name:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="name" 
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
                        </div>
                    </div>
                    
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="industry">
                                Industry:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="industry" 
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
                         </div>
                    </div>

                    {changed && 
                        <>
                            <button
                                className="bg-gray-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" 
                                onClick={(e) => {
                                    setTempCustomer({ ...customer })
                                    setChanged(false)
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                form='customer'
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-3" 
                            >
                                Save
                            </button>
                        </>
                    }
               
                <button 
                    className='bg-red-400 px-2 py-2 rounded'
                    onClick={handleDelete}
                >
                    Delete Customer
                </button>
            </form>)
                :null 
            }
            <br/>
            { error ? <p>{error}</p>: null }

            <Link 
                to={'/customers'}
                className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
            >
                Go back
            </Link>
        </>
    )
}