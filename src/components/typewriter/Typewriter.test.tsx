import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Typewriter } from './Typewriter';

describe('Typewriter', () => {
  it('renders with provided text', () => {
    render(<Typewriter text="Typewriter" />);
    expect(screen.getByText('Typewriter')).toBeInTheDocument();
  });
});