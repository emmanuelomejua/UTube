import styled from "styled-components"
import media from '../assets/media.mp4'
import img from '../assets/charter.png'
import { RiAddBoxFill, RiReplyAllFill, RiThumbDownFill, RiThumbUpFill } from "react-icons/ri"
import Comments from "../comps/Comments"
import Card from "../comps/Card"

const Container = styled.main`
    display: flex;
    gap: 20px;
`

const Content = styled.section`
    flex: 5;
`

const VideoWrapper = styled.section`
    
`
const Title = styled.h2`
    font-size: 18px;
    font-weight: 400;
    margin: 10px 0;
    color: ${({theme}) => theme.text};
`
const Details = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: space-between;
`

const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color:  ${({theme}) => theme.text};
`

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.soft}
`

const Recommendations = styled.section`
    flex: 2;
`

const Channels = styled.section`
    display: flex;
    justify-content: space-between;
`

const Subcribe = styled.button`
    background-color: #cc1a00;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px;
    cursor: pointer;
`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`


const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color:  ${({theme}) => theme.text};
`

const ChannelName = styled.span`
    font-weight: 500;
`

const ChannelCounter = styled.span`
   margin-top: 5px;
   margin-bottom: 15px;
   color:  ${({theme}) => theme.textSoft};
   font-size: 12px;
`

const ChannelDesc = styled.p`
    font-size: 14px;
`


const Video = () => {
  return (
    <div>
      <Container>
        <Content>
            <VideoWrapper>
                <iframe 
                height='520px'
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture"
                width='100%' 
                title="Y" 
                src={media}>
                </iframe>
            </VideoWrapper>
            <Title>Archibishop Benson in Orlando, Florida</Title>
            <Details>
                <Info>899,221 views . May 4, 2022</Info>
                <Buttons>
                    <Button>
                        <RiThumbUpFill/> 1m
                    </Button>

                    <Button>
                        <RiThumbDownFill/> 13
                    </Button>

                    <Button>
                        <RiReplyAllFill/> 133
                    </Button>

                    <Button>
                        <RiAddBoxFill/> save
                    </Button>
                </Buttons>
            </Details>
            <Hr/>

            <Channels>
                <ChannelInfo>
                    <Image src={img} alt=""/>
                    <ChannelDetail>
                     <ChannelName>Delta Forces</ChannelName>
                     <ChannelCounter>200k subcribers</ChannelCounter>
                     <ChannelDesc>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id accusantium soluta praesentium assumenda, quae repudiandae ut facilis qui doloribus temporibus veritatis eius atque cumque quibusdam magni iste ex? Quam, corrupti?
                     </ChannelDesc>
                    </ChannelDetail>
                </ChannelInfo>
                <Subcribe>SUBSCRIBE</Subcribe>
            </Channels>
            <Hr/>
            <Comments/>
        </Content>

        <Recommendations>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
        </Recommendations>
      </Container>
    </div>
  )
}

export default Video
