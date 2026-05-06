import { useMemo, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Icon from './components/Icon';
import Modal from './components/Modal';
import Tag from './components/Tag';

const iconItems = [
  { name: 'home', label: 'Home', tone: 'primary' },
  { name: 'message', label: 'Message', tone: 'secondary' },
  { name: 'reminder', label: 'Reminder', tone: 'accent' },
  { name: 'alert', label: 'Alert', tone: 'neutral' }
];

const summaryItems = [
  ['Palette', 'Calm & Friendly'],
  ['Headings', 'Atkinson Hyperlegible · 700/600'],
  ['Body and labels', 'Lexend · 18px body, 16px labels'],
  ['Spacing rhythm', '8px base with roomy cards and controls']
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalIds = useMemo(
    () => ({
      title: 'welcome-modal-title',
      description: 'welcome-modal-description'
    }),
    []
  );

  return (
    <div className="app-shell">
      <header className="surface-card hero">
        <div className="hero__copy">
          <p className="eyebrow">HOA Kids foundation</p>
          <h1>React components with calm colours, clear type, and gentle spacing</h1>
          <p className="body-large hero__text">
            This starter screen now uses reusable React components built around the selected calm and friendly palette, Atkinson Hyperlegible headings, and Lexend body text.
          </p>
          <div className="button-row">
            <Button onClick={() => setIsModalOpen(true)} variant="primary">
              Open welcome modal
            </Button>
            <Button variant="secondary">View activity cards</Button>
          </div>
        </div>

        <aside aria-label="Design choices summary" className="panel-muted hero__summary">
          <Tag tone="primary">Selected system</Tag>
          <div className="summary-list">
            {summaryItems.map(([label, value]) => (
              <div key={label}>
                <p className="summary-label">{label}</p>
                <p className="summary-value">{value}</p>
              </div>
            ))}
          </div>
        </aside>
      </header>

      <main className="layout-stack">
        <section aria-labelledby="buttons-title" className="section-block surface-card">
          <div className="section-heading">
            <p className="eyebrow">Button</p>
            <h2 id="buttons-title">Clear actions with soft emphasis</h2>
            <p className="section-copy">
              The button component supports variants and sizes while keeping consistent label sizing and strong focus states.
            </p>
          </div>

          <div className="component-showcase">
            <div className="component-preview">
              <div className="button-row">
                <Button>Start activity</Button>
                <Button variant="secondary">View routine</Button>
                <Button variant="ghost">Read more</Button>
                <Button variant="danger">Leave session</Button>
              </div>
              <div className="button-row">
                <Button size="lg">Large primary</Button>
                <Button size="sm" variant="secondary">
                  Small secondary
                </Button>
              </div>
            </div>
            <div className="panel-muted usage-note">
              <h3>Usage note</h3>
              <p>
                Keep one primary action per area, use sentence case, and avoid stacking too many competing button styles together.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="cards-title" className="section-block surface-card">
          <div className="section-heading">
            <p className="eyebrow">Card</p>
            <h2 id="cards-title">Composable cards for app content</h2>
            <p className="section-copy">
              The card component uses a compound pattern with header, body, and footer sections so it can support different content types cleanly.
            </p>
          </div>

          <div className="card-grid">
            <Card tone="feature">
              <Card.Header>
                <span className="icon-chip icon-chip--primary">
                  <Icon name="shield" title="Shield" />
                </span>
                <Tag tone="secondary">Feature card</Tag>
              </Card.Header>
              <Card.Body>
                <h3>Daily routine overview</h3>
                <p>
                  Use feature cards for the most important next step, such as morning check-in, reading practice, or quiet-time activities.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button variant="secondary">Open routine</Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header>
                <span className="icon-chip icon-chip--secondary">
                  <Icon name="user" title="User" />
                </span>
                <Tag tone="neutral">Profile card</Tag>
              </Card.Header>
              <Card.Body>
                <h3>Maya’s progress</h3>
                <p>
                  Secondary cards work well for summaries, rewards, reminders, or classroom snapshots with short supportive copy.
                </p>
              </Card.Body>
              <Card.Footer>
                <div className="metric-row">
                  <strong>4 activities</strong>
                  <span>completed this week</span>
                </div>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header>
                <span className="icon-chip icon-chip--accent">
                  <Icon name="star" title="Star" />
                </span>
                <Tag tone="primary">Reward card</Tag>
              </Card.Header>
              <Card.Body>
                <h3>Calm focus badge</h3>
                <p>
                  Accent-led cards should be used sparingly to celebrate success while keeping the rest of the interface low stimulation.
                </p>
              </Card.Body>
              <Card.Footer>
                <div className="tag-row">
                  <Tag tone="warning">Encouraging</Tag>
                  <Tag tone="success">Positive</Tag>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </section>

        <section aria-labelledby="icons-title" className="section-block surface-card">
          <div className="section-heading">
            <p className="eyebrow">Icon</p>
            <h2 id="icons-title">An icon component with reusable tone wrappers</h2>
            <p className="section-copy">
              The icon component keeps SVGs in one place, while wrapper classes give them calm, readable surfaces for navigation and status.
            </p>
          </div>

          <div className="icon-grid">
            {iconItems.map((item) => (
              <div className="icon-card" key={item.name}>
                <span className={`icon-chip icon-chip--${item.tone}`}>
                  <Icon name={item.name} title={item.label} />
                </span>
                <p className="field-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="tags-title" className="section-block surface-card">
          <div className="section-heading">
            <p className="eyebrow">Tag</p>
            <h2 id="tags-title">Status labels with soft contrast</h2>
            <p className="section-copy">
              The tag component keeps labels readable at the 16px label size while still giving the interface a light playful touch.
            </p>
          </div>

          <div className="tag-row tag-row--wrap">
            <Tag tone="primary">Today</Tag>
            <Tag tone="secondary">Ready</Tag>
            <Tag tone="warning">Quiet activity</Tag>
            <Tag tone="success">Completed</Tag>
            <Tag tone="neutral">New</Tag>
          </div>
        </section>

        <section aria-labelledby="modal-section-title" className="section-block surface-card">
          <div className="section-heading">
            <p className="eyebrow">Modal</p>
            <h2 id="modal-section-title">A controlled modal component for focused decisions</h2>
            <p className="section-copy">
              The modal is controlled by React state and closes on backdrop click or `Escape`, which makes it reusable across multiple flows.
            </p>
          </div>

          <div className="component-showcase">
            <div className="component-preview">
              <Button onClick={() => setIsModalOpen(true)}>Preview modal</Button>
            </div>
            <div className="panel-muted usage-note">
              <h3>Usage note</h3>
              <p>
                Keep modal content short, provide one primary action, and avoid using modals for long reading tasks or dense forms.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="type-title" className="section-block surface-card">
          <div className="section-heading">
            <p className="eyebrow">Typography and spacing</p>
            <h2 id="type-title">The chosen scale in React component form</h2>
          </div>

          <div className="scale-grid">
            <div className="scale-item">
              <p className="scale-meta">H1 · 32/40 · 700</p>
              <h1 className="sample-h1">Big headings feel confident and welcoming</h1>
            </div>
            <div className="scale-item">
              <p className="scale-meta">H2 · 28/36 · 700</p>
              <h2 className="sample-h2">Section titles stay easy to scan</h2>
            </div>
            <div className="scale-item">
              <p className="scale-meta">H3 · 24/32 · 600</p>
              <h3 className="sample-h3">Component names remain clear</h3>
            </div>
            <div className="scale-item">
              <p className="scale-meta">H4 · 20/28 · 600</p>
              <h4 className="sample-h4">Smaller headings still hold structure</h4>
            </div>
            <div className="scale-item">
              <p className="scale-meta">Body large · 18/30 · 400</p>
              <p className="body-large">Instructions and supporting copy use a comfortable large body size for easier reading.</p>
            </div>
            <div className="scale-item">
              <p className="scale-meta">Body · 16/26 · 400</p>
              <p>Default paragraph text stays readable across cards, forms, and status messages without appearing cramped.</p>
            </div>
            <div className="scale-item">
              <p className="scale-meta">Label · 16/24 · 600</p>
              <p className="field-label">Buttons, tags, and inputs all use the same strong label rhythm.</p>
            </div>
            <div className="scale-item">
              <p className="scale-meta">Spacing · 8px base</p>
              <p>Use 8, 12, 16, 24, 32, and 40px spacing steps to keep layouts calm, tidy, and consistent.</p>
            </div>
          </div>
        </section>
      </main>

      <Modal
        descriptionId={modalIds.description}
        isOpen={isModalOpen}
        labelledBy={modalIds.title}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="modal__header">
          <Tag tone="primary">Modal</Tag>
          <button aria-label="Close modal" className="icon-button" onClick={() => setIsModalOpen(false)} type="button">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <h2 id={modalIds.title}>Welcome to the HOA Kids React component starter</h2>
        <p className="body-large" id={modalIds.description}>
          This modal is now a reusable React component that keeps the same calm palette, large readable type, and soft spacing rules as the rest of the system.
        </p>
        <div className="modal-note panel-muted">
          <div className="status-line">
            <span aria-hidden="true" className="status-dot" />
            <p>Keep modal content brief so it supports focus instead of interrupting it.</p>
          </div>
        </div>
        <div className="modal-actions">
          <Button onClick={() => setIsModalOpen(false)} variant="secondary">
            Close
          </Button>
          <Button>Continue</Button>
        </div>
      </Modal>
    </div>
  );
}