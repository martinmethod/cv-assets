// ===================================================|
// Molecules: ITEM

// Components
import Heading from '@/node_modules/cv-assets/components/atoms/Heading';
import Paragraph from '@/node_modules/cv-assets/components/atoms/Paragraph';
import CircleButton from '@/node_modules/cv-assets/components/atoms/CircleButton';
import MetaGroup from '@/node_modules/cv-assets/components/molecules/MetaGroup';

// Graphics
import FileSVG from '@/node_modules/cv-assets/assets/graphics/pdf.svg';

export default {
  components: {
    Heading,
    Paragraph,
    CircleButton,
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
