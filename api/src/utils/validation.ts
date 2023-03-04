import { Recipe } from "../models/recipeModel"

export const validateRequest = (requestBody:Recipe) =>{
    console.log('validateRequest function called')
    
    console.log(JSON.stringify(requestBody))
    const { title, ingredients, measurements, cookingMethod } = requestBody
  
    if (!title || !ingredients || !measurements || !cookingMethod) {
      return false
    }

    if (typeof title !== 'string' || typeof ingredients !== 'string' || typeof measurements !== 'string' || typeof cookingMethod !== 'string') {
        return false
    }

    return true
  }