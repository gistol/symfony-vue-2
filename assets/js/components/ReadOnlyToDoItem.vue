<template>
    <tr>
        <td>{{ toDoItem.id }}</td>
        <td>{{ toDoItem.description }}</td>
        <td>
            <a class="btn-floating btn-small waves-effect waves-light" @click="$emit('toggle-edit')">
                <i class="material-icons">edit</i>
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
    }
  },

  methods: {
    deleted() {
      events.$emit('delete-toDoItem', this.toDoItem);
    }
  }
}
</script>
