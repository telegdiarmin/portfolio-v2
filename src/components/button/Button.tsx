import type { FC } from 'react';
import type { ButtonProps } from './button.types';
import './Button.scss';

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};