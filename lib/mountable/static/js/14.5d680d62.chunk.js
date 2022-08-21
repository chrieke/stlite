/*! For license information please see 14.5d680d62.chunk.js.LICENSE.txt */
(this["webpackJsonp@stlite/mountable"]=this["webpackJsonp@stlite/mountable"]||[]).push([[14],{1589:function(t,e){},1602:function(t,e){},1608:function(t,e){},1611:function(t,e){},1612:function(t,e){},1765:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return X}));var a=n(22),i=n(2),r=n(3),o=n(5),c=n(6),s=n(4),h=n(0),l=n(1755),u=n(1566),p=n.n(u),b=n(1679),j=n(62),d=n(25),m=n(1186),f=n(1762),w=n(1677),O=n(1678),v=n(1349),g=n(1773),x=n(1756),k=n(1601),S=n(190),y=n(10),T=n.n(y),V=n(111),C=n(126),M=n(57),E=n(429),F=n(1333),L=n.n(F),N=n(89),D=n(43),J=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return n}(Object(E.a)(Error)),P=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return n}(Object(E.a)(Error)),z=function(){function t(){Object(i.a)(this,t)}return Object(r.a)(t,null,[{key:"get",value:function(){var e=Object(V.a)(T.a.mark((function e(){var n,a,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=D.a.current,a=n.commandLine,i=n.userMapboxToken,t.token&&t.commandLine===a.toLowerCase()){e.next=10;break}if(""===i){e.next=6;break}t.token=i,e.next=9;break;case 6:return e.next=8,this.fetchToken("https://data.streamlit.io/tokens.json","mapbox");case 8:t.token=e.sent;case 9:t.commandLine=a.toLowerCase();case 10:return e.abrupt("return",t.token);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchToken",value:function(){var t=Object(V.a)(T.a.mark((function t(e,n){var a,i,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.get(e);case 3:if(a=t.sent,null!=(i=a.data[n])&&""!==i){t.next=7;break}throw new Error('Missing token "'.concat(n,'"'));case 7:return t.abrupt("return",i);case 10:throw t.prev=10,t.t0=t.catch(0),r=Object(N.a)(t.t0),new P("".concat(r.message," (").concat(e,")"));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}]),t}();z.token=void 0,z.commandLine=void 0,z.isRunningLocal=function(){var t=window.location.hostname;return"localhost"===t||"127.0.0.1"===t};var A=n(90),I=n.n(A),q=n(127),G=n(1),R=function(t){var e=t.error,n=t.width,a=t.deltaType;return e instanceof J?Object(G.jsx)(q.a,{width:n,name:"No Mapbox token provided",message:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("p",{children:["To use ",Object(G.jsxs)("code",{children:["st.",a]})," or ",Object(G.jsx)("code",{children:"st.map"})," you need to set up a Mapbox access token."]}),Object(G.jsxs)("p",{children:["To get a token, create an account at"," ",Object(G.jsx)("a",{href:"https://mapbox.com",children:"https://mapbox.com"}),". It's free for moderate usage levels!"]}),Object(G.jsxs)("p",{children:["Once you have a token, just set it using the Streamlit config option ",Object(G.jsx)("code",{children:"mapbox.token"})," and don't forget to restart your Streamlit server at this point if it's still running, then reload this tab."]}),Object(G.jsxs)("p",{children:["See"," ",Object(G.jsx)("a",{href:"https://docs.streamlit.io/library/advanced-features/configuration#view-all-configuration-options",children:"our documentation"})," ","for more info on how to set config options."]})]})}):e instanceof P?Object(G.jsx)(q.a,{width:n,name:"Error fetching Streamlit Mapbox token",message:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("p",{children:"This app requires an internet connection."}),Object(G.jsx)("p",{children:"Please check your connection and try again."}),Object(G.jsxs)("p",{children:["If you think this is a bug, please file bug report"," ",Object(G.jsx)("a",{href:"https://github.com/streamlit/streamlit/issues/new/choose",children:"here"}),"."]})]})}):Object(G.jsx)(q.a,{width:n,name:"Error fetching Streamlit Mapbox token",message:e.message})},W=function(t){return function(e){var n=function(n){Object(o.a)(h,n);var a=Object(c.a)(h);function h(t){var e;return Object(i.a)(this,h),(e=a.call(this,t)).initMapboxToken=Object(V.a)(T.a.mark((function t(){var n,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z.get();case 3:n=t.sent,e.setState({mapboxToken:n,isFetching:!1}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a=Object(N.a)(t.t0),e.setState({mapboxTokenError:a,isFetching:!1});case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.state={isFetching:!0,mapboxToken:void 0,mapboxTokenError:void 0},e.initMapboxToken(),e}return Object(r.a)(h,[{key:"render",value:function(){var n=this.state,a=n.mapboxToken,i=n.mapboxTokenError,r=n.isFetching,o=this.props.width;return i?Object(G.jsx)(R,{width:o,error:i,deltaType:t}):r?Object(G.jsx)(C.a,{body:"Loading...",kind:M.a.INFO,width:o}):Object(G.jsx)(e,Object(s.a)({mapboxToken:a},this.props))}}]),h}(h.PureComponent);return n.displayName="withMapboxToken(".concat(e.displayName||e.name,")"),I()(n,e)}},_=n(46),B=n(8),H=Object(B.a)("div",{target:"e1q4dr930"})((function(t){var e=t.width,n=t.height;return{marginTop:t.theme.spacing.sm,position:"relative",height:n,width:e}}),""),K=(n(1588),{classes:Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},m),O),w),v)});Object(k.b)([g.a,x.a]);var Q=new f.a({configuration:K}),U=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={viewState:{bearing:0,pitch:0,zoom:11},initialized:!1,initialViewState:{}},t.componentDidMount=function(){t.setState({initialized:!0})},t.createTooltip=function(e){var n=t.props.element;if(!e||!e.object||!n.tooltip)return!1;var a=JSON.parse(n.tooltip);return a.html?a.html=t.interpolate(e,a.html):a.text=t.interpolate(e,a.text),a},t.interpolate=function(t,e){var n=e.match(/{(.*?)}/g);return n&&n.forEach((function(n){var a=n.substring(1,n.length-1);t.object.hasOwnProperty(a)&&(e=e.replace(n,t.object[a]))})),e},t.onViewStateChange=function(e){var n=e.viewState;t.setState({viewState:n})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=n.getDeckObject(this.props),e=this.state.viewState;return Object(G.jsx)(H,{className:"stDeckGlJsonChart",width:t.initialViewState.width,height:t.initialViewState.height,children:Object(G.jsx)(l.a,{viewState:e,onViewStateChange:this.onViewStateChange,height:t.initialViewState.height,width:t.initialViewState.width,layers:this.state.initialized?t.layers:[],getTooltip:this.createTooltip,controller:!0,children:Object(G.jsx)(b.a,{height:t.initialViewState.height,width:t.initialViewState.width,mapStyle:t.mapStyle&&("string"===typeof t.mapStyle?t.mapStyle:t.mapStyle[0]),mapboxApiAccessToken:this.props.mapboxToken})})})}}],[{key:"getDerivedStateFromProps",value:function(t,e){var i=n.getDeckObject(t);if(!p()(i.initialViewState,e.initialViewState)){var r=Object.keys(i.initialViewState).reduce((function(t,n){return i.initialViewState[n]===e.initialViewState[n]?t:Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},n,i.initialViewState[n]))}),{});return{viewState:Object(s.a)(Object(s.a)({},e.viewState),r),initialViewState:i.initialViewState}}return null}}]),n}(h.PureComponent);U.getDeckObject=function(t){var e=t.element,n=t.width,a=t.height,i=t.theme,r=JSON.parse(e.json);if(!Object(_.k)(r.mapStyle)){var o=Object(d.b)(i.colors.bgColor)>.5?"light":"dark";r.mapStyle="mapbox://styles/mapbox/".concat(o,"-v9")}return a?(r.initialViewState.height=a,r.initialViewState.width=n):(r.initialViewState.height||(r.initialViewState.height=500),e.useContainerWidth&&(r.initialViewState.width=n)),delete r.views,Q.convert(r)};var X=Object(j.f)(W("st.pydeck_chart")(Object(S.a)(U)))}}]);
//# sourceMappingURL=14.5d680d62.chunk.js.map