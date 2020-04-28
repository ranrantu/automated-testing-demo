<template>
  <div>
    <span class="count">{{ count }}</span>
    <button @click="increment">加购商品</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },

  methods: {
    increment () {
      this.count++
    }
  }
}
</script>