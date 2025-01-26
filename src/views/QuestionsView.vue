<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-black text-white p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div class="space-y-6">
        <div class="box p-6">
          <h2 class="text-xl font-bold mb-2">What are ephemeral API keys?</h2>
          <p>
            Ephemeral API keys are temporary access tokens that automatically expire after a set period. 
            They provide temporary access to APIs while maintaining security through automatic expiration 
            and usage limits.
          </p>
        </div>

        <div class="box p-6">
          <h2 class="text-xl font-bold mb-2">How secure are ephemeral keys?</h2>
          <div>
            Ephemeral keys are highly secure because they:
            <ul class="list-disc ml-6 mt-2">
              <li>Automatically expire after a set time</li>
              <li>Have built-in rate limiting</li>
              <li>Can be revoked at any time</li>
              <li>Are isolated from your main API keys</li>
            </ul>
          </div>
        </div>

        <div class="box p-6">
          <h2 class="text-xl font-bold mb-2">What happens when a key expires?</h2>
          <p>
            When a key expires, it immediately becomes invalid and can no longer be used to make API requests. 
            You'll need to generate a new key to continue making requests.
          </p>
        </div>

        <div class="box p-6">
          <h2 class="text-xl font-bold mb-2">Can I customize key expiration times?</h2>
          <p>
            Yes, depending on your subscription plan, you can set custom expiration times for your ephemeral keys. 
            Pro and Enterprise plans offer more flexibility in key management.
          </p>
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