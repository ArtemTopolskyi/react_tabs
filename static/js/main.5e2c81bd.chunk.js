(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),i=a.n(l),r=a(3),s=a(4),o=a(7),b=a(6),d=a(5),u=a.n(d),m=(a(13),function(e){var t=e.tabs,a=e.selectedTabId,n=e.onTabSelected;return c.a.createElement("div",null,c.a.createElement("ul",{className:"tab-list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:u()("tab-list__item",{selected:e.id===a})},c.a.createElement("button",{type:"button",className:"tab-list__button",onClick:function(){e.id!==a&&n(e)}},e.title))}))),c.a.createElement("p",{className:"tab__text"},t.find((function(e){return e.id===a})).content))}),f=[{id:"tab-1",title:"Home",content:"Some text 1"},{id:"tab-2",title:"Profile",content:"Some text 2"},{id:"tab-3",title:"Contact",content:"Some text 3"}],p=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:f[0]},e.changeSelectedTab=function(t){e.setState({selectedTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is ".concat(e.title)),c.a.createElement(m,{tabs:f,selectedTabId:e.id,onTabSelected:this.changeSelectedTab}))}}]),a}(c.a.Component);i.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5e2c81bd.chunk.js.map