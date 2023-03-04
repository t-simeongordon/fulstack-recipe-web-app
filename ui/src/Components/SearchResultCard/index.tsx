import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Recipe } from '../../models/recipesModel'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

interface Props {
  result: Recipe
}

const SearchResultCard: React.FC<Props> = ({result}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

          <Grid item xs={12} key={result.title}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Grid item>
                  <div className={classes.image}>
                    <img className={classes.img} alt={result.title} src={'https://cdn.shopify.com/s/files/1/0522/5365/5200/articles/caribbean-restaurants-london-samuel-regan-asante-1646844528378_150x.jpg?v=1675786124'} />
                  </div>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Grid item xs>
                      <Typography gutterBottom variant='subtitle1'>
                        {result.title}
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        {result.ingredients}
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        {result.measurements}
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        {result.cookingMethod}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
  

      </Grid>
    </div>
  )
}

export default SearchResultCard
