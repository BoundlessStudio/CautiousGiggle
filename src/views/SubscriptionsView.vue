<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-black text-white p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center">Choose Your Plan</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="box p-6">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">Basic</h2>
            <p class="text-4xl font-bold mb-4">$9<span class="text-xl">/month</span></p>
            <ul class="text-left mb-8">
              <li class="mb-2">✓ 100 ephemeral keys/month</li>
              <li class="mb-2">✓ Basic rate limiting</li>
              <li class="mb-2">✓ 24-hour key expiration</li>
              <li class="mb-2">✓ Email support</li>
            </ul>
            <button class="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
              Select Plan
            </button>
          </div>
        </div>
        
        <div class="box p-6">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">Pro</h2>
            <p class="text-4xl font-bold mb-4">$29<span class="text-xl">/month</span></p>
            <ul class="text-left mb-8">
              <li class="mb-2">✓ 500 ephemeral keys/month</li>
              <li class="mb-2">✓ Advanced rate limiting</li>
              <li class="mb-2">✓ Custom key expiration</li>
              <li class="mb-2">✓ Priority support</li>
              <li class="mb-2">✓ Usage analytics</li>
            </ul>
            <button class="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
              Select Plan
            </button>
          </div>
        </div>
        
        <div class="box p-6">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">Enterprise</h2>
            <p class="text-4xl font-bold mb-4">Custom</p>
            <ul class="text-left mb-8">
              <li class="mb-2">✓ Unlimited ephemeral keys</li>
              <li class="mb-2">✓ Custom rate limiting</li>
              <li class="mb-2">✓ Custom key policies</li>
              <li class="mb-2">✓ 24/7 support</li>
              <li class="mb-2">✓ Advanced analytics</li>
              <li class="mb-2">✓ SLA guarantee</li>
            </ul>
            <button class="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

.box {
  border: 3px solid #0000;
  border-radius: 12px;
  background: 
    linear-gradient(#131219, #131219) padding-box, 
    linear-gradient(var(--angle),#db3484, #2cf1f9) border-box;
  animation: 8s rotate linear infinite;
}
</style>