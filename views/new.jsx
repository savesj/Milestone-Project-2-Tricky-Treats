const React = require('react')
const Default = require('./layout/Default')

function New ({recipes}) {
    return (
        <Default>
            <h2> Add a new treat</h2>
            <form action="/treats" method="POST">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                required
                />
                <label htmlFor="image">Image</label>
                <input
                type="text"                 
                name="image"
                id="image"/>
                <label htmlFor="recipe">Recipe</label>
                <select name="recipe" id="recipe">
                    {recipes.map((recipe) => {
                        return(
                            <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
                        )
                    })}
                </select>
                <label htmlFor="hasGooten">Has Gooten</label>
                <input
                type="checkbox"
                name="hasGooten"
                id="hasGooten"
                defaultChecked
                />
                <br />
                <input type="submit"/>
            </form>
        </Default>
    )
}

module.exports = New