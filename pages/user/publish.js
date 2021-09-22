import { makeStyles } from '@material-ui/core'
import { Container, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme)=>({
    container:{
        padding: theme.spacing(8,0,6)
    }
}))

export default function Publish (){
    const style = useStyles()
    
    return(
        <TemplateDefault>
            <Container maxWidth="sm" className={style.container}>
                <Typography variant="h2" content="h1" align="center" color="primary" >
                    Publicar Anuncios
                </Typography>
                <Typography variant="h5" content="h2" align="center" color="primary">
                    Quanto mais detalhado melhor
                </Typography>
                
            </Container>
        </TemplateDefault>
    )
}