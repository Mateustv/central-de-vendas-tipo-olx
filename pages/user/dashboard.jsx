import { makeStyles } from '@material-ui/core'
import { Button, Container, Grid, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/componentes/Card'
import { formatCurrency } from '../../src/utils/currency'

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    display: 'block',
    margin: '30px auto'
  }
}))

export default function Home() {
  const styles = useStyles()

  return (

    <TemplateDefault>
      <Container maxWidth="sm">
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
            <Card
              image={'http://source.unsplash.com/random'}
              title="Produdo X"
              subtitle={formatCurrency(60)}
              buttons={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Excluir
                  </Button>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>


    </TemplateDefault >
  )
}
