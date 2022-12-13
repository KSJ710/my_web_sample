import { render, screen } from '@testing-library/react'
import Page from 'app/login/page'

describe('login', () => {
  it('render page unchanged', () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
  })
})
