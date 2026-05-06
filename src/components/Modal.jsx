import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, descriptionId, isOpen, labelledBy, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        aria-describedby={descriptionId}
        aria-labelledby={labelledBy}
        aria-modal="true"
        className="modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        {children}
      </div>
    </div>,
    document.body
  );
}