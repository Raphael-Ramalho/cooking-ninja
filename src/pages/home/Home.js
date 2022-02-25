import { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList'
import { projectFirestore } from '../../firebase/config.js'

// styles
import './Home.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)

    projectFirestore.collection('recipes').get().then((snapshot)=>{
      // console.log(snapshot)
      if(snapshot.empty){
        setError('No recipes to load')
        setIsPending(false)
      } else{
        let results = []
        snapshot.docs.forEach(doc => {
          console.log(doc)
        })
      }
    })

  },[])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
