import { Formik } from 'formik'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn, useSession } from "next-auth/client"

import { Button, CircularProgress, Container, FormControl, FormHelperText, Input, InputLabel, Typography } from '@material-ui/core'
import { Box } from '@mui/system'

import TemplateDefault from '../../../src/templates/Default'
import useStyles from './style'
import { validationSchema, initialValues } from './formValues'
import { Alert } from '@mui/material'

const Signin = () => {
  const style = useStyles()
  const router = useRouter()
  const [session] = useSession()
  console.log(session)

  const handleGoogleSignIn = () => {
    signIn('google', {
      callbackUrl: 'http://localhost:3000/user/dashboard',
    })
  }

  const handleFormSubmit = (values) => {
    signIn('Credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashboard'
    })
  }

  return (
    <TemplateDefault>
      {/* TITULO DA PAGINA */}
      <Container maxWidth="sm" component="main" className={style.Container}>
        <Typography component='h1' variant='h2' align='center' color="textPrimary">
          Entre em sua conta
        </Typography>
      </Container>
      {/* CAMPO DE CADASTRO */}
      <Container maxWidth='md'>
        <Box className={style.box}>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              className={style.buttonGoogle}
              startIcon={
                <Image
                  src="/imagens/googleLogo.svg"
                  width={20}
                  height={20}
                  alt="Google"
                />
              }
              onClick={handleGoogleSignIn}
            >
              Entrar com Google
            </Button>
          </Box>

          <Box className={style.boxSeparator}>
            <span> ou </span>
          </Box>

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
                    {
                      router.query.i === '1'
                        ? (
                          <Alert severity='error' className={style.alertError}>
                            Usuário ou Senha invalido
                          </Alert>
                        )
                        : null
                    }
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
                              Entrar
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

export default Signin