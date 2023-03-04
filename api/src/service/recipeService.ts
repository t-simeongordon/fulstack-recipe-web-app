import { NextFunction } from 'express'
import RecipeModel from '../models/recipeDbModel'
import { Recipe } from '../models/recipeModel'
export const addRecipeService = async(id: string, recipe: Recipe, next:NextFunction) =>{
    console.log('addRecipeService function called')

    const title = recipe.title
    const ingredients = recipe.ingredients
    const measurements = recipe.measurements
    const cookingMethod = recipe.cookingMethod

    try{
        RecipeModel.create({
            id,
            title,
            ingredients,
            measurements,
            cookingMethod
        })
          
    }catch(e){
        next(e)
    }
}

export const getRecipeService = async(id: string, next:NextFunction) =>{
    console.log('getRecipeService function called')

    try{
        const result = await RecipeModel.findById(id).exec()
        console.log(JSON.stringify(result))
        return result
    }catch(e){
        next(e)
    }
}

export const getAllRecipesService = async(next:NextFunction) =>{
    console.log('getAllRecipesService function called')

    try{
        const result = await RecipeModel.find().exec()
        console.log(JSON.stringify(result))

        return result
    }catch(e){
        next(e)
    }
}

export const searchForRecipeDb = async(searchTerm: string, next:NextFunction) =>{
    console.log('searchForRecipeDb function called')

    try{
        const result = await RecipeModel
        .find({ title: { $regex: searchTerm, $options: 'i' } })
        .exec()
        console.log(JSON.stringify(result))
        return result
    }catch(e){
        next(e)
    }
}

export const searchForIngredients = async(searchTerm: string, next:NextFunction) =>{
    console.log('searchForIngredients function called')
    
    try{
        const result = await RecipeModel
        .find({ ingredients: { $regex: searchTerm, $options: 'i' } })
        .exec()
        console.log(JSON.stringify(result))
        return result
    }catch(e){
        next(e)
    }
}