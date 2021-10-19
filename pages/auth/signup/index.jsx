import { Formik } from 'formik'

import { Button, Container, FormControl, FormHelperText, Input, InputLabel, Typography } from '@material-ui/core'
import { Box } from '@mui/system'

import TemplateDefault from '../../../src/templates/Default'
import useStyles from './style'
import { validationSchema, initialValues } from './formValues'

const Signup = () => {

  const style = useStyles()

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
      {/* BOX PRINCIPAL */}
      <Container maxWidth='md'>
        <Box className={style.box}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => { console.log(values) }}>
            {
              ({
                touched,
                errors,
                values,
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
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