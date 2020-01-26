// ===================================================|
// Atoms: LANGUAGE SWITCHER

// Components
import DotButton from '@/node_modules/cv-assets/components/atoms/DotButton';

// Plugins
import { mapActions } from 'vuex';

export default {
  components: {
    DotButton
  },

  props: {
    languages: {
      type: Array,
      required: true
    }
  },

  methods: {
    ...mapActions('core', [
      'toggleLoadingFlag'
    ]),

    tooltipLabel(targetLang) {
      return this.$i18n.locales.find((lang) => lang.code === targetLang).name;
    },

    changeLang(code) {
      this.toggleLoadingFlag();
      setTimeout(() => {
        this.$router.push({ path: this.localePath('index', code) });
      }, 150);
    }
  }
};
