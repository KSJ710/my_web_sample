const { PrismaClient } = require('@prisma/client')

if (process.env.NODE_ENV === 'production') {
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

  prisma.$on('query', (e) => {
    console.log('Query: ' + e.query)
    console.log('Duration: ' + e.duration + 'ms')
  })
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
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

    global.prisma.$on('query', (e) => {
      console.log('Query: ' + e.query)
      console.log('Duration: ' + e.duration + 'ms')
    })
  }
  prisma = global.prisma
}

export default prisma
