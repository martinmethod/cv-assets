export default ({ store }) => {
  return store.dispatch('contentful/fetchLocales');
};
