(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d31ad09"],{"7be8":function(e,t,s){},8563:function(e,t,s){"use strict";s("7be8")},b40b:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"register"}},[t("h4",[e._v("用户名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),t("h4",[e._v("密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onRegister.apply(null,arguments)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),t("el-button",{attrs:{size:"medium"},on:{click:e.onRegister}},[e._v("立即注册")]),t("p",{staticClass:"notice"},[e._v("已有账号？"),t("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)},n=[],a=(s("14d9"),s("2f62")),o={data(){return{username:"",password:""}},methods:{...Object(a["b"])(["register"]),onRegister(){this.register({username:this.username,password:this.password}).then(()=>{this.$router.push({path:"/"})})}}},i=o,u=(s("8563"),s("2877")),p=Object(u["a"])(i,r,n,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5d31ad09.bc481824.js.map