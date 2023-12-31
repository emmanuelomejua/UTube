import styled, { ThemeProvider } from 'styled-components'
import Menu from './comps/Menu';
import Navbar from './comps/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import { useContext, useState } from 'react';
import Home from './pages/Home';
import Video from './pages/Video';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import { AuthContext } from './context/authContext';


const Container = styled.main`
    display: flex;
`

const Main = styled.section`
    flex: 7;
    background-color: ${({theme}) => theme.bg};
`

const Wrapper = styled.section`
  padding: 10px 50px;
`

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const { user } = useContext(AuthContext)

  console.log(user)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>

        <Main>
          <Navbar/>

          <Wrapper>
         
           <Routes>
              <Route exact path='/' element={<Home type='random'/>}/>
              <Route exact path='/trend' element={<Home type='trend'/>}/>
              <Route exact path='/sub' element={user ? <Home type='sub'/> : <Login/>}/>
              <Route path='/video/:id' element={<Video/>}/>
              <Route path='/signin' element={<Login/>}/>
              <Route path='/signup' element={<Register/>}/>
           </Routes>
        
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
