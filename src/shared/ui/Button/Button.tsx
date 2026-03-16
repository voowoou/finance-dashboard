import s from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props;

  return (
    <button {...restProps} className={s.button}>
      <div>{children}</div>
    </button>
  );
};
