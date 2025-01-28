<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-zinc-900 line-bottom">
    <div class="flex flex-wrap items-center justify-between container mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
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
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Ephemerals</span>
      </a>
      <div class="hidden w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <RouterLink to="/" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/docs" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Documentation</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>