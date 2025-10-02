import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders without crashing', () => {
    render(<Dropdown />);
    expect(screen.getByText('Dropdown')).toBeInTheDocument();
  });
});