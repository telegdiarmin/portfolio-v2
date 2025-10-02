import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProfileSection } from './ProfileSection';

describe('ProfileSection', () => {
  it('renders without crashing', () => {
    render(<ProfileSection />);
    expect(screen.getByText('ProfileSection')).toBeInTheDocument();
  });
});