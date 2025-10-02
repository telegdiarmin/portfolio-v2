import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillTag } from './SkillTag';

describe('SkillTag', () => {
  it('renders without crashing', () => {
    render(<SkillTag />);
    expect(screen.getByText('SkillTag')).toBeInTheDocument();
  });
});