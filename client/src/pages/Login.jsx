import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { url } from "../utils/apiRoute"
import { useDispatch } from "react-redux"
import { login } from "../redux/apiCall"




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
    /* border: 1px solid ${({theme}) => theme.soft}; */
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

    const [values, setValues] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleRegister = async () => {
        const {email, password, name} = values

        try {
            const res = await axios.post(url + 'auth/register', {
                name,
                email,
                password
            })
            res.data &&  window.location.reload('/login')
        } catch (error) {
            throw Error
        }
    }


    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch, {email, password})
    }

    const handleChange = (e) => {
        setValues(prev=>({...prev, [e.target.name]:e.target.value}))
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
            <Button type="submit" onClick={handleLogin}>Sign In</Button>

            <Input 
            placeholder="name" 
            name="name"
            value={values.name}
            onChange={handleChange}
            />

            <Input 
            placeholder="email" 
            name="email" 
            value={values.email} 
            onChange={handleChange}
            />

            <Input 
            type="password" 
            placeholder="password" 
            name="password" 
            value={values.password}  
            onChange={handleChange}
            />

            <Button type="submit" onClick={handleRegister}>Sign Up</Button>
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
