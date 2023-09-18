<script>
export default {
  el: "#app",
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    toBottom: function () {
      window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <div
    class="bg-start bg-cover bg-[url('/image/BG_mobile_2.png')] md:bg-[url('/image/BG.svg')] mb-[48px] xl:mb-[157px] w-full md:w-auto md:bg-center md:h-[989px]"
  >
    <Navbar class="pb-6" />
    <div
      id="app"
      class="pt-6 relative lg:pt-[80px] 2xl:pt-[132px] flex flex-wrap flex-col justify-center items-center"
    >
      <div
        v-motion-roll-left
        class="title-content text-white text-center px-6 pb-3"
      >
        {{ $t("title_hero1") }}<br class="md:hidden" />
        {{ $t("title_hero2") }}
      </div>
      <div
        class="flex flex-wrap flex-col xl:backdrop-blur-[5px] xl:rounded-t-[80%] justify-center items-center xl:rounded-b-[80%] z-10 px-6 pt-6 pb-4 xl:px-30 xl:pt-5 xl:pb-[100px] 2xl:px-60 2xl:pt-10 2xl:pb-[200px]"
      >
        <Counter v-motion-roll-bottom date="October 20, 2023" />

        <div
          v-motion-roll-right
          class="text-sm xl:w-[400px] 2xl:w-[600px] pt-10 2xl:pt-0 text-white text-center"
        >
          {{ $t("content_hero") }}
        </div>
        <div
          v-motion-roll-bottom
          class="flex rounded-xl xl:w-[400px] 2xl:w-[600px] mt-4 xl:mt-7 bg-white flex-wrap flex-row justify-between items-center"
        >
          <input
            v-model="message"
            class="rounded-xl 2xl:w-[25vw] input py-4 pl-[14px]"
            :placeholder="`${$t(`placeholder`)}`"
          />
          <img
            src="/image/icon_arrow_right.png"
            class="h-[20px] w-[20px] mr-[14px]"
            alt="Logo"
          />
        </div>
      </div>
      <div class="px-4">
        <img
          src="/image/Fairy_mobile.png"
          class="h-[265px] w-[342px] z-0 xl:h-[738px] xl:w-[938px] xl:left-[-200px] xl:top-[100px] xl:absolute"
          alt="Logo"
        />
      </div>
      <transition name="fade" class="z-30">
        <div
          id="pagetop"
          class="fixed z-30 right-[16px] bottom-[26px] lg:right-[80px] lg:bottom-[150px]"
          v-show="scY < 300"
          @click="toBottom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 90 80"
            fill="none"
          >
            <g filter="url(#filter0_d_447_223)">
              <path
                d="M44 6.66682C62.4095 6.66682 77.3333 21.5907 77.3333 40.0002C77.3333 58.4097 62.4095 73.3335 44 73.3335C25.5905 73.3335 10.6666 58.4097 10.6666 40.0002C10.6666 21.5907 25.5905 6.66682 44 6.66682Z"
                fill="white"
              />
            </g>
            <path
              d="M55.7667 33.2998C55.1334 33.2998 54.5 33.5331 54 34.0331L44 44.0331L34 34.0331C33.0334 33.0664 31.4334 33.0664 30.4667 34.0331C29.5 34.9998 29.5 36.5998 30.4667 37.5664L42.2334 49.3331C43.2 50.2998 44.8 50.2998 45.7667 49.3331L57.5334 37.5664C58.5 36.5998 58.5 34.9998 57.5334 34.0331C57.0334 33.5331 56.4 33.2998 55.7667 33.2998Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_447_223"
                x="0.666626"
                y="0.666992"
                width="86.6666"
                height="86.6665"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_447_223"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_447_223"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </transition>
      <transition name="fade" class="z-30">
        <div
          id="pagetop"
          class="fixed z-30 right-[16px] bottom-[26px] lg:right-[80px] lg:bottom-[150px]"
          v-show="scY > 300"
          @click="toTop"
        >
          <svg
            class="icon-arrow-down"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 90 80"
            fill="none"
          >
            <g filter="url(#filter0_d_447_223)">
              <path
                d="M44 6.66682C62.4095 6.66682 77.3333 21.5907 77.3333 40.0002C77.3333 58.4097 62.4095 73.3335 44 73.3335C25.5905 73.3335 10.6666 58.4097 10.6666 40.0002C10.6666 21.5907 25.5905 6.66682 44 6.66682Z"
                fill="white"
              />
            </g>
            <path
              d="M55.7667 33.2998C55.1334 33.2998 54.5 33.5331 54 34.0331L44 44.0331L34 34.0331C33.0334 33.0664 31.4334 33.0664 30.4667 34.0331C29.5 34.9998 29.5 36.5998 30.4667 37.5664L42.2334 49.3331C43.2 50.2998 44.8 50.2998 45.7667 49.3331L57.5334 37.5664C58.5 36.5998 58.5 34.9998 57.5334 34.0331C57.0334 33.5331 56.4 33.2998 55.7667 33.2998Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_447_223"
                x="0.666626"
                y="0.666992"
                width="86.6666"
                height="86.6665"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_447_223"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_447_223"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </transition>
    </div>
  </div>
  <About id="about" />
  <Game id="game" />
  <Partners id="partners" />
  <Footer id="contact" />
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap");
</style>
