import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Terminal } from './Terminal';

describe('Terminal', () => {
  it('renders without crashing', () => {
    render(<Terminal />);
    expect(screen.getByText('Terminal')).toBeInTheDocument();
  });
});