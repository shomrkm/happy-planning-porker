'use client';

import clsx from 'clsx';
import React from 'react';

import { Spinner } from '../Spinner';

const variants = {
  primary: 'bg-accent text-gray-200 hover:opacity-90 hover:text-gray-300',
  secondary: 'bg-primary text-accent hover:bg-gray-100',
  danger: 'bg-red-500 text-white hover:opacity-90',
};

const sizes = {
  xs: 'py-1 px-2 text-xs',
  sm: 'py-1.5 px-2 text-sm',
  md: 'py-2 px-3 text-md',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { startIcon?: never; endIcon?: never };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'sm',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex items-center justify-center rounded-md font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 font-bitter',
          `${variants[variant]} ${sizes[size]}} ${className}`,
          variant === 'secondary' && "border border-gray-200"
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span>
        {!isLoading && endIcon}
      </button>
    );
  }
);
Button.displayName = 'Button';
