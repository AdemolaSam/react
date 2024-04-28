import { useEffect, useState } from "react"
import { v4 as uuidv4} from 'uuid'
import { useParams, useNavigate, Link } from 'react-router-dom'
import NotFound from "../components/NotFound"
import DefinitionSearch from "../components/DefinitionSearch"


const Definition = () => {
    const [word, setWord] = useState()
    const { search } = useParams()
    const [notFound, setNotFound] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        // const url = 'vyefeyfyefefui.com'
        // const url = 'https://httpstat.us/501'
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        fetch(url)
            .then((response) => { 
              // console.log(response.status)
              if(response.status === 404) {
                  setNotFound(true)
              } else if(response.status === 401) {
                navigate('/login')
              } else if(response.status === 500) {
                setError(true)
              }

              if(!response.ok) {
                setError(true)

                throw new Error('Something went wrong.')
              }

              return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings)
            })
            .catch((err) => {
              console.error(err.message)}
            )       
    },[])
  
  if (notFound === true) {
      return (
        <>
          <NotFound/>
          <Link to={'/dictionary'}>Search Another</Link>
        </>
      )
  } else if(error) {
    return (
      <>
        <p>Something went wrong. Try again.</p>
        <Link to={'/dictionary'}>Search Another</Link>
      </>
    )
  }

  return (
    <>
      {word
          ? <>
            <h1>Here is the definition: </h1>
            {word.map((meaning) => {
            return <p key={uuidv4()}>
                        {meaning.partOfSpeech + ': '}
                        {meaning.definitions[0].definition}
                    </p>
            })}
            <p>Search again:</p>
            <DefinitionSearch />
            </>
          : null
  
      }
    </>
  )
}

export default Definition
