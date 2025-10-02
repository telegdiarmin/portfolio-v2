import type { FC } from 'react';
import type { TypewriterProps } from './typewriter.types';
import './Typewriter.scss';

export const Typewriter: FC<TypewriterProps> = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  );
};