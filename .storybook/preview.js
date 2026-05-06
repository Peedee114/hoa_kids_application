import '../src/styles.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered',
    backgrounds: {
      default: 'appBackground',
      values: [
        {
          name: 'appBackground',
          value: '#F7FAFC'
        },
        {
          name: 'white',
          value: '#FFFFFF'
        }
      ]
    },
    options: {
      storySort: {
        order: ['Foundations', 'Components']
      }
    }
  }
};

export default preview;