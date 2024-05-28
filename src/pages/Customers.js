import { useEffect , useState, useContext } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { baseUrl } from "../shared"
import AddCustomer from "../components/AddCustomer"
import { LoginContext } from "../App"
import useFetch from "../hooks/UseFetch"

export default function Customers() {
    // const [customers, setCustomers] = useState()
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [loggedIn, setLoggedIn] = useContext(LoginContext)

    const url = baseUrl + '/api/customers/'
    // data:{customers} ={} is done to get the customers from the data. 
    // And the ={} is done to prevent error while the data fetching is yet to complete
    const { 
        request,
        appendData,
        data:{customers} = {},
        setData,
        errStatus
    } = useFetch(url, { method:'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access')
    } })

    useEffect(()=> {
        console.log(request, appendData, customers, errStatus)
    })

    useEffect(() => {
        request()
    }, [])

    function toggleShow() {
        setShow(!show)
    }

    function newCustomer(name, industry) {
        appendData({name:name, industry:industry})
    }

    return (
        <>
            <h1>Customers</h1>
            <ul> 
            {customers
                ? customers.map((customer) => {
                    return (
                        <li key={customer.id}>
                            <Link to={'/customers/' + customer.id}>
                                {customer.name}
                            </Link>
                        </li>
                    )
                })
                : 'No customer'
            }
            </ul>
            <AddCustomer 
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            />
        </>
    )
}