import styled from "styled-components"
import {charter} from '../constants/images'
import Comment from "./Commet"

const Container = styled.section``

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
`

const Avater = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    color:  ${({theme}) => theme.text};
    padding: 10px;
    width: 100%;
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avater src={charter} alt=""/>
            <Input placeholder="Add a Comment..." />
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments
