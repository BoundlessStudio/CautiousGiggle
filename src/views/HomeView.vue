<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Footer from "@/components/FooterComponent.vue"

// Choose your start and end scroll thresholds
// The scroll position at which fading starts
const startFade = 50  
// The scroll position at which the image becomes fully transparent
const endFade   = 400  

// Reactive reference for current scroll position
const scrollY = ref(0)

// Event listener to update scrollY
function onScroll() {
  scrollY.value = window.scrollY || window.pageYOffset
}

// Computed property for the image opacity
const computedOpacity = computed(() => {
  if (scrollY.value <= startFade) {
    // Fully visible
    return 1
  } else if (scrollY.value >= endFade) {
    // Fully transparent
    return 0
  } else {
    // In-between: fade out proportionally
    const fraction = (scrollY.value - startFade) / (endFade - startFade)
    return 1 - fraction
  }
})

// Register the scroll event when the component mounts
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

// Clean up the event listener when the component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <section class="w-full h-screen">
    <div class="hero w-full h-full min-h-screen flex justify-center items-center">
    </div>
    <div class="absolute inset-0 container mx-auto flex flex-row items-center">
      <div class="flex flex-col items-start text-left">
        <h1 class="title text-white text-9xl mb-8">
          Ephemerals
        </h1>
        <p class="mb-8 pl-2 pr-2 leading-relaxed text-gray-300 text-2xl">
          A reverse proxy that automatically swaps out short-lived, rate-limited tokens with your secret API Keys—securely and effortlessly.
        </p>
        <div class="flex justify-center">
          <RouterLink to="/subscriptions" class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
            Get Started
          </RouterLink>
          <RouterLink to="/docs" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Documentation
          </RouterLink>
        </div>
      </div>
      <div class="w-1/2">
        <img src="/logo.0.png" class="w-4/5 glow-white" :style="{ opacity: computedOpacity }" />
      </div>
    </div>
  </section>

  <section class="w-full py-20">
    <div class="h-full container mx-auto flex justify-center items-center">
      <div class="w-1/2">
        <div class="text-white p-5">
          <h2 class="text-3xl">About Us</h2>
          <p class="py-2">
            Ephemerals is a revolutionary service designed to make API key management safer and more efficient. Our platform provides a secure way to share and manage temporary API keys, perfect for development, testing, and collaboration scenarios.
          </p>
          <p class="py-2">
            Founded by developers who understood the challenges of API key management, Ephemerals aims to solve the common problems of key exposure and security risks in modern development workflows.
          </p>
          <p class="py-2">
            Our mission is to make API security accessible and manageable for developers of all skill levels, while maintaining the highest standards of security and reliability.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full py-20">
    <div class="h-full container mx-auto flex flex-row items-center gap-6">
      <div class="w-2/3">
        <div class="text-white p-5">
          <h2 class="text-3xl">What To Do</h2>
          <p class="py-2">
            Substitute Ephemerals' proxy for the standard OpenAI endpoint by making two simple changes in your existing API calls:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Replace the Base URL</li>
            <li>Use Your New Ephemeral Token</li>
          </ul>
          <p class="py-2">
            By adjusting both the base URL and the authorization token, you route requests through our secure proxy. 
            The process is the same for any API endpoint—just remember to update these fields wherever they appear in your code.
            Once these changes are in place, keep using your original parameters as usual.
          </p>
        </div>
      </div>
      <div class="w-1/3">
        <div class="box ">
          <div class="text-white p-5">
            <div class="py-2 font-bold text-lg">Replace</div>
              <pre>
              curl <span class="bg-yellow-300 text-yellow-900">https://api.openai.com</span>/v1/models \
                -H "Authorization: Bearer <span class="bg-yellow-300 text-yellow-900">sk-proj-*****</span>"
              </pre>
              <div class="py-2 font-bold text-lg">With</div>
              <pre>
              curl <span class="bg-green-300 text-green-900">https://proxy.ephemerals.dev</span>/v1/models \
                -H "Authorization: Bearer <span class="bg-green-300 text-green-900">ephemerals-*****</span>" 
              </pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full flex flex-row py-20">
    <div class="h-full container mx-auto flex flex-row items-center gap-6">
      <div class="w-1/2">
        <div class="box ">
          <div class="text-white p-5">
            <img src="/diagram.0.png" alt="Diagram" />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="text-white p-5">
          <h2 class="text-3xl">How Dose It Works</h2>
          <p class="py-2">
            By integrating our App, API, Proxy, and Vault, you create a secure ecosystem that delivers a superior user experience while protecting your sensitive credentials.
          </p>
          <h2 class="text-xl font-semibold text-gray-100 mb-4">Ecosystem</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><span class="font-semibold">App:</span> Manages ephemeral tokens so that real secrets never leave your secure environment.</li>
            <li><span class="font-semibold">API:</span> Automates the creation and revocation of ephemeral tokens, enabling integrations with AI Sessions, Code Interpreter Sessions, and Web Containers.</li>
            <li><span class="font-semibold">Proxy:</span> Receives the ephemeral token from the API, then secretly retrieves the genuine API key from the Vault—swapping it in at the last possible moment.</li>
            <li><span class="font-semibold">Vault:</span> Stores and protects your real API keys, only granting access to the Proxy when needed. Afterwards, it locks down again to keep your secrets safe.</li>
          </ul>
          <p class="py-2">
            This approach encourages innovation without risking exposure of your critical credentials.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class=" w-full py-20">
    <div class="h-full container mx-auto flex justify-center items-center">
      <div class="w-1/2">
        <div class="text-white p-5">
          <h2 class="text-3xl">Why Trust Us</h2>
          <div class="mb-8">
            <p class="text-lg mb-4">
              <a href="https://platform.openai.com/docs/guides/safety-best-practices" class="underline">Ai</a>, 
              <a href="https://learn.microsoft.com/en-us/azure/container-apps/sessions-code-interpreter" class="underline">Code Interpreter Sessions</a>, and 
              <a href="https://webcontainers.io/" class="underline">Web Containers</a> can be incredibly helpful, but handing over your permanent API keys to one of these services is like giving someone the master key to your house—it's a huge security risk. 
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-gray-100 mb-4">Enter Ephemeral Keys</h2>
            <ul class="list-disc pl-6 space-y-4">
              <li>
                <p><span class="font-semibold">Enhanced Security:</span> Keys expire quickly, making them useless to attackers if they're leaked.</p>
              </li>
              <li>
                <p><span class="font-semibold">Built-In Rate Limiting:</span> Control how many requests are made, preventing abuse or overuse.</p>
              </li>
              <li>
                <p><span class="font-semibold">Usage Counter:</span> Restrict the number of times a key can be invoked.</p>
              </li>
              <li>
                <p><span class="font-semibold">Flexible Revocation:</span> When the AI finishes its task or you're done with the environment, revoke the key or let it expire. No long-term keys left behind.</p>
              </li>
            </ul>
            <p class="mt-4">
              Strike the perfect balance of agility, security, and peace of mind. Keep your API keys protected while still leveraging the power of AI and other services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
@keyframes smooth {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.hero {
  --stripes: repeating-linear-gradient(
    100deg,
    #000 0%,
    #000 7%,
    transparent 10%,
    transparent 12%,
    #000 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 15%,
    #60a5fa 20%,
    #5eead4 25%,
    #60a5fa 30%
  );
  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  filter: blur(10px) invert(100%);
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  animation: smooth 60s linear infinite;
  background-attachment: fixed;
  mix-blend-mode: difference;
}

.hero,
.hero::after {
  filter: blur(10px) opacity(50%) saturate(200%);
}

.title {
  font-family: "Neonderthaw", sans-serif;
  animation: neon 3s ease-in-out infinite alternate;
}
</style>