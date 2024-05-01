import { useEffect , useState } from "react"
import { Link } from "react-router-dom"
import { baseUrl } from "../shared"
import AddCustomer from "../components/AddCustomer"

export default function Customers() {
    const [customers, setCustomers] = useState()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const url= baseUrl + '/api/customers/'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCustomers(data.customers)
            })
            .catch(err => console.log(err.message))
    },[])

    function toggleShow() {
        setShow(!show)
    }

    function newCustomer(name, industry) {
        const data = {
            name: name,
            industry: industry
        }
        const url = baseUrl + 'api/customers/'
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                if(!response.ok) {
                    throw new Error('Something went wrong')
                }
                return response.json()
            }).then((data) => {
                toggleShow()
                console.log(data)
                setCustomers([...customers, data.customer])
            }).catch((err) => {
                console.log(err)
            })
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