import mongoose from "mongoose"

const filesSchemas = new mongoose.Schema({
  nome: String,
  path: String,
})

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'O campo "Titulo de anuncio" é obrigatório']
  },
  category: {
    type: String,
    required: [true, 'O campo "categoria" é obrigatório']
  },
  description: {
    type: String,
    required: [true, 'O campo "descrição" é obrigatório']
  },
  price: {
    type: Number,
    required: [true, 'O campo "descrição" é obrigatório']
  },
  user: {
    id: String,
    name: String,
    email: String,
    phone: String,
    image: String,
  },
  files: {
    type: [filesSchemas],
    default: undefined,
  }
})

export default (mongoose.models.users || mongoose.model('products', schema))