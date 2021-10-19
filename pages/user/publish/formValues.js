import * as yup from 'yup'

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  name: '',
  email: '',
  phone: '',
  files: [],

}


const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'escreva um titulo maior')
    .max(100, 'Titulo muito grande')
    .required('Campo obrigatório'),
  category: yup.string()
    .required('Campo obrigatório'),
  description: yup.string()
    .required('Campo obrigatório')
    .min(20, 'Descrição minima de 20 caracteres'),
  price: yup.number()
    .required('Campo obrigatório'),
  name: yup.string()
    .required('Campo obrigatório'),
  email: yup.string()
    .email('digite um e-mail valido')
    .required('Campo obrigatório'),
  phone: yup.number()
    .required('Campo obrigatório'),
  files: yup.array()
    .min(1, 'Envie no mínimo uma foto')
    .required('Campo obrigatório'),
})

export { initialValues, validationSchema }