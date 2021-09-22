import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Button, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme)=>({
  container:{
    padding: theme.spacing(8,0,6)
  },
  cardMedia:{
    paddingTop:'60%'
  },
  buttonAdd: {
    display: 'block',
    margin: '30px auto'
  }
}))

export default function Home() {
  const styles = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={styles.container}>
        <Typography component="h1" variant="h2" align="center">
          Meus Anuncios
        </Typography>
        <Button variant="contained" color="primary" className={styles.buttonAdd}>
          Publicar novo anuncio
        </Button>
      </Container>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
               className={styles.cardMedia}
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
              <CardActions>
                <Button size = "small" color="primary">
                  Editar
                </Button>
                <Button size = "small" color="primary">
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
               className={styles.cardMedia}
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
              <CardActions>
                <Button size = "small" color="primary">
                  Editar
                </Button>
                <Button size = "small" color="primary">
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
               className={styles.cardMedia}
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
              <CardActions>
                <Button size = "small" color="primary">
                  Editar
                </Button>
                <Button size = "small" color="primary">
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
