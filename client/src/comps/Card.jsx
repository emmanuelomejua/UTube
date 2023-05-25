import styled from "styled-components"
import {  picx } from '../constants/images'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { url } from "../utils/apiRoute"
import { format } from 'timeago.js'

const Container = styled.div`
    margin: 20px;
    width:  ${(props) => props.type !== 'sm' && '320px'};
    margin-bottom: ${(props) => props.type === 'sm' ? '10px': '40px'};
    cursor: pointer;
    display: ${(props) => props.type === 'sm' && 'flex'};
    gap: 10px;
`

const Img = styled.img`
    height: ${(props) => props.type === 'sm' ? '100px': ' 200px'};
    width: 100%;
    background-color: #999;
`

const Image = styled.img`
    width: 36px;
    height:  36px;
    border-radius:50%;
    background-color: #999;
    display: ${(props) => props.type === 'sm' && 'none'};
    
`

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== 'sm' && '14px'};
    gap: 10px;
   
`

const Texts = styled.div`

`

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.textSoft};
`

const Name = styled.h3`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 5px 0;
`

const Info = styled.p`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.textSoft};
`

const H = styled.h2`
    text-align: center;
    color: ${({theme}) => theme.textSoft};
    font-size: 42px;
`

const TOKEN = ''

const Card = ({type, video}) => {

    const [channels, setChannels] = useState({})
    const [error, setError] = useState(false)
  
    useEffect(()=> {
      const fetchChannel = async () => {
        try {
          const res = await axios.get(url + `users/find/${video.userId}`, {
            headers: {
                token: `Bearer ${TOKEN}`
            }
          })
          setChannels(res.data)
        } catch (error) {
          setError(true)
          console.log(error)
        }
      }
      fetchChannel()
    }, [video.userId])

  return (
    <>

    <Container type={type}>
       {
        error ? (
            <Div>
                 <H>Something went wrong</H>
            </Div>
        ) : (
            <>
                <Img src={picx} alt="" type={type}/>
                <Details type={type}>
                <Image src={picx} type={type}/>
                <Texts>
                    <Title>{video.title}</Title>
                    <Name>{channels.name}</Name>
                    <Info>{video.views} views . {format(channels.createdAt)}</Info>
                </Texts>
               </Details>
            </>
        )
       }

    </Container>
    </>
  )
}

export default Card
