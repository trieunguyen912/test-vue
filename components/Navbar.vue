<template>
  <header class="z-20 relative">
    <nav class="bg-transparent border-gray-200">
      <div
        class="flex flex-wrap items-center justify-between lg:items-start mx-4 lg:mx-[79px] pt-[48px] lg:pt-[20px]"
      >
        <a href="/" class="flex items-center">
          <img
            src="/image/White_logo.svg"
            class="h-[40px] w-[68px] lg:h-[64px] lg:w-[100px]"
            alt="Logo"
          />
        </a>
        <button
          @click="showMenu = !showMenu"
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-15 h-10 justify-center text-sm text-white rounded-lg lg:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <img
            src="/image/icon_menu.svg"
            class="h-[40px] w-[40px]"
            alt="Logo"
          />
        </button>
        <div
          :class="showMenu ? 'flex' : 'hidden'"
          class="w-full lg:block lg:w-auto"
          id="navbar-default"
        >
          <ul
            class="absolute lg:relative title-navbar top-[0] left-[0] px-4 flex flex-col w-full h-[100vh] lg:h-auto lg:p-0 bg-gray-50 lg:flex-row lg:space-x-10 lg:mt-0 lg:border-0 lg:bg-transparent"
          >
            <li
              class="flex flex-wrap items-center justify-between pb-10 lg:hidden pt-12"
            >
              <IconLanguage />
              <button
                @click="showMenu = !showMenu"
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center w-10 h-10 justify-center text-sm text-black rounded-lg lg:hidden focus:outline-none"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <img
                  src="/image/icon_close.svg"
                  class="h-[40px] w-[40px]"
                  alt="Logo"
                />
              </button>
            </li>

            <li
              @click="showMenu = !showMenu"
              class="border-b-[1px] md:border-0 border-[rgba(238, 238, 238, 1)]"
            >
              <a
                href="#about"
                class="block text-center pb-10 lg:pb-6 md:pt-6 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                {{ $t("about_us") }}</a
              >
            </li>
            <li
              @click="showMenu = !showMenu"
              class="border-b-[1px] md:border-0 border-[rgba(238, 238, 238, 1)]"
            >
              <a
                href="#game"
                class="block text-center py-10 lg:py-6 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >{{ $t("game") }}</a
              >
            </li>
            <li
              @click="showMenu = !showMenu"
              class="border-b-[1px] md:border-0 border-[rgba(238, 238, 238, 1)]"
            >
              <a
                href="#partners"
                class="block text-center py-10 lg:py-6 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >{{ $t("partners") }}</a
              >
            </li>
            <li
              @click="showMenu = !showMenu"
              class="border-b-[1px] md:border-0 border-[rgba(238, 238, 238, 1)]"
            >
              <a
                href="#contact"
                class="block text-center py-10 lg:py-6 text-black lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >{{ $t("contact_us") }}</a
              >
            </li>
            <li class="flex flex-wrap flex-row justify-center item-center">
              <IconLanguage class="icon-language" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
