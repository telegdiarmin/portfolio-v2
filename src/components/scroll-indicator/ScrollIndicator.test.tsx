import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScrollIndicator } from './ScrollIndicator';

describe('ScrollIndicator', () => {
  it('renders without crashing', () => {
    render(<ScrollIndicator />);
    expect(screen.getByText('ScrollIndicator')).toBeInTheDocument();
  });
});