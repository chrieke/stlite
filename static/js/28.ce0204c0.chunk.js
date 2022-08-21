/*! For license information please see 28.ce0204c0.chunk.js.LICENSE.txt */
(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[28],{1337:function(e,t,r){"use strict";r(0);var n,o=r(54),i=r(128),a=r(5),u=r(158),c=r(10),l=r(52),s=Object(l.c)(n||(n=Object(u.a)(["\n  50% {\n    color: rgba(0, 0, 0, 0);\n  }\n"]))),p=Object(c.a)("span",{target:"e1m4n6jn0"})((function(e){var t=e.includeDot,r=e.shouldBlink,n=e.theme;return Object(a.a)(Object(a.a)({},t?{"&::before":{opacity:1,content:'"\u2022"',animation:"none",color:n.colors.gray,margin:"0 5px"}}:{}),r?{color:n.colors.red,animationName:"".concat(s),animationDuration:"0.5s",animationIterationCount:5}:{})}),""),f=r(1);t.a=function(e){var t=e.dirty,r=e.value,n=e.maxLength,a=e.className,u=e.type,c=[],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.push(Object(f.jsx)(p,{includeDot:c.length>0,shouldBlink:t,children:e},c.length))};return t&&("multiline"===(void 0===u?"single":u)?Object(o.e)()?l("Press \u2318+Enter to apply"):l("Press Ctrl+Enter to apply"):l("Press Enter to apply")),n&&l("".concat(r.length,"/").concat(n),t&&r.length>=n),Object(f.jsx)(i.a,{className:a,children:c})}},1849:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return H}));var n=r(2),o=r(4),i=r(7),a=r(8),u=r(0),c=r.n(u),l=r(215),s=r(18),p=r(1446),f=r(96),d=r(31),b=r(1312);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(d.a)("div",(function(e){return Object(b.j)(m({},e,{$hasIconTrailing:!1}))}));v.displayName="StyledTextAreaRoot";var g=Object(d.a)("div",(function(e){return m({},Object(b.h)(e))}));g.displayName="StyledTextareaContainer";var j=Object(d.a)("textarea",(function(e){return m({},Object(b.i)(e),{resize:"none"})}));function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?k(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}j.displayName="StyledTextarea";var V=function(e){function t(){var e,r;x(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return E(k(r=C(this,(e=F(t)).call.apply(e,[this].concat(o)))),"state",{isFocused:r.props.autoFocus||!1}),E(k(r),"onFocus",(function(e){r.setState({isFocused:!0}),r.props.onFocus(e)})),E(k(r),"onBlur",(function(e){r.setState({isFocused:!1}),r.props.onBlur(e)})),r}var r,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.overrides,t=void 0===e?{}:e,r=P(Object(s.c)(t.Root,v),2),n=r[0],o=r[1],i=Object(s.e)({Input:{component:j},InputContainer:{component:g}},t);return u.createElement(n,w({"data-baseweb":"textarea",$isFocused:this.state.isFocused,$disabled:this.props.disabled,$error:this.props.error,$positive:this.props.positive,$required:this.props.required},o),u.createElement(p.a,w({},this.props,{type:f.b.textarea,overrides:i,onFocus:this.onFocus,onBlur:this.onBlur})))}}])&&S(r.prototype,n),o&&S(r,o),t}(u.Component);E(V,"defaultProps",{autoFocus:!1,disabled:!1,error:!1,name:"",onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},onFocus:function(){},overrides:{},placeholder:"",required:!1,rows:3,size:f.d.default,value:""});var T=V,B=r(1337),U=r(128),K=r(129),_=r(66),A=r(54),I=r(10);var W=Object(I.a)("div",{target:"e1y61itm0"})({name:"1om1ktf",styles:"div{border-width:1px;}"}),N=r(1),H=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(){var e;Object(n.a)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).formClearHelper=new l.b,e.state={dirty:!1,value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setStringValue(e.props.element,e.state.value,t),e.setState({dirty:!1})},e.onFormCleared=function(){e.setState({value:e.props.element.default},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onBlur=function(){e.state.dirty&&e.commitWidgetValue({fromUi:!0})},e.onChange=function(t){var r=t.target.value,n=e.props.element.maxChars;0!==n&&r.length>n||(Object(A.g)(e.props.element)?e.setState({dirty:!1,value:r},(function(){return e.commitWidgetValue({fromUi:!0})})):e.setState({dirty:!0,value:r}))},e.isEnterKeyPressed=function(e){var t=e.keyCode;return"Enter"===e.key||13===t||10===t},e.onKeyDown=function(t){var r=t.metaKey,n=t.ctrlKey,o=e.state.dirty;e.isEnterKeyPressed(t)&&(n||r)&&o&&(t.preventDefault(),e.commitWidgetValue({fromUi:!0}))},e}return Object(o.a)(r,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getStringValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props,t=e.element,r=e.disabled,n=e.width,o=e.widgetMgr,i=this.state,a=i.value,u=i.dirty,c={width:n},l=t.height,s=t.placeholder;return this.formClearHelper.manageFormClearListener(o,t.formId,this.onFormCleared),Object(N.jsxs)("div",{className:"stTextArea",style:c,children:[Object(N.jsx)(U.d,{label:t.label,disabled:r,children:t.help&&Object(N.jsx)(U.b,{children:Object(N.jsx)(K.a,{content:t.help,placement:_.b.TOP_RIGHT})})}),Object(N.jsx)(W,{children:Object(N.jsx)(T,{"data-testid":"stTextArea",value:a,placeholder:s,onBlur:this.onBlur,onChange:this.onChange,onKeyDown:this.onKeyDown,disabled:r,overrides:{Input:{style:{lineHeight:"1.4",height:l?"".concat(l,"px"):"",minHeight:"95px",resize:"vertical","::placeholder":{opacity:"0.7"},paddingRight:"1rem",paddingLeft:"1rem",paddingBottom:"1rem",paddingTop:"1rem"}}}})}),Object(N.jsx)(B.a,{dirty:u,value:a,maxLength:t.maxChars,type:"multiline"})]})}}]),r}(c.a.PureComponent)}}]);
//# sourceMappingURL=28.ce0204c0.chunk.js.map