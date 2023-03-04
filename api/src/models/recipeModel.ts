export interface RecipeResponse{
    id: string,
    title: string,
    ingredients: string,
    measurements: string,
    cookingMethod: string,
}

export interface Recipe{
    title: string,
    ingredients: string,
    measurements: string,
    cookingMethod: string,
}

export interface RecipesRequest{
    searchTerm: string,
}