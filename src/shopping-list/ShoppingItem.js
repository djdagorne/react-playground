import React from 'react'

export default function ShoppingItem(props){
    ShoppingItem.defaultProps = {
        item: {
            name: null,
            checked: null
        }
    }

    return (
        <li>
            <h2 style={{textDecoration: props.item.checked ? 'line-through' : null}}>
                {props.item.name}
            </h2>
            <button type='button' onClick={() => props.onCheckItem(props.item)}>check</button>
            <button type='button' onClick={() => props.onDeleteItem(props.item)}>delete</button>
        </li>
    )
}