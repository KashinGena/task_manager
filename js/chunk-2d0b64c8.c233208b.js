(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b64c8"],{"1d21":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[t.task?e("div",{staticClass:"col s6 offset-s3"},[e("h1",[t._v(t._s(t.task.title))]),e("form",{on:{submit:function(s){return s.preventDefault(),t.createTask(s)}}},[e("div",{staticClass:"input-field"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],staticClass:"validate",attrs:{id:"title",type:"text",required:""},domProps:{value:t.task.title},on:{input:function(s){s.target.composing||t.$set(t.task,"title",s.target.value)}}}),e("label",{staticClass:"active",attrs:{for:"title"}},[t._v("Title")])]),e("div",{ref:"chips",staticClass:"chips active"}),e("div",{staticClass:"input-field "},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],staticClass:"materialize-textarea",attrs:{id:"description"},domProps:{value:t.task.description},on:{input:function(s){s.target.composing||t.$set(t.task,"description",s.target.value)}}}),e("label",{staticClass:"active",attrs:{for:"description"}},[t._v("Description")]),e("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.task.description.length)+"/2048")])]),e("input",{ref:"datepicker",staticClass:"datepicker",attrs:{type:"text"}}),"completed"!==t.task.status?e("div",[e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Update")]),e("button",{staticClass:"btn blue",attrs:{type:"button"},on:{click:t.completeTask}},[t._v("Complete task")])]):t._e()])]):e("div",[t._v("Task is not found")])])},i=[],r=(e("a4d3"),e("e01a"),{computed:{task:function(){return this.$store.getters.taskById(+this.$route.params.id)}},data:function(){return{title:"",description:"",chips:null,date:null}},components:{},methods:{createTask:function(){this.title,this.description,Date.now(),this.tags.chipsData,this.date.date;this.$store.dispatch("updateTask",{description:this.task.description,date:this.date.date,id:this.task.id}),this.$router.push("/list")},completeTask:function(){this.$store.dispatch("completeTask",this.task.id),this.$router.push("/list")}},mounted:function(){this.tags=M.Chips.init(this.$refs.chips,{placeholder:"Tags",data:this.task.tags}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date(this.task.date),setDefaultDate:!0})},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.tags&&this.tags.destroy&&this.tags.destroy()}}),o=r,n=e("2877"),c=Object(n["a"])(o,a,i,!1,null,"080e409b",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b64c8.c233208b.js.map