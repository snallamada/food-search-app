import React from 'react'
import RecipeList from './RecipeList.css'

const Products = ({data}) => {
    return (
        <div className="recipe-list-container">
        <div className="row">
          {data.map((recipe, index) => (
            <div key={index} className="col-md-4">
              <div className="card recipe-card">
                <img className="card-img-top" src={recipe.recipe.image} alt="Recipe" />
                <div className="card-body">
                  <h5 className="card-title">{recipe.recipe.label}</h5>
                  <p className="card-text">Total Amount Of Calories: {Math.round(recipe.recipe.calories)}</p>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Products
