<script setup lang="ts">

</script>

<template>
  <footer class="bg-zinc-900 w-full line-top">
    <div class="relative container mx-auto p-4 py-6 lg:py-10">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
              <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#2cf1f9ff" />
                  <stop offset="50%" stop-color="#ffffff" />
                  <stop offset="100%" stop-color="#db3484ff" />
                </linearGradient>
              </defs>
              <path
                stroke="url(#gradient3)"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>
            <span class="self-center text-2xl tracking-widest whitespace-nowrap text-white pl-4">Ephemerals</span>
          </a>
          <span class="ml-10 text-sm whitespace-nowrap text-white">API Keys designed to be shared!</span>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4"><RouterLink to="/login" class="hover:underline">Login</RouterLink></li>
              <li class="mb-4"><RouterLink to="/subscriptions" class="hover:underline">Subscriptions</RouterLink></li>
              <li class="mb-4"><RouterLink to="/docs" class="hover:underline">Documentation</RouterLink></li>
              <li><RouterLink to="/faqs"  class="hover:underline">FAQs</RouterLink></li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4"><a href="https://github.com/BoundlessStudio/CautiousGiggle" target="_blank" class="hover:underline">Github</a></li>
              <li class="mb-4"><a href="https://x.com/VenatioStudios" target="_blank" class="hover:underline">Twitter</a></li>
              <li><a href="#" class="hover:underline">Discord</a></li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4"><RouterLink to="/privacy" class="hover:underline">Privacy Policy</RouterLink></li>
              <li><RouterLink to="/terms" class="hover:underline">Terms &amp; Conditions</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div class=" w-full pb-2">
        <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm sm:text-center text-gray-400">
            © 2025 <a href="https://venatiostudios.github.io/Web/" class="hover:underline">Venatio Studios</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-white ms-5">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>
            <a href="https://x.com/VenatioStudios" class="text-gray-500 hover:text-white ms-5">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="https://github.com/BoundlessStudio/CautiousGiggle" class="text-gray-500 hover:text-white ms-5">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>