import { render, screen } from '@testing-library/react';
import FileUpload from '../components/FileUpload'

test('file upload screen should be exist', async () => {
    render(<FileUpload />)
    const uploadScreen = screen.getByText('Drag & Drop file here')
    expect(uploadScreen).toBeInTheDocument()
})
