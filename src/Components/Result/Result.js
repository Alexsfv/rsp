import React, { useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import './Result.scss'
import { contextObj } from '../../context/Context'

const Result = props => {
    const [state, dispatch] = useContext(contextObj)
    const result = state.chosen.result
    const resultClasses = ['result', result]

    function retry(e) {
        e.stopPropagation()
        dispatch({type: 'try_again'})
    }

    return (
        <div className="result-bg" onClick={e => retry(e)}>
            <div className={resultClasses.join(' ')} onClick={e => e.stopPropagation()}>

                <p className="result__title">
                    {
                        result === 'win' ? 'You win!' 
                            : result === 'loose' ? 'You loose!' 
                                : 'Draw!'
                    }
                </p>

                <div className="result__wrapper-items">
                    <ItemList items={[state.chosen.user]} static={true}/>
                    <p className="result__versus">vs</p>
                    <ItemList items={[state.chosen.pc]} static={true}/>
                </div>

                <button className="result__retry-btn" onClick={e => retry(e)}>try again</button>

            </div>
        </div>
    )
}
export default Result
