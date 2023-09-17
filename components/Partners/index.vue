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
  <div class="pt-[48px] pb-10 bg-[rgba(246, 246, 246, 1))]">
    <div class="title-content text-center pb-10">Our Partners</div>
    <swiper
      :navigation="true"
      :effect="coverflow"
      :grabCursor="true"
      :centeredSlides="true"
      :loop="true"
      :speed="1000"
      :slidesPerView="1.9"
      :coverflowEffect="{
        rotate: 0,
        depth: 250,
        slideShadows: false,
      }"
      :autoplay="{ delay: 5000 }"
      :modules="modules"
      class="mySwiper text-center"
    >
      <swiper-slide
        class="h-[72px] min-w-[180px]"
        v-for="(logo, index) in logo"
        :key="index"
        ><img
          class="h-[72px] min-w-[180px] object-contain"
          :src="`/image/${logo.img}`"
          alt="logo"
      /></swiper-slide>
    </swiper>
  </div>
</template>
