export const state = () => ({
  loading: false,
  native_locale: undefined
});

export const actions = {
  toggleLoadingFlag({ commit, state }) {
    commit('TOGGLE_LOADING_FLAG', !state.loading);
  },

  setFlagForActiveNativeLocale({ commit, rootState }) {
    const languages = rootState.contentful.data.sections.find(({ fields }) => fields.id === 'languages');
    const native_lang = languages && languages.fields.items.find(({ fields }) => !!fields.native);
    const native_locale = native_lang && native_lang.fields.locale === this.$i18n.locale;
    commit('SET_NATIVE_LOCALE_FLAG', native_locale);

  }
};

export const mutations = {
  TOGGLE_LOADING_FLAG(state, payload) {
    state.loading = payload;
  },

  SET_NATIVE_LOCALE_FLAG(state, payload) {
    state.native_locale = payload;
  }
};
