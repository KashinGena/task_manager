<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create</h1>
      <form @submit.prevent="createTask">
        <div class="input-field">
          <input  id="title" v-model="title" type="text" class="validate" required>
          <label for="title">Title</label>
        </div>
        <div class="chips" ref="chips"></div>
        <div class="input-field ">
            <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
            <label for="description">Textarea</label>
            <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
          </div>
            <input type="text"  ref ="datepicker" class="datepicker">
            <button class="btn" type="submit">Create task</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
      title:'',
      description:'',
      chips:null,
      date:null
    }
  },
  components: {
  },
  methods: {
    createTask: function() {
      const task= {
        title:this.title,
        description: this.description,
        status:'active',
        id:Date.now(),
        tags:this.tags.chipsData,
        date:this.date.date
      }
      this.$store.dispatch('createTask',task) 
      this.$router.push('/list')    
    }
  },

  mounted() {
    
    this.tags = M.Chips.init(this.$refs.chips, {
      placeholder:'Tags'
    })

    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format:'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate:true
    })
  },
  destroyed() {
    if (this.date && this.date.destroy)
    this.date.destroy()

    if (this.tags && this.tags.destroy)
    this.tags.destroy()
  }
}
</script>
