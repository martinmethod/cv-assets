// ===================================================|
// Sections: EXPERIENCE

// Libraries
import moment from 'moment';

// Mixins
import sectionMixin from '@/node_modules/cv-assets/components/sections/section-mixin';
import itemMixin from '@/node_modules/cv-assets/components/sections/item-mixin';

// Services
import { getPeriod } from '@/node_modules/cv-assets/services/PeriodService';

export default {
  mixins: [sectionMixin, itemMixin],

  data() {
    return {
      titleTooltip: `${this.getTotalExperience(this.content.items)} ${this.$t(
        'totalExperience'
      )}`
    };
  },

  computed: {
    seeAllText() {
      return `${this.$t('seeAll')} ${this.content.items.length} ${this.$t(
        'positions'
      )} (${getPeriod(this.content.items)})`;
    },
    printMeta() {
      return `+${this.items.regular.length} ${this.$t(
        'previousPositions'
      )} ${getPeriod(this.splittedItems.regular)}`;
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
    }
  }
};
