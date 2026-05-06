import Tag from '../components/Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    children: 'Today',
    tone: 'primary'
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'success', 'neutral']
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Tags are kept at the accessible label size and use soft fills so status information stays visible without feeling loud.'
      }
    }
  }
};

export default meta;

export const Playground = {};

export const ToneSet = {
  render: () => (
    <div className="tag-row tag-row--wrap">
      <Tag tone="primary">Today</Tag>
      <Tag tone="secondary">Ready</Tag>
      <Tag tone="warning">Quiet activity</Tag>
      <Tag tone="success">Completed</Tag>
      <Tag tone="neutral">New</Tag>
    </div>
  )
};