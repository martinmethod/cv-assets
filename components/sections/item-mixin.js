// Libraries
import moment from 'moment';

// Components
import Item from '@/node_modules/cv-assets/components/molecules/Item';

// Services
import {
  formatDate,
  formatDuration
} from '@/node_modules/cv-assets/services/FormatService';
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
          label = `${this.$t('ongoing')} ${formatDate(startDate)}`;
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
        description,
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
        text: description
          ? description
            .replace(/\n/g, '')
            .split('• ')
            .slice(1)
          : null,
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
          tooltip: stack
            ? `<p><strong>${this.$t('stack')}</strong></p> <p>${stack
                .map((tech) => `• ${tech.fields.name}`)
                .join('<br>')}</p>`
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
          file: document ? document.fields.file.url : null,
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
  }
};
