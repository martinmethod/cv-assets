// Components
import Section from '@/node_modules/cv-assets/components/organisms/Section';

export default {
  components: {
    Section
  },

  data() {
    return {
      component: null,
      titleTooltip: null
    };
  },

  props: {
    content: {
      type: Object,
      required: true
    }
  },

  computed: {
    items() {
      return this.content.items;
    }
  }
};
