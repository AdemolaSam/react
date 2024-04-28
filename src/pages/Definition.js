import { useEffect, useState } from "react"
import { v4 as uuidv4} from 'uuid'
import { useParams } from 'react-router-dom'


const Definition = () => {
    const [word, setWord] = useState()

    const { search } = useParams()
    
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings)
            })
            .catch((err) => {console.error(err)})       
    },[])

  return (
    <>
      <h1>Here is the definition: </h1>
      {word ? word.map((meaning) => {
         return <p key={uuidv4()}>
                    {meaning.partOfSpeech + ': '}
                    {meaning.definitions[0].definition}
                </p>
      }): null}
    </>
  )
}

export default Definition
