import { render, screen } from '@testing-library/react'
import { prisma } from 'lib/prisma'
import { PrismaClient } from '@prisma/client'
import Page from 'app/auth/adm/page'
import { act } from 'react-dom/test-utils'
import { unmountComponentAtNode } from 'react-dom'

let container: any = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('auth/adm', () => {
  it('render page unchanged', async () => {
    const date = new Date('2000-1-1')
    const category: MTagCategory[] = [
      {
        id: 1,
        name: 'mock',
        createdAt: date,
        updatedAt: date
      }
    ]

    const post: Post[] = [
      {
        id: 1,
        title: 'mock',
        linkPath: 'http://',
        imagePath: null,
        published: true,
        authorId: '1',
        createdAt: date,
        updatedAt: date
      }
    ]

    await act(async () => {
      render(<Page />, container)
    })
    expect(container).toMatchSnapshot()
  })
})
