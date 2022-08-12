/*! For license information please see 14.8cdc1bc3.chunk.js.LICENSE.txt */
(this["webpackJsonp@stlite/application"]=this["webpackJsonp@stlite/application"]||[]).push([[14],{1582:function(t,e){},1595:function(t,e){},1601:function(t,e){},1604:function(t,e){},1605:function(t,e){},1761:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return K}));var a=n(22),i=n(2),r=n(3),o=n(5),c=n(6),s=n(4),h=n(0),u=n(1751),l=n(1559),p=n.n(l),b=n(1675),j=n(1179),d=n(1758),f=n(1673),w=n(1674),m=n(1342),O=n(1768),v=n(1752),g=n(1594),x=n(187),k=n(10),S=n.n(k),y=n(110),T=n(123),V=n(54),M=n(425),C=n(1326),E=n.n(C),F=n(90),L=n(42),N=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return n}(Object(M.a)(Error)),D=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return n}(Object(M.a)(Error)),J=function(){function t(){Object(i.a)(this,t)}return Object(r.a)(t,null,[{key:"get",value:function(){var e=Object(y.a)(S.a.mark((function e(){var n,a,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=L.a.current,a=n.commandLine,i=n.userMapboxToken,t.token&&t.commandLine===a.toLowerCase()){e.next=10;break}if(""===i){e.next=6;break}t.token=i,e.next=9;break;case 6:return e.next=8,this.fetchToken("https://data.streamlit.io/tokens.json","mapbox");case 8:t.token=e.sent;case 9:t.commandLine=a.toLowerCase();case 10:return e.abrupt("return",t.token);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchToken",value:function(){var t=Object(y.a)(S.a.mark((function t(e,n){var a,i,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get(e);case 3:if(a=t.sent,null!=(i=a.data[n])&&""!==i){t.next=7;break}throw new Error('Missing token "'.concat(n,'"'));case 7:return t.abrupt("return",i);case 10:throw t.prev=10,t.t0=t.catch(0),r=Object(F.a)(t.t0),new D("".concat(r.message," (").concat(e,")"));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}]),t}();J.token=void 0,J.commandLine=void 0,J.isRunningLocal=function(){var t=window.location.hostname;return"localhost"===t||"127.0.0.1"===t};var P=n(91),z=n.n(P),A=n(124),I=n(1),q=function(t){var e=t.error,n=t.width,a=t.deltaType;return e instanceof N?Object(I.jsx)(A.a,{width:n,name:"No Mapbox token provided",message:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("p",{children:["To use ",Object(I.jsxs)("code",{children:["st.",a]})," or ",Object(I.jsx)("code",{children:"st.map"})," you need to set up a Mapbox access token."]}),Object(I.jsxs)("p",{children:["To get a token, create an account at"," ",Object(I.jsx)("a",{href:"https://mapbox.com",children:"https://mapbox.com"}),". It's free for moderate usage levels!"]}),Object(I.jsxs)("p",{children:["Once you have a token, just set it using the Streamlit config option ",Object(I.jsx)("code",{children:"mapbox.token"})," and don't forget to restart your Streamlit server at this point if it's still running, then reload this tab."]}),Object(I.jsxs)("p",{children:["See"," ",Object(I.jsx)("a",{href:"https://docs.streamlit.io/library/advanced-features/configuration#view-all-configuration-options",children:"our documentation"})," ","for more info on how to set config options."]})]})}):e instanceof D?Object(I.jsx)(A.a,{width:n,name:"Error fetching Streamlit Mapbox token",message:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("p",{children:"This app requires an internet connection."}),Object(I.jsx)("p",{children:"Please check your connection and try again."}),Object(I.jsxs)("p",{children:["If you think this is a bug, please file bug report"," ",Object(I.jsx)("a",{href:"https://github.com/streamlit/streamlit/issues/new/choose",children:"here"}),"."]})]})}):Object(I.jsx)(A.a,{width:n,name:"Error fetching Streamlit Mapbox token",message:e.message})},G=function(t){return function(e){var n=function(n){Object(o.a)(h,n);var a=Object(c.a)(h);function h(t){var e;return Object(i.a)(this,h),(e=a.call(this,t)).initMapboxToken=Object(y.a)(S.a.mark((function t(){var n,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.get();case 3:n=t.sent,e.setState({mapboxToken:n,isFetching:!1}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a=Object(F.a)(t.t0),e.setState({mapboxTokenError:a,isFetching:!1});case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.state={isFetching:!0,mapboxToken:void 0,mapboxTokenError:void 0},e.initMapboxToken(),e}return Object(r.a)(h,[{key:"render",value:function(){var n=this.state,a=n.mapboxToken,i=n.mapboxTokenError,r=n.isFetching,o=this.props.width;return i?Object(I.jsx)(q,{width:o,error:i,deltaType:t}):r?Object(I.jsx)(T.a,{body:"Loading...",kind:V.a.INFO,width:o}):Object(I.jsx)(e,Object(s.a)({mapboxToken:a},this.props))}}]),h}(h.PureComponent);return n.displayName="withMapboxToken(".concat(e.displayName||e.name,")"),z()(n,e)}},R=n(9),W=Object(R.a)("div",{target:"e1q4dr930"})((function(t){var e=t.width;return{position:"relative",height:t.height,width:e}}),""),_=(n(1581),{classes:Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},j),w),f),m)});Object(g.b)([O.a,v.a]);var B=new d.a({configuration:_}),H=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={viewState:{bearing:0,pitch:0,zoom:11},initialized:!1,initialViewState:{}},t.componentDidMount=function(){t.setState({initialized:!0})},t.createTooltip=function(e){var n=t.props.element;if(!e||!e.object||!n.tooltip)return!1;var a=JSON.parse(n.tooltip);return a.html?a.html=t.interpolate(e,a.html):a.text=t.interpolate(e,a.text),a},t.interpolate=function(t,e){var n=e.match(/{(.*?)}/g);return n&&n.forEach((function(n){var a=n.substring(1,n.length-1);t.object.hasOwnProperty(a)&&(e=e.replace(n,t.object[a]))})),e},t.onViewStateChange=function(e){var n=e.viewState;t.setState({viewState:n})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=n.getDeckObject(this.props),e=this.state.viewState;return Object(I.jsx)(W,{className:"stDeckGlJsonChart",width:t.initialViewState.width,height:t.initialViewState.height,children:Object(I.jsx)(u.a,{viewState:e,onViewStateChange:this.onViewStateChange,height:t.initialViewState.height,width:t.initialViewState.width,layers:this.state.initialized?t.layers:[],getTooltip:this.createTooltip,controller:!0,children:Object(I.jsx)(b.a,{height:t.initialViewState.height,width:t.initialViewState.width,mapStyle:t.mapStyle&&("string"===typeof t.mapStyle?t.mapStyle:t.mapStyle[0]),mapboxApiAccessToken:this.props.mapboxToken})})})}}],[{key:"getDerivedStateFromProps",value:function(t,e){var i=n.getDeckObject(t);if(!p()(i.initialViewState,e.initialViewState)){var r=Object.keys(i.initialViewState).reduce((function(t,n){return i.initialViewState[n]===e.initialViewState[n]?t:Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},n,i.initialViewState[n]))}),{});return{viewState:Object(s.a)(Object(s.a)({},e.viewState),r),initialViewState:i.initialViewState}}return null}}]),n}(h.PureComponent);H.getDeckObject=function(t){var e=t.element,n=t.width,a=t.height,i=JSON.parse(e.json);return a?(i.initialViewState.height=a,i.initialViewState.width=n):(i.initialViewState.height||(i.initialViewState.height=500),e.useContainerWidth&&(i.initialViewState.width=n)),delete i.views,B.convert(i)};var K=G("st.pydeck_chart")(Object(x.a)(H))}}]);
//# sourceMappingURL=14.8cdc1bc3.chunk.js.map