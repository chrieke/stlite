(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[43],{1843:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var o=a(2),n=a(4),r=a(7),i=a(8),l=a(0),s=a.n(l),u=a(18),p=a(74),d=a(1814),c=a(1815),h=a(1816),m=a(157),f=a(158),g=a(80),v=a(1),b=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.value},e.onChange=function(t){var a=parseInt(t.target.value,10);e.setState({value:a},(function(){return e.props.onChange(a)}))},e}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.props.value!==this.state.value&&this.setState({value:this.props.value})}},{key:"render",value:function(){var e=this.props,t=e.theme,a=e.width,o=e.help,n=e.label,r=e.horizontal,i=this.props.disabled,l=t.colors,s=t.radii,p={width:a},b=Object(u.a)(this.props.options);return 0===b.length&&(b.push("No options to select."),i=!0),Object(v.jsxs)("div",{className:"row-widget stRadio",style:p,children:[Object(v.jsx)(m.d,{label:n,disabled:i,children:o&&Object(v.jsx)(m.c,{children:Object(v.jsx)(f.a,{content:o,placement:g.a.TOP_RIGHT})})}),Object(v.jsx)(d.a,{onChange:this.onChange,value:this.state.value.toString(),disabled:i,align:r?c.a.horizontal:c.a.vertical,children:b.map((function(e,t){return Object(v.jsx)(h.a,{value:t.toString(),overrides:{Root:{style:function(e){return{marginBottom:0,marginTop:0,marginRight:"1rem",paddingLeft:0,alignItems:"start",paddingRight:"2px",backgroundColor:e.$isFocusVisible?l.darkenedBgMix25:"",borderTopLeftRadius:s.md,borderTopRightRadius:s.md,borderBottomLeftRadius:s.md,borderBottomRightRadius:s.md}}},RadioMarkOuter:{style:function(e){return{width:"1rem",height:"1rem",marginTop:"0.35rem",marginRight:"0",backgroundColor:e.$checked&&!i?l.primary:l.fadedText40}}},RadioMarkInner:{style:function(e){var t=e.$checked;return{height:t?"6px":".75rem",width:t?"6px":".75rem"}}},Label:{style:{color:i?l.fadedText40:l.bodyText,position:"relative",top:"1px"}}},children:e},t)}))})]})}}]),a}(s.a.PureComponent),j=Object(p.f)(b),y=a(214),O=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).formClearHelper=new y.b,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setIntValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState({value:e.props.element.default},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onChange=function(t){e.setState({value:t},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return Object(n.a)(a,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getIntValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props,t=e.disabled,a=e.element,o=e.width,n=e.widgetMgr,r=a.horizontal,i=a.options,l=a.label,s=a.help;return this.formClearHelper.manageFormClearListener(n,a.formId,this.onFormCleared),Object(v.jsx)(j,{label:l,onChange:this.onChange,options:i,width:o,disabled:t,horizontal:r,value:this.state.value,help:s})}}]),a}(s.a.PureComponent)}}]);
//# sourceMappingURL=43.a918be87.chunk.js.map