Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Dialog.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Overlay=require('./Overlay');var _Overlay2=_interopRequireDefault(_Overlay);var _FadeAnimation=require('../animations/FadeAnimation');var _FadeAnimation2=_interopRequireDefault(_FadeAnimation);var _ScaleAnimation=require('../animations/ScaleAnimation');var _ScaleAnimation2=_interopRequireDefault(_ScaleAnimation);var _SlideAnimation=require('../animations/SlideAnimation');var _SlideAnimation2=_interopRequireDefault(_SlideAnimation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_DialogProps=require('../type').babelPluginFlowReactPropTypes_proptype_DialogProps||require('prop-types').any;var BackHandler=_reactNative.BackHandler||_reactNative.BackAndroid;var DIALOG_OPENING='opening';var DIALOG_OPENED='opened';var DIALOG_CLOSING='closing';var DIALOG_CLOSED='closed';var DEFAULT_ANIMATION_DURATION=150;var HARDWARE_BACK_PRESS_EVENT='hardwareBackPress';var styles=_reactNative.StyleSheet.create({container:_extends({},_reactNative.StyleSheet.absoluteFillObject,{justifyContent:'center',alignItems:'center',zIndex:1000,elevation:10}),dialog:{overflow:'hidden',backgroundColor:'#ffffff'},hidden:{top:-10000,left:0,height:0,width:0},round:{borderRadius:8}});var Dialog=function(_Component){_inherits(Dialog,_Component);function Dialog(props){_classCallCheck(this,Dialog);var _this=_possibleConstructorReturn(this,(Dialog.__proto__||Object.getPrototypeOf(Dialog)).call(this,props));_this.onHardwareBackPress=function(){return _this.props.onHardwareBackPress();};_this.state={dialogAnimation:props.dialogAnimation||new _FadeAnimation2.default({animationDuration:props.animationDuration}),dialogState:DIALOG_CLOSED};return _this;}_createClass(Dialog,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.visible){this.show();}BackHandler.addEventListener(HARDWARE_BACK_PRESS_EVENT,this.onHardwareBackPress);}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(this.props.visible!==prevProps.visible){if(this.props.visible){this.show();return;}this.dismiss();}}},{key:'componentWillUnmount',value:function componentWillUnmount(){BackHandler.removeEventListener(HARDWARE_BACK_PRESS_EVENT,this.onHardwareBackPress);}},{key:'show',value:function show(){var _this2=this;this.setState({dialogState:DIALOG_OPENING},function(){_this2.state.dialogAnimation.in(function(){_this2.setState({dialogState:DIALOG_OPENED},_this2.props.onShow);});});}},{key:'dismiss',value:function dismiss(){var _this3=this;this.setState({dialogState:DIALOG_CLOSING},function(){_this3.state.dialogAnimation.out(function(){_this3.setState({dialogState:DIALOG_CLOSED},_this3.props.onDismiss);});});}},{key:'render',value:function render(){var _state=this.state,dialogState=_state.dialogState,dialogAnimation=_state.dialogAnimation;var _props=this.props,rounded=_props.rounded,dialogTitle=_props.dialogTitle,children=_props.children,onTouchOutside=_props.onTouchOutside,hasOverlay=_props.hasOverlay,dialogStyle=_props.dialogStyle,animationDuration=_props.animationDuration,overlayOpacity=_props.overlayOpacity,useNativeDriver=_props.useNativeDriver,overlayBackgroundColor=_props.overlayBackgroundColor,containerStyle=_props.containerStyle,footer=_props.footer;var overlayVisible=hasOverlay&&[DIALOG_OPENING,DIALOG_OPENED].includes(dialogState);var round=rounded?styles.round:null;var hidden=dialogState===DIALOG_CLOSED&&styles.hidden;return _react2.default.createElement(_reactNative.View,{style:[styles.container,hidden,containerStyle],__source:{fileName:_jsxFileName,lineNumber:180}},_react2.default.createElement(_Overlay2.default,{pointerEvents:this.pointerEvents,visible:overlayVisible,onPress:onTouchOutside,backgroundColor:overlayBackgroundColor,opacity:overlayOpacity,animationDuration:animationDuration,useNativeDriver:useNativeDriver,__source:{fileName:_jsxFileName,lineNumber:181}}),_react2.default.createElement(_reactNative.Animated.View,{style:[styles.dialog,round,this.dialogSize,dialogStyle,dialogAnimation.getAnimations()],__source:{fileName:_jsxFileName,lineNumber:190}},dialogTitle,children,footer));}},{key:'pointerEvents',get:function get(){var overlayPointerEvents=this.props.overlayPointerEvents;var dialogState=this.state.dialogState;if(overlayPointerEvents){return overlayPointerEvents;}return dialogState===DIALOG_OPENED?'auto':'none';}},{key:'dialogSize',get:function get(){var _Dimensions$get=_reactNative.Dimensions.get('window'),screenWidth=_Dimensions$get.width,screenHeight=_Dimensions$get.height;var _props2=this.props,width=_props2.width,height=_props2.height;if(width&&width>0.0&&width<=1.0){width*=screenWidth;}if(height&&height>0.0&&height<=1.0){height*=screenHeight;}return{width:width,height:height};}}]);return Dialog;}(_react.Component);Dialog.defaultProps={rounded:true,dialogTitle:null,visible:false,containerStyle:null,animationDuration:DEFAULT_ANIMATION_DURATION,dialogStyle:null,width:null,height:null,onTouchOutside:function onTouchOutside(){},onHardwareBackPress:function onHardwareBackPress(){return false;},hasOverlay:true,overlayOpacity:0.5,overlayPointerEvents:null,overlayBackgroundColor:'#000',onShow:function onShow(){},onDismiss:function onDismiss(){},footer:null,useNativeDriver:true};Dialog.propTypes=babelPluginFlowReactPropTypes_proptype_DialogProps;exports.default=Dialog;