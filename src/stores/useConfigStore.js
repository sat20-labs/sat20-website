import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', {
  state: () => ({
    language: 'en',  // 默认语言
  }),
  actions: {
    setLanguage(language) {
      this.language = language;
    }
  }
});
