import nextConnect from 'next-connect'
import { post } from '../../src/controllers/products'

const router = nextConnect()

router.post(post)

export default router
export const config = {
  api: {
    bodyParser: false,
  },
}