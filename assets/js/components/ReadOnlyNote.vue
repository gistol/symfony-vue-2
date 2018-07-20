<template>
  <div class="card hoverable">
    <div class="card-content">
      <span class="card-title activator blue-grey-text text-darken-4">
        {{ note.title }}

        <i class="material-icons right">more_vert</i>
      </span>

      <p :class="zoom ? 'flow-text' : ''" v-text="note.body" @click="zoom = ! zoom"></p>
    </div>

    <div class="card-action">
      <a class="btn-floating btn-small waves-effect waves-light black" @click="zoom = ! zoom">
        <i class="material-icons" v-text="'zoom_' + (zoom ? 'out' : 'in')"></i>
      </a>

      <a class="btn-floating btn-small waves-effect waves-light" @click="$emit('toggle-edit')">
        <i class="material-icons">edit</i>
      </a>

      <a class="btn-floating btn-small waves-effect waves-light red" @click="deleted">
        <i class="material-icons">delete</i>
      </a>
    </div>

    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p class="flow-text">
        Here is some more information about this product that is only revealed once clicked on
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['note'],

  data() {
    return {
      zoom: false
    }
  },

  methods: {
    deleted() {
      events.$emit('delete-note', this.note);
    }
  }
}
</script>
