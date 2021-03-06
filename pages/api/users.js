import nextConnect from 'next-connect'
import { get, post } from '../../src/controllers/users'

const router = nextConnect()

router.get(get)

router.post(post)


export default router