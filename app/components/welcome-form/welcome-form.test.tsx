import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WelcomeForm } from './welcome-form';
import { UserForm } from './user-form';

test('renders welcome message', () => {
  render(<WelcomeForm />);
  const welcomeMessage = screen.getByText(/Welcome to ReflexBot/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders UserForm with input and button', () => {
  render(<UserForm />);
  
  const formElement = screen.getByRole('form', { name: /User Name Form/i });
  expect(formElement).toBeInTheDocument();

  const inputElement = screen.getByRole('textbox', { name: /What's your name\?/i });
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByRole('button', { name: /Start Chatting Button/i });
  expect(buttonElement).toBeInTheDocument();
});

test('renders chat image', () => {
  render(<WelcomeForm />);
  const chatImage = screen.getByAltText(/image of chat reflexbot/i);
  expect(chatImage).toBeInTheDocument();
});

test('renders powered by robot image', () => {
  render(<WelcomeForm />);
  const robotImage = screen.getByAltText(/reflex-robot-image/i);
  expect(robotImage).toBeInTheDocument();
});

test('renders link to GitHub profile', () => {
  render(<WelcomeForm />);
  const githubLink = screen.getByRole('link', { name: /antonioampy/i });
  expect(githubLink).toBeInTheDocument();
});