// ===================================================|
// Atoms: LANGUAGE SWITCHER

// Components
import DotButton from '@/node_modules/cv-assets/components/atoms/DotButton';

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
    tooltipLabel(targetLang) {
      return this.$i18n.locales.find((lang) => lang.code === targetLang).name;
    },
    changeLang(code) {
      this.$router.push({ path: this.localePath('index', code) });
    }
  }
};
