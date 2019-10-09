// ===================================================|
// Sections: EXPERIENCE

// Libraries
import moment from 'moment';

// Mixins
import sectionMixin from '@/node_modules/cv-assets/components/sections/section-mixin';
import itemMixin from '@/node_modules/cv-assets/components/sections/item-mixin';

// Services
import { getPeriod } from '@/node_modules/cv-assets/services/PeriodService';
import { filterItemsTillNow } from '@/node_modules/cv-assets/services/FilterService';

export default {
  mixins: [sectionMixin, itemMixin],

  data() {
    return {
      visibleOld: false,
      splittedItems: this.splitItemsByActuality(
        filterItemsTillNow(this.content.items)
      ),
      titleTooltip: `${this.getTotalExperience(this.content.items)} ${this.$t(
        'totalExperience'
      )}`
    };
  },

  computed: {
    items() {
      const modifiedItems = {};

      for (const i in this.splittedItems) {
        modifiedItems[i] = this.splittedItems[i].map((item) =>
          this.modifyItem(item)
        );
      }

      return modifiedItems;
    },

    moreTooltip() {
      return `+${this.items.old.length} ${this.$t(
        'previousPositions'
      )} ${getPeriod(this.splittedItems.old)}`;
    }
  },

  methods: {
    getTotalExperience(items) {
      const totalPeriod = moment.duration();

      items.forEach((item) => {
        const { startDate, endDate } = item.fields;
        const start = moment(startDate);
        const end = endDate ? moment(endDate) : moment();
        const duration = moment.duration(end.diff(start));

        totalPeriod.add(duration);
      });

      return totalPeriod.humanize();
    },

    splitItemsByActuality(items, amount = 3) {
      const actual = items.slice(0, amount);
      const old = items.slice(amount);

      return {
        actual,
        old
      };
    },

    showOldItems() {
      this.visibleOld = true;
    }
  }
};
