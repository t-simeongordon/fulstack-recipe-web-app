import { Router } from 'express'
import { addRecipe, getRecipes, getRecipe, findRecipesController, findIngredientsController } from '../controller/recipeController'
const route = Router()

route.get('/recipes', getRecipes)

route.get('/recipes/:recipeId', getRecipe)

route.post('/recipes', addRecipe)

route.post('/find/recipes', findRecipesController)

route.post('/find/ingredients', findIngredientsController)

export default route