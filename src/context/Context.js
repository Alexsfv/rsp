import React, { createContext, useReducer } from 'react'

const initialState = {
    scores: {
        user: 0,
        pc: 0
    },
    chosen: {
        show: false,
        user: 'scissors',
        pc: 'rock',
        result: ''
    }
}

function reducer(state, action) {

    switch (action.type) {
        case 'win_user': {
            return {
                ...state,
                scores: {
                    ...state.scores,
                    user: state.scores.user + 1,
                },
                chosen: {
                    ...state.chosen,
                    show: true,
                    user: action.payload.user,
                    pc: action.payload.pc,
                    result: 'win'
                }
            }
        }
        case 'win_pc': {
            return {
                ...state,
                scores: {
                    ...state.scores,
                    pc: state.scores.pc + 1,
                },
                chosen: {
                    ...state.chosen,
                    show: true,
                    user: action.payload.user,
                    pc: action.payload.pc,
                    result: 'loose'
                }
            }
        }
        case 'draw': {
            return {
                ...state,
                chosen: {
                    ...state.chosen,
                    show: true,
                    user: action.payload.user,
                    pc: action.payload.pc,
                    result: 'draw'
                }
            }
        }
        case 'try_again': {
            return {
                ...state,
                chosen: {
                    ...state.chosen,
                    show: false,
                    user: '',
                    pc: '',
                    result: ''
                }
            }
        }
        default: {
            return state
        }
    }
}

const contextObj = createContext()

const Context = props => {
    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <contextObj.Provider value={[store, dispatch]}>
            {props.children}
        </contextObj.Provider>
    )
}

export {Context, contextObj}