import { Grid } from '@material-ui/core'
import { Recipe, RecipeProps } from '../../models/recipesModel'
import SearchResultCard from '../SearchResultCard'

const SearchResults = ({recipeResults}:RecipeProps) =>{

  return (
    <Grid container spacing={2}>
      {recipeResults.map((result:Recipe) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={result.id}>
          <SearchResultCard result={result} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SearchResults