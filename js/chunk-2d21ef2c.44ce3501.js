(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ef2c"],{d879:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col s6 offset-s3"},[s("h1",[t._v("Create")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[s("div",{staticClass:"input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"validate",attrs:{id:"title",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("label",{attrs:{for:"title"}},[t._v("Title")])]),s("div",{ref:"chips",staticClass:"chips"}),s("div",{staticClass:"input-field "},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea",attrs:{id:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),s("label",{attrs:{for:"description"}},[t._v("Textarea")]),s("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.description.length)+"/2048")])]),s("input",{ref:"datepicker",staticClass:"datepicker",attrs:{type:"text"}}),s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Create task")])])])])},a=[],r=(s("a4d3"),s("e01a"),{name:"Home",data:function(){return{title:"",description:"",chips:null,date:null}},components:{},methods:{createTask:function(){var t={title:this.title,description:this.description,status:"active",id:Date.now(),tags:this.tags.chipsData,date:this.date.date};this.$store.dispatch("createTask",t),this.$router.push("/list")}},mounted:function(){this.tags=M.Chips.init(this.$refs.chips,{placeholder:"Tags"}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date,setDefaultDate:!0})},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.tags&&this.tags.destroy&&this.tags.destroy()}}),n=r,o=s("2877"),c=Object(o["a"])(n,i,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21ef2c.44ce3501.js.map