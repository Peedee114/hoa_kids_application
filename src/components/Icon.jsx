const icons = {
  alert: (
    <path d="M12 2a7 7 0 00-7 7v3.2L3.3 16v1h17.4v-1L19 12.2V9a7 7 0 00-7-7zm0 20a3 3 0 002.8-2h-5.6A3 3 0 0012 22z" />
  ),
  home: <path d="M4 10.5L12 4l8 6.5V20h-5v-5h-6v5H4v-9.5z" />,
  message: <path d="M5 5h14v11H8l-3 3V5z" />,
  reminder: <path d="M12 21a8 8 0 100-16 8 8 0 000 16zm-1-13h2v5h-2zm0 6h2v2h-2z" />,
  shield: <path d="M12 3l7 4v5c0 4.4-3 8.5-7 9-4-0.5-7-4.6-7-9V7l7-4z" />,
  star: <path d="M12 2l2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.4 8.3l6-.9L12 2z" />,
  user: <path d="M12 4a4 4 0 110 8 4 4 0 010-8zm0 10c4.4 0 8 2 8 4.5V20H4v-1.5C4 16 7.6 14 12 14z" />
};

export default function Icon({ className = '', name, title }) {
  return (
    <svg
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
      className={['icon', className].filter(Boolean).join(' ')}
      focusable="false"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}