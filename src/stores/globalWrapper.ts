import { defineStore } from 'pinia';

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useWrapper = defineStore('wrapperStore', {
  state: () => ({
    selectedGroup: null,
  }),

  getters: {},
  actions: {},
});
