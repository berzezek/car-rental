export const useNavbarStore = defineStore('navbarStore', {
  state: () => ({
    activeLink: 'home',
  }),
  actions: {
    switchActiveLink(activeLink: string) {
      this.activeLink = activeLink
    }
  }
})
