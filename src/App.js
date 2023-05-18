import styled from 'styled-components'

import './App.css';
import Three from './containers/three'
import Produce, { ProduceTypeCount } from './images/produce/produce'
import { useItemsStore } from './containers/stores'
import Background from './images/background.png'
import { ArrayRange } from './containers/helpers';

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
  flex-direction: column;
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
  // background-image: url(${Background});
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
  .title {
    padding: 10px;
  }
  div {
    overflow-y: scroll;
    height: 80%;
  }
  ul {
    list-style: none;
    text-align: left;
  }
`
const ProduceTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
    }
  }
`

function App() {

  const items = useItemsStore((state) => state.items)
  const addItem = useItemsStore((state) => state.addItem)
  const disableBlending = useItemsStore((state) => state.disableBlending)
  const itemTypes = useItemsStore((state) => state.itemTypes)
  const reset = useItemsStore((state) => state.reset)

  const add = (produceType) => {
    disableBlending()
    addItem(produceType)
  }

  return (
    <div className="App">
        <Navbar>
          navbar
        </Navbar>
        <Flex>
          <LeftBar >
            <ProduceTable>
              {ArrayRange(1, ProduceTypeCount, 1).map(id => ( 
                <Flex>
                  <button onClick={() => add(id)} >
                    add {Produce(id)?.name}
                    <img src={Produce(id)?.texture} alt={Produce(id)?.name} />
                  </button>
                  
                </Flex>
              ))}
            </ProduceTable>

            <br />
            <br />
            <button onClick={() => reset()} >Reset</button>
          </LeftBar>
          <GameBox>
            <Three />
            <StatsBox >
              <span className='title'>
              Stats Box
              </span>
              <div>
                <ul>
                  {items?.length> 0 && items?.map((item, index) => (
                    <li key={index}>{Produce(item.produce_id).name}</li> 
                  ))}
                  {itemTypes?.length> 0 && itemTypes?.map((item, index) => (
                    <li>{item?.type}: {item?.count}</li>
                  ))}
                </ul>
              </div>
            </StatsBox>
          </GameBox>
        </Flex>
    </div>
  );
}

export default App;
