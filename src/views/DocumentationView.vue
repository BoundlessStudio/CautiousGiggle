<script setup lang="ts">
import Header from "@/components/HeaderComponent.vue"
import Footer from "@/components/FooterComponent.vue"
</script>

<template>
  <Header />
  <section class="min-h-screen bg-black text-white p-8">
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
  </section>
  <Footer />
</template>

<style scoped>

</style>