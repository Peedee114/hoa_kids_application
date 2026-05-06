export default function Tag({ children, className = '', tone = 'primary' }) {
  return <span className={['tag', `tag--${tone}`, className].filter(Boolean).join(' ')}>{children}</span>;
}