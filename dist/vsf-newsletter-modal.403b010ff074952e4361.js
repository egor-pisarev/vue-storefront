(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1212:function(e,t,i){"use strict";i.r(t);var s=i(931),n=i(713),a={name:"NewsletterSubscribe",data:function(){return{email:""}},validations:{email:{required:n.required,email:n.email}},methods:{subscribe:function(e,t){if(!this.$v.$invalid)return this.$store.dispatch("newsletter/subscribe",this.email).then((function(t){e&&e(t)})).catch((function(e){t&&t(e)}))}}},o=i(10),l=i(712),r=i(727),u=i(718),c={mounted:function(){var e=this;this.$nextTick((function(){e.$bus.$emit("modal-show","modal-newsletter")}))},beforeDestroy:function(){this.$off("validation-error")},methods:{onSuccesfulSubmission:function(e){e&&this.$store.dispatch("notification/spawnNotification",{type:"success",message:o.a.t("You have been successfully subscribed to our newsletter!"),action1:{label:o.a.t("OK")}}),this.$bus.$emit("modal-hide","modal-newsletter")}},components:{ButtonFull:l.a,Modal:r.a,BaseInput:u.a},mixins:[s.a,a]},d=i(121),m=Object(d.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("modal",{attrs:{name:"modal-newsletter",width:450}},[i("p",{attrs:{slot:"header"},slot:"header"},[e._v("\n    "+e._s(e.$t("Newsletter"))+"\n  ")]),e._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[i("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.subscribe(e.onSuccesfulSubmission)}}},[i("div",{staticClass:"mb10"},[i("p",{staticClass:"h4"},[e._v("\n          "+e._s(e.$t("Sign up to our newsletter and receive a coupon for 10% off!"))+"\n        ")]),e._v(" "),i("base-input",{attrs:{focus:"",type:"email",name:"email",autocomplete:"email",placeholder:e.$t("E-mail address *"),validations:[{condition:e.$v.email.$error&&!e.$v.email.required,text:e.$t("Field is required.")},{condition:!e.$v.email.email&&e.$v.email.$error,text:e.$t("Please provide valid e-mail address.")}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),i("button-full",{staticClass:"mb35",attrs:{type:"submit",disabled:this.$v.$invalid},nativeOn:{click:function(t){return e.$v.email.$touch(t)}}},[e._v("\n        "+e._s(e.$t("Subscribe"))+"\n      ")])],1)])])}),[],!1,null,null,null);t.default=m.exports}}]);
//# sourceMappingURL=vsf-newsletter-modal.403b010ff074952e4361.js.map