(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{2252:function(e,s,t){Promise.resolve().then(t.bind(t,3282)),Promise.resolve().then(t.bind(t,4670))},2668:function(e,s,t){"use strict";var A=t(7437),a=t(1396),i=t.n(a);t(2265),s.Z=e=>{var s,t;let{dict:a,imageSrc:n,title:l,description:r,button:c}=e;return(0,A.jsx)("section",{className:"bb-page-header__area fix",children:(0,A.jsx)("div",{className:"bb-page-header__inner include__bg",style:{backgroundImage:"url(".concat(n,")")},children:(0,A.jsx)("div",{className:"container",children:(0,A.jsx)("div",{className:"row justify-content-center",children:(0,A.jsx)("div",{className:"col-xl-10 col-lg-10",children:(0,A.jsxs)("div",{className:"bb-page-header__content text-center",children:[(0,A.jsx)("h2",{className:"bb-page-header__content-title",children:null!==(s=null==a?void 0:a[l])&&void 0!==s?s:l}),r&&(0,A.jsx)("p",{className:"bb-page-header__content-description",children:null!==(t=null==a?void 0:a[r])&&void 0!==t?t:r}),c&&(0,A.jsx)(i(),{href:c.link,className:"bb-page-header__content-btn",children:c.title})]})})})})})})}},3282:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var A=t(7437),a=t(2265),i=t(4033),n=t(2668),l=t(9581),r=e=>{let{story:s,dict:t}=e;return(0,A.jsxs)("div",{className:"bb-story__details-sidebar",children:[(0,A.jsx)("h3",{className:"bb-story__details-sidebar-title",children:t.Story_details}),(0,A.jsxs)("div",{className:"bb-story__details-sidebar-item",children:[(0,A.jsxs)("div",{className:"bb-story__details-sidebar-inner",children:[(0,A.jsx)("h4",{className:"bb-story__details-title",children:t.Author}),(0,A.jsx)("span",{className:"bb-story__details-stext",children:null==s?void 0:s.username})]}),(0,A.jsxs)("div",{className:"bb-story__details-inner",children:[(0,A.jsx)("h4",{className:"bb-story__details-title",children:t.Date}),(0,A.jsx)("span",{className:"bb-story__details-stext",children:null==s?void 0:s.date})]}),(0,A.jsxs)("div",{className:"bb-story__details-inner",children:[(0,A.jsx)("h4",{className:"bb-story__details-title",children:t.Category}),(0,A.jsx)("span",{className:"bb-story__details-stext",children:null==s?void 0:s.tags.map(e=>e)})]})]})]})},c=t(3198),d=t(5705),o=()=>{let e=(0,i.usePathname)(),s=(0,c.v9)(e=>{var s,t;return null===(t=e.general)||void 0===t?void 0:null===(s=t.dictionary)||void 0===s?void 0:s.StoriesPage}),[t,o]=(0,a.useState)({}),[h,u]=(0,a.useState)({id:0,title:"",username:"",date:"",tags:[],description:null});return(0,a.useEffect)(()=>{s&&o(s)},[s]),(0,a.useEffect)(()=>{let e=+localStorage.getItem("story_id");(0,d.ps)(e).then(e=>{200==e.ResponseCode&&u(e.ResponseData)})},[e]),(0,A.jsxs)("main",{children:[(0,A.jsx)(n.Z,{imageSrc:l.Z.src,title:null==h?void 0:h.title,dict:t}),(0,A.jsx)("section",{className:"bb-story__details",children:(0,A.jsx)("div",{className:"container",children:(0,A.jsxs)("div",{className:"row",children:[(0,A.jsx)("div",{className:"col-lg-8 col-sm-12",children:(0,A.jsx)("div",{className:"bb-story__details-content",children:(0,A.jsx)("div",{dangerouslySetInnerHTML:{__html:h.description}})})}),(0,A.jsx)("div",{className:"col-lg-4 col-sm-12",children:(0,A.jsx)(r,{dict:t,story:h})})]})})})]})}},5705:function(e,s,t){"use strict";t.d(s,{$o:function(){return a},kh:function(){return n},ps:function(){return i}});var A=t(7983);let a=async()=>{let e=await A.ZP.get("/assets/mock/stories_data.json");return e},i=async e=>{let s=await A.ZP.get("/assets/mock/story_data_".concat(e,".json"));return s},n=async e=>{let s=await A.ZP.post("",e);return s}},9581:function(e,s){"use strict";s.Z={src:"/_next/static/media/event-bg-4.2be952a5.jpg",height:575,width:1039,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAJULn//EABoQAAEFAQAAAAAAAAAAAAAAAAEAAgMRIRL/2gAIAQEAAT8A6MJpmav/xAAXEQADAQAAAAAAAAAAAAAAAAABAhEA/9oACAECAQE/AGZhITv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQISIf/aAAgBAwEBPwCaVnh//9k=",blurWidth:8,blurHeight:4}},4033:function(e,s,t){e.exports=t(94)}},function(e){e.O(0,[922,306,930,360,82,670,971,472,744],function(){return e(e.s=2252)}),_N_E=e.O()}]);