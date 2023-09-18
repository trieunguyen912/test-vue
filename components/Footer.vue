<template>
  <footer
    class="pt-10 lg:pt-[104px] text-white bg-start bg-cover bg-[url('./image/BG_footer.png')] lg:bg-[url('./image/BG_footer_page.png')] w-full"
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
          <div class="text-start text-md-bold pb-5 lg:pb-10">Address</div>

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
                Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
              </div>
              <div class="text-md max-w-[282px] mt-3">
                24/7 access ensures operators' businesses runs smoothly all year
                long.
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
                (+1) 555-0108-000 or (+236) 555-0108
              </div>
            </div>
          </div>
        </div>

        <div
          class="lg:flex lg:flex-wrap flex-col lg:ml-10 max-w-[410px] lg:items-start lg:justify-start"
        >
          <div class="text-start text-md-bold pb-5 lg:pb-10">Subscribe</div>

          <div>
            Subscribe to our newsletter and be the first to know about our
            updates
          </div>
          <div
            class="flex rounded-lg mt-4 lg:mt-3 w-full bg-transparent border-gray-100 border-[1px] flex-wrap flex-row justify-between items-center"
          >
            <input
              v-model="message"
              class="bg-transparent input-footer lg:w-[15vw] rounded-lg py-4 pl-[14px]"
              placeholder="Enter your email"
            />
            <img
              src="/image/arrow-right_footer.png"
              class="h-[20px] w-[20px] mr-[14px]"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-black text-lg text-center px-[88px] py-[30px]">
      2017 Copyright. Policy.
    </div>
  </footer>
</template>
<script>
export default {};
</script>
