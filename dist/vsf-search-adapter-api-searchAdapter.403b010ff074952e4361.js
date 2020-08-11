(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{704:function(e,r,t){"use strict";t.r(r),t.d(r,"SearchAdapter",(function(){return d}));var n=t(751),o=t(16),s=t(172),u=t.n(s),i=t(2),c=t(116),a=t.n(c),l=t(7),h=t(0),y=t(15),p=function(e,r,t,n){return new(t||(t=Promise))((function(o,s){function u(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(u,i)}c((n=n.apply(e,r||[])).next())}))},f=function(e,r){var t,n,o,s,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=r.call(e,u)}catch(e){s=[6,e],n=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},d=function(){function e(){this.entities=[],this.initBaseTypes()}return e.prototype.search=function(e){return p(this,void 0,void 0,(function(){var r,n,s,c,p,d;return f(this,(function(f){switch(f.label){case 0:if(!this.entities[e.type])throw new Error("No entity type registered for "+e.type);return r={},e.searchQuery instanceof o.SearchQuery?[4,t.e(11).then(t.t.bind(null,1140,7))]:[3,3];case 1:return n=f.sent(),[4,o.elasticsearch.buildQueryBodyFromSearchQuery({config:h,queryChain:n.default(),searchQuery:e.searchQuery})];case 2:return r=f.sent(),""!==e.searchQuery.getSearchText()&&(r.min_score=h.elasticsearch.min_score),[3,4];case 3:r=e.searchQuery,f.label=4;case 4:return e.hasOwnProperty("groupId")&&null!==e.groupId&&(r.groupId=e.groupId),e.hasOwnProperty("groupToken")&&null!==e.groupToken&&(r.groupToken=e.groupToken),null!==e.store?[3,5]:(c=Object(l.b)(),[3,7]);case 5:return[4,Object(l.f)(e.store)];case 6:c=f.sent(),f.label=7;case 7:if(s=c,e.index=s.elasticsearch.index,p=Object(i.i)(Object(y.a)(s.elasticsearch,"host")),this.entities[e.type].url&&(p=Object(y.a)(this.entities[e.type],"url")),d={size:e.size,from:e.from,sort:e.sort},e._sourceExclude&&(d._source_exclude=e._sourceExclude.join(",")),e._sourceInclude&&(d._source_include=e._sourceInclude.join(",")),e.q&&(d.q=e.q),!e.index||!e.type)throw new Error("Query.index and Query.type are required arguments for executing ElasticSearch query");return"GET"===h.elasticsearch.queryMethod&&(d.request=JSON.stringify(r)),p=(p=p+"/"+encodeURIComponent(e.index)+"/"+encodeURIComponent(e.type)+"/_search")+"?"+a.a.stringify(d),[2,u()(p,{method:h.elasticsearch.queryMethod,mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:"POST"===h.elasticsearch.queryMethod?JSON.stringify(r):null}).then((function(e){return e.json()})).catch((function(e){throw new Error("FetchError in request to ES: "+e.toString())}))]}}))}))},e.prototype.handleResult=function(e,r,t,o){if(void 0===t&&(t=0),void 0===o&&(o=50),null===e)throw new Error("Invalid ES result - null not exepcted");if(e.hasOwnProperty("hits"))return{items:Object(n.a)(e.hits.hits,(function(e){return Object.assign(e._source,{_score:e._score,slug:e._source.slug?e._source.slug:e._source.hasOwnProperty("url_key")&&h.products.useMagentoUrlKeys?e._source.url_key:e._source.hasOwnProperty("name")?Object(i.o)(e._source.name)+"-"+e._source.id:""})})),total:e.hits.total,start:t,perPage:o,aggregations:e.aggregations,attributeMetadata:e.attribute_metadata,suggestions:e.suggest};var s=(e&&e.code)>=400?e:null;throw e.error||s?new Error(JSON.stringify(e.error||e)):new Error("Unknown error with elasticsearch result in resultProcessor for entity type '"+r+"'")},e.prototype.registerEntityType=function(e,r){var t=r.url,n=void 0===t?"":t,o=r.url_ssr,s=void 0===o?"":o,u=r.queryProcessor,i=r.resultProcessor;return this.entities[e]={queryProcessor:u,resultProcessor:i},""!==n&&(this.entities[e].url=n),""!==s&&(this.entities[e].url_ssr=s),this},e.prototype.initBaseTypes=function(){var e=this;this.registerEntityType("product",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"product",t,n)}}),this.registerEntityType("attribute",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"attribute",t,n)}}),this.registerEntityType("category",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"category",t,n)}}),this.registerEntityType("taxrule",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"taxrule",t,n)}}),this.registerEntityType("review",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"review",t,n)}}),this.registerEntityType("cms_page",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"cms_page",t,n)}}),this.registerEntityType("cms_block",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"cms_block",t,n)}}),this.registerEntityType("cms_hierarchy",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"cms_hierarchy",t,n)}})},e}()},751:function(e,r,t){"use strict";var n=t(123),o=t(64),s=t(171),u=t(54);var i=function(e,r){var t=-1,n=Object(u.a)(e)?Array(e.length):[];return Object(s.a)(e,(function(e,o,s){n[++t]=r(e,o,s)})),n},c=t(18);r.a=function(e,r){return(Object(c.a)(e)?n.a:i)(e,Object(o.a)(r,3))}}}]);
//# sourceMappingURL=vsf-search-adapter-api-searchAdapter.403b010ff074952e4361.js.map