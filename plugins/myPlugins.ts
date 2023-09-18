import { useMainStore } from "~/store";
export default defineNuxtPlugin((nuxtApp: any, $pinia: any) => {
  return {
    provide: {
      store: useMainStore($pinia),
    },
  };
});
