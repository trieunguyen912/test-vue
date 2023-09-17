<script>
export default {};
</script>
<template>
  <div
    class="bg-start bg-cover bg-[url('/image/BG_mobile_2.png')] md:bg-[url('/image/BG.svg')] mb-[48px] w-full md:h-[989px]"
  >
    <Navbar class="pb-6" />
    <div class="pt-6">
      <div class="title-content text-white text-center px-6 pb-3">
        We’re <br />
        Getting Ready
      </div>
      <div class="px-6 pt-6 pb-4">
        <div
          class="flex title-lock flex-wrap flex-row justify-between items-center rounded-[21px] bg-white px-6 py-[28px]"
        >
          <div>
            <p>30</p>
            <p class="text-lock">Day</p>
          </div>
          <div class="title-content-lock">﹕</div>
          <div>
            <p>18</p>
            <p class="text-lock">Hours</p>
          </div>
          <div class="title-content-lock">﹕</div>
          <div>
            <p>20</p>
            <p class="text-lock">Minutes</p>
          </div>
          <div class="title-content-lock">﹕</div>
          <div>
            <p>11</p>
            <p class="text-lock">Second</p>
          </div>
        </div>
        <div class="text-sm pt-10 text-white text-center">
          We will back to something amazing. Getting the latest updates about
          our games. Please sign up to our newsletter.
        </div>
        <div
          class="flex rounded-lg mt-4 bg-white flex-wrap flex-row justify-between items-center"
        >
          <input
            v-model="message"
            class="rounded-lg input py-4 pl-[14px]"
            placeholder="Enter your email"
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
          class="h-[265px] w-[342px]"
          alt="Logo"
        />
      </div>
    </div>
  </div>

  <About />
  <Game />
  <Partners />
  <Footer />
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap");
</style>
