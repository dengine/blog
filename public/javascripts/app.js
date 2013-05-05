(function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n,r,i=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var o=0,s=n.length;s>o;o++)r=n[o],".."===r?i.pop():"."!==r&&""!==r&&i.push(r);return i.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},s=function(t){return function(n){var r=o(t),s=i(r,n);return e.require(s)}},a=function(e,t){var r={id:e,exports:{}};t(r.exports,s(e),r);var i=n[e]=r.exports;return i},l=function(e){var o=i(e,".");if(r(n,o))return n[o];if(r(t,o))return a(o,t[o]);var s=i(o,"./index");if(r(n,s))return n[s];if(r(t,s))return a(s,t[s]);throw Error('Cannot find module "'+e+'"')},u=function(e,n){if("object"==typeof e)for(var i in e)r(e,i)&&(t[i]=e[i]);else t[e]=n};e.require=l,e.require.define=u,e.require.register=u,e.require.brunch=!0}})(),window.require.register("application",function(e,t,n){Application={initialize:function(){t("/lib/view_helper");var e=t("/views/headerview");t("/views/footerview");var n=t("/models/blog"),r=t("/views/blogview"),i=new n,o=i.fetch();o.done(function(){console.log(i),new r({collection:i})}),new e}},n.exports=Application}),window.require.register("initialize",function(e,t){var n=t("application");$(function(){n.initialize(),Backbone.history.start()})}),window.require.register("lib/router",function(e,t,n){t("application"),n.exports=Backbone.Router.extend({routes:{"":"home"},home:function(){}})}),window.require.register("lib/view_helper",function(){Handlebars.registerHelper("dateFormat",function(e){var t=e.split(/[^0-9]/),n=new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5]),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return n.getDate()+" "+r[n.getMonth()]+" "+n.getFullYear()})}),window.require.register("models/blog",function(e,t,n){var r=t("./post");n.exports=Backbone.Collection.extend({model:r,url:"/api/get"})}),window.require.register("models/post",function(e,t,n){n.exports=Backbone.Model.extend({defaults:{}})}),window.require.register("views/blogview",function(e,t,n){var r=t("./templates/blog"),i=t("/views/postview");n.exports=Backbone.View.extend({el:$("#blog"),template:r,initialize:function(){this.render()},render:function(){return this.$el.html(this.template),_.each(this.collection.models,function(e){this.renderEach(e)},this),this},renderEach:function(e){var t=new i({model:e});$(this.el).append(t.render().el)}})}),window.require.register("views/footerview",function(e,t,n){var r=t("./templates/footer");n.exports=Backbone.View.extend({el:$("footer"),template:r,initialize:function(){this.render()},render:function(){return this.$el.html(this.template),this}})}),window.require.register("views/headerview",function(e,t,n){var r=t("./templates/header");n.exports=Backbone.View.extend({el:$("header"),template:r,initialize:function(){this.render()},render:function(){return this.$el.html(this.template),this}})}),window.require.register("views/postview",function(e,t,n){var r=t("./templates/post");n.exports=Backbone.View.extend({className:"post",template:r,render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})}),window.require.register("views/templates/blog",function(e,t,n){n.exports=Handlebars.template(function(e,t,n,r,i){return this.compilerInfo=[2,">= 1.0.0-rc.3"],n=n||e.helpers,i=i||{},"<!--  -->"})}),window.require.register("views/templates/footer",function(e,t,n){n.exports=Handlebars.template(function(e,t,n,r,i){return this.compilerInfo=[2,">= 1.0.0-rc.3"],n=n||e.helpers,i=i||{},'<!--  <div class="footbar navbar navbar-fixed-bottom">\n --> 	\n\n<div class="footbar span12"></div>\n 	<p class="nav dis">The opinions stated here are my own and not those of my employers.</p>\n    <p class="nav pull-right copy">©duncanbeaton.com</p>\n</div>'})}),window.require.register("views/templates/header",function(e,t,n){n.exports=Handlebars.template(function(e,t,n,r,i){return this.compilerInfo=[2,">= 1.0.0-rc.3"],n=n||e.helpers,i=i||{},'<div id="logo" class="logo span6">\n	dunckr*\n</div>\n<div class="menu-bar span5">\n	<a href="https://twitter.com/dunckr" alt="@dunckr"><i class="icon-twitter icon-4x"></i></a>\n	<a href="http://github.com/dunckr" alt="github/dunckr"><i class="icon-github icon-4x"></i></a>\n	<a href="mailto:d" alt="Message"><i class="icon-envelope-alt icon-4x"></i></a>  \n</div>'})}),window.require.register("views/templates/post",function(e,t,n){n.exports=Handlebars.template(function(e,t,n,r,i){this.compilerInfo=[2,">= 1.0.0-rc.3"],n=n||e.helpers,i=i||{};var o,s,a,l="",u="function",c=this.escapeExpression,f=n.helperMissing;return l+='<div class="article span8">\n	<div class="heading">\n		<div class="title">',(o=n.title)?o=o.call(t,{hash:{},data:i}):(o=t.title,o=typeof o===u?o.apply(t):o),l+=c(o)+'</div>\n		<div class="date">',a={hash:{},data:i},l+=c((o=n.dateFormat,o?o.call(t,t.date,a):f.call(t,"dateFormat",t.date,a)))+'</div>\n	</div>\n	<div class="content">',(s=n.content)?s=s.call(t,{hash:{},data:i}):(s=t.content,s=typeof s===u?s.apply(t):s),(s||0===s)&&(l+=s),l+="</div>\n</div>"})});