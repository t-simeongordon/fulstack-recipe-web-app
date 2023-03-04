export interface RecipesResponse{
    response: Recipe[]
}

export interface Recipe{
    id: string,
    title: string,
    ingredients: string,
    measurements: string,
    cookingMethod: string,
}

export interface RecipeProps{
    recipeResults: Recipe[]
}

export interface UploadRecipe{
    title: string,
    ingredients: string,
    measurements: string,
    cookingMethod: string,
}

export interface SearchRequest{
    searchTerm: string
}
