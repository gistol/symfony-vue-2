<!-- <template>
    <div>
        <new-todo-button></new-todo-button>
        <div class="container">
            <div class="row" v-for="(each, index) in notes.chunk(3)" :key="index">
                <div class="col s4" v-for="note in each" :key="note.id">
                    <note :note="note"></note>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewToDoButton from './NewToDoButton.vue';
import Note from './Note.vue';
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  components: { Note, NewNoteButton, LoadingSpinner },

  data() {
    return {
      notes: [],
      loading: false
    }
  },

  mounted() {
    events.$on('delete-note', (e, note) => this.removeNote(e));
    events.$on('new-note', () => this.newNote());

    this.fetchNotes();
  },

  methods: {
    removeNote(note) {
      var index = this.notes.indexOf(note);

      if (index > -1) {
        this.notes.splice(index, 1);
      }
    },

    fetchNotes() {
      this.notes = [];
      this.loading = true;

      for (var i = 1; i <= 10; i++) {
        this.notes.push(this.createNote(i));
      }

      this.loading = false;
    },

    newNote() {
      var note = this.createNote(this.notes.length + 1);
      this.notes.unshift(note);
      note.editing = true;
    },

    createNote(index) {
      return {
        id: index,
        title: `Nota #${index}`,
        body: `Esta es la nota #${index}: -->` + 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias similique quidem iusto maiores iure quod deleniti beatae accusantium? Perspiciatis hic ipsam culpa accusantium aspernatur, harum nobis error incidunt voluptates?'
      }
    }
  }
}
</script> -->
