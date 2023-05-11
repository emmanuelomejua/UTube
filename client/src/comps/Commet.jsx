import styled from "styled-components"
import avater from '../assets/charter.png'


const Container = styled.section`
    display: flex;
    gap: 20px;
    margin: 25px 0;
`

const Avater = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 12px;
`

const Text = styled.span`
    font-size: 12px;
    color:  ${({theme}) => theme.text};
`

const Comment = () => {
  return (
    <Container>
      <Avater src={avater}/>
      <Details>
        <Name>Chini Brown  <Date>3 hours ago</Date></Name>
       <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt natus hic sunt doloremque, optio quod atque, a quis nisi dignissimos sint facere harum accusantium inventore delectus consequatur quidem et omnis.</Text>
      </Details>
    </Container>
  )
}

export default Comment
