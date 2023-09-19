<script></script>

<template>
  <div class="mb-[48px] xl:px-[60px] 2xl:px-[380px]">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-[40px]">
      <div v-motion-roll-left>
        <div class="mx-4 title-content">{{ $t("title_about") }}</div>
        <div class="mx-4 label-text mt-4 xl:mt-10 mb-10 text-[#757575]">
          {{ $t("content_about") }}
        </div>
        <div
          class="flex mx-4 xl:pt-20 flex-wrap flex-row xl:flex-col justify-start items-center xl:items-start"
        >
          <div class="w-[164px] xl:w-full">
            <div
              class="flex flex-wrap flex-row justify-start items-end text-about-blue"
            >
              <p class="text-[44px] xl:text-[80px]">600</p>
              <span class="text-[20px] xl:text-[40px] mb-2">
                {{ $t("text_m") }}</span
              ><span class="text-[36px] xl:text-[70px]">+</span>
            </div>
            <div class="text-about">{{ $t("text_about_user") }}</div>
          </div>

          <div class="w-[140px] xl:w-full ml-4 xl:ml-0 xl:pt-10">
            <div
              class="flex flex-wrap flex-row justify-start items-end text-about-blue"
            >
              <p class="text-about-blue text-[44px] xl:text-[80px]">135</p>
              <span class="text-[36px] xl:text-[70px]">+</span>
            </div>
            <div class="text-about">{{ $t("text_about_game") }}</div>
          </div>
        </div>
      </div>
      <div v-motion-roll-right>
        <div
          class="w-full pt-10 xl:py-[113px] xl:px-[75px] xl:mt-0 px-4 mt-10 bg-[#EEE]"
        >
          <div class="flex flex-wrap mb-10 w-full flex-row">
            <div class="">
              <img
                src="/image/icon_date_check.png"
                class="h-[40px] w-[40px]"
                alt="Logo"
              />
            </div>
            <div class="ml-5">
              <div class="text-md-bold">
                {{ $t("title_content_about_date") }}
              </div>
              <div class="text-md max-w-[282px] mt-3">
                {{ $t("content_about_date") }}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap mb-10 w-full flex-row">
            <div class="">
              <img
                src="/image/icon_pen_tool.png"
                class="h-[40px] w-[40px]"
                alt="Logo"
              />
            </div>
            <div class="ml-5">
              <div class="text-md-bold">
                {{ $t("title_content_about_design") }}
              </div>
              <div class="text-md max-w-[282px] xl:max-w-[336px] mt-3">
                {{ $t("content_about_design") }}
              </div>
            </div>
          </div>
          <div class="flex flex-wrap pb-10 xl:pb-0 w-full flex-row">
            <div class="">
              <img
                src="/image/icon_team_1.png"
                class="h-[40px] w-[40px]"
                alt="Logo"
              />
            </div>
            <div class="ml-5">
              <div class="text-md-bold">
                {{ $t("title_content_about_team") }}
              </div>
              <div class="text-md max-w-[282px] xl:max-w-[336px] mt-3">
                {{ $t("content_about_team") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-10 xl:mt-[400px] relative md:flex md:flex-wrap md:justify-center md:items-center"
    >
      <img
        src="/image/witch_mobile.svg"
        class="h-[243px] witch absolute w-[300px] xl:w-[533px] xl:h-[437px] bottom-[100px] xl:bottom-[320px] mr-[33px] ml-[42px]"
        alt="Logo"
      />
      <img
        src="/image/bg_Pin_map_mobile.png"
        class="h-[138px] mt-[251px] xl:mt-0 xl:bottom-0 w-full xl:w-[1160px] xl:h-[428px]"
        alt="Logo"
      />
    </div>
  </div>
</template>
