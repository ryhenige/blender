import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Three from './containers/three'

const Navbar = styled.div`  
  width: 100%; 
  height: 90px;
  border-bottom: 1px solid #DADCE0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LeftBar = styled.div`
  width: 332px;
  border-right: 1px solid #DADCE0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Flex = styled.div`    
  display: flex;  
  flex-direction: row;
`

const GameBox = styled.div`
  width: calc(100vw - 332px);
  height: calc(100vh - 91px);
  background-color: #F5F5F5;
  position: relative;
`
const StatsBox = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #DADCE0;
  border-radius: 14px;
  width: 20%;
  height: 40%;
  position : absolute;
  top: 30%;
  right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {

  const [items, setItems] = useState([])

  const add = (name) => {
    setItems([...items, name])
  }

  const remove = (name) => {
    setItems(items.filter((item) => item !== name))
  }

  console.log(items)
  return (
    <div className="App">
        <Navbar>
          navbar
        </Navbar>
        <Flex>
          <LeftBar >
            left bar
          </LeftBar>
          <GameBox>
            <Three add={add} remove={remove}/>
            <StatsBox >
              stats box
              <ul>
                {items?.length> 0 && items?.map((item, index) => (
                  <li key={index}>{item}</li> 
                ))}
              </ul>
            </StatsBox>
          </GameBox>
        </Flex>
    </div>
  );
}

export default App;
