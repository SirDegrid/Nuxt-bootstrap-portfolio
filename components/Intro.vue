<template>
  <client-only>
    <div class="animation-container">
      <Vue3Lottie
        :animationData="animationData"
        :height="200"
        :width="200"
      />
    </div>
  </client-only>
</template>

<script>
import { ref, onMounted } from 'vue'
import helloWorldAnimation from '~/static/hello_world.json'

export default {
  setup() {
    const animationData = ref({})

    onMounted(() => {
      animationData.value = helloWorldAnimation
    })

    return {
      animationData
    }
  }
}
</script>

<style scoped>
body {
  background-color: white;
}

.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 70px);
  width: 100%;
  margin-top: 70px;
}
</style>
