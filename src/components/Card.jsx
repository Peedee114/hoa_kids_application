function Card({ children, className = '', tone = 'default', ...props }) {
  return (
    <article className={['card', `card--${tone}`, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </article>
  );
}

function CardHeader({ children, className = '' }) {
  return <div className={['card__header', className].filter(Boolean).join(' ')}>{children}</div>;
}

function CardBody({ children, className = '' }) {
  return <div className={['card__body', className].filter(Boolean).join(' ')}>{children}</div>;
}

function CardFooter({ children, className = '' }) {
  return <div className={['card__footer', className].filter(Boolean).join(' ')}>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;