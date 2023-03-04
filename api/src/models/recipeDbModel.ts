import { InferSchemaType, Schema, model } from 'mongoose'

const recipeSchema = new Schema({
        id: {type: String, required: true},
        title: {type: String, required: true},
        ingredients: {type: String, required: true},
        measurements: {type: String, required: true},
        cookingMethod: {type: String, required: true},
    },
    {
        timestamps: true
    }
)

type Recipe = InferSchemaType<typeof recipeSchema>

export default model<Recipe>('recipe', recipeSchema) 