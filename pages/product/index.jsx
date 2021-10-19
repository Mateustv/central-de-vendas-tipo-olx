import { Container, Grid, Typography, makeStyles, Chip, CardHeader, CardMedia, Avatar } from '@material-ui/core'
import { Card } from '@mui/material'
import { Box } from '@mui/system'
import Carousel from 'react-material-ui-carousel'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  productName: {
    margin: '15px 0'
  },
  price: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  CardCarousel: {
    height: '100%'
  },
  CardMediaCarousel: {
    paddingTop: '56%',
  },

}))

const Product = () => {
  const style = useStyles()
  return (
    <TemplateDefault>
      <Container>
        <Grid container spacing={2}>

          {/* PARTE MAIOR DA TELA */}
          {/* CARROSSEL DE FOTOS */}
          <Grid item md={8}>
            <Box className={style.box}>
              <Carousel
                autoPlay={false}
                navButtonsWrapperProps={{
                  style: {
                    color: 'white'
                  }
                }}
                animation={'slide'}
                navButtonsAlwaysVisible
              >
                <Card className={style.CardCarousel}>
                  <CardMedia
                    className={style.CardMediaCarousel}
                    image="http://source.unsplash.com/random?a=1"
                    title="Random"
                  />
                </Card>
                <Card className={style.CardCarousel}>
                  <CardMedia
                    className={style.CardMediaCarousel}
                    image="http://source.unsplash.com/random?a=2"
                    title="Random"
                  />
                </Card>
              </Carousel>
            </Box>
            {/* INFORMAÇOES DO PRODUTO */}
            <Box className={style.box} textAlign='left'>
              <Typography component="spam" variant="caption">
                Publicado 05 de outubro de 2021
              </Typography>
              <Typography component="h4" variant="h4" className={style.productName}>
                Iphone 13
              </Typography>
              <Typography component="h4" variant="h4" className={style.price}>
                R$ 7.000,00
              </Typography>
              <Chip label="categoria" />
            </Box>
            {/* DESCRIÇAO DO PRODUTO */}
            <Box className={style.box}>
              <Typography component="h6" variant="h6">
                Descrição
              </Typography>
              <Typography component="p" variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur a
              </Typography>
            </Box>
          </Grid>

          {/* PARTE MENOR DA TELA */}

          <Grid item md={4}>
            <Card elevation={0} className={style.box}>
              <CardHeader
                avatar={
                  <Avatar>M</Avatar>
                }
                title="Mateus Tavares"
                subheader="Mateus@hhhh.com"
              />
              <CardMedia
                image="http://source.unsplash.com/random"
                title="Mateus T"
              />
            </Card>

            <Box className={style.box}>
              <Typography component="h6" variant="h6">
                Localização
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Product