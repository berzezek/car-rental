export const useLoginStore = defineStore('loginStore', {
  state: () => ({
  }),
  actions: {
    async signIn(username: string, password: string) {
      const { signIn, token, refreshToken, getSession } = useAuth();
      console.log('signIn', username, password);
    },

    
  },
});
