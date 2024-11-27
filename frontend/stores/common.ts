export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    async switchLoader(isLoading: boolean) {
      this.isLoading = isLoading
    }
  }
})
