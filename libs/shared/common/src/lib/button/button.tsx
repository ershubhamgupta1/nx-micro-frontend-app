import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: 'primary' | 'secondary';
};

export function Button({
  label,
  variant = 'primary',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  const variantClassName =
    variant === 'secondary' ? styles.secondary : styles.primary;

  return (
    <button
      type={type}
      className={[styles.button, variantClassName, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
