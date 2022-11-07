
import React from 'react'

const Ingredient = ({ ingredient, itemKey, clickFunc }) => {
	const { name, color } = ingredient
	return (
		<p
			style={{ backgroundColor: color }}
			id={itemKey}
			onClick={clickFunc}>
			{name}
		</p>
	)
}

export default Ingredient