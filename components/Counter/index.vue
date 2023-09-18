<script>
export default {
  /// time count down

  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      now: 0,
      count: 0,
    };
  },

  methods: {
    timer_loop() {
      this.count++;
      this.now = Math.trunc(new Date().getTime() / 1000);
      //console.log(this.now);
      this.count < 200 && setTimeout(this.timer_loop, 1000);
    },
  },
  mounted() {
    this.timer_loop();
  },
  computed: {
    seconds() {
      return (this.modifiedDate - this.now) % 60;
    },

    minutes() {
      return ((this.modifiedDate - this.now) / 60) % 60;
    },
    hours() {
      return ((this.modifiedDate - this.now) / 60 / 60) % 24;
    },
    days() {
      return (this.modifiedDate - this.now) / 60 / 60 / 24;
    },
    modifiedDate: function () {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
  },
};
</script>

<template>
  <div
    class="flex title-lock 2xl:w-[756px] flex-wrap flex-row justify-between 2xl:mb-[97px] items-center rounded-[21px] bg-white px-6 2xl:px-[40px] 2xl:py-[26px] py-[28px]"
  >
    <div>
      <p class="w-[42px] lg:w-[68px]">{{ Math.trunc(days) }}</p>
      <p class="text-lock">{{ $t("day") }}</p>
    </div>
    <div class="title-content-lock">﹕</div>
    <div>
      <p class="w-[42px] lg:w-[68px]">{{ Math.trunc(hours) }}</p>
      <p class="text-lock">{{ $t("hours") }}</p>
    </div>
    <div class="title-content-lock">﹕</div>
    <div>
      <p class="w-[42px] lg:w-[68px]">{{ Math.trunc(minutes) }}</p>
      <p class="text-lock">{{ $t("minutes") }}</p>
    </div>
    <div class="title-content-lock">﹕</div>
    <div>
      <p class="w-[42px] lg:w-[68px]">{{ Math.trunc(seconds) }}</p>
      <p class="text-lock">{{ $t("second") }}</p>
    </div>
  </div>
</template>
