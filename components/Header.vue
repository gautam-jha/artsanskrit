<template>
  <header>
    <nav class="flex items-center justify-between max-w-6xl pt-8 p-4 mx-auto">
      <a
        class="inline-flex items-center justify-center w-[98px] h-[98px]"
        href="/"
      >
       <img :src="logo"/>
      </a>

      <ul
        class="flex items-center space-x-2 text-base font-medium text-gray-800"
      >
        <li>
          <a
class="px-3 py-2 rounded-lg hover:text-red-500" href="/#portfolio"
          onclick="alert('Coming Soon')">
            Portfolio
          </a>
        </li>
        <li>
          <a class="px-3 py-2 rounded-lg hover:text-red-500" href="/#about" onclick="alert('Coming Soon')">
            About
          </a>
        </li>
        <li>
          <a class="px-3 py-2 rounded-lg hover:text-red-500" href="/#contact" onclick="alert('Coming Soon')">
            Contact
          </a>
        </li>
      </ul>

      <ul
        class="flex items-center space-x-2 text-base font-medium text-gray-500"
      >
        <li>
          <a class="px-3 py-2 rounded-lg hover:text-red-500">
            <svg
              width="41"
              height="22"
              viewBox="0 0 41 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.86426"
                y1="1"
                x2="39.774"
                y2="1"
                stroke="#282828"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1.91406 21L39.7233 21"
                stroke="#282828"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="11.3164"
                y1="11"
                x2="39.7738"
                y2="11"
                stroke="#282828"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>

export default {
  name: 'SiteHeader',
  data() {
    return { logo: require('../assets/img/logo.svg') }
  },
}
</script>
