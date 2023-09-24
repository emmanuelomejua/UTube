import styled from "styled-components"
import { Card} from "../comps"
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
  

  useEffect(()=> {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(url + `videos/${type}`)
        setVideos(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchVideos()
  }, [type])

  return (
    <Container>

          {
            videos.map((video) => (
              <Card video={video} key={video._id}/>
            ))
      }
  
    </Container>
  )
}


export default Home
