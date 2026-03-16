import { clsx } from 'clsx';
import s from './Card.module.css';

interface CardProps {
  description?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { description, title, className } = props;

  return (
    <div className={clsx(s.card, className)}>
      <div className={s.description}>{description}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};
