<template>
  <div>
    <read-only-note v-if="! editing" :note="note" @toggle-edit="editing = ! editing"></read-only-note>

    <editable-note v-else :note="note" @cancel="editing = false" @accept="onAccept"></editable-note>
  </div>
</template>

<script>
import EditableNote from './EditableNote.vue';
import ReadOnlyNote from './ReadOnlyNote.vue';

export default {
  props: ['note'],

  components: { EditableNote, ReadOnlyNote },

  data() {
    return {
      editing: false
    }
  },

  mounted() {
    this.editing = this.note.editing;
  },

  methods: {
    onAccept(title, body) {
      this.note.title = title;
      this.note.body = body;
      this.editing = false;
    }
  }
}
</script>
