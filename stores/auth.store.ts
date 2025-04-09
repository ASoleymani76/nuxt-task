import { defineStore } from "pinia";

// @ts-ignore
export const useAuthStore = defineStore("auth", {
  persist: {
    storage: persistedState.localStorage,
  },
  state: () => ({
    loggedIn: false as boolean,
    token: "" as string,
    user: null as object | null,
    role: "" as string,
    tempPhoneNumber: null as string | null,
    suggestions: [],
  }),
  getters: {
    isLogged(): boolean {
      return this.loggedIn;
    },
    getToken(): string {
      return this.token;
    },
    getUser(): Object | null {
      return this.user;
    },
    getTempPhoneNumber(): string | null {
      return this.tempPhoneNumber;
    },
    getSuggestions():Array<any>{
      return this.suggestions;
    }
  },
  actions: {
    addToSuggestions(content:string){
      this.suggestions.push(content);
    },
    removeFromSuggestions(content: string){
      let idx = this.suggestions.findIndex(e => e === content)
      if (idx > -1) {
        this.suggestions.splice(idx, 1);
      }
    },
    setTempPhoneNumber(number: string) {
      this.tempPhoneNumber = number;
    },
    logout() {
      const router = useRouter();
      this.loggedIn = false;
      this.token = "";
      this.user = null;
      this.role = "";
      router.push("/login");
    },
    setToken(token: any) {
      let cookieTime = new Date(Date.now()).getTime() + 86400000 * 30; // 30 days
      const cookie = useCookie("token", {
        // day in milliseconds
        expires: new Date(cookieTime),
      });
      cookie.value = token;
    },
    setUser(authenticationData: any) {
      this.loggedIn = true;
      if (authenticationData?.accessToken?.access_token) {
        this.setTokenByType(authenticationData);
        this.user = authenticationData.user;
        //@ts-ignore
        this.role = this.user.roles[0];
      }
    },
    setTokenByType(authenticationData: any) {
      if (authenticationData.accessToken.token_type === "Bearer") {
        this.token = "Bearer " + authenticationData.accessToken.access_token;
        this.setToken("Bearer " + authenticationData.accessToken.access_token);
      } else {
        this.token = authenticationData.accessToken.access_token;
        this.setToken(authenticationData.accessToken.access_token);
      }
    },
    setUserFormSignIn(User: any, token: any) {
      this.loggedIn = true;
      this.token = token;
      this.user = User;
    },
    async fetchUser() {
      //     Request for getting user
    },
  },
});
