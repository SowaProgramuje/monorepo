<template>
  <div class="ui-input">
    <label class="ui-input__label" :for="name">{{ label }}</label>
    <input
      type="text"
      :name="name"
      :class="classes"
      @click="onClick"
      @focus="onFocus"
      :placeholder="placeholder"
    >
    <span
      class="ui-input__error"
      v-if="!valid && error"
    >
      {{ props.error }}
    </span>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'ui-input',
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      valid: null,
      error: null
    }
  },

  emits: ['click', 'focus'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'ui-input__input': true,
        'ui-input__input--error': props.error,
        'ui-input__input--valid': props.valid,
      })),
      // style: computed(() => ({
      //   backgroundColor: props.backgroundColor,
      // })),
      onClick() {
        emit('click');
      },
      onFocus() {
        emit('focus');
      }
    }
  },
};
</script>

<style scoped>
  .ui-input {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    display: flex;
    flex-direction: column;
  }
  
  .ui-input__label {
    padding-bottom: 10px;
  }

  .ui-input__input--error {
    border-color: red;
  }
  
  .ui-input__input--valid {
    border-color: green;
  }
</style>