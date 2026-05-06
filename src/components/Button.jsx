const classes = {
  variant: {
    primary: 'button button--primary',
    secondary: 'button button--secondary',
    ghost: 'button button--ghost',
    danger: 'button button--danger'
  },
  size: {
    sm: 'button--sm',
    md: 'button--md',
    lg: 'button--lg'
  }
};

export default function Button({
  children,
  className = '',
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const composedClassName = [classes.variant[variant], classes.size[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={composedClassName} type={type} {...props}>
      {children}
    </button>
  );
}