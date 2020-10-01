<template>
    <div class="row">
        <div class="col s6 offset-s3" v-if="task">
            <h1>{{task.title}}</h1>
            <form @submit.prevent="createTask">
            <div class="input-field">
                <input  id="title" v-model="task.title" type="text" class="validate" required>
                <label for="title" class="active">Title</label>
            </div>
            <div class="chips active"  ref="chips"></div>
            <div class="input-field ">
                <textarea id="description" class="materialize-textarea" v-model="task.description"></textarea>
                <label  class="active" for="description">Description</label>
                <span class="character-counter" style="float: right; font-size: 12px;">{{task.description.length}}/2048</span>
            </div>
                <input type="text"  ref ="datepicker" class="datepicker">
                <div v-if="task.status!=='completed'">
                    <button class="btn" type="submit">Update</button>
                    <button type="button" @click="completeTask" class="btn blue">Complete task</button>
                </div>
                
        </form>
        </div>
        <div v-else>Task is not found</div>
    </div>
       
</template>

<script>
export default {
    computed: {
        task() {
            return this.$store.getters.taskById(+this.$route.params.id)
        }
    },
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
      this.$store.dispatch('updateTask',{
          description:this.task.description,
          date: this.date.date,
          id:this.task.id
      }) 
      this.$router.push('/list')    
    },

    completeTask: function() {
        this.$store.dispatch('completeTask',this.task.id)
        this.$router.push('/list')    

    }
  },

  mounted() {
    
    this.tags = M.Chips.init(this.$refs.chips, {
      placeholder:'Tags',
      data: this.task.tags
    })

    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format:'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
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

<style lang="scss" scoped>

</style>