import Button from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Start activity',
    variant: 'primary',
    size: 'md'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Buttons are built for clear sentence-case actions with gentle contrast and strong focus treatment. Use one primary button per section where possible.'
      }
    }
  }
};

export default meta;

export const Playground = {};

export const AllVariants = {
  render: () => (
    <div className="button-row">
      <Button variant="primary">Start activity</Button>
      <Button variant="secondary">View routine</Button>
      <Button variant="ghost">Read more</Button>
      <Button variant="danger">Leave session</Button>
    </div>
  )
};

export const Sizes = {
  render: () => (
    <div className="button-row">
      <Button size="sm" variant="secondary">
        Small secondary
      </Button>
      <Button size="md">Default primary</Button>
      <Button size="lg">Large primary</Button>
    </div>
  )
};