<template>
  <footer
    class="pt-10 lg:pt-[104px] text-white bg-start bg-cover bg-[url('/image/BG_footer.png')] lg:bg-[url('/image/BG_footer_page.png')] w-full"
  >
    <div
      class="px-4 xl:px-[60px] 2xl:px-[230px] pb-[63px] lg:pb-[60px] lg:flex lg:flex-wrap flex-col lg:flex-row lg:items-center lg:justify-between"
    >
      <div
        class="flex flex-wrap flex-col items-center justify-center pb-[68px]"
      >
        <div>
          <img
            src="/image/White_logo.svg"
            class="h-[96px] w-[163px]"
            alt="Logo"
          />
        </div>
        <div class="flex pt-10 flex-wrap flex-row items-center justify-center">
          <div>
            <img
              src="/image/ant-design_twitter-outlined.svg"
              class="h-[40px] w-[40px]"
              alt="Icon"
            />
          </div>
          <div class="ml-6">
            <img
              src="/image/ant-design_facebook-filled.svg"
              class="h-[40px] w-[40px]"
              alt="Icon"
            />
          </div>
          <div class="ml-6">
            <img
              src="/image/ant-design_linkedin-filled.svg"
              class="h-[40px] w-[40px]"
              alt="Icon"
            />
          </div>
        </div>
      </div>
      <div
        class="lg:flex lg:flex-wrap flex-col lg:flex-row lg:items-start lg:justify-between"
      >
        <div class="pb-[78px] lg:pb-0">
          <div class="text-start text-md-bold pb-5 lg:pb-10">
            {{ $t("title_address") }}
          </div>

          <div class="flex flex-wrap w-full flex-row pb-5 lg:pb-10">
            <div class="">
              <img
                src="/image/icon_address.svg"
                class="h-[40px] w-[40px]"
                alt="Logo"
              />
            </div>
            <div class="ml-2">
              <div class="text-md max-w-[282px]">
                {{ $t("content_address_us") }}
              </div>
              <div class="text-md max-w-[282px] mt-3">
                {{ $t("content_address_vn") }}
              </div>
            </div>
          </div>
          <div class="flex flex-wrap mb-10 w-full flex-row">
            <div class="">
              <img
                src="/image/icon_phone.svg"
                class="h-[40px] w-[40px]"
                alt="Logo"
              />
            </div>
            <div class="ml-2">
              <div class="text-md max-w-[282px] mt-3">
                {{ $t("content_phone") }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="lg:flex lg:flex-wrap flex-col lg:ml-10 max-w-[410px] lg:items-start lg:justify-start"
        >
          <div class="text-start text-md-bold pb-5 lg:pb-10">
            {{ $t("title_subscribe") }}
          </div>

          <div>
            {{ $t("content_subscribe") }}
          </div>
          <form @submit.prevent="handleSubmission">
            <div
              class="flex rounded-lg mt-4 lg:mt-3 w-full bg-transparent border-gray-100 border-[1px] flex-wrap flex-row justify-between items-center"
            >
              <input
                type="email"
                v-model="email"
                class="bg-transparent w-[270px] lg:w-[300px] input-footer 2xl:w-[340px] rounded-lg py-4 pl-[14px]"
                :placeholder="`${$t(`placeholder_footer`)}`"
              />

              <div v-if="icon === true">
                <img
                  :src="`/image/icon-check-white.png`"
                  class="h-[24px] w-[24px] mr-3"
                  alt="logo"
                />
              </div>
              <div v-else class="flex flex-wrap flex-row items-center">
                <button @click="submit">
                  <img
                    src="/image/arrow-right_footer.png"
                    class="h-[20px] w-[20px] mr-[14px]"
                    alt="Logo"
                  />
                </button>
              </div>
            </div>
            
            <span class="text-[12px] text-[#EF5350]" v-if="msg.email">{{
              msg.email
            }}</span>
          </form>
        </div>
      </div>
    </div>

    <div class="bg-black text-lg text-center px-[88px] py-[30px]">
      2017 Copyright. Policy.
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      msg: [],
      icon: false,
    };
  },
  
  watch: {
    email(value) {
      // binding this to the data value in the email input
      // this.email = value;
      if(value == ""){
        this.msg["email"] = "";
      }else{
        this.validateEmail(value);
      }
      
    },
  },
  methods: {
   
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] =  this.$t("error_invalid");
      }
    },
    handleSubmission() {
      if (this.email == "") {
        this.msg["email"] = this.$t("error_check") ;
        
      } else {
        this.icon = true;
        alert(`Email: ${this.email} `);
        setTimeout(() => (this.icon = false), 2000);
        this.email = "";
      }
    },
  },
  
};
</script>

