import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TimelineItem } from './TimelineItem';

describe('TimelineItem', () => {
  it('renders without crashing', () => {
    render(<TimelineItem />);
    expect(screen.getByText('TimelineItem')).toBeInTheDocument();
  });
});