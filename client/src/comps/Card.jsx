import styled from "styled-components"
import img from '../assets/picx.jpeg'

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

const Card = ({type}) => {
  return (
    <Container type={type}>
     <Img src={img} alt="" type={type}/>
     <Details type={type}>
        <Image src={img} type={type}/>
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
