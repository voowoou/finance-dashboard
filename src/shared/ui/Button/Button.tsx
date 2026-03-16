import clsx from 'clsx';
import s from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'text';
}

export const Button = (props: ButtonProps) => {
  const { variant = 'default', children, className, ...restProps } = props;

  return (
    <button {...restProps} className={clsx(s.button, s[variant], className)}>
      {children}
    </button>
  );
};

// TODO: Написать стили для текстовых кнопок
