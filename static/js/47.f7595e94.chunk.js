(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[47],{1874:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(14),o=n(2),i=n(4),a=n(7),u=n(8),s=n(0),l=n(1748),d=n(215),p=n(128),c=n(129),m=n(66),h=n(1),f=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).formClearHelper=new d.b,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setStringValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState({value:e.props.element.default},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.handleChange=function(t){var n=e.dateToString(t);e.setState({value:n},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.stringToDate=function(e){var t=e.split(":").map(Number),n=Object(r.a)(t,2),o=n[0],i=n[1],a=new Date;return a.setHours(o),a.setMinutes(i),a},e.dateToString=function(e){var t=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0");return"".concat(t,":").concat(n)},e}return Object(i.a)(n,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getStringValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.width,r=e.element,o=e.widgetMgr,i={width:n},a={Select:{props:{disabled:t,overrides:{ControlContainer:{style:{borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px"}},IconsContainer:{style:function(){return{paddingRight:".5rem"}}},ValueContainer:{style:function(){return{paddingRight:".5rem",paddingLeft:".5rem",paddingBottom:".5rem",paddingTop:".5rem"}}},Dropdown:{style:function(){return{paddingTop:0,paddingBottom:0}}},Popover:{props:{overrides:{Body:{style:function(){return{marginTop:"1px"}}}}}}}}}};return this.formClearHelper.manageFormClearListener(o,r.formId,this.onFormCleared),Object(h.jsxs)("div",{className:"stTimeInput",style:i,children:[Object(h.jsx)(p.d,{label:r.label,disabled:t,children:r.help&&Object(h.jsx)(p.b,{children:Object(h.jsx)(c.a,{content:r.help,placement:m.b.TOP_RIGHT})})}),Object(h.jsx)(l.a,{format:"24",value:this.stringToDate(this.state.value),onChange:this.handleChange,overrides:a,creatable:!0})]})}}]),n}(s.PureComponent)}}]);
//# sourceMappingURL=47.f7595e94.chunk.js.map