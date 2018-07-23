<template>
    <div>
        <new-to-do-button></new-to-do-button>

        <div class="container">
            <table class="striped responsive-table">
                <thead>
                    <tr>
                        <th width="10%">#</th>
                        <th width="75%">Description</th>
                        <th width="15%"></th>
                    </tr>
                </thead>
                <tbody>
                    <to-do-item v-for="toDoItem in toDoItemsOrdered" :key="toDoItem.id" :toDoItem="toDoItem"></to-do-item>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue';
import NewToDoButton from './NewToDoButton.vue';

export default {
    components: { ToDoItem, NewToDoButton },

    data() {
        return {
            toDoItems: []
        }
    },

    computed: {
        toDoItemsOrdered: function () {
            return _.orderBy(this.toDoItems, 'id')
        }
    },

  mounted() {
    events.$on('delete-toDoItem', (e, toDoItem) => this.removeToDoItem(e));
    events.$on('new-toDoItem', () => this.newToDoItem());

    this.fetchToDoItems();
  },

  methods: {
    removeToDoItem(toDoItem) {
      var index = this.toDoItems.indexOf(toDoItem);

      if (index > -1) {
        this.toDoItems.splice(index, 1);
      }
    },

    fetchToDoItems() {
      this.toDoItems = [];

      for (var i = 1; i <= 5; i++) {
        this.toDoItems.push(this.createToDoItem(i));
      }
    },

    newToDoItem() {
      var toDoItem = this.createToDoItem(this.toDoItems.length + 1);
      this.toDoItems.unshift(toDoItem);
      toDoItem.editing = true;
    },

    createToDoItem(index) {
      return {
        id: index,
        description: `This is the To Do Item #${index}, you will be able to edit and delete it with the next buttons.`
      }
    }
  }
}
</script>
