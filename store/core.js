export const state = () => ({
  loading: false
});

export const actions = {
  toggleLoadingFlag({ commit, state }) {
    commit('TOGGLE_LOADING_FLAG', !state.loading);
  }
};

export const mutations = {
  TOGGLE_LOADING_FLAG(state, payload) {
    state.loading = payload;
  }
};
