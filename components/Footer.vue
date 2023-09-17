<template>
  <footer
    class="pt-10 text-white bg-start bg-cover bg-[url('./image/BG_footer.png')] md:bg-[url('./image/BG_footer_page.svg')] w-full md:h-[446px]"
  >
    <div class="px-4 pb-[63px]">
      <div
        class="flex flex-wrap flex-col items-center justify-center pb-[68px]"
      >
        <div>
          <img
            src="/image/White_logo.svg"
            class="h-[96px] w-[163px] lg:h-[64px] lg:w-[100px]"
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

      <div class="pb-[78px]">
        <div class="text-start text-md-bold pb-5">Address</div>

        <div class="flex flex-wrap w-full flex-row pb-5">
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

      <div>
        <div class="text-start text-md-bold pb-5">Subscribe</div>

        <div>
          Subscribe to our newsletter and be the first to know about our updates
        </div>
        <div
          class="flex rounded-lg mt-4 bg-transparent border-gray-100 border-[1px] flex-wrap flex-row justify-between items-center"
        >
          <input
            v-model="message"
            class="bg-transparent input-footer rounded-lg py-4 pl-[14px]"
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
    <div class="bg-black text-lg text-center px-[88px] py-[30px]">
      2017 Copyright. Policy.
    </div>
  </footer>
</template>
<script>
export default {};
</script>
