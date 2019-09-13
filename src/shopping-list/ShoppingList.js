import React from 'react'
import ShoppingItem from './ShoppingItem.js'

export default function ShoppingList(props){
    ShoppingList.defaultProps = {
        items: []
    }
    return (
        <ul>
            {props.items.map((item, index) => 
                <ShoppingItem 
                    key={index}
                    item={item}
                    onDeleteItem={props.onDeleteItem}
                    onCheckItem={props.onCheckItem}
                />
            )}
        </ul>
    )
}