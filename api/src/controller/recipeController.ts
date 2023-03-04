import { Recipe, RecipeResponse, RecipesRequest } from '../models/recipeModel'
import { addRecipeService, getAllRecipesService, getRecipeService, searchForIngredients, searchForRecipeDb} from '../service/recipeService'
import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { validateRequest } from '../utils/validation'

export const getRecipes = async(req:Request, res:Response, next:NextFunction) =>{
    console.log('getRecipes function called')

    const allResultsDb:any = await getAllRecipesService(next)
    const allReccipes = allResultsDb.map((result:RecipeResponse)=>{
        const mappedResults:RecipeResponse = {
            id: result.id,
            title: result.title,
            ingredients: result.ingredients,
            measurements: result.measurements,
            cookingMethod: result.cookingMethod
        }
        return mappedResults
    })
    JSON.stringify(allReccipes)
    res.status(200).json(allReccipes)
} 

export const getRecipe = async(req:Request, res:Response, next:NextFunction) =>{
    console.log('getRecipe function called')

    const recipeId = <string> req.params.recipeId
    if(recipeId){
        const searchResults = await getRecipeService(recipeId, next)
    res.status(201).json(searchResults)
    } else {
        console.error('Error: invalid parameter provided')
        next('Error: parameter required')
    }
} 

export const addRecipe = async(req:Request, res:Response, next:NextFunction) =>{
    console.log('addRecipe function called')

    const valid = validateRequest(req.body)
    if(valid){
        const newRecipe = <Recipe> req.body
        const recipeId = uuidv4()
        const searchResults = await addRecipeService(recipeId, newRecipe, next)
        res.status(200).json(searchResults)
    } else {
        console.error('Error: required fields not found when validated')
        next('Error: payload is incorrect')
    }
}

export const findRecipesController = async(req:Request, res:Response, next:NextFunction) =>{
    console.log('findRecipesController function called')

    const request: RecipesRequest = JSON.parse(JSON.stringify(req.body))
    if(request && request.searchTerm){
        const searchResultsDb:any = await searchForRecipeDb(request.searchTerm, next)
        const searchResults = searchResultsDb.map((searchResult:RecipeResponse)=>{
            const mappedResults:RecipeResponse = {
                id: searchResult.id,
                title: searchResult.title,
                ingredients: searchResult.ingredients,
                measurements: searchResult.measurements,
                cookingMethod: searchResult.cookingMethod
            }
            return mappedResults
        })
        console.log(JSON.stringify(searchResults))
        res.status(200).json(searchResults)
    } else {
        console.error('Error: invalid parameter provided')
        next('Error: parameter required')
    }
} 

export const findIngredientsController = async(req:Request, res:Response, next:NextFunction) =>{
    console.log('findIngredientsController function called')

    const request: RecipesRequest = JSON.parse(JSON.stringify(req.body))
    if(request && request.searchTerm){
        const searchResultsDb:any = await searchForIngredients(request.searchTerm, next)
        const searchResults = searchResultsDb.map((searchResult:RecipeResponse)=>{
            const mappedResults:RecipeResponse = {
                id: searchResult.id,
                title: searchResult.title,
                ingredients: searchResult.ingredients,
                measurements: searchResult.measurements,
                cookingMethod: searchResult.cookingMethod
            }
            return mappedResults
        })
        console.log(JSON.stringify(searchResults))
        res.status(200).json(searchResults)
    } else {
        console.error('Error: invalid parameter provided')
        next('Error: parameter required')
    }
} 
