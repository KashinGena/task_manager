<template>
    <div>
        <h1>List</h1>
       <div class="row">
           <div class="input-field col s12 m6">
            <select v-model='optionFilter' ref="select">
                
                 <option selected value="">All</option>
                <option value="active">Active</option>
                <option value="outdate"> Outdate</option>
                <option value="completed">Completed</option>
            </select>
            <label>Status filter</label>
        </div>
       </div>
        
         <hr/>
        <table v-if='tasks.length!==0'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Open</th>
                </tr>
            </thead>
            <tr :key='task.id' v-for="(task,index) in tasks">
                <th>{{index+1}}</th>
                <th>{{task.title}}</th>
                <th><div class="description">{{task.description}}</div></th>
                <th>{{new Date(task.date).toLocaleDateString()}}</th>
                <th>{{task.status}}</th>
                <th><router-link tag="button" class="btn btn-small" :to="/task/+task.id">Open</router-link></th>
            </tr>
        </table>
        <div v-else>
            <h1>No tasks</h1>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            optionFilter:""
        }
    },
    computed: {
        tasks() {
            const tasks=this.$store.getters.tasks
            console.log(12);
            
            console.log(this.optionFilter);
            
            return (this.optionFilter!=="")?tasks.filter(t => t.status === this.optionFilter):tasks
        }
    },
     mounted() {
           M.FormSelect.init(this.$refs.select, {});
     }
}
</script>

<style lang="scss" scoped>
    .description {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>