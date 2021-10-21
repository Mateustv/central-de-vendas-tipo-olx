import axios from "axios"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        const url = 'http://localhost:3000/api/auth/signin'
        const res = await axios.post(url, credentials)

        const user = res.data

        if (res) {
          return user
        } else {
          throw '/auth/signin?i=1'
        }
      }
    })
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_TOKEN,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.uid = user.id
      }
      return Promise.resolve(token)
    },
    async session(session, user) {
      session.userId = user.uid
      return session
    }
  },
  database: process.env.MONGODB_URI,
})