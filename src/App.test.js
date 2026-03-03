// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StakeForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StakeForge/i);
    expect(titleElement).toBeInTheDocument();
});
