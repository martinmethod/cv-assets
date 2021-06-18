// ===================================================|
// Organisms: HEADER

import { mapState } from 'vuex';

// Components
import Avatar from '@/node_modules/cv-assets/components/atoms/Avatar';
import Heading from '@/node_modules/cv-assets/components/atoms/Heading';
import ContactGroup from '@/node_modules/cv-assets/components/molecules/ContactGroup';

// Graphics
import AtSVG from '@/node_modules/cv-assets/assets/graphics/at.svg';
import HomeSVG from '@/node_modules/cv-assets/assets/graphics/home.svg';
import PhoneSVG from '@/node_modules/cv-assets/assets/graphics/phone.svg';
import PinSVG from '@/node_modules/cv-assets/assets/graphics/pin.svg';
import PortfolioSVG from '@/node_modules/cv-assets/assets/graphics/portfolio.svg';

export default {
  components: { Avatar, Heading, ContactGroup },

  computed: {
    ...mapState({
      identity: ({ contentful }) => contentful.data.identity.fields,
      accounts: ({ contentful }) => contentful.data.accounts,
      native_locale: ({ core }) => core.native_locale
    }),

    fullName() {
      const { firstName, lastName } = this.identity;
      return `${firstName} ${lastName}`;
    },

    meta() {
      const { email, phone, city, country } = this.identity;

      return [
        {
          id: 'email',
          icon: AtSVG,
          value: email,
          link: `mailto:${email}`
        },
        {
          id: 'phone',
          icon: PhoneSVG,
          value: phone
        },
        {
          id: 'location',
          icon: PinSVG,
          value: `${city}${ this.native_locale ? '' : ', ' + country}`,
          link: `https://www.google.com/maps/search/?query=${city}+${country}`
        }
      ];
    },

    links() {
      const { homePage, portfolio, icon } = this.identity;
      const links = [];

      if (homePage) {
        links.push({
          id: 'homepage',
          icon: icon ? icon.fields.file.url : HomeSVG,
          value: homePage.replace('http://', '').replace('https://', ''),
          link: homePage
        });
      }

      if (portfolio) {
        links.push({
          id: 'portfolio',
          icon: PortfolioSVG,
          value: 'portfolio',
          printValue: `portfolio.${homePage.replace('http://', '').replace('https://', '')}`,
          link: portfolio
        });
      }

      if (this.accounts) {
        this.accounts.forEach((acc) => {
          const { id, username, url, icon } = acc.fields;

          links.push({
            id,
            icon: icon.fields.file.url,
            value: username,
            printValue: url.replace('http://', '').replace('https://', ''),
            link: url
          });
        });
      }

      return links;
    }
  }
};
