import Logo from './Logo.vue';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Logo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ui-button v-bind="args" />',
});

export const Logo = Template.bind({});
Logo.args = {
  alt: 'Logo',
};
