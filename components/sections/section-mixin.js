// Components
import Section from '@/node_modules/cv-assets/components/organisms/Section';
import CircleButton from '@/node_modules/cv-assets/components/atoms/CircleButton';

export default {
  components: {
    Section,
    CircleButton
  },

  data() {
    return {
      component: null,
      visibleOld: null,
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
    },

    moreTooltip() {
      return false;
    }
  }
};
