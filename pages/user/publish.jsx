import { FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Select, TextField } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    mask: {},
    maskMain: {},
    boxContainer: {
        marginBottom: theme.spacing(5)
    },
    box: {
        backgroundColor: 'white',
        padding: theme.spacing(6),
        borderRadius: '5px',
    },
    descriptionTextField: {
        marginBottom: theme.spacing(2)
    },
    thumbsContainer: {
        display: 'flex',
        margin: 15,
        flexWrap: 'wrap',
    },
    dropzone: {
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        margin: '0 15px 15px 0',
        width: 250,
        height: 150,
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black',
    },
    thumb: {
        width: 250,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',

        '& $maskMain': {
            backgroundColor: 'blue',
            padding: '6px 10px',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },

        '&:hover $mask': {
            display: 'flex',
        },

        '& $mask': {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '100%',
        }

    }
}))

export default function Publish() {
    const style = useStyles()
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptFile) => {
            const newFiles = acceptFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
            setFiles([
                ...files,
                ...newFiles])
        }

    })

    const handleRemoveFile = fileName => {
        const filesRemoves = files.filter(file => file.name !== fileName)
        setFiles(filesRemoves)
    }

    return (
        <TemplateDefault>
            <Container maxWidth="sm">
                <Typography variant="h2" content="h1" align="center" color="primary" >
                    Publicar Anúncios
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
                    <br /><br />
                    <Typography variant="h5" content="h5" color="primary">
                        Categorias
                    </Typography>
                    <Select native value='' fullWidth onChange={() => { }} inputProps={{ name: 'age', }}>
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
                    <Box className={style.thumbsContainer}>
                        <Box className={style.dropzone} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Typography >
                                Clique para adicionar ou arraste a imagem para aqui
                            </Typography>
                        </Box>
                        {
                            files.map((file, index) => (
                                <Box
                                    key={file.name}
                                    className={style.thumb}
                                    style={{ backgroundImage: `url(${file.preview})` }}
                                >
                                    {
                                        index === 0 ?
                                            <Box className={style.maskMain}>
                                                <Typography variant="body" color='secondary'>
                                                    Principal
                                                </Typography>
                                            </Box>
                                            : null
                                    }
                                    <Box className={style.mask}>
                                        <IconButton color="secondary" onClick={() => { handleRemoveFile(file.name) }}>
                                            <DeleteForever fontSize="large" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
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
                        variant='outlined'
                        fullWidth
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={style.boxContainer}>
                <Box className={style.box}>
                    <Typography variant="h5" content="h5" color="primary">
                        Preço
                    </Typography>
                    <br />
                    <FormControl fullWidth variant='outlined'>
                        <InputLabel>
                            Valor
                        </InputLabel>
                        <OutlinedInput
                            onChange={() => { }}
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            labelWidth={40}
                        />
                    </FormControl>

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
                        variant='outlined'
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
                        variant='outlined'
                        fullWidth
                        className={style.descriptionTextField}
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={style.boxContainer}>
                <Box textAlign="center">
                    <Button variant="contained" size="large" color="primary">
                        Publicar Anuncio
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}