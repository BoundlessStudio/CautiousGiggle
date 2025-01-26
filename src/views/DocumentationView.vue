<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-black text-white p-8">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-8">Documentation</h1>
      
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">Getting Started</h2>
        <p class="mb-4">
          Learn how to integrate Ephemerals into your project and start using temporary API keys securely.
        </p>
        <div class="box p-6 mb-6">
          <pre class="text-sm">
            # Install via npm
            npm install @ephemerals/client

            # Or using yarn
            yarn add @ephemerals/client
          </pre>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">Basic Usage</h2>
        <p class="mb-4">
          Here's a simple example of how to use Ephemerals in your application:
        </p>
        <div class="box p-6">
          <pre class="text-sm">
            import { EphemeralsClient } from '@ephemerals/client';

            const client = new EphemeralsClient({
              apiKey: 'your-api-key'
            });

            // Generate a temporary key
            const tempKey = await client.createKey({
              expiration: '24h',
              rateLimit: 100
            });
          </pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">API Reference</h2>
        <p>
          Explore our comprehensive API documentation to learn about all available features and options.
        </p>
      </section>
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