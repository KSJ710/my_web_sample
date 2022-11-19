import cpq from './check_prisma_query'

test('prisima query result', () => {
  return cpq().then((data) => {
    expect(data).toBe('ok')
  })
})
