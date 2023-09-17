<script>
export default {
  data() {
    return {
      task: [
        {
          img: "img_game_1.png",
          name: "E-Space",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_7.png",
          name: "Pirates",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_2.png",
          name: "Magic tree",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_8.png",
          name: "E-Space",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_3.png",
          name: "Pirates",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_9.png",
          name: "Magic tree",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_4.png",
          name: "E-Space",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_10.png",
          name: "Pirates",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_5.png",
          name: "Magic tree",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_11.png",
          name: "E-Space",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_6.png",
          name: "Pirates",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
        {
          img: "img_game_12.png",
          name: "Magic tree",
          title:
            "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mx-4 mb-[48px]">
    <div class="title-content text-center">Our Games</div>
    <div class="mx-4 label-text mt-4 mb-10 text-[#757575]">
      As a pioneer of mobile app gamification, we take pride in originality and
      individuality, providing global players with state-of-the-art games that
      feature splendid storylines, sensational sound effects and magnificent
      animation that never cease to impress.
    </div>
    <div
      class="grid grid-row-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[15px] gap-y-[20px] w-full"
    >
      <div
        v-for="(task, index) in task"
        :key="index"
        class="relative card overflow-hidden rounded-[10px] shadow-card cursor-pointer"
      >
        <img
          class="h-[268px] w-[164px]"
          :src="`/image/${task.img}`"
          alt="game"
        />

        <div class="absolute bottom-0 left-0 pl-2 pr-[18px] pb-[11px]">
          <h4 class="text-md-bold mb-[3] text-white">{{ task.name }}</h4>
          <p class="text-sm text-white">{{ task.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
