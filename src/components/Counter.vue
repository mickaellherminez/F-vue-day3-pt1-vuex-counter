<template>
  <div>
    <h2>{{ currentValue }}</h2>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      increment() {
        this.$store.commit('INCREMENT_COUNTER')
      },
      decrement() {
        this.$store.commit('DECREMENT_COUNTER')
      }
    },
    computed: {
      currentValue() {
        return this.$store.state.currentValue; 
      }
    },
  }
</script>

<style scoped>
</style>
