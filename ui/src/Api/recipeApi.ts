import axios from 'axios'
import config from '../config'
import { Recipe, UploadRecipe, SearchRequest } from '../models/recipesModel'

const prepareHeaders = () =>{
    const headers = { 
        headers: { 
            'Content-Type': 'application/json' 
        } 
    }

    return headers
}

export const getAllRecipes = async (): Promise<Recipe[]> => {
    const options = prepareHeaders()
    const { data } = await axios.get<Recipe[]>(`${config.baseUrl}${config.endpoint.recipes}`, options)
    return data
}

export const uploadRecipe = async (payload: UploadRecipe): Promise<Recipe[]> => {
    const options = prepareHeaders()
    const { data } = await axios.post<Recipe[]>(`${config.baseUrl}${config.endpoint.recipes}`, payload, options)
    return data
}

export const filterQuery = async (payload: SearchRequest, searchEndpoint: string): Promise<Recipe[]> => {
    const options = prepareHeaders()
    const { data } = await axios.post<Recipe[]>(`${config.baseUrl}${searchEndpoint}`, payload, options)
    return data
}