import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});