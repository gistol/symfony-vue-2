<template>
  <div class="card hoverable">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4 right-align" @click="$emit('cancel', note)">
        <i class="material-icons">close</i>
      </span>

      <div class="input-field">
        <input id="title" type="text" v-model="newTitle">
        <label for="title">Title: </label>
      </div>

      <div class="input-field">
        <textarea id="body" class="materialize-textarea" v-model="newBody"></textarea>
        <label for="body">Body: </label>
      </div>
    </div>

    <div class="card-action">
      <a class="btn-floating btn-small waves-effect waves-light" @click="saved">
        <i class="material-icons">save</i>
      </a>

      <a class="btn-floating btn-small waves-effect waves-light red" @click="deleted">
        <i class="material-icons">delete</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['note'],

  data() {
    return {
      newTitle: '',
      newBody: ''
    }
  },

  mounted() {
    this.newTitle = this.note.title;
    this.newBody = this.note.body;
  },

  updated() {
    Materialize.updateTextFields();
  },

  methods: {
    deleted() {
      events.$emit('delete-note', this.note);
    },

    saved() {
      this.$emit('accept', this.newTitle, this.newBody);
    }
  }
}
</script>
