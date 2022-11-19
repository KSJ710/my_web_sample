import cpq from './check_prisma_query'

test('prisima query result', async () => {
  expect(await cpq()).toBe('ok')
})
