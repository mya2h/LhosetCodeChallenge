import { render, screen } from '@testing-library/react';
import App from '../App';

test('loads spinner before main page', async () => {
  render(<App />)
  const initialComponent = screen.getByText('Page Loading...')
  expect(initialComponent).toBeInTheDocument()
})
