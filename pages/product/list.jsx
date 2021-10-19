import { Grid, makeStyles } from '@material-ui/core'
import {
  Container,
  IconButton,
  InputBase,
  Typography,
  Paper,
} from '@mui/material'
import { Search } from '@material-ui/icons'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/componentes/Card'
import { Box } from '@mui/system'



const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: 'white',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 5,
  },
  boxContainer: {
    textAlign: 'center',
    paddingBottom: theme.spacing(6)
  },
  boxSearch: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    margin: '40px 0',
  },
}))

const List = () => {
  const style = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">

        <Paper className={style.boxSearch}>
          <InputBase
            placeholder="Ex.: Gol 1.6 completo"
            fullWidth
          />
          <IconButton>
            <Search />
          </IconButton>
        </Paper>

        <Grid item xs={12} sm={12} md={12}>
          <Box className={style.box}>
            <Typography component="h6" variant="h6">
              Anúncios
            </Typography>
            <Typography component="span" variant="subtitle2">
              Encotrados 200 anuncios
            </Typography>
            <br /> <br />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={`http://source.unsplash.com/random`}
                  title="Random"
                  subtitle="R$50,00"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={`http://source.unsplash.com/random`}
                  title="Random"
                  subtitle="R$50,00"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={`http://source.unsplash.com/random`}
                  title="Random"
                  subtitle="R$50,00"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Container>
    </TemplateDefault>
  )
}

export default List