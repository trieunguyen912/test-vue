<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation, EffectCoverflow } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Navigation],
    };
  },
  data() {
    return {
      logo: [
        { img: "logo_ea.png" },
        { img: "logo_disney.png" },
        { img: "logo_first.png" },
        { img: "logo_game.png" },
        { img: "logo_book.png" },
        { img: "logo_sega.png" },
        { img: "logo_2k.png" },
      ],
    };
  },
};
</script>

<template>
  <div
    class="pt-[40px] lg:mt-[128px] mt-[48px] pb-10 lg:pb-[120px] bg-[#F6F6F6] lg:px-[190px]"
  >
    <div class="title-content text-center pb-10 lg:pb-20 lg:pt-[120px]">
      {{ $t("title_partners") }}
    </div>
    <swiper
      :observer="true"
      :observeParents="true"
      :parallax="true"
      :navigation="true"
      :effect="coverflow"
      :grabCursor="true"
      :centeredSlides="true"
      :loop="true"
      :speed="500"
      :breakpoints="{
        '0': {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        '1280': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        '1580': {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }"
      :coverflowEffect="{
        rotate: 0,
        depth: 100,
        slideShadows: false,
      }"
      :autoplay="{ delay: 5000 }"
      :modules="modules"
      class="mySwiper text-center"
    >
      <swiper-slide
        class="h-[72px] min-w-[180px] 2xl:h-[100px] lg:transition-none 2xl:max-w-[270px]"
        v-for="(logo, index) in logo"
        :key="index"
        ><img
          class="h-[72px] min-w-[180px] 2xl:h-[100px] 2xl:max-w-[270px] object-contain"
          :src="`/image/${logo.img}`"
          alt="logo"
      /></swiper-slide>
    </swiper>
  </div>
</template>
