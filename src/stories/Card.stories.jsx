import Button from '../components/Button';
import Card from '../components/Card';
import Icon from '../components/Icon';
import Tag from '../components/Tag';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Cards use a compound component pattern with `Card.Header`, `Card.Body`, and `Card.Footer` so content stays structured without visual clutter.'
      }
    }
  }
};

export default meta;

export const FeatureCard = {
  render: () => (
    <div style={{ maxWidth: '360px' }}>
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
    </div>
  )
};

export const CardSet = {
  render: () => (
    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))' }}>
      <Card tone="feature">
        <Card.Header>
          <span className="icon-chip icon-chip--primary">
            <Icon name="shield" title="Shield" />
          </span>
          <Tag tone="secondary">Feature</Tag>
        </Card.Header>
        <Card.Body>
          <h3>Daily routine</h3>
          <p>Highlights the next recommended step for a child or caregiver.</p>
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
          <Tag tone="neutral">Profile</Tag>
        </Card.Header>
        <Card.Body>
          <h3>Maya’s progress</h3>
          <p>Good for summaries, reminders, and brief snapshots.</p>
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
          <Tag tone="primary">Reward</Tag>
        </Card.Header>
        <Card.Body>
          <h3>Calm focus badge</h3>
          <p>Accent use stays limited so the interface remains low stimulation.</p>
        </Card.Body>
        <Card.Footer>
          <div className="tag-row">
            <Tag tone="warning">Encouraging</Tag>
            <Tag tone="success">Positive</Tag>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
};