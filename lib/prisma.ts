import { PrismaClient } from '@prisma/client'
var colors = require('colors/safe')

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query'
      },
      {
        emit: 'stdout',
        level: 'error'
      },
      {
        emit: 'stdout',
        level: 'info'
      },
      {
        emit: 'stdout',
        level: 'warn'
      }
    ]
  })
prisma.$on('query', (e: any) => {
  console.log('Query: ' + colors.green(e.query))
  console.log('Params: ' + colors.cyan(e.params))
  console.log('Duration: ' + colors.cyan(e.duration) + 'ms')
})

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
