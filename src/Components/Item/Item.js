import React from 'react'
import './Item.scss'

export default function(props) {
    const itemClasses = ['item']
    if (props.static) {
        itemClasses.push("item-static")
    }
    if (props.name) {
        itemClasses.push(`item-${props.name}`)
    }

    function clickHandler() {
        if (!props.static) {
            props.chooseItem(props.name)
        }
    }

    return (
        <div className={itemClasses.join(' ')} onClick={clickHandler}>
            <div className="item__icon">
                <img src={`./signs/${props.name}.png`} alt={props.name}/>
            </div>
            <p className="item__title">{props.name}</p>
        </div>
    )
}
