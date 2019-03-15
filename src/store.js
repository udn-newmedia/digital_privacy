import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardNumber: 7,
    storyCardScript: {
      0: {
        index: 0,
        video: false,
        warning: false,
        message: false,
        button: false,
      },
      1: {
        index: 1,
        video: false,
        warning: false,
        message: true,
        button: true,
      },
      2: {
        index: 2,
        video: true,
        warning: true,
        message: false,
        button: true,
      },
      3: {
        index: 3,
        video: true,
        warning: true,
        message: true,
        button: true,
      },
      4: {
        index: 4,
        video: false,
        warning: true,
        message: true,
        button: true,
      },
      5: {
        index: 5,
        video: false,
        warning: true,
        message: true,
        button: true,
      },
      6: {
        index: 6,
        video: false,
        warning: true,
        message: true,
        button: true,
      },
    },
    storyCardPage: 0,
  },
  mutations: {
    incrementPage(state, param) {
      state.storyCardPage += param;
    },
  },
  actions: {
    updatePage(context, param) {
      context.commit('incrementPage', param);
    }
  },
});