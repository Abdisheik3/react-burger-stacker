import React, { useState } from 'react'
import IngredientList from './IngredientsList'
import BurgerPane from './BurgerPane'


const BurgerStacker = () => {
    
    const defaultIngredients = [
                {name: 'Kaiser Bun', color: 'saddlebrown'},
                {name: 'Sesame Bun', color: 'sandybrown'},
                {name: 'Gluten Free Bun', color: 'peru'},
                {name: 'Lettuce Wrap', color: 'olivedrab'},
                {name: 'Beef Patty', color: '#3F250B'},
                {name: 'Soy Patty', color: '#3F250B'},
                {name: 'Black Bean Patty', color: '#3F250B'},
                {name: 'Chicken Patty', color: 'burlywood'},
                {name: 'Lettuce', color: 'lawngreen'},
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'},
                {name: 'Cheese', color: 'gold'}
            ]

    const [ingredients, setIngredients] = useState(defaultIngredients)
    const [burgerIngredients, setBurgerIngredients] = useState([])

    
    const addToStack = (e) => {
			const ingColor = e.target.style.backgroundColor
			const ingName = e.target.innerText
			setBurgerIngredients([
				...burgerIngredients,
				{ name: ingName, color: ingColor },
			])
		}

    const removeFromStack = (e) => {
        console.log('the clicked item', e.target)
        const clickIndex = e.target.id
        const currBurger = burgerIngredients.slice()
        console.log('the current burger', currBurger)
        currBurger.splice(clickIndex, 1)
        console.log('the current burger after splice', currBurger)
        setBurgerIngredients(currBurger)
    }

    const clearBurger = () => {
        setBurgerIngredients([]) 
    }

        return (
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={ingredients}
                        add={addToStack}
                    />
                    <BurgerPane 
                        ingredients={burgerIngredients}
                        remove={removeFromStack}
                        clear={clearBurger}
                    />
                </div>
            </>
        )
}

export default BurgerStacker