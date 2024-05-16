import React from 'react';
import Chat from './chat';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

describe('Chat component', () => {
  test('renders chat title and message', () => {
    render(<Chat />);
    const titleElement = screen.getByText('Chat with ReflexBot');
    const messageElement = screen.getByText('Ask me anything!');
    
    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});