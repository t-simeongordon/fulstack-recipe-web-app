import { Link, Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import heroBg from '../../Assets/hero.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hero: {
    background: `url(${heroBg})`,
    backgroundSize: 'cover',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '4rem',
    textShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Navigation() {
  const classes = useStyles()

  return (
    <>
    <div className={classes.root}>
      <div className={classes.hero}>
        <Typography variant='h1' align='center'>
          Welcome to the recipe book
        </Typography>
      </div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Terrel - sero assessment
          </Typography>
          <Link to={'/'}>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link to={'/addrecipe'}>
            <Button color='inherit'>Add Recipe</Button>
          </Link>
          <Button color='inherit'>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
    <Outlet/>
    </>
  )
}

export default Navigation