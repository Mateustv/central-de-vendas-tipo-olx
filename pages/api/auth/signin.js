import nextConnect from 'next-connect'
import { post } from '../../../src/controllers/auth/signin'

const router = nextConnect()

router.post(post)

export default router