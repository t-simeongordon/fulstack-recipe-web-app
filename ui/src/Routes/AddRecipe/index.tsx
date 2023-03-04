import { useState } from "react"
import { Button, Grid, TextField } from "@mui/material"
import { uploadRecipe } from "../../Api/recipeApi"
import { UploadRecipe } from "../../models/recipesModel"

const initialValues: UploadRecipe = {
    title: "",
    ingredients: "",
    measurements: "",
    cookingMethod: "",
}

const AddRecipe = () => {
  const [formValues, setFormValues] = useState<UploadRecipe>(initialValues)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formValues)
    uploadRecipe(formValues)
  }

  return (
    <Grid container spacing={1} style={{ marginTop: '1rem', marginLeft:'8rem', marginRight: '8rem' }}>
       <form onSubmit={handleSubmit}>
       <h3>Add new recipe</h3>

      <TextField
        id="title"
        name="title"
        label="title"
        variant="outlined"
        margin="normal"
        value={formValues.title}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        id="ingredients"
        name="ingredients"
        type="ingredients"
        label="ingredients"
        variant="outlined"
        margin="normal"
        value={formValues.ingredients}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        id="measurements"
        name="measurements"
        type="measurements"
        label="measurements"
        variant="outlined"
        margin="normal"
        value={formValues.measurements}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        id="cookingMethod"
        name="cookingMethod"
        type="cookingMethod"
        label="cookingMethod"
        variant="outlined"
        margin="normal"
        value={formValues.cookingMethod}
        onChange={handleInputChange}
        fullWidth
      />
      <Button variant="contained" type="submit" >
        Submit
      </Button>
    </form>
    </Grid>
  )
}

export default AddRecipe
