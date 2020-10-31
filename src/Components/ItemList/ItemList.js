import React from 'react'
import styled from 'styled-components'
import Item from '../Item/Item'

const ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function ItemList(props) {
    const items = props.items.length > 0 ? props.items : [""]

    return (
        <ItemsWrapper>
            {
                items.map((itemName, i) => (
                    <Item 
                        name={itemName}
                        key={i} 
                        static={props.static}
                        chooseItem={props.chooseItem}/>
                ))
            }
        </ItemsWrapper>
    )
}
