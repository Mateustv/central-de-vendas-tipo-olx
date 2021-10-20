import { Formik } from 'formik'
import axios from 'axios'

import { Button, CircularProgress, Container, FormControl, FormHelperText, Input, InputLabel, Typography } from '@material-ui/core'
import { Box } from '@mui/system'

import TemplateDefault from '../../../src/templates/Default'
import useStyles from './style'
import { validationSchema, initialValues } from './formValues'
import useToasty from '../../../src/contexts/Toasty'

const Signup = () => {
  const style = useStyles()
  const { setToasty } = useToasty()

  const handleFormSubmit = async (values) => {
    const response = await axios.post('/api/users', values)

    if (response.data.success) {
      // console.log("Usuario cadastrado com sucesso")
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com sucesso',
      })
    }
  }

  return (
    <TemplateDefault>
      {/* TITULO DA PAGINA */}
      <Container maxWidth="sm" component="main" className={style.Container}>
        <Typography component='h1' variant='h2' align='center' color="textPrimary">
          Crie sua conta
        </Typography>
        <Typography component='h5' variant='h5' align='center' color="textPrimary">
          E anuncie para todo o Brasil
        </Typography>
      </Container>
      {/* CAMPO DE CADASTRO */}
      <Container maxWidth='md'>
        <Box className={style.box}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {
              ({
                touched,
                errors,
                values,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    {/* NOME */}
                    <FormControl fullWidth errors={errors.name && touched.name} className={style.formControl}>
                      <InputLabel className={style.inputLabel} >Nome</InputLabel>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText className={style.error}>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>
                    {/* E-MAIL */}
                    <FormControl fullWidth errors={errors.email && touched.email} className={style.formControl}>
                      <InputLabel className={style.inputLabel}>E-mail</InputLabel>
                      <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <FormHelperText className={style.error}>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>
                    {/* SENHA */}
                    <FormControl fullWidth errors={errors.password && touched.password} className={style.formControl}>
                      <InputLabel className={style.inputLabel}>Senha</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      <FormHelperText className={style.error}>
                        {errors.password && touched.password ? errors.password : null}
                      </FormHelperText>
                    </FormControl>
                    {/* CONFIRMAR SENHA */}
                    <FormControl fullWidth errors={errors.passwordConf && touched.passwordConf} className={style.formControl}>
                      <InputLabel className={style.inputLabel}>Senha</InputLabel>
                      <Input
                        name="passwordConf"
                        type="password"
                        value={values.passwordConf}
                        onChange={handleChange}
                      />
                      <FormHelperText className={style.error}>
                        {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                      </FormHelperText>
                    </FormControl>
                    {/* BOTÃO DE ENVIAR */}
                    {
                      isSubmitting
                        ? <CircularProgress className={style.circularProgress} />
                        : (
                          <Box textAlign="center">
                            <Button
                              size="large"
                              type="submit"
                              variant="contained"
                              color="primary"
                              className={style.button}
                            >
                              Cadastrar
                            </Button>
                          </Box>
                        )
                    }

                  </form>
                )
              }
            }
          </Formik>
        </Box>
      </Container>

    </TemplateDefault>
  )
}

export default Signup