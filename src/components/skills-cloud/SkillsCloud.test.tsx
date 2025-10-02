import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsCloud } from './SkillsCloud';

describe('SkillsCloud', () => {
  it('renders without crashing', () => {
    render(<SkillsCloud />);
    expect(screen.getByText('SkillsCloud')).toBeInTheDocument();
  });
});