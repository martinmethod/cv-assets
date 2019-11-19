import VModal from 'vue-js-modal';

export default (Vue) => {
  Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true
  });
// Use $showModal in order to have default options, because dynamicDefaults is not working
  Vue.prototype.$showModal = (component, props, options, events) => {
    Vue.prototype.$modal.show(
      component,
      props || {},
      {
        width: '100%',
        height: 'auto',
        scrollable: true,
        clickToClose: true,
        ...options
      },
      events
    );
  };
}
