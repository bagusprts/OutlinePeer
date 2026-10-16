// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlinePeer title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlinePeer/i);
    expect(titleElement).toBeInTheDocument();
});
