import React from 'react'

import Ingredient from './Ingredient'

const BurgerPane = ({ ingredients, remove, clear }) => {
        // console.log(this.props)
        let burgerBits = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    itemKey={i} 
                    ingredient={ing} 
                    clickFunc={remove}
                />
            </li>
        ))
        return (
            <section className='pane'>
                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={clear}>Clear Burger</button>
            </section>
        )

}

export default BurgerPane