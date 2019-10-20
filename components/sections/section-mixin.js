// Components
import Section from '@/node_modules/cv-assets/components/organisms/Section';
import CircleButton from '@/node_modules/cv-assets/components/atoms/CircleButton';

// Services
import { filterItemsTillNow } from '@/node_modules/cv-assets/services/FilterService';

export default {
  components: {
    Section,
    CircleButton
  },

  data() {
    return {
      splittedItems: this.splitItems(
        filterItemsTillNow(this.content.items),
        this.content.shownLimit
      ),
      visibleRest: false,
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
      if (!this.content.shownLimit) {
        return this.content.items.map((item) =>
          this.modifyItem(item)
        );
      }

      const modifiedItems = {};

      for (const i in this.splittedItems) {
        modifiedItems[i] = this.splittedItems[i].map((item) =>
          this.modifyItem(item)
        );
      }

      return modifiedItems;
    },

    moreTooltip() {
      return `...${this.$t(
        'andMore'
      )}`;
    }
  },

  methods: {
    modifyItem(item) {
      return item;
    },

    showRestItems() {
      this.visibleRest = true;
    },

    splitItems(items, amount) {
      return {
        initial: items.slice(0, amount),
        rest: items.slice(amount)
      };
    }
  }
};
