import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      username: "小臧",
      count: 0,
    };
  },
  actions: {
    add() {
      this.count++;
    },
  },
});
