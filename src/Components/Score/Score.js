import React, { useContext } from 'react'
import { contextObj } from '../../context/Context'
import './Score.scss'

export default function(props) {
    const [state] = useContext(contextObj)
    const scores = state.scores

    return (
        <div className='score'>
            <div className="score__you">
                <p>You</p>
            <p className="score__you-count">{scores.user}</p>
            </div>

            <p className="score__points">:</p>

            <div className="score__pc">
                <p>PC</p>
                <p className="score__pc-count">{scores.pc}</p>
            </div>
        </div>
    )
}
