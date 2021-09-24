import { Button, makeStyles, Select, TextField } from '@material-ui/core'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme)=>({
    container:{
        padding: theme.spacing(8,0,6),
    },
    boxContainer:{
        marginBottom: theme.spacing(5)
    },
    box:{
        backgroundColor: 'white',
        padding:theme.spacing(6),
        boxShadow: '0 0 3px black ',
        borderRadius:'5px'
    },
    descriptionTextField:{
        marginBottom: theme.spacing(2)
    },
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
            <Container maxWidth="md" className={style.boxContainer}>
                <Box className={style.box}> 
                    <Typography variant="h5" content="h5" color="primary">
                        Titulo do anuncio
                    </Typography>
                    <TextField
                        label="Ex.: Bicicleta aro 19"
                        size="small"
                        fullWidth
                    />
                    <br/><br/>
                    <Typography variant="h5" content="h5" color="primary">
                        Categorias
                    </Typography>
                    <Select native value='' fullWidth onChange={()=>{}} inputProps={{ name:'age',}}>
                        <option value=''>Selecione</option>
                        <option value={1}>testes</option>
                        <option value={2}>testes</option>
                        <option value={2}>testes</option>
                        <option value={3}>testes</option>
                        <option value={3}>testes</option>
                        <option value={3}>testes</option>
                        <option value={3}>testes</option>
                    </Select>   
                </Box>
            </Container>
            <Container maxWidth="md" className={style.boxContainer}>
                <Box className={style.box}>
                    <Typography variant="h5" content="h5" color="primary">
                        Imagens
                    </Typography>
                    <Typography variant="div" content="body2" color="primary">
                        A primeira imagem é a foto principal do seu anuncio
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="md" className={style.boxContainer}>
                <Box className={style.box}>
                    <Typography variant="h5" content="h5" color="primary">
                        Discrição
                    </Typography>
                    <Typography variant="div" content="body2" color="primary">
                        Escreva os detalhes do que esta vendendo
                    </Typography>
                    <TextField
                        multiline
                        rows={6}
                        variant = 'outlined'
                        fullWidth
                    />
                </Box>
            </Container>
            <Container maxWidth="md" className={style.boxContainer}>
                <Box className={style.box}>
                    <Typography variant="h5" content="h5" color="primary" gutterBottom>
                        Discrição
                    </Typography>
                    <TextField
                        label="Nome"
                        size="small"
                        variant = 'outlined'
                        fullWidth
                        className={style.descriptionTextField}
                    />
                    <TextField
                        label="Email"
                        size="small"
                        variant='outlined'
                        fullWidth
                        className={style.descriptionTextField}
                    />
                    <TextField
                        label="Telefone"
                        size="small"
                        variant = 'outlined'
                        fullWidth
                        className={style.descriptionTextField}
                    />
                </Box>
            </Container>
            <Container maxWidth="md" className={style.boxContainer}>
                <Box textAlign ="center">
                    <Button variant="contained" size = "large" color="primary">
                        Publicar Anuncio
                    </Button>
                </Box>
            </Container>

        </TemplateDefault>
    )
}