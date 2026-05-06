import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Tag from '../components/Tag';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The modal is a controlled component rendered through a portal. It closes on backdrop click and `Escape`, which makes it suitable for short focused decisions.'
      }
    }
  }
};

export default meta;

export const Default = {
  render: () => {
    function ModalExample() {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Open welcome modal</Button>
          <Modal
            descriptionId="storybook-modal-description"
            isOpen={isOpen}
            labelledBy="storybook-modal-title"
            onClose={() => setIsOpen(false)}
          >
            <div className="modal__header">
              <Tag tone="primary">Modal</Tag>
              <button aria-label="Close modal" className="icon-button" onClick={() => setIsOpen(false)} type="button">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <h2 id="storybook-modal-title">Welcome to the HOA Kids React component starter</h2>
            <p className="body-large" id="storybook-modal-description">
              This modal shows the current tone, type, and spacing choices in a focused dialog pattern.
            </p>
            <div className="modal-note panel-muted">
              <div className="status-line">
                <span aria-hidden="true" className="status-dot" />
                <p>Keep modal content brief so it supports focus instead of interrupting it.</p>
              </div>
            </div>
            <div className="modal-actions">
              <Button onClick={() => setIsOpen(false)} variant="secondary">
                Close
              </Button>
              <Button>Continue</Button>
            </div>
          </Modal>
        </>
      );
    }

    return <ModalExample />;
  }
};