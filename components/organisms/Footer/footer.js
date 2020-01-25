// ===================================================|
// Organisms: FOOTER

import { mapState } from 'vuex';
import { homepage } from '@/package';

// Components
import Copyright from '@/node_modules/cv-assets/components/atoms/Copyright';

export default {
  components: { Copyright },

  computed: {
    ...mapState({
      foundationYear: ({ contentful }) => contentful.data.foundationYear
    }),
    domain() {
      return homepage.replace('http://', '').replace('https://', '');
    }
  }
};
