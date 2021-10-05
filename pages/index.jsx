import { Search } from '@material-ui/icons'
import { Grid, makeStyles } from '@material-ui/core'
import {
  Container,
  IconButton,
  InputBase,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent
} from '@mui/material'
import TemplateDefault from '../src/templates/Default'


const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: theme.spacing(8, 10, 6),
    textAlign: 'center',
  },
  boxSearch: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 40,
  },
  cardMedia: {
    paddingTop: '60%'
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
            <Card>
              <CardMedia
                className={style.cardMedia}
                image={'http://source.unsplash.com/random'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" content="h2">
                  Produdo X
                </Typography>
                <Typography variant="h5" content="h2">
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={style.cardMedia}
                image={'http://source.unsplash.com/random'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" content="h2">
                  Produdo X
                </Typography>
                <Typography variant="h5" content="h2">
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={style.cardMedia}
                image={'http://source.unsplash.com/random'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" content="h2">
                  Produdo X
                </Typography>
                <Typography variant="h5" content="h2">
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home