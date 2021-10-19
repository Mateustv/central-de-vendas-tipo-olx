import { Search } from '@material-ui/icons'
import { Grid, makeStyles } from '@material-ui/core'
import {
  Container,
  IconButton,
  InputBase,
  Typography,
  Paper,
} from '@mui/material'
import TemplateDefault from '../src/templates/Default'

import Card from '../src/componentes/Card'


const useStyles = makeStyles((theme) => ({
  boxContainer: {
    textAlign: 'center',
    paddingBottom: theme.spacing(6)
  },
  boxSearch: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 40,
  },
}))

const Home = () => {
  const style = useStyles()
  return (
    <TemplateDefault>
      {/* TITULO PRINCIPAL */}
      <Container maxWidth="lg" className={style.boxContainer}>
        <Typography component="h1" variant="h2" color="textPrimary">
          O que deseja encontrar ?
        </Typography>
        <Paper className={style.boxSearch}>
          <InputBase
            placeholder="Ex.: Gol 1.6 completo"
            fullWidth
          />
          <IconButton>
            <Search />
          </IconButton>
        </Paper>
      </Container>
      {/* DESTAQUES */}
      <Container maxWidth="md" className={style.boxContainer}>
        <Typography component="h2" variant="h3" color="textPrimary">
          Destaques
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'http://source.unsplash.com/random'}
              title="Produdo X"
              subtitle="R$ 60,00"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'http://source.unsplash.com/random'}
              title="Produdo X"
              subtitle="R$ 60,00"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'http://source.unsplash.com/random'}
              title="Produdo X"
              subtitle="R$ 60,00"
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home