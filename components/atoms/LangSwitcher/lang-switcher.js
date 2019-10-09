// ===================================================|
// Atoms: LANGUAGE SWITCHER

// Components
import CircleButton from '@/node_modules/cv-assets/components/atoms/CircleButton';

export default {
  components: {
    CircleButton
  },

  props: {
    languages: {
      type: Array,
      required: true
    }
  },

  methods: {
    tooltipLabel(targetLang) {
      return this.$i18n.locales.find((lang) => lang.code === targetLang).name;
    },
    changeLang(code) {
      this.$router.push({ path: this.localePath('index', code) });
    }
  }
};
