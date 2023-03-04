import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import SearchResults from '../../Components/SearchResults'
import { filterQuery, getAllRecipes } from '../../Api/recipeApi'
import { Recipe, SearchRequest } from '../../models/recipesModel'
import { CircularProgress, Grid, IconButton } from '@mui/material'
import SearchIcon from '@material-ui/icons/Search'
import { HOME_FILTER_COOKING_METHOD, HOME_FILTER_INGREDIENTS, HOME_FILTER_MEASUREMENTS, HOME_FILTER_RECIPE } from '../../constants/recipeConstants'
import config from '../../config'
import Filter from '../../Components/SearchFilter'

const searchTermStateValue: SearchRequest = {
  searchTerm: ''
}

const options = [
  { label: '1', value: 'toast' },
  { label: '2', value: 'pizza' },
  { label: '3', value: 'tea' },
]

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<SearchRequest>(searchTermStateValue)
  const [searchResults, setSearchResults] = useState<Recipe[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterValue, setFilterValue] = useState('all')

  const handleSearch = async () => {
    setIsLoading(true)
    let data:Recipe[]=[]
    try {    
      if(filterValue===HOME_FILTER_RECIPE){
        data = await filterQuery(searchTerm, config.endpoint.find.recipes)
      }
      else if (filterValue===HOME_FILTER_INGREDIENTS){
        data = await filterQuery(searchTerm, config.endpoint.find.ingredients)
      }
      else if (filterValue===HOME_FILTER_MEASUREMENTS){
        data = await filterQuery(searchTerm, config.endpoint.find.ingredients)
      }
      else if (filterValue===HOME_FILTER_COOKING_METHOD){
        data = await filterQuery(searchTerm, config.endpoint.find.ingredients)
      }
      else {
        data = await getAllRecipes()
      }
        
      setSearchResults(data)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }
  
  const handleFilterChange = (newValue: string) => {
    setFilterValue(newValue)
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid container spacing={2} style={{ marginTop: '1rem', marginLeft:'8rem', marginRight: '8rem' }}>
          <Grid item xs={2}>
            <h3>Filter By:</h3>

            <Filter
              title='Features'
              options={['all', 'recipe', 'ingredients', 'measurements', 'cookingMethod']}
              value={filterValue}
              onChange={handleFilterChange}
            /> 
          </Grid>
        <Grid item xs={10}>
        <Autocomplete
          freeSolo
          options={options}
          getOptionLabel={(option) => option.value}
          loading={isLoading}
          onInputChange={(event, value) => setSearchTerm({searchTerm: value})}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search'
              variant='outlined'
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? <CircularProgress color='inherit' size={20} /> : null}
                    <IconButton disabled={isLoading} data-cy='home-searchbar-btn' onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  </>
                ),
              }}
              data-cy='home-searchbar'
            />
          )}
        />
        <SearchResults recipeResults={searchResults}/>
        </Grid>
      </Grid>
      </Grid>
      
  
    </>
  )
}

export default Home