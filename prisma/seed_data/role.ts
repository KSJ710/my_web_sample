import { PrismaClient } from '@prisma/client'
const mRole = [{ name: '管理者' }, { name: 'ユーザー' }]

export async function insertRoles(prisma: PrismaClient) {
  await prisma.mRole.createMany({ data: mRole })
}
