import UiInput from './UiInput.vue';

export default {
  title: 'Components/UiInput',
  component: UiInput,
  argTypes: {
    valid: Boolean,
    error: String,
    onClick: {},
    onFocus: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UiInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ui-input v-bind="args" />',
});

export const Input = Template.bind({});
Input.args = {
  label: 'Input',
  placeholder: 'City'
};

export const Error = Template.bind({});
Error.args = {
  error: 'Please type minimum 5 charakters',
  label: 'Input',
  valid: false,
  placeholder: 'City'
};

export const Valid = Template.bind({});
Valid.args = {
  valid: true,
  label: 'Input',
  placeholder: 'City'
};
