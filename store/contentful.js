import {
  getLocales,
  getContent
} from '@/node_modules/cv-assets/services/ContentfulService';
import { contentfulLayout } from '~/site.json';

export const state = () => ({
  locales: {},
  data: {}
});

export const mutations = {
  SET_LOCALES(state, payload) {
    state.locales = payload;
  },

  SET_DATA(state, payload) {
    state.data = payload;
  }
};

export const actions = {
  async fetchLocales({ commit }) {
    try {
      const response = await getLocales();

      return commit('SET_LOCALES', response.items);
    } catch (e) {
      $nuxt.error({
        statusCode: e.response.status,
        message: e.response.data.message
      });
    }
  },

  async fetchContent({ state, commit }, { locale }) {
    try {
      const response = await getContent({ locale });
      const data = response.items
        .filter((item) => item.sys.contentType.sys.id === 'cv')
        .filter((cv) => cv.fields.id === contentfulLayout)[0].fields;

      return commit('SET_DATA', data);
    } catch (e) {
      $nuxt.error({
        statusCode: e.response.status,
        message: e.response.data.message
      });
    }
  }
};
