import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import { html, text } from 'pages/mails/auth'

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60 // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60 // 24 hours
  },
  jwt: {
    // A secret to use for key generation. Defaults to the top-level `secret`.
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behavior.
  },
  // pages: {
  //   signIn: '/auth/credentials-signin'
  // },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier: email, url, provider: { server, from } }) {
        const { host } = new URL(url)
        const transport = nodemailer.createTransport(server)
        await transport.sendMail({
          to: email,
          from,
          subject: `ログインのご案内`,
          text: text({ url, host }),
          html: html({ url, host })
        })
      }
    })
  ],
  callbacks: {},
  events: {
    async createUser(message) {
      /* user created */
      console.info(message)
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
      console.info(message)
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
      console.info(message)
    },
    async session(message) {
      /* session is active */
      console.info(message)
    }
  },
  debug: true,
  logger: {
    error(code, metadata) {
      console.error(code, metadata)
    },
    warn(code) {
      console.warn(code)
    },
    debug(code, metadata) {
      console.debug(code, metadata)
    }
  },
  secret: 'Qspm1tLlmkMN8kE4AI3/L0uJUgKQhEME2olEdPcvvUk='
})

async function checkUser(email: string, password: string) {
  //... fetch user from a db etc.
  const member = await prisma.member.findUnique({ where: { email: email } })
  const match = await bcrypt.compare(password, member.password)

  if (match && member.confirmStatus === '1') {
    return member
  }
  return null
}
