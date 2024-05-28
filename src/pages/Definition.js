import { useEffect, useState } from "react"
import { v4 as uuidv4} from 'uuid'
import { useParams, useNavigate, Link } from 'react-router-dom'
import NotFound from "../components/NotFound"
import DefinitionSearch from "../components/DefinitionSearch"
import useFetch from "../hooks/UseFetch"


const Definition = () => {
    // const [word, setWord] = useState()
    const { search } = useParams()
    // const [notFound, setNotFound] = useState(false)
    // const [error, setError] = useState(false)
    const navigate = useNavigate()

    const { data: word, errStatus } = useFetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    
    useEffect(() => console.log('word',word,'errStatus', errStatus))
    
  if (errStatus === 404) {
      return (
        <>
          <NotFound/>
          <Link to={'/dictionary'}>Search Another</Link>
        </>
      )
  } else if(errStatus) {
    return (
      <>
        <p>Something went wrong. Try again.</p>
        <Link to={'/dictionary'}>Search Another</Link>
      </>
    )
  }

  return (
    <>
      {word?.[0]?.meanings 
          ? <>
            <h1>Here is the definition: </h1>
            {word[0].meanings.map((meaning) => {
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
