import styled from "styled-components"


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
  return (
    < Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>to continue on E-Logger</SubTitle>
            <Input placeholder="email or username"/>
            <Input type="password" placeholder="password"/>
            <Button>Sign In</Button>

            <Input placeholder="name"/>
            <Input placeholder="email"/>
            <Input type="password" placeholder="password"/>
            <Button>Sign Up</Button>
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
