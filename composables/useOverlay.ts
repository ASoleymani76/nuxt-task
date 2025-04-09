export const useOverlay = {
  show() {
    const appStore = useAppStore();
    appStore.showOverlay = true;
  },
  close() {
    const appStore = useAppStore();
    appStore.showOverlay = false;
  },
};
