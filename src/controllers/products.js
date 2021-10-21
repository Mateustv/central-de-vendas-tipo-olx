import formidable from 'formidable-serverless'
import path from 'path'
import fs from 'fs'
import ProductsModels from "../models/products"
import dbConnect from '../utils/dbConnect'

const post = async (req, res) => {
  // await dbConnect()

  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: 'public/uploads',
    keepExtensions: true,
  })

  form.parse(req, (error, fields, data) => {
    if (error) {
      return res.status(500).json({ success: false })
    }

    const { files } = data

    const renameFiles = files instanceof Array ? files : [files]

    renameFiles.forEach(file => {
      const timestamp = Date.now()
      const random = Math.floor(Math.random() * 9999999) + 1
      const extension = path.extname(file.name)

      const fileName = `${timestamp}_${random}${extension}`

      const oldPath = path.join(__dirname, '../../../../' + file.path)
      const newPath = path.join(__dirname, '../../../../' + form.uploadDir + '/' + fileName)

      fs.rename(oldPath, newPath, (error) => {
        if (error) {
          console.log(error)
          res.status(500).json({ success: false })
        }
      })

    })

    res.status(200).json({ success: true })
  })
}

export { post, }

