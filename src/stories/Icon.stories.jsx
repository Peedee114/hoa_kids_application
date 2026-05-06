import Icon from '../components/Icon';

const iconNames = ['home', 'message', 'reminder', 'alert', 'shield', 'star', 'user'];

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'home',
    title: 'Home'
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconNames
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The icon component centralizes SVG paths so icon wrappers can apply calm color tones consistently across the app.'
      }
    }
  }
};

export default meta;

export const Playground = {
  render: (args) => (
    <span className="icon-chip icon-chip--primary">
      <Icon {...args} />
    </span>
  )
};

export const IconGallery = {
  render: () => (
    <div className="icon-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(120px, 1fr))', width: '100%' }}>
      {iconNames.map((name, index) => {
        const tones = ['primary', 'secondary', 'accent', 'neutral'];
        const tone = tones[index % tones.length];

        return (
          <div className="icon-card" key={name}>
            <span className={`icon-chip icon-chip--${tone}`}>
              <Icon name={name} title={name} />
            </span>
            <p className="field-label">{name}</p>
          </div>
        );
      })}
    </div>
  )
};