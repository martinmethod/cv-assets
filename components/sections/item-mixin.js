// Libraries
import moment from 'moment';

// Components
import Item from '@/node_modules/cv-assets/components/molecules/Item';

// Services
import {
  formatDate,
  formatDuration
} from '@/node_modules/cv-assets/services/MomentService';
import { checkPeriod } from '@/node_modules/cv-assets/services/PeriodService';

// Graphics
import CalSVG from '@/node_modules/cv-assets/assets/graphics/calendar.svg';
import PinSVG from '@/node_modules/cv-assets/assets/graphics/pin.svg';
import PhoneSVG from '@/node_modules/cv-assets/assets/graphics/phone.svg';

export default {
  data() {
    return {
      component: Item
    };
  },

  methods: {
    formatPeriod({ startDate, endDate }) {
      const periodStatus = checkPeriod(startDate, endDate);
      const sameMonth = moment(endDate).isSame(startDate, 'month');
      let label;

      switch (periodStatus) {
        case 'starting':
          label = `${this.$t('starting')}: ${formatDate(startDate)}`;
          break;
        case 'ongoing':
          label = `${this.$t('ongoing')}: ${formatDate(startDate)}`;
          break;
        default:
          label = sameMonth
            ? formatDate(endDate)
            : `${formatDate(startDate)} — ${formatDate(endDate)}`;
      }

      return label;
    },

    modifyItem({ fields }) {
      const {
        name,
        title,
        startDate,
        endDate,
        host,
        duties,
        stack,
        document,
        link,
        relation,
        phone,
        location
      } = fields;

      const expEdu = {
        title,
        titleUrl: link,
        subtitle: host ? host.fields.name : null,
        subtitleUrl: host ? host.fields.homePage : null,
        details: [
          {
            type: 'calendar',
            value: this.formatPeriod({ startDate, endDate }),
            icon: CalSVG,
            tooltip: formatDuration(startDate, endDate || moment()),
            addon: checkPeriod(startDate, endDate)
          },
          {
            type: 'location',
            value: host ? host.fields.location : null,
            icon: PinSVG
          }
        ]
      };

      const format = {
        experience: {
          ...expEdu,
          text: duties
            ? duties
                .replace(/\n/g, '')
                .split('• ')
                .slice(1)
            : null,
          tooltip: stack
            ? `${this.$t('stack')}: ${stack
                .map((tech) => tech.fields.name)
                .join(', ')}`
            : null
        },

        education: {
          ...expEdu,
          file: document ? document.fields.file.url : null
        },

        courses: {
          ...expEdu,
          file: document ? document.fields.file.url : null
        },

        references: {
          title: name,
          titleUrl: link,
          subtitle: relation,
          details: [
            {
              type: 'phone',
              value: phone,
              icon: PhoneSVG
            },
            {
              type: 'location',
              value: location,
              icon: PinSVG
            }
          ]
        }
      };

      return {
        ...format[this.content.id]
      };
    }
  },

  computed: {
    items() {
      const modifiedItems = this.content.items.map((item) =>
        this.modifyItem(item)
      );

      return modifiedItems;
    }
  }
};
