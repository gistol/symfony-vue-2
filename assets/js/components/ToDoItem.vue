<template>
  <read-only-to-do-item v-if="! editing" :toDoItem="toDoItem" @toggle-edit="editing = ! editing"></read-only-to-do-item>

  <editable-to-do-item v-else :toDoItem="toDoItem" @cancel="editing = false" @accept="onAccept"></editable-to-do-item>
</template>

<script>
import EditableToDoItem from './EditableToDoItem.vue';
import ReadOnlyToDoItem from './ReadOnlyToDoItem.vue';

export default {
  props: ['toDoItem'],

  components: { EditableToDoItem, ReadOnlyToDoItem },

  data() {
    return {
      editing: false
    }
  },

  mounted() {
    this.editing = this.toDoItem.editing;
  },

  methods: {
    onAccept(description) {
      this.toDoItem.description = description;
      this.editing = false;
    }
  }
}
</script>
