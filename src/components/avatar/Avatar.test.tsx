import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
    expect(screen.getByText('Avatar')).toBeInTheDocument();
  });
});