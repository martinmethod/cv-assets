// Components
import DotButton from '@/node_modules/cv-assets/components/atoms/DotButton';
import Section from '@/node_modules/cv-assets/components/organisms/Section';
import SeeAll from '@/node_modules/cv-assets/components/organisms/SeeAll';

// Services
import { filterItemsTillNow } from '@/node_modules/cv-assets/services/FilterService';

export default {
  components: {
    DotButton,
    Section,
    SeeAll
  },

  data() {
    return {
      splittedItems: this.splitItems(
        filterItemsTillNow(this.content.items),
        this.content.shownLimit
      ),
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

    seeAllText() {
      return false;
    },

    printMeta() {
      return false;
    }
  },

  methods: {
    modifyItem(item) {
      return item;
    },

    showAllItems() {
      this.$showModal(SeeAll, {
        content: this.content
      }, {
        name: 'modal-see-all'
      })
    },

    splitItems(items, amount) {
      return {
        featured: items.slice(0, amount),
        regular: items.slice(amount)
      };
    }
  }
};
