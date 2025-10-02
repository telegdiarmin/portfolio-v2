import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from './Timeline';

describe('Timeline', () => {
  it('renders without crashing', () => {
    render(<Timeline />);
    expect(screen.getByText('Timeline')).toBeInTheDocument();
  });
});