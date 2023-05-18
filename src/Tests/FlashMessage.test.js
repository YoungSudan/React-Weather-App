import { render, screen } from '@testing-library/react';
import FlashMessage from '../Components/FlashMessage';

test('renders Error message', () => {
    const error = "Invalid city name!"
    render(<FlashMessage error={error}/>);
    
    const ErrorElement = screen.getByText("Error");
    const messageElement = screen.getByText(error)

    expect(ErrorElement).toBeDefined();
    expect(messageElement).toBeDefined();
});
