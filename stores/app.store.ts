import { defineStore } from "pinia";
// @ts-ignore
export const useAppStore = defineStore("app", {
  state: () => ({
    isSideBarOpen: false as boolean,
    showOverlay: false as boolean,
  }),
  getters: {
    getSidebarState(): boolean {
      return this.isSideBarOpen;
    },
    getOverlayState(): boolean {
      return this.showOverlay;
    },
  },
  actions: {
    openSidebar() {
      this.isSideBarOpen = true;
    },
    closeSidebar() {
      this.isSideBarOpen = false;
    },
  },
});
