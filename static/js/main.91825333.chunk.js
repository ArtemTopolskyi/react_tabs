(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),i=a.n(l),r=a(3),s=a(4),o=a(7),b=a(6),u=a(5),d=a.n(u),m=(a(13),function(e){var t=e.tabs,a=e.selectedTab,n=e.onTabSelected;return c.a.createElement("div",null,c.a.createElement("ul",{className:"tab-list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:d()("tab-list__item",{selected:e.id===a.id})},c.a.createElement("button",{type:"button",className:"tab-list__button",onClick:function(){e.id!==a.id&&n(e)}},e.title))}))),c.a.createElement("p",{className:"tab__text"},a.content))}),p=[{id:"tab-1",title:"Home",content:"Some text 1"},{id:"tab-2",title:"Profile",content:"Some text 2"},{id:"tab-3",title:"Contact",content:"Some text 3"}],f=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:p[0]},e.changeSelectedTab=function(t){e.setState({selectedTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is ".concat(e.title)),c.a.createElement(m,{tabs:p,selectedTab:e,onTabSelected:this.changeSelectedTab}))}}]),a}(c.a.Component);i.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.91825333.chunk.js.map