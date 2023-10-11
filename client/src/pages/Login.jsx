import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { url } from "../utils/apiRoute"
import { useDispatch } from "react-redux"
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import {  RiGoogleFill } from 'react-icons/ri'
import { Link } from "react-router-dom"




const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 55px);
    color: ${({theme}) => theme.text};
`

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    padding: 20px  40px;
    gap: 10px;
    border-radius: 3px;
`

const Title = styled.h2`
    font-size: 20px;
`

const SubTitle = styled.h4`
    font-size: 18px;
    font-weight: 500;
`

const Input = styled.input`

    border-radius: 3px;
    outline: none;
    background-color: transparent;
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
`

const Button = styled.button`
    border: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px 20px;
    font-weight: 500;
    background-color:  ${({theme}) => theme.soft};
    color:  ${({theme}) => theme.textSoft};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;

   &:disabled{
    cursor: not-allowed;
    background-color: blue;
   }
`

const More = styled.div`
     margin-top: 10px;
     font-size: 12px;
`

const Links = styled.span`
    margin-left: 20px;
`

const Link1 = styled.span`
    margin-left: 12px;
`

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
       dispatch({type: 'LOGIN_START'})

       try {
        const res = await axios.post(url + 'auth/login', {
            email,
            password
        })
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data}) && window.location.replace('/')
       } catch (error) {
        dispatch({type: 'LOGIN_FAIL'})
       }
    }

    const handleLoginWithGoogle = async () => {
        dispatch({type: 'LOGIN_START'})
        signInWithPopup(auth, provider)
            
        .then((result) => {
            axios.post(url + 'auth/google', {
                name: result.user.displayName,
                email: result.user.email,
                img:  result.user.photoURL
            })
            .then((res) => {
                dispatch({type: 'LOGIN_SUCCESS', payload: res.data}) && window.location.replace('/')
            })
        })

        .catch((error) => {
            dispatch({type: 'LOGIN_FAIL'})
            console.log(error) 
        })
    }

    
    

  return (
    < Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>to continue on UTUBE</SubTitle>
            <Input 
            placeholder="email or username" 
            onChange={(e)=>setEmail(e.target.value)}
            
            />

            <Input 
            type="password" 
            placeholder="password"  
            onChange={(e)=>setPassword(e.target.value)}
            
            />
            <Button type="submit" onClick={handleLogin}>Sign In </Button>

            OR

            <Button onClick={handleLoginWithGoogle}>Continue with Google <RiGoogleFill/></Button>

            <Link1>Do not have an account? <Link to='/signup' style={{color: 'inherit', textDecoration: 'none'}}>Sign Up</Link></Link1>
        </Wrapper>

        <More>
            English(USA)
            <Links>
                <Link1>Help</Link1>
                <Link1>Privacy</Link1>
                <Link1>Terms</Link1>
            </Links>
        </More>
    </ Container>
  )
}

export default Login
