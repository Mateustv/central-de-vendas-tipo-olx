import dbConnect from '../../src/utils/dbConnect'
import { crypto } from '../../src/utils/password'
import UsersModel from '../../src/models/users'

const get = async (req, res) => {
  await dbConnect()
  const user = await UsersModel.find()
  res.status(200).json({ success: true, user })
}
const post = async (req, res) => {
  const {
    name,
    password,
    email,
  } = req.body

  await dbConnect()

  const passwordCrypto = await crypto(password)

  const user = new UsersModel({
    name,
    password: passwordCrypto,
    email
  })

  user.save()

  res.status(201).json({ success: true })
}

export {
  get,
  post
}