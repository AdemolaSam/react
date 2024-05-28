import { useEffect, useState, useContext } from "react"
import { baseUrl } from "../shared"
import { useLocation, useNavigate } from "react-router-dom"
import { LoginContext } from "../App"

export default function Login(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const location = useLocation()
    const navigate = useNavigate()
    const url = baseUrl + 'api/register/'

    // useEffect(() => {
    //     console.log(location)
    // })

    function login(event) {
        event.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then((data) => {
                localStorage.setItem('access', data.access)
                localStorage.setItem('refresh', data.refresh)
                setLoggedIn(true)
                navigate(location?.state?.previousUrl ? location.state.previousUrl : '/customers/')
            })
            .catch(err => console.log(err))
    }
    return (
        <form
            className="max-w-sm w-full mt-3"
            onSubmit={login}
        >

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                        Email:
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="email" 
                        type='text'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                        Username:
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="username" 
                        type='text'
                        value={username}
                        onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                    />
                </div>
            </div>
            
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="password" 
                        type='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    </div>
            </div>

            <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-3" 
            >
                Register
            </button>
         </form>
    )
}