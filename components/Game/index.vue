<script>
export default {
  data() {
    return {
      task: [
        {
          img: "img_game_E-Space.png",
          name: "E-Space",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Kingland.png",
          name: "Kingland",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_The Last Game.png",
          name: "The Last Game",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_G-Dragon.png",
          name: "G-Dragon",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Pirates.png",
          name: "Pirates",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Witch Party.png",
          name: "Witch Party",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Rocky.png",
          name: "Rocky",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Blue Fire.png",
          name: "Blue Fire",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Magic tree.png",
          name: "Magic tree",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Aborigines.png",
          name: "Aborigines",

          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Cinderella.png",
          name: "Cinderella",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_Egypt Game.png",
          name: "Egypt Game",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="mx-4 lg:mx-0 pb-[48px] lg:flex lg:flex-wrap lg:flex-col lg:justify-center lg:items-center"
  >
    <div class="title-content text-center">{{ $t("title_game") }}</div>
    <div
      class="mx-4 label-text mt-4 mb-10 lg:max-w-[860px] text-center text-[#757575]"
    >
      {{ $t("content_game") }}
    </div>
    <div
      v-motion-slide-visible-bottom
      class="grid grid-row-6 md:grid-row-4 grid-cols-2 lg:mx-20 lg:my-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:gap-x-[40px] 2xl:gap-y-[40px] gap-x-[15px] gap-y-[20px]"
    >
      <div
        v-for="(task, index) in task"
        :key="index"
        class="relative card overflow-hidden rounded-[10px] max-w-[410px] shadow-card cursor-pointer"
      >
        <img
          class="min-h-[268px] w-full"
          :src="`/image/${task.img}`"
          alt="game"
        />

        <div
          class="absolute bottom-0 left-0 pl-2 pr-[18px] pb-[11px] lg:px-[32px] lg:pb-[40px]"
        >
          <h4 class="text-md-game lg:mb-4 lg:text-[40px] mb-[3] text-white">
            {{ task.name }}
          </h4>
          <p class="text-sm text-white max-w-[158px] lg:max-w-full">
            {{ task.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
