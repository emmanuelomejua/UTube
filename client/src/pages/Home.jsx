import styled from "styled-components"
import Card from "../comps/Card"
import { useState, useEffect } from "react"
import axios from 'axios'
import { url } from '../utils/apiRoute.js'

const Container = styled.main`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Home = ({type}) => {

  const [videos, setVideos] = useState([])
  const [error, setError] = useState(false)

  useEffect(()=> {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(url + `videos/${type}`)
        setVideos(res.data)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }
    fetchVideos()
  }, [type])

  return (
    <Container>
      <>
        { error ? (
          <div>
            <h1>Something Went wrong</h1>
          </div>

        ) : (
          
            videos.map((video) => (
              <Card video={video} key={video._id}/>
            ))
        )
        }
      </>
  
    </Container>
  )
}


export default Home
