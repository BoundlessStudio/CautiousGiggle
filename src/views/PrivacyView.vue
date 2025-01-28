<script setup lang="ts">
import Header from "@/components/HeaderComponent.vue"
import Footer from "@/components/FooterComponent.vue"
</script>

<template>
  <Header />
  <section class="min-h-screen bg-black text-white p-8">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction</h2>
        <p class="mb-4">
          At Ephemerals, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, and protect your personal information when you use our services.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Information We Collect</h2>
        <ul class="list-disc ml-6 space-y-2">
          <li>Account information (email, name)</li>
          <li>Usage data (API calls, key generation)</li>
          <li>Payment information</li>
          <li>Technical data (IP address, browser type)</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <ul class="list-disc ml-6 space-y-2">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To detect and prevent fraud</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information from unauthorized access, 
          alteration, disclosure, or destruction.
        </p>
      </section>
    </div>
  </section>
  <Footer />
</template>