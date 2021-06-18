// ===================================================|
// Atoms: CONTACT

import Icon from '@/node_modules/cv-assets/components/atoms/Icon';

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    icon: {
      type: [String, Object],
      required: true
    },
    value: {
      type: String,
      required: true
    },
    link: {
      type: String
    }
  },

  components: {
    Icon
  },

  computed: {
    wrapper() {
      return this.link ? 'a' : 'span';
    }
  }
};
