import styled from "styled-components"
import img from '../assets/picx.jpeg'

const Container = styled.div`
    margin: 20px;
    width: 320px;
    margin-bottom: 40px;
    cursor: pointer;
`

const Img = styled.img`
    height: 200px;
    width: 100%;
    background-color: #999;
`

const Image = styled.img`
    width: 36px;
    height:  36px;
    border-radius:50%;
    background-color: #999;
`

const Details = styled.div`
    display: flex;
    margin-top: 14px;
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

const Card = () => {
  return (
    <Container>
     <Img src={img} alt=""/>
     <Details>
        <Image src={img}/>
        <Texts>
            <Title>LamaTube my Oga</Title>
            <Name>Delta Forces</Name>
            <Info>899,221 views . 1 week ago</Info>
        </Texts>
     </Details>
    </Container>
  )
}

export default Card
