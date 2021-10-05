import { Container, Grid } from "@mui/material"
import { makeStyles } from "@material-ui/core"
import { Box } from "@mui/system"

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(7),
    }
  }
}))

const Footer = () => {
  const style = useStyles()

  return (
    <Container maxWidth="md" className={style.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            Ajuda e Contato
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            Dicas de Seguranças
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            Comprar e Vender
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            Plano Profissonal
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer