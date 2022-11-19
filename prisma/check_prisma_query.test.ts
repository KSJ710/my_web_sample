import cpq from './check_prisma_query'

const a = [
  { id: '8cf109bd-f511-4e74-8d70-dee2bf80ce5a' },
  { id: '848f256d-7b08-42d3-92d1-7c928a7037e8' },
  { id: 'a634f05c-1750-46e3-87cd-9dc3a19e3ae4' },
  { id: '4a70db72-5f38-4bea-96f4-ad2b44cbde41' },
  { id: 'f9273e02-455d-4da4-8caa-5e926f2a4ef8' },
  { id: '3aa933c3-5275-4268-a153-c1a303406506' },
  { id: '4939ddb6-98f9-49f2-bac2-0b6745760113' }
]

test('prisima query result', async () => {
  expect(await cpq()).toEqual(a)
})
