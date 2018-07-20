<template>
  <a class="btn-floating btn-large waves-effect waves-light green hoverable" @click="created">
    <i class="material-icons">add</i>
  </a>
</template>

<script>
export default {
  methods: {
    created() {
      events.$emit('new-note');
    }
  }
}
</script>

<style scoped>
  a {
    right: 25px;
    position: absolute;
  }
</style>
