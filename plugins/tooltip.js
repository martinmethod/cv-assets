import VTooltip, { VPopover } from 'v-tooltip';

export default (Vue) => {
  Vue.use(VTooltip, {
    defaultOffset: 5
  });
  Vue.component('v-popover', VPopover);
};
