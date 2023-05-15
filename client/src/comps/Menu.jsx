import styled from 'styled-components'
import logo from '../assets/logo.jpg'
import { RiAccountCircleFill, RiExchangeBoxFill, RiFileReduceFill, RiH5, RiHistoryFill, RiHome2Fill, RiSettings3Line, RiSubwayLine, RiVideoChatLine, RiLogoutCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userReducer'

const Container = styled.main`
     flex: 1;
     background-color: ${({theme}) => theme.bg} ;
     height: 100%;
     color: ${({theme}) => theme.text};
     font-size: 14px;
     position: sticky;
     top: 0;
`

const Wrapper = styled.section`
    padding: 18px;
`
const Logo = styled.div`
    display: flex;
    gap: 5px;
    font-weight: bold;
    align-items: center;
    margin-bottom: 20px;
`

const Img = styled.img`
    height: 25px;
    border-radius: 25%;  
`

const Item = styled.section`
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
    padding: 7.5px 0;

    &:hover{
        background-color:  ${({theme}) => theme.soft};
    }
`

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div`
    font-size: 12px;
`
const Button = styled.button`
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 15px;
`


const Menu = ({setDarkMode,darkMode}) => {

    const currentUseer = useSelector((state) => state.user.currentUseer)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
  
  return (
   
    <Container>
        <Wrapper>
            <Logo>
                <Img src={logo} alt=''/>
                E-Logger
            </Logo>

            <Link to='/' className='link'>
                <Item>
                <RiHome2Fill/>
                    Home
                </Item>
            </Link>

            <Link to='/trend' className='link'>
                <Item>
                <RiExchangeBoxFill/>
                    Explore
                </Item>
            </Link>

            <Link to='/sub' className='link'>
                <Item>
                <RiSubwayLine/>
                Subscription
                </Item>
            </Link>


            <Hr/>
            <Item>
               
               <RiVideoChatLine/>
               Library
            </Item>

            <Item>
              
               <RiHistoryFill/>
               History
            </Item>
          
           
           { 
            currentUseer &&
                <Link to='/signin' className='link'>
                <Login >
                  <p>Sign In to comment and like video</p>
                  <Button><RiAccountCircleFill/> SIGN IN</Button>
                </Login>
             </Link>
           }
              <Hr/>
            <Title>
                BEST OF ETUBE
            </Title>
            <Item>
               <RiVideoChatLine/>
               Music
            </Item>
          
            <Item>
                
               <RiVideoChatLine/>
               Sports
            </Item>

            <Item>
                 <RiVideoChatLine/>
                Gaming
               
            </Item>
            
            <Item>
                 <RiVideoChatLine/>
                Movies
              
            </Item>
            
            <Item>
                 <RiVideoChatLine/>
                News
            </Item>
            
            <Item>
                 <RiVideoChatLine/>
                Live
            </Item>
            <Hr/>
            
            <Item>
                 <RiSettings3Line/>
                Settings
            </Item>
            
            <Item>
                 <RiFileReduceFill/>
                Reports
            </Item>
            
            <Item>
            <RiH5/>
                Help
            </Item>
            
            <Item>
            <RiVideoChatLine/>
                Report
            </Item>

            <Item onClick={handleLogout}>
            <RiLogoutCircleFill/>
                Logout
            </Item>
            
            <Item onClick={()=> setDarkMode(!darkMode)} >
            <RiVideoChatLine/>
                {darkMode ? 'Light Mode': 'Dark Mode'}
            </Item>
        </Wrapper>
    </Container>
   
  )
}

export default Menu
