<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value: any) => {
    setLocale(value) as any;
  },
});
</script>
<template>
  <div class="lang-menu">
    <div
      class="selected-lang flex flex-wrap lg:bg-transparent flex-row justify-center item-center"
      v-if="locale === 'vn-VN'"
    >
      <img src="/image/vn-VN.png" class="h-[33px] w-[33px]" alt="logo" />
      <img
        src="/image/arrow-drop-down.svg"
        class="h-[24px] w-[24px] lg:hidden"
        alt="arrow"
      />
      <img
        src="/image/arrow-drop-down_pc.svg"
        class="h-[24px] w-[24px] icon-arrow-pc"
        alt="arrow"
      />
    </div>
    <div
      class="selected-lang flex flex-wrap flex-row justify-center item-center"
      v-else
    >
      <img src="/image/en-US.png" class="h-[33px] w-[33px]" alt="logo" />
      <img
        src="/image/arrow-drop-down.svg"
        class="h-[24px] w-[24px] lg:hidden"
        alt="arrow"
      />
      <img
        src="/image/arrow-drop-down_pc.svg"
        class="h-[24px] w-[24px] icon-arrow-pc"
        alt="arrow"
      />
    </div>
    <ul>
      <li>
        <nuxt-link
          :to="switchLocalePath('en-US')"
          class="flex flex-wrap flex-row justify-start item-center"
        >
          <div v-if="locale === 'en-US'">
            <img
              :src="`/image/tick.svg`"
              class="h-[24px] w-[24px]"
              alt="logo"
            />
          </div>
          <div v-else class="h-[24px] w-[24px]"></div>
          <div>
            <img
              :src="`/image/en-US.png`"
              class="h-[33px] w-[33px]"
              alt="logo"
            />
          </div>
          <div class="text-language">English</div>
        </nuxt-link>
      </li>
      <li>
        <div class="border-b-[1px] border-[#C4C4C4] h-[1px] w-full mx-2"></div>
      </li>
      <li>
        <nuxt-link
          :to="switchLocalePath('vn-VN')"
          class="flex flex-wrap flex-row justify-start item-center"
        >
          <div v-if="locale === 'vn-VN'">
            <img
              :src="`/image/tick.svg`"
              class="h-[24px] w-[24px]"
              alt="logo"
            />
          </div>
          <div v-else class="h-[24px] w-[24px]"></div>
          <div>
            <img
              :src="`/image/vn-VN.png`"
              class="h-[33px] w-[33px]"
              alt="logo"
            />
          </div>
          <div class="text-language">Vietnamese</div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
