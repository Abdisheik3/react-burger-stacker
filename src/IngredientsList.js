import React from 'react'
import Ingredient from './Ingredient'



const IngredientList = ({ ingredients,add }) => {

        let allIngredients = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    itemKey={i} 
                    ingredient={ing} 
                    clickFunc={add}
                />
            </li>
        ))
        return (
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
}

export default IngredientList