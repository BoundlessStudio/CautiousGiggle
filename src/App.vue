<script setup lang="ts">
</script>

<template>
  <section class='wrapper'>
    <div class='hero'>
    </div>
    <div class='content'>
      <div class='text'>Ephemerals</div>
      <img class='logo' src="/logo.png" />
    </div>
  </section>
</template>

<style scoped>
@keyframes smoothBg {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.wrapper {
  width: 100%;
  height: auto;
  position: relative;
}

.hero {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
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
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: var(--stripes), var(--rainbow);
    background-size: 200%, 100%;
    animation: smoothBg 60s linear infinite;
    background-attachment: fixed;
    mix-blend-mode: difference;
  }
}

.hero,
.hero::after {
  filter: blur(10px) opacity(50%) saturate(200%);
}

.content {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
  flex-flow: column;
}

.text {
  padding: 10px;
  font-size: calc(4rem - -5vw);
  color: white;
  /* background: linear-gradient(180deg, rgba(219,52,132,1) 0%, rgba(255,255,255,1) 50%, rgba(44,241,249,1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  animation: glow 3s ease-in-out infinite alternate;
}

.logo {
  width: 400px;
  transform: rotate(-45deg);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
  /*animation: dsGlow 2s infinite alternate;*/
}

@keyframes glow {
  from {
    text-shadow: 0 0 1px rgba(219, 52, 132, 0.6), 
                 0 0 4px rgba(219, 52, 132, 0.6), 
                 0 0 7px rgba(219, 52, 132, 0.6), 
                 0 0 10px rgba(219, 52, 132, 0.6), 
                 0 0 13px rgba(219, 52, 132, 0.6), 
                 0 0 16px rgba(219, 52, 132, 0.6), 
                 0 0 20px rgba(219, 52, 132, 0.6);
  }
  to {
    text-shadow: 0 0 1px rgba(44, 241, 249, 0.6), 
                 0 0 4px rgba(44, 241, 249, 0.6), 
                 0 0 7px rgba(44, 241, 249, 0.6), 
                 0 0 10px rgba(44, 241, 249, 0.6), 
                 0 0 13px rgba(44, 241, 249, 0.6), 
                 0 0 16px rgba(44, 241, 249, 0.6), 
                 0 0 20px rgba(44, 241, 249, 0.6);
  }
}
</style>