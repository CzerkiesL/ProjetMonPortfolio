import { defineStore } from 'pinia';

export const useDisplayType = defineStore('displayType', {
  state: () => ({
    isDesktop: screen.width > 600,
    displayName: screen.width > 600 ? 'desktop' : 'mobile',
  }),
  actions: {
    changeType() {
      if (screen.width > 700) {
        this.displayName = 'desktop';
        this.isDesktop = true;
      } else {
        this.displayName = 'mobile';
        this.isDesktop = false;
      }
    },
  },
});
