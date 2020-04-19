// ===================================================|
// Wrappers: CUSTOM SCROLLBAR

import vueCustomScrollbar from 'vue-custom-scrollbar'
import { isMobile, osName } from 'mobile-device-detect';

export default {
  components: {
    vueCustomScrollbar
  },

  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
    disabled: Boolean
  },

  computed: {
    customScroll() {
      return !isMobile && !osName.toLowerCase().includes('mac') && !this.disabled
          ? {
            class: this.$style.root,
            ...this.settings
          }
          : {
            swicher: false
          };
    }
  }
};
