// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainVault/i);
    expect(titleElement).toBeInTheDocument();
});
