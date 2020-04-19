// ===================================================|
// Layouts: DEFAULT

import { mapState } from 'vuex';
import { filterLocales } from '@/node_modules/cv-assets/services/FilterService';

// Components
import CustomScrollbar from '@/node_modules/cv-assets/components/wrappers/CustomScrollbar';
import LangSwitcher from '@/node_modules/cv-assets/components/atoms/LangSwitcher';
import DotButton from '@/node_modules/cv-assets/components/atoms/DotButton';
import Spinner from '@/node_modules/cv-assets/components/atoms/Spinner';
import Header from '@/node_modules/cv-assets/components/organisms/Header';
import Footer from '@/node_modules/cv-assets/components/organisms/Footer';

// Graphics
import FileSVG from '@/node_modules/cv-assets/assets/graphics/pdf.svg';

export default {
  components: { CustomScrollbar, LangSwitcher, DotButton, Spinner, Header, Footer, FileSVG },

  computed: {
    ...mapState({
      locales: ({ contentful }) => contentful.locales,
      pdf: ({ contentful }) => contentful.data.pdfVersion.fields.file.url,
      loading: ({ core }) => core.loading
    }),

    languages() {
      return filterLocales(this.locales, this.$i18n.locale);
    }
  }
};
