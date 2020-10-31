import './App.scss';
import Score from './Components/Score/Score'
import ItemList from './Components/ItemList/ItemList'
import styled from 'styled-components'
import { useContext, useMemo } from 'react';
import Result from './Components/Result/Result'
import { contextObj } from './context/Context'

const MainTitle = styled.p`
    text-align: center;
    font-size: 3rem;
    margin: 30px 0 0;
`

const VersusText = styled.p`
    font-family: 'Lobster', cursive;
    text-align: center;
    font-size: 6rem;
    margin: 30px 0 30px;
`

function App() {
    const rspItems = useMemo(() => ['rock', 'scissors', 'paper'], [])
    const [state, dispatch] = useContext(contextObj)

    function chooseItem(name) {
        let typeName
        const randomItem = pickRandomItem()
        const resultIndex = getResultIndex(name, randomItem)

        if (resultIndex === 0) {
            typeName = 'draw'
        } else if (resultIndex === 1) {
            typeName = 'win_user'
        } else {
            typeName = 'win_pc'
        }

        dispatch({
            type: typeName,
            payload: {
                user: name,
                pc: randomItem
            }
        })
    }

    function getResultIndex(name, randomItem) {
        if (name === randomItem) {
            return 0
        }
        if (name === 'rock') {
            return randomItem === 'scissors' ? 1 : -1
        }
        if (name === 'scissors') {
            return randomItem === 'paper' ? 1 : -1
        }
        if (name === 'paper') {
            return randomItem === 'rock' ? 1 : -1
        }
    }

    function pickRandomItem() {
        return rspItems[Math.floor(Math.random() * rspItems.length)]
    }

    return (
    <div className="App">
      <div className="container">
          
        <Score />
        <MainTitle>Choose One</MainTitle>

        <ItemList items={rspItems} chooseItem={chooseItem}/>
        <VersusText>VS</VersusText>
        <ItemList items={['computer']} static={true}/>

        {
            state.chosen.show ? <Result /> : null
        }

      </div>
    </div>
  );
}

export default App;
