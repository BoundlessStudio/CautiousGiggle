<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

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
          A reverse proxy designed to replace our short lived, rate limited, sharable tokens with your secret <span class="hiding-effect">API Keys</span> auto-magically.
        </p>
        <div class="flex justify-center">
          <a href="#" class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
            Get Started
          </a>
          <a href="#" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Documentation
          </a>
        </div>
      </div>
      <div class="w-1/2">
        <img src="/logo.0.png" class="w-4/5 glow-white" :style="{ opacity: computedOpacity }" />
      </div>
    </div>
  </section>

  <section class=" w-full py-20">
    <div class="h-full container mx-auto flex flex-row items-center gap-6">
      <div class="w-2/3">
        <div class="text-white p-5">
          <h2 class="text-3xl">What To Do</h2>
          <p class="py-2">
            To use our proxy in place of the standard OpenAI endpoint, you’ll need to make two simple changes to your existing API calls. 
          </p>
          <p class="py-2">
            First, replace the base URL Then, swap your original token for your new ephemeral token.
          </p>
          <p class="py-2">
            By making these replacements, you’ll route your requests through our proxy servers, ensuring they connect properly and securely. The steps are similar for any API endpoint—just remember to update both the base URL and the authorization token wherever they appear in your code.
          </p>
          <p class="py-2">
            Once the changes are in place, you can continue using original parameters.
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
            By weaving together the App, API, Proxy, and the Vault, you get a robust and secure ecosystem. 
            Deliver a superior user experience, protect sensitive credentials, and ensure peace of mind—both for your customers and for your team.
          </p>
          <h2 class="text-xl font-semibold text-gray-100 mb-4">Ecosystem</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><span class="font-semibold">App:</span> It manage ephemeral tokens, ensuring that real secrets never leave your protected environment.</li>
            <li><span class="font-semibold">API:</span> Complete end to end automation for creating and revoking ephemeral tokens. This allows you to integrate with Ai Sessions, Code Interpreter Sessions, and Web Containers </li>
            <li><span class="font-semibold">Proxy:</span> It takes the ephemeral token from your API, then secretly fetches the genuine API key from the Vault. By swapping in the real token at the last possible moment.</li>
            <li><span class="font-semibold">Vault:</span> When the Proxy needs a real token, the Vault steps in, hands over the secret, and then locks down again. This ensures your Api Key remain secure.</li>
          </ul>
          <p class="py-2">
            This approach paves the way for innovation without the stress of exposing your most critical secrets.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class=" w-full py-20">
    <div class="h-full container mx-auto flex flex-row items-center gap-6">
      <div class="">
        <div class="text-white p-5">
          <h2 class="text-3xl">Why Trust Us</h2>
          <div class="mb-8">
              <p class="text-lg mb-4">
                <a href="https://platform.openai.com/docs/guides/safety-best-practices" class="underline">Ai</a>, 
                <a href="https://learn.microsoft.com/en-us/azure/container-apps/sessions-code-interpreter" class="underline">Code Interpreter Sessions</a>, and 
                <a href="https://webcontainers.io/" class="underline">Web Containers</a> can be incredibly helpful, but handing over your permanent API keys to one of these services is like giving someone the master key to your house—it’s a huge security risk. With Ephemeral Keys, you can have the best of both worlds: empower these services to do their magic on your data without sacrificing security or control.</p>
          </div>
          <div class="mb-8">
              <h2 class="text-2xl font-semibold text-gray-100 mb-4">Why Permanent Keys Put You at Risk</h2>
              <ul class="list-disc pl-6 space-y-2">
                <li><span class="font-semibold">Unrestricted Access:</span> A permanent key can be used (and abused) anytime, anywhere, without your knowledge.</li>
                <li><span class="font-semibold">Breaches & Leaks:</span> Stolen or accidentally exposed keys can wreak havoc on your system.</li>
                <li><span class="font-semibold">Lack of Control:</span> It’s tough to rein in usage once an AI has your permanent keys in its memory or logs.</li>
              </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-gray-100 mb-4">Enter Ephemeral Keys</h2>
            <ul class="list-disc pl-6 space-y-4">
              <li>
                <p><span class="font-semibold">Enhanced Security:</span> Keys expire quickly, rendering them useless to attackers after their short lifespan.</p>
              </li>
              <li>
                <p><span class="font-semibold">Built-In Rate Limiting:</span> You get fine-grained control over how many requests are made, preventing overuse and protecting resources.</p>
              </li>
              <li>
                <p><span class="font-semibold">Usage Counter:</span> Restrict how many times an Ephemeral Key can be invoked.</p>
              </li>
            </ul>
            <p class="mt-4">When the AI finishes its task or you no longer need the enviroment, the Ephemeral Key can be revoked or automatically expire. No long-term keys left behind. Take control of leaks. Don't worry about Ai training data. It’s the perfect balance of agility, safety, and peace of mind.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

 


  <section class="w-full flex justify-center items-center mt-20 ">
    <footer class="bg-zinc-900 w-full line">
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
                <li class="mb-4"><a href="#" class="hover:underline">Login</a></li>
                <li class="mb-4"><a href="#" class="hover:underline">Subscriptions</a></li>
                <li class="mb-4"><a href="#" class="hover:underline">Documentation</a></li>
                <li><a href="#" class="hover:underline">FAQs</a></li>
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
                <li class="mb-4"><a href="/privacy" class="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" class="hover:underline">Terms &amp; Conditions</a></li>
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
  </section>
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

.glow-white {
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.4));
  opacity: 1;
  transition: opacity 0.2s linear;
}

/* Glow text animation */
@keyframes neon {
  from { text-shadow: 
    0 0 1px #db348499,
    0 0 4px rgba(219, 52, 132, 0.6),
    0 0 7px rgba(219, 52, 132, 0.6),
    0 0 10px rgba(219, 52, 132, 0.6),
    0 0 13px rgba(219, 52, 132, 0.6),
    0 0 16px rgba(219, 52, 132, 0.6),
    0 0 20px rgba(219, 52, 132, 0.6);
  }
  to { text-shadow: 
    0 0 1px #2cf1f999,
    0 0 4px rgba(44, 241, 249, 0.6),
    0 0 7px rgba(44, 241, 249, 0.6),
    0 0 10px rgba(44, 241, 249, 0.6),
    0 0 13px rgba(44, 241, 249, 0.6),
    0 0 16px rgba(44, 241, 249, 0.6),
    0 0 20px rgba(44, 241, 249, 0.6);
  }
}

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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: 3px solid #0000;
  border-radius: 12px;
  background: 
    linear-gradient(#131219, #131219) padding-box, 
    linear-gradient(var(--angle),#db3484, #2cf1f9) border-box;
  animation: 8s rotate linear infinite;
}

.line {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-top: 3px solid #0000;
  /* border-radius: 12px; */
  background: 
    linear-gradient(#131219, #131219) padding-box, 
    linear-gradient(var(--angle),#db3484, #2cf1f9) border-box;
  animation: 8s rotate linear infinite;
}

.hiding-effect {
  filter: blur(5px);
  transition: filter 0.3s ease;
  cursor: pointer;
}
.hiding-effect:hover {
  filter: blur(0);
}
</style>
