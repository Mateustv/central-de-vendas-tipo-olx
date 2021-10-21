import { useDropzone } from 'react-dropzone'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    Input,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'

import TemplateDefault from '../../../src/templates/Default'
import useStyles from './style'
import { initialValues, validationSchema } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import { getSession } from 'next-auth/client'



export default function Publish({ userId, image }) {
    const style = useStyles()
    const { setToasty } = useToasty()
    const router = useRouter()

    const formValues = {
        ...initialValues
    }
    formValues.userId = userId
    formValues.image = image

    const handleSuccess = () => {
        setToasty({
            open: true,
            text: 'Anuncio cadastrado com sucesso',
            severity: 'success',
        })
        // router.push('/user/dashboard')
    }
    const handleError = () => {
        setToasty({
            open: true,
            text: 'Anuncio não cadastrado, ocorreu algum erro',
            severity: 'success',
        })
    }

    const handleFormSubmit = (values) => {
        const formData = new FormData()

        for (let field in values) {
            if (field === 'files') {
                values.files.forEach(file => {
                    formData.append('files', file)
                })
            } else {
                formData.append(field, values[field])
            }
        }
        axios.post('/api/products', formData)
            .then(handleSuccess)
            .catch(handleError)
    }

    return (
        <TemplateDefault>
            <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {
                    ({
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => {

                        const { getRootProps, getInputProps } = useDropzone({
                            accept: 'image/*',
                            onDrop: (acceptFile) => {
                                const newFiles = acceptFile.map(file => {
                                    return Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })
                                })
                                setFieldValue('files', [
                                    ...values.files,
                                    ...newFiles])
                            }

                        })

                        const handleRemoveFile = fileName => {
                            const filesRemoves = values.files.filter(file => file.name !== fileName)
                            setFieldValue('files', filesRemoves)
                        }

                        return (
                            <form onSubmit={handleSubmit}>
                                <Input type="hidden" name="useId" value={values.userId} />
                                <Input type="hidden" name="image" value={values.image} />
                                <Container maxWidth="sm">
                                    <Typography variant="h2" content="h1" align="center" color="primary" >
                                        Publicar Anúncios
                                    </Typography>
                                    <Typography variant="h5" content="h2" align="center" color="primary">
                                        Quanto mais detalhado melhor
                                    </Typography>
                                </Container>
                                {/* CATEGORIAS E TITULO DO ANUNCIO */}
                                <Container maxWidth="md" className={style.boxContainer}>
                                    <Box className={style.box}>
                                        <Typography variant="h5" content="h5" color="primary">
                                            Titulo do anuncio
                                        </Typography>
                                        <FormControl error={errors.title && touched.title} fullWidth >
                                            <InputLabel>Ex.: Bicicleta aro 19</InputLabel>
                                            <Input
                                                name='title'
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.title && touched.title ? errors.title : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <Typography variant="h5" content="h5" color="primary">
                                            Categorias
                                        </Typography>
                                        <FormControl error={errors.category && touched.category} fullWidth >
                                            <Select
                                                name='category'
                                                value={values.category}
                                                onChange={handleChange}
                                                fullWidth
                                            >
                                                <MenuItem value={"Bebe e crianças"}>Bebe e crianças</MenuItem>
                                                <MenuItem value={"Agricultura"}>Agricultura</MenuItem>
                                                <MenuItem value={"Moda"}>Moda</MenuItem>
                                                <MenuItem value={"Carros"}>Carros</MenuItem>
                                                <MenuItem value={"Imóveis"}>Imóveis</MenuItem>
                                                <MenuItem value={"Esportes"}>Esportes</MenuItem>
                                                <MenuItem value={"Emprego"}>Emprego</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                {errors.category && touched.category ? errors.category : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                {/* IMAGENS */}
                                <Container maxWidth="md" className={style.boxContainer}>
                                    <Box className={style.box}>
                                        <Typography variant="h5" content="h5" color="primary">
                                            Imagens
                                        </Typography>
                                        <Typography variant="div" content="body2" color={errors.files && touched.files ? 'error' : "primary"}>
                                            A primeira imagem é a foto principal do seu anuncio
                                        </Typography>
                                        {
                                            errors.files && touched.files
                                                ? <Typography variant="body2" color="error" gutterBottom>{errors.files}</Typography>
                                                : null
                                        }
                                        <Box className={style.thumbsContainer}>
                                            <Box className={style.dropzone} {...getRootProps()}>
                                                <input name='files' {...getInputProps()} />
                                                <Typography color={errors.files && touched.files ? 'error' : "primary"} >
                                                    Clique para adicionar ou arraste a imagem para aqui
                                                </Typography>
                                            </Box>
                                            {
                                                values.files.map((file, index) => (
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
                                {/* DESCRIÇÃO */}
                                <Container maxWidth="md" className={style.boxContainer}>
                                    <Box className={style.box}>
                                        <Typography variant="h5" content="h5" color="primary">
                                            Discrição
                                        </Typography>
                                        <Typography variant="div" content="body2" color="primary">
                                            Escreva os detalhes do que esta vendendo
                                        </Typography>
                                        <FormControl error={errors.description && touched.description} fullWidth >
                                            <Input
                                                name="description"
                                                multiline
                                                rows={6}
                                                variant='outlined'
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.description && touched.description ? errors.description : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                {/* PREÇO */}
                                <Container maxWidth="md" className={style.boxContainer}>
                                    <Box className={style.box}>
                                        <Typography variant="h5" content="h5" color="primary">
                                            Preço
                                        </Typography>
                                        <br />
                                        <FormControl fullWidth error={errors.price && touched.price} >
                                            <InputLabel>
                                                Valor
                                            </InputLabel>
                                            <Input
                                                name="price"
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                labelWidth={40}
                                            />
                                            <FormHelperText>
                                                {errors.price && touched.price ? errors.price : null}
                                            </FormHelperText>
                                        </FormControl>

                                    </Box>
                                </Container>
                                {/* DADOS DE CONTADOS */}
                                <Container maxWidth="md" className={style.boxContainer}>
                                    <Box className={style.box}>
                                        <FormControl error={errors.name && touched.name} fullWidth >
                                            <InputLabel>Nome</InputLabel>
                                            <Input
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <FormControl error={errors.email && touched.email} fullWidth >
                                            <InputLabel>E-mail</InputLabel>
                                            <Input
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <FormControl error={errors.phone && touched.phone} fullWidth >
                                            <InputLabel>Telefone</InputLabel>
                                            <Input
                                                name='phone'
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.phone && touched.phone ? errors.phone : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                {/* BOTÃO DE ENVIAR */}
                                <Container maxWidth="md" className={style.boxContainer}>
                                    <Box textAlign="center">
                                        <Button type="submit" variant="contained" size="large" color="primary">
                                            Publicar Anuncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>
        </TemplateDefault>
    )
}

export async function getServerSideProps({ req }) {
    const { userId, user } = await getSession({ req })

    return {
        props: {
            userId,
            image: user.image,
        }
    }
}