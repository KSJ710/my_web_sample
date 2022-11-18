//nextjsからではなくts-nodeで単発呼び出し用
import { PrismaClient } from '@prisma/client'
var colors = require('colors/safe')

export const prisma = new PrismaClient({
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
