import { PrismaClient } from '@prisma/client'
import { resolve } from 'node:path/win32'
var colors = require('colors/safe')

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const prisma = new PrismaClient({
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

export default async function main() {
  const a = await prisma.user.findMany({
    where: { roleId: 1, posts: { none: { title: 'aaa' } } },
    select: { id: true }
  })
  return a
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
