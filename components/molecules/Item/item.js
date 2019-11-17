// ===================================================|
// Molecules: ITEM

// Components
import Heading from '@/node_modules/cv-assets/components/atoms/Heading';
import Paragraph from '@/node_modules/cv-assets/components/atoms/Paragraph';
import DotButton from '@/node_modules/cv-assets/components/atoms/DotButton';
import MetaGroup from '@/node_modules/cv-assets/components/molecules/MetaGroup';

// Graphics
import FileSVG from '@/node_modules/cv-assets/assets/graphics/pdf.svg';

export default {
  components: {
    Heading,
    Paragraph,
    DotButton,
    MetaGroup,
    FileSVG
  },

  methods: {
    headingWrapper(url) {
      return url ? 'a' : 'span';
    }
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
