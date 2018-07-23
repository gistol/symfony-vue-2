<template>
    <tr>
        <td>{{ toDoItem.id }}</td>
        <td>
            <div class="input-field">
                <input id="description" type="text" v-model="newDescription">
                <label for="description">Description: </label>
            </div>
        </td>
        <td>
            <a class="btn-floating btn-small waves-effect waves-light" @click="saved">
                <i class="material-icons">save</i>
            </a>
            <a class="btn-floating btn-small waves-effect waves-light red" @click="deleted">
                <i class="material-icons">delete</i>
            </a>
        </td>
    </tr>
</template>

<script>
export default {
  props: ['toDoItem'],

  data() {
    return {
      newDescription: ''
    }
  },

  mounted() {
    this.newDescription = this.toDoItem.description;
  },

  updated() {
    Materialize.updateTextFields();
  },

  methods: {
    deleted() {
      events.$emit('delete-toDoItem', this.toDoItem);
    },

    saved() {
      this.$emit('accept', this.newDescription);
    }
  }
}
</script>
