import { useMainStore } from "~/store";
export default defineNuxtPlugin((nuxtApp: any, $pinia: any) => {
  console.log(nuxtApp);
  return {
    provide: {
      store: useMainStore($pinia),
    },
  };
});
