//  ---------------------------------------------------------------------------------------------------------
//  --- license header; ---
//  ---------------------------------------------------------------------------------------------------------
/*  Copyright (c) 2007 - 2009 by James Norton
	info@jsquaredjavascript.com
  
    This file is part of JSquared.
    
    JSquared is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 
    JSquared is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
 
    You should have received a copy of the GNU Lesser General Public License
    along with JSquared.  If not, see <http://www.gnu.org/licenses/>.
*/
//  ---------------------------------------------------------------------------------------------------------
var J2=new(function(){this.version=2.1;this.isIE=/*@cc_on!@*/!1;this.isIE6=this.isIE&&!window.XMLHttpRequest;});J2.Core=new(function(){this.Event=function(){var events=[],handler=new(function(){var tempEvents,eventsAdded=false,eventsRemoved=false;this.firing=false;function start(){this.firing=true;tempEvents=[];eventsAdded=eventsRemoved=false;}
function end(){if(eventsRemoved){for(var i=events.length-1;i>=0;i--){if(events[i][3])events.splice(i,1);}}
if(eventsAdded){for(var i=tempEvents.length-1;i>=0;i--)
events.push(tempEvents[i]);}
this.firing=false;}
this.fire=function(){start.call(handler);var returnVal=true,funcReturnVal,i=0,j=events.length;events.sort(function(a,b){return a[2]===b[2]?0:(a[2]<b[2]?1:-1);});for(i;i<j;i++){funcReturnVal=events[i][0].apply(events[i][1],arguments);if(returnVal&&funcReturnVal===false)returnVal=false;}
end.call(handler);return returnVal;}
this.listen=function(event){eventsAdded=true;tempEvents.push(event);}
this.removeListener=function(i){eventsRemoved=true;events[i][3]=true;}
this.removeAllListeners=function(){for(var i=events.length-1;i>=0;i--)
this.removeListener(i);}});this.handler=handler;this.events=events;this.eventIndexes=new(function(){var first=999,last=-999;this.first=function(){return first--;};this.last=function(){return last++;};});this.listen=function(fn,context,sortIndex){var event=[fn,context||this,sortIndex||99]
if(handler.firing)
handler.listen(event);else
events.push(event);return fn;};this.removeListener=function(fn){for(var i=events.length-1;i>=0;i--){if(events[i][0]===fn){if(handler.firing)
handler.removeListener(i);else
events.splice(i,1);}}};this.removeAllListeners=function(){if(handler.firing)
handler.removeAllListeners();else
events=[];}
this.fire=handler.fire;};var loadEventHandler=new this.Event();window.addLoadEvent=loadEventHandler.listen;window.loadEventIndexes=loadEventHandler.eventIndexes;if(typeof window.onload==="function")
loadEventHandler.listen(window.onload,null,loadEventHandler.eventIndexes.first());window.onload=loadEventHandler.fire;var domReadyEventHandler=new this.Event();window.addDOMReadyEvent=domReadyEventHandler.listen;window.DOMReadyEventIndexes=loadEventHandler.eventIndexes;loadEventHandler.listen(function(){delete loadEventIndexes;delete addLoadEvent;delete onload;},window,-Infinity);domReadyEventHandler.listen(function(){delete DOMReadyEventIndexes;delete addDOMReadyEvent;},window,-Infinity);if(J2.isIE6){document.write("<script id=\"ieScriptLoad\" defer src=\"//:\"><\/script>");document.getElementById("ieScriptLoad").onreadystatechange=function(){if(this.readyState==="complete"){document.getElementById("ieScriptLoad").parentNode.removeChild(document.getElementById("ieScriptLoad"));domReadyEventHandler.fire({});}};}else{if(navigator.userAgent.search(/WebKit/i)!==-1){window.DOMLoadTimer=setInterval(function(){if(document.readyState.search(/loaded|complete/i)!==-1){clearInterval(window.DOMLoadTimer);domReadyEventHandler.fire({});}},10);}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(e){clearInterval(window.DOMLoadTimer);domReadyEventHandler.fire.call(this,e);},false);}else{window.addLoadEvent(domReadyEventHandler.fire,null,1000);}}
var boundElements=[];this.bindElementTools=function(o,isBasicBinding){if(o){if(o.isElementBound!==true){for(var method in J2.Element.Tools)
o[method]=J2.Element.Tools[method];boundElements.push(o);}
if(isBasicBinding===true)return;if(o.isExtraOverridesBound!==true){try{o.getElementsByClass=o.getElementsByClassName=J2.Core.newDOMMethods.getElementsByClassName(o.querySelectorAll?o.querySelectorAll:o.getElementsByClassName||null);o.getElementsByTagName=J2.Core.newDOMMethods.getElementsByTagName(o.getElementsByTagName);o.appendChild=J2.Core.newDOMMethods.appendChild(o.appendChild);o.replaceChild=J2.Core.newDOMMethods.replaceChild(o.replaceChild);o.insertBefore=J2.Core.newDOMMethods.insertBefore(o.insertBefore);o.isExtraOverridesBound=true;}catch(e){}}}
return o;};this.removeElementBindings=function(o,fullRemove){if(typeof o==="object"){for(var i=boundElements.length-1;i>=0;i--){if(boundElements[i]===o){boundElements.splice(i,1);break;}}
if(fullRemove===true){for(var method in J2.Element.Tools){if(o[method])
o[method]=null;}}}
return o;}
this.unbindAllElements=function(){for(var i=boundElements.length-1;i>=0;i--)
this.removeElementBindings(boundElements[i],true);}
this.addElementTool=function(id,func){if(typeof func!=="function"||typeof id!=="string")return;J2.Element.Tools[id]=func;for(var i=boundElements.length-1;i>=0;i--)
boundElements[i][id]=func;};this.sortToDocumentOrder=function(elements){return elements.sort(function(a,b){return 3-(comparePosition(a,b)&6);});};function comparePosition(a,b){return a.compareDocumentPosition?a.compareDocumentPosition(b):a.contains?(a!==b&&a.contains(b)&&16)+(a!==b&&b.contains(a)&&8)+(a.sourceIndex>=0&&b.sourceIndex>=0?(a.sourceIndex<b.sourceIndex&&4)+(a.sourceIndex>b.sourceIndex&&2):1)+0:0;}
this.newDOMMethods=new(function(){document.oldGetElementById=document.getElementById;document.oldCreateElement=document.createElement;this.getElementById=function(id){return J2.Core.bindElementTools(document.oldGetElementById(id));};this.createElement=function(type,options){var el=document.oldCreateElement(type);if(typeof options==="object"){if(options.cssClass!=null){el.className=options.cssClass;delete options.cssClass;}
for(var item in options)
el[item]=options[item];}
return J2.Core.bindElementTools(el);};this.getElementsByTagName=function(f){return function(tag){this.getElementsByTagName=f;var els=this.getElementsByTagName(tag),i;for(i=els.length-1;i>=0;i--)
J2.Core.bindElementTools(els[i]);this.getElementsByTagName=J2.Core.newDOMMethods.getElementsByTagName(this.getElementsByTagName);return els;};};this.getElementsByClassName=function(f){var handleArguments=function(args){var cssClass=arguments[0].cssClass||arguments[0],tags=arguments[0].tags||"*",callback=arguments[0].callback||null;return{tags:isArray(tags)?tags.join(",").toLowerCase().split(","):tags.toLowerCase().split(","),cssClass:cssClass,callback:callback};};if(f==null){return function(){var args=handleArguments(arguments[0]);return getElementsByClassNameLegacy.call(this,args.cssClass,args.tags,args.callback);};}else if(document.querySelectorAll){return function(){var args=handleArguments(arguments[0]);this.getElementsByClassName=f;var queryText="";if(args.tags==="*"){queryText="."+args.cssClass;}else{for(var i=0,j=args.tags.length;i<j;i++){if(i!==0){queryText+=",";}
queryText+=args.tags[i]+"."+args.cssClass;}}
var els=Array.prototype.copy.call(this.getElementsByClassName(queryText));for(var i=0,j=els.length;i<j;i++){J2.Core.bindElementTools(els[i]);if(typeof args.callback==="function")
args.callback.call(els[i],els[i]);}
this.getElementsByClassName=J2.Core.newDOMMethods.getElementsByClassName(this.getElementsByClassName);return els;};}else{return function(){var args=handleArguments(arguments[0]);this.getElementsByClassName=f;var els=Array.prototype.copy.call(this.getElementsByClassName(args.cssClass)),result=[],bind=false,isAllTags=args.tags.contains("*"),fireCallback=typeof args.callback==="function",i=0,j=els.length;for(i;i<j;i++){if(isAllTags||args.tags.contains(els[i].tagName.toLowerCase())){result.push(J2.Core.bindElementTools(els[i]));if(fireCallback)
args.callback.call(els[i],els[i]);}}
return result;};}};this.appendChild=function(f){return function(el){this.appendChild=f;if(J2.AJAX&&el instanceof J2.AJAX){el.setSuccessHandler(function(ajax){var tempNode=document.createElement("span",{innerHTML:ajax.getResponseText()});this.appendChild(tempNode);tempNode.remove(true);});el.setScope(this);el.send();}else{if(el.nodeType===1)
J2.Core.bindElementTools(el);return this.appendChild(el);}};};this.replaceChild=function(f){return function(newEl,oldEl){this.replaceChild=f;if(J2.AJAX&&newEl instanceof J2.AJAX){newEl.setSuccessHandler(function(ajax){var tempNode=document.createElement("span",{innerHTML:ajax.getResponseText()});this.replaceChild(tempNode,oldEl);tempNode.remove(true);});newEl.setScope(this);newEl.send();}else{return this.replaceChild(J2.Core.bindElementTools(newEl),oldEl);}};};this.insertBefore=function(f){return function(newNode,refNode){this.insertBefore=f;if(J2.AJAX&&newNode instanceof J2.AJAX){newNode.setSuccessHandler(function(ajax){var tempNode=document.createElement("span",{innerHTML:ajax.getResponseText()});this.insertBefore(tempNode,refNode);tempNode.remove(true);});newNode.setScope(this);newNode.send();}else{return this.insertBefore(J2.Core.bindElementTools(newNode),refNode);}};};function getElementsByClassNameLegacy(cssClass,tags,callback){var results=[];var elements=this.getElementsByTagNames(tags);for(var i=0,j=elements.length;i<j;i++){if(J2.Element.Tools.hasCssClass.call(elements[i],cssClass)){results.push(J2.Core.bindElementTools(elements[i]));if(typeof callback==="function")
callback.call(elements[i],elements[i]);}}
return results;}});this.CSSColor=function(r,g,b){this.indexes=[parseInt(r),parseInt(g),parseInt(b)];};this.CSSColor.prototype=new(function(){this.getHex=function(){var hexVal="#",partVal,i;for(i=0;i<3;i++){partVal=this.indexes[i].toString(16);hexVal+=partVal.length===1?"0"+partVal:partVal;}
return hexVal;};this.getRGB=function(){return"rgb("+this.indexes.join(",")+")";}
this.diff=function(otherColor){if(otherColor instanceof J2.Core.CSSColor)
otherColor=otherColor.indexes;if(!isArray(otherColor))return null;var diff=[],i;for(i=0;i<3;i++)
diff.push(parseInt(this.indexes[i])-parseInt(otherColor[i]));return diff.toCssColor();}
this.create=function(value){if(arguments.length<1)return this;var args=[0,0,0];if(value!==""&&value!==null){if(/rgb/.test(value)){args=value.match(/\d{1,3}/g);}else{value=(value+"").replace(/#/,"");if(value.length===3||value.length===6){args=[];for(var i=0,j=value.length;i<j;i+=(1/(3/j))){args.push(value.slice(i,(1/(3/j))+i));args[args.length-1]=parseInt(args[args.length-1].length===1?args[args.length-1]+args[args.length-1]:args[args.length-1],16);}}else{return null;}}}
return args.toCssColor();}});String.prototype.trim=function(){return this.replace(/^\s\s*/,'').replace(/\s\s*$/,'');};String.prototype.hyphenatedToCamelCase=function(){return this.replace(/-\D/g,function(match){return match.charAt(1).toUpperCase();});}
String.prototype.unDelimit=function(delimeters){delimeters=delimeters||["&","="];if(delimeters.length===1)
return this.split(delimeters[0]);var items=this.split(delimeters[0]),o={},i=0,j=items.length,subItem;for(i;i<j;i++){subItem=items[i].split(delimeters[1]);subItem[1]=subItem[1]||"";if(o[subItem[0]]){if(isArray(o[subItem[0]])){o[subItem[0]].push(subItem[1]);}else{o[subItem[0]]=[o[subItem[0]],subItem[1]];}}else{o[subItem[0]]=subItem[1];}}
return o;}
Array.prototype.toCssColor=function(){if(this.length!==3)return this;for(var i=this.length-1;i>=0;i--){if(isNaN(parseInt(this[i])))return this;}
return new J2.Core.CSSColor(this[0],this[1],this[2]);}
Array.prototype.contains=function(val){for(var i=this.length-1;i>=0;i--){if(this[i]===val)return true;}
return false;};Array.prototype.copy=function(){if(this.length==null||this.length===0)return[];var newArray;try{newArray=Array.prototype.slice.call(this,0);if(newArray[0]==null)throw"";}catch(e){newArray=[];for(var i=0,j=this.length;i<j;i++)
newArray.push(this[i]);}
return newArray;};});window.isArray=function(o){return Object.prototype.toString.call(o)==='[object Array]';};J2.Window=new(function(){var size=(function(){if(window.innerWidth){return function(dim){return window["inner"+dim];}}else if(document.documentElement&&document.documentElement.clientWidth&&document.documentElement.clientWidth!==0){return function(dim){return document.documentElement["client"+dim];}}else{return function(){return 0;}}})();this.width=function(){return size("Width");}
this.height=function(){return size("Height");}});J2.Transitions=new(function(){this.linear=function(s,r,p,d){return s-(r*p*d);};var transitionType=function(exp){this.easeIn=function(s,r,p,d){return s-(r*exp(p)*d);};this.easeOut=function(s,r,p,d){return s-(r*(1-exp(1-p))*d);};this.easeInOut=function(s,r,p,d){return p<=0.5?s-((exp(2*p)/2)*r*d):s-(((2-exp(2*(1-p)))/2)*r*d);};}
this.Quad=new transitionType(function(p){return Math.pow(p,2);});this.Cubic=new transitionType(function(p){return Math.pow(p,3);});this.Quart=new transitionType(function(p){return Math.pow(p,4);});this.Quint=new transitionType(function(p){return Math.pow(p,5);});this.Back=new transitionType(function(p){return Math.pow(p,2)*(3*p-2);});this.Exp=new transitionType(function(p){return Math.pow(2,8*(p-1));});this.Bounce=new transitionType(function(p){var a=0,b=1;while(p<(7-4*a)/11){a+=b;b/=2;}
return-Math.pow((11-6*a-11*p)/4,2)+b*b;});});J2.Element=new(function(){this.nodePosition=new(function(){var positions={first:"first",last:"last",before:"before",after:"after"}
function first(){return{position:positions.first}}
function last(){return{position:positions.last}}
function before(node){if(!node)return first();return{position:positions.before,ref:node}}
function after(node){if(!node)return first();return{position:positions.after,ref:node}}
this.first=first;this.last=last;this.before=before;this.after=after;this.positions=positions;});this.Tools=new(function(){this.isElementBound=true;this.getElementsByTagNames=function(list){if(typeof list==="string"){if(arguments.length===1){var tagNames=list.split(",");}else{var tagNames=[];for(var i=0,j=arguments.length;i<j;i++){if(typeof arguments[i]==="string")
tagNames.push(arguments[i]);}}}else if(isArray(list)){var tagNames=list;}else{return[];}
var results=null;for(var i=0,j=tagNames.length;i<j;i++){var elements=Array.prototype.copy.call(this.getElementsByTagName(tagNames[i].trim()));results=(results==null)?elements:results.concat(elements);}
return J2.Core.sortToDocumentOrder(results);};this.hasCssClass=function(cssClass){return new RegExp("\\b"+cssClass+"\\b").test(this.className);};this.addCssClass=function(cssClass){if(!this.hasCssClass(cssClass))
this.className=this.className.trim()+" "+cssClass.trim();return this;};this.removeCssClass=function(cssClass){if(this.hasCssClass(cssClass))
this.className=this.className.replace(cssClass.trim(),"").trim();return this;};this.setOpacity=function(){if(J2.isIE){return function(opacityLevel){this.style.filter=(opacityLevel==1)?'':"alpha(opacity="+opacityLevel*100+")";return this;};}else{return function(opacityLevel){this.style.opacity=opacityLevel;return this;};}}();this.setStyle=function(property,value){property=property.hyphenatedToCamelCase();if(property==="opacity")
return this.setOpacity(value);if(property==="float")
property=(J2.isIE)?"styleFloat":"cssFloat";if(/color/i.test(property)){if(!(value instanceof J2.Core.CSSColor))
value=J2.Core.CSSColor.prototype.create(value);if(!(value instanceof J2.Core.CSSColor))
return false;value=value.getHex();}
if(typeof value==="number"&&(!["zIndex","zoom"].contains(property)))
value=value+"px";this.style[property]=value;return this;};this.getStyle=this.getOpacity=function(property){property=property.hyphenatedToCamelCase();if(property==="opacity"&&J2.isIE){var opacityLevel=arguments.callee.call(this,"filter");return opacityLevel===""?1:parseFloat(opacityLevel.split("=")[1])/100;}
if(property==="float")
property=(J2.isIE)?"styleFloat":"cssFloat";var property_value=null;if(this.currentStyle){property_value=this.currentStyle[property];}else if(window.getComputedStyle){property_value=document.defaultView.getComputedStyle(this,null)[property];}
if(/color/i.test(property))
property_value=J2.Core.CSSColor.prototype.create(property_value);return property_value;};this.getPosition=function(relativeTo){var relative={left:0,top:0},position={left:parseInt(this.offsetLeft)-relative.left,top:parseInt(this.offsetTop)-relative.top},o=this;if(typeof relativeTo==="object")
relative=J2.Core.bindElementTools(relativeTo).getPosition();while(o=o.offsetParent){position.left+=parseInt(o.offsetLeft);position.top+=parseInt(o.offsetTop);}
return position;};this.hasChildElements=function(type){return this.getElementsByTagName(type||"*").length>0;};this.removeAllChildren=function(){while(this.hasChildNodes())
this.removeChild(this.firstChild);return this;};this.getNextSibling=function(type){var o=this;while(o=o.nextSibling){if(o.nodeType!==1)continue;if(type==null)break;if(type.toLowerCase()===o.tagName.toLowerCase())break;}
return J2.Core.bindElementTools(o);};this.getPreviousSibling=function(type){var o=this;while(o=o.previousSibling){if(o.nodeType!==1)continue;if(type==null)break;if(type.toLowerCase()===o.tagName.toLowerCase())break;}
return J2.Core.bindElementTools(o);};this.getParent=function(type){if(type==null){return J2.Core.bindElementTools(this.parentNode);}
var o=this;while(o=o.parentNode){if(o.nodeType!==1)continue;if(o.tagName.toLowerCase()===type.toLowerCase()){return J2.Core.bindElementTools(o);}}
return null;};this.getParentByStyle=function(property,value){var o=this;while(o=o.parentNode){if(J2.Element.Tools.getStyle.call(o,property)===value){return J2.Core.bindElementTools(o);}}
return null;};this.contains=function(ref){if(ref==null)return false;var node=ref.parentNode;do{if(this===node)return true;}while(node=node.parentNode);return false;}
this.insertAfter=function(newNode,refNode){if(typeof J2.AJAX==="function"&&newNode instanceof J2.AJAX){newNode.setSuccessHandler(function(ajax){var tempNode=document.createElement("span",{innerHTML:ajax.getResponseText()});this.insertAfter(tempNode,refNode);tempNode.remove(true);});newNode.setScope(this);newNode.send();}else{var sibling=refNode.getNextSibling();if(refNode==null||sibling===refNode){return this.appendChild(newNode);}else{return this.insertBefore(newNode,sibling);}}};this.remove=function(retainChildren){retainChildren=retainChildren||false;if(this.parentNode){if(retainChildren===true&&this.hasChildElements()){while(this.childNodes.length>0)
this.parentNode.insertBefore(this.childNodes[0],this);}
this.parentNode.removeChild(this);}};this.replace=function(newNode,retainChildren){if(this.parentNode&&newNode){if((arguments.length<2||retainChildren===true)&&this.hasChildElements()){while(this.childNodes.length>0)
newNode.appendChild(this.childNodes[0]);}
this.parentNode.replaceChild(newNode,this);}};this.moveTo=function(newParent,position){if(!newParent)return;position=position||{position:1};var positions=J2.Element.nodePosition.positions;J2.Core.bindElementTools(newParent);switch(position.position){case positions.last:default:newParent.appendChild(this);break;case positions.first:newParent.insertBefore(this,newParent.firstChild);break;case positions.after:newParent.insertAfter(this,position.ref);break;case positions.before:newParent.insertBefore(this,position.ref);break;}
return this;};this.insert=function(node,position){if(!node)return;position=position||{position:1};var positions=J2.Element.nodePosition.positions;switch(position.position){case positions.last:default:this.appendChild(node);break;case positions.first:this.insertBefore(node,this.firstChild);break;case positions.after:newParent.insertAfter(node,position.ref);break;case positions.before:newParent.insertBefore(node,position.ref);break;}
return J2.Core.bindElementTools(node);};var regExs={key:/key/,click:/click/i,mouse:/mouse/i,menu:/menu/i,over:/over/i,out:/out/i,DOMMouseScroll:/DOMMouseScroll|mousewheel/};function DOMEvent(){var eventHandler=new J2.Core.Event();var oldFire=eventHandler.fire;eventHandler.oldFire=oldFire;eventHandler.fire=function(e){e=e||event;e.sourceNode=(e.target||e.srcElement)||null;if(regExs.key.test(e.type))
e.keyPressed=(e.which||e.keyCode)||null;if(regExs.click.test(e.type)||regExs.mouse.test(e.type)||regExs.menu.test(e.type)){e.mouse=e.manual===true?{x:0,y:0}:{x:e.pageX||e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,y:e.pageY||e.clientY+document.body.scrollTop+document.documentElement.scrollTop};}
if(regExs.over.test(e.type)){if(e.manual===true)e.relatedTarget=e.sourceNode
else if(!e.relatedTarget&&e.fromElement)e.relatedTarget=e.fromElement;}
if(regExs.out.test(e.type)){if(e.manual===true)e.relatedTarget=e.sourceNode
else if(!e.relatedTarget&&e.toElement)e.relatedTarget=e.toElement;}
if(regExs.DOMMouseScroll.test(e.type))
e.wheel=(event.wheelDelta)?event.wheelDelta/120:-(event.detail||0)/3;e.rightClick=(e.which==3)||(e.button==2);if(!e.stopPropagation){e.stopPropagation=function(){this.cancelBubble=true;};}
if(!e.preventDefault){e.preventDefault=function(){this.returnValue=false;};}
e.stop=function(){this.preventDefault();this.stopPropagation();}
return eventHandler.oldFire(e);};return eventHandler;};this.addEvent=function(type,fn,sortIndex){if(typeof fn!=="function")return;type=type.toLowerCase();if(!J2.isIE){if(type==="mouseleave"||type==="mouseenter"){mouseEvents[type](this,fn,sortIndex);}}
if(!this.events)this.events={};if(!this.events[type]){this.events[type]=new DOMEvent();if(this["on"+type]&&typeof this["on"+type]==="function")
this.events[type].listen(this["on"+type],this,Infinity);this["on"+type]=this.events[type].fire;}
this.events[type].listen(fn,this,sortIndex);return fn;};this.removeEvent=function(type,fn){var events=this.events;if(events&&events[type]instanceof J2.Core.Event)
events[type].removeListener(fn);};this.removeAllEvents=function(type,purgeChildNodes){var events=this.events?this.events[type]:null;if(!events)return;if(events instanceof J2.Core.Event){events.removeAllHandlers();}
if(purgeChildNodes===true){var children=this.getElementsByTagName("*");for(var i=children.length-1;i>=0;i--)
if(typeof children[i].removeAllEvents==="function")
children[i].removeAllEvents(type,false);}}
this.purgeEvents=function(purgeChildNodes){this.events=null;var children=this.getElementsByTagName("*");if(purgeChildNodes!==false){for(var i=children.length-1;i>=0;i--)
if(typeof children[i].purgeEvents==="function")
children[i].purgeEvents(type,false);}}
this.fireEvent=function(type,e){var events=this.events,parent=this.parentNode;e=e||{target:this,type:type,manual:true};if(events&&events[type]&&typeof events[type].fire==="function")
events[type].fire(e);if(e.cancelBubble===true)return;do{if(parent&&parent.isElementBound&&typeof parent.fireEvent==="function"){parent.fireEvent(type,e);break;}}while(parent=parent.parentNode)}
this.addDelegate=function(type,check,handler,sortIndex){if(typeof check!=="function"||typeof handler!=="function")
return;if(this.delegateFunctions==null)
this.delegateFunctions={};this.delegateFunctions[type]={check:check,handler:handler};this.addEvent(type,delegateHandler,sortIndex||1000);};function delegateHandler(e){var delegateFunctions=this.delegateFunctions[e.type];if(delegateFunctions.check.call(e.target,e,this))
return delegateFunctions.handler.call(this,e,e.target);return true;}
var mouseEvents=new(function(){var check=function(e,handlingNode){return e.relatedTarget!==handlingNode&&!handlingNode.contains(e.relatedTarget);}
this.mouseenter=function(el,fn,sortIndex){el.addDelegate("mouseover",check,fn,sortIndex);}
this.mouseleave=function(el,fn,sortIndex){el.addDelegate("mouseout",check,fn,sortIndex);}});this.animate=(function(){function animator(animations,element,id,callback,wait){var x=1;var interval,progress=0,startTime,previouslyElapsedTime=0;this.paused=false;this.wait=wait;this.play=play;this.play();this.stop=function(runToEnd){clearInterval(interval);if(runToEnd===true){for(var i=animations.length-1;i>=0;i--)
animations[i].end();}
end();}
this.updateCallback=function(newCallBack){var oldCallBack=callback;callback=function(){if(typeof oldCallBack==="function"){var me=this;setTimeout(function(){oldCallBack.call(me);},1);}
newCallBack.call(this);}}
this.pause=function(){clearInterval(interval);if(startTime)
previouslyElapsedTime=new Date().getTime()-startTime;this.paused=true;}
function play(){if(!this.wait){startTime=new Date().getTime();interval=setInterval(step,10);}
this.paused=false;}
function end(){clearInterval(interval);var elementFX=element.FX;if(typeof callback==="function")callback.call(element);elementFX[id]=null;}
function step(){var elapsed=new Date().getTime()-startTime+previouslyElapsedTime,animation,progress;if(elapsed===0)return;for(var i=animations.length-1;i>=0;i--){animation=animations[i];if(elapsed>=animation.time){animation.end();animations.splice(i,1);}else{progress=elapsed/animation.time;animation.update(progress);}}
if(animations.length===0)end();}}
function animation(property,endVal,time,transition,element){this.time=time;var startVal,range,direction,isColor=false;if(/color/i.test(property)){isColor=true;endVal=endVal.indexes;startVal=element.getStyle(property).indexes;range=(function(){var r=[];for(var i=0;i<=2;i++)
r.push(Math.abs(startVal[i]-endVal[i]));return r;})();direction=(function(){var d=[];for(var i=0;i<=2;i++)
d.push(startVal[i]<endVal[i]?-1:1);return d;})();}else{startVal=parseFloat(element.getStyle(property));range=Math.abs(startVal-endVal);direction=startVal<endVal?-1:1;}
this.update=function(progress){if(isColor){var newVal;if(progress===1){newVal=endVal;}else{newVal=[getNewValue(progress,startVal[0],range[0],direction[0]),getNewValue(progress,startVal[1],range[1],direction[1]),getNewValue(progress,startVal[2],range[2],direction[2])];}
element.setStyle(property,newVal.toCssColor());}else{element.setStyle(property,progress===1?endVal:getNewValue(progress,startVal,range,direction));}}
this.end=function(){this.update(1);}
function getNewValue(progress,startVal,range,direction){return progress===1?endVal:(progress===0?startVal:transition(startVal,range,progress,direction));}}
var defaultDetails={transition:J2.Transitions.linear,time:500};function setupAnimations(animations,details,element){var endVal,time,transition;for(var property in details){if(typeof details[property]==="object"&&!(details[property]instanceof J2.Core.CSSColor)){endVal=details[property].to;time=details[property].time||defaultDetails.time;transition=details[property].transition||defaultDetails.transition;}else{endVal=details[property];time=defaultDetails.time;transition=defaultDetails.transition;}
animations.push(new animation(property,endVal,time,transition,element));}}
function getWaitCallback(me,FXid,thisFX,animations,details,waitTime){return function(){setTimeout(function(){setupAnimations(animations,details,me);if(!thisFX[FXid])return;thisFX[FXid].wait=false;if(!thisFX[FXid].paused)
thisFX[FXid].play();},waitTime);}}
return function(details,callback){var animations=[],uID="FX_",thisFX=this.FX,waiting=this.waiting,wait=false;if(thisFX==null){thisFX=this.FX={};thisFX.count=0;}
uID=uID+thisFX.count;if(waiting!=null&&waiting.length>0){var waitTime=waiting[0];waiting.splice(0,1);previousAnimation=thisFX["FX_"+(thisFX.count-1)];if(previousAnimation){var me=this;previousAnimation.updateCallback(getWaitCallback(me,uID,thisFX,animations,details,waitTime));wait=true;}}
thisFX.count++;if(!wait)setupAnimations(animations,details,this);thisFX[uID]=new animator(animations,this,uID,callback,wait);return this;}})();this.stop=function(runToEnd){var thisFX=this.FX;if(thisFX==null)return this;for(var animation in thisFX)
if(thisFX[animation]&&thisFX[animation].stop)
thisFX[animation].stop(runToEnd);return this;}
this.pause=function(){var thisFX=this.FX;if(thisFX==null)return this;for(var animation in thisFX)
if(thisFX[animation]&&thisFX[animation].pause)
thisFX[animation].pause();return this;}
this.play=function(){var thisFX=this.FX;if(thisFX==null)return this;for(var animation in thisFX)
if(thisFX[animation]&&thisFX[animation].play)
thisFX[animation].play();return this;}
this.wait=function(time){var waiting=this.waiting;if(waiting==null){waiting=this.waiting=[];}
waiting.push(time||1);return this;}});});(function(){if(/function|object/.test(typeof HTMLElement))
J2.Core.bindElementTools(HTMLElement.prototype,true);else
window.addDOMReadyEvent(function(){J2.Core.bindElementTools(document.getElementsByTagName("body")[0])},null,-99999);document.getElementsByTagName=J2.Core.newDOMMethods.getElementsByTagName(document.getElementsByTagName);document.getElementsByClass=document.getElementsByClassName=J2.Core.newDOMMethods.getElementsByClassName(document.querySelectorAll?document.querySelectorAll:document.getElementsByClassName||null);document.getElementById=J2.Core.newDOMMethods.getElementById;document.createElement=J2.Core.newDOMMethods.createElement;document.getElementsByTagNames=J2.Element.Tools.getElementsByTagNames;window.addEvent=function(type,fn,sortIndex){type=type.toLowerCase();if(type==="load"){window.addLoadEvent(fn,window,sortIndex);}else if(type==="domcontentloaded"||type==="domready"){window.addDOMReadyEvent(fn,window,sortIndex);}else{J2.Element.Tools.addEvent.apply(this,arguments);}};})();if(typeof J2!="object")var J2={};J2.AJAX=function(options){var timeoutLength=12000;var requestObj=null;var requestDetails={method:"get"};var timeout=null;var failed=false;var me=this;if(typeof options=="object"){requestDetails.URL=options.URL||null;requestDetails.method=options.method||requestDetails["method"];requestDetails.onSuccess=(typeof options.onSuccess=="function")?options.onSuccess:null;requestDetails.onFail=(typeof options.onFail=="function")?options.onFail:null;requestDetails.scope=(typeof options.scope=="object")?options.scope:null;requestDetails.timeoutLength=options.timeoutLength||timeoutLength;if(options.headers instanceof Array){for(var i=options.headers.length-1;i>=0;i--)
addRequestHeader(options.headers[i][0]||options.headers[i]["key"]||null,options.headers[i][1]||options.headers[i]["value"]||null);}}
function addRequestHeader(key,value){if(key!=null&&value!=null){requestDetails.requestHeaders=requestDetails.requestHeaders||{};requestDetails.requestHeaders[key]=value;}}
this.addRequestHeader=addRequestHeader;this.setUrl=function(url){requestDetails.URL=url;}
this.setSuccessHandler=function(func){if(typeof func=="function")
requestDetails.onSuccess=func;}
this.setFailHandler=function(func){if(typeof func=="function")
requestDetails.onFail=func;}
this.setTimeoutLength=function(length){timeoutLength=length;}
this.setScope=function(o){if(typeof o=="object")
requestDetails.scope=o;}
this.send=function(data){failed=false;if(requestDetails.URL==null||requestDetails.URL=="")
return false;if(arguments.length<1||data==null)
data="";requestObj=requestObj||this.getRequestObject();requestObj.open(requestDetails.method,requestDetails.URL,true);if(requestDetails.method.toLowerCase()=="post")
requestObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");for(var key in requestDetails.requestHeaders)
requestObj.setRequestHeader(key,requestDetails.requestHeaders[key]);requestObj.onreadystatechange=this.handleReadyStateChange;timeout=setTimeout(this.handleTimeout,requestDetails.timeoutLength);requestObj.send(data);}
this.close=function(){requestObj.abort();}
this.handleTimeout=function(){me.clearTimeout();if(typeof requestDetails.onFail=="function"){failed=true;me.close();fail(J2.AJAX.FailureCodes.timeout);}}
this.clearTimeout=function(){clearTimeout(timeout);}
function fail(failCode){failed=true;requestDetails.onFail.call(requestDetails.scope||requestDetails.onFail,me,failCode||J2.AJAX.FailureCodes.general);}
this.handleReadyStateChange=function(){if(failed==true)return;if(requestObj.readyState==4){me.clearTimeout();if(requestObj.status==200){if(typeof requestDetails.onSuccess=="function")
requestDetails.onSuccess.call(requestDetails.scope||requestDetails.onSuccess,me);}else{failed=true;if(typeof requestDetails.onFail=="function"){var status=requestObj.status;var failureCode=J2.AJAX.FailureCodes.general;for(var failType in J2.AJAX.FailureCodes){if(J2.AJAX.FailureCodes[failType]==status){failureCode=J2.AJAX.FailureCodes[failType];break;}}
fail(failureCode);}}}}
this.getResponseHeader=function(headerName){return requestObj.getResponseHeader(headerName);}
this.getAllResponseHeaders=function(){return requestObj.getAllResponseHeaders();}
this.getResponseText=function(){return requestObj.responseText;}
this.getResponseXML=function(){return requestObj.responseXML;}
this.getUrl=function(){return requestDetails.URL;}}
J2.AJAX.prototype.getRequestObject=function(){J2.AJAX.supported=true;if(typeof XMLHttpRequest!="undefined"&&typeof XMLHttpRequest!=null){return function(){return new XMLHttpRequest();};}else if(window.ActiveXObject){return function(){return new ActiveXObject("Microsoft.XMLHTTP");};}else{J2.AJAX.supported=false;return function(){return null;}}}();J2.AJAX.FailureCodes={general:"xx1",unauthorised:401,notFound:404,timeout:408,server:500}
if(typeof J2!="object")var J2={};J2.ADIJ=function(options){var requestDetails={getResponseText:function(){return this.json||"";}};if(typeof options=="object"){requestDetails.URL=options.URL||null;requestDetails.scope=(typeof options.scope=="object")?options.scope:null;requestDetails.onSuccess=(typeof options.onSuccess=="function")?options.onSuccess:null;requestDetails.isJSONP=options.JSONP||false;requestDetails.JSONPParam=(typeof options.JSONPParam=="string")?options.JSONPParam:"callback";}
this.setUrl=function(url){requestDetails.URL=url;}
this.setSuccessHandler=function(func){if(typeof func=="function")
requestDetails.onSuccess=func;}
this.setScope=function(scope){if(typeof scope=="object")
requestDetails.scope=scope;}
this.send=function(){this.sendRequest(requestDetails);}}
J2.ADIJ.prototype=new(function(){var headTag=null;var requestCount=0;var Requests={};var getID=function(){requestCount++;return"ADIJ_"+requestCount;};var generateJSONPFunction=function(id){window[id]=function(json){J2.ADIJ.prototype.handleResponse(id,json);delete window[id];}};this.sendRequest=function(requestDetails){if(typeof requestDetails!="object")return;if(requestDetails.URL==null||requestDetails.URL=="")return false;if(requestDetails.id==null)requestDetails.id=getID();requestDetails.scriptTag=document.createElement("script");requestDetails.scriptTag.type="text/javascript";requestDetails.scriptTag.src=requestDetails.URL+(requestDetails.URL.indexOf("?")>-1?"&":"?")+"uqid="+(new Date()).getTime()+"&rid="+requestDetails.id;if(requestDetails.isJSONP){requestDetails.scriptTag.src+="&"+requestDetails.JSONPParam+"="+requestDetails.id;generateJSONPFunction(requestDetails.id);}
if(headTag==null)
headTag=document.getElementsByTagName("head")[0];headTag.appendChild(requestDetails.scriptTag);Requests[requestDetails.id]=requestDetails;}
this.handleResponse=function(id,json){if(Requests[id]==null)return false;Requests[id].json=json;if(Requests[id].scriptTag.parentNode)
Requests[id].scriptTag.parentNode.removeChild(Requests[id].scriptTag);if(typeof Requests[id].onSuccess=="function")
Requests[id].onSuccess.apply(Requests[id].scope||Requests[id].onSuccess,[Requests[id]].concat(Array.prototype.slice.call(arguments,2)));}});J2.AutoComplete=function(field,data,options){options=options||{};var objectMember=options.objectMember||null,workWithObjects=typeof objectMember==="string",minLength=options.minLength||1;var rootDisplayNode=document.createElement("ul",{cssClass:"autoCompleteList"});var fullDataSet=new J2.AutoComplete.DataSet(createInitialDataSet(),objectMember,options.matchAnyCharacter||false);var active=false;var hoverCssClass=options.hoverCssClass||"hover";this.activate=function(buildList){if(active===false){field.addEvent("keyup",field_onKeyUp);field.addEvent("keypress",field_onKeyPress);active=true;if(buildList===true)
this.filter();}};this.deactivate=function(){if(active===true){field.removeEvent("keyup",field_onKeyUp);field.removeEvent("keypress",field_onKeyPress);active=false;rootDisplayNode.remove();}};this.updateData=function(newData,immediatelyFilter){this.deactivate();tearDown(fullDataSet);data=newData;fullDataSet=new J2.AutoComplete.DataSet(createInitialDataSet(),objectMember,options.matchAnyCharacter||false);this.activate(immediatelyFilter!==false);}
this.filter=function(){buildNodeList(fullDataSet.getFilteredSet(field.value.trim()));}
this.activate(false);function tearDown(dataSet){if(!dataSet.nodes)return;for(var i=dataSet.nodes.length-1;i>=0;i--){dataSet.nodes[i].purgeEvents(false);}}
function field_onKeyPress(e){var charCode=e.charCode||e.keyCode;if(charCode===13){e.cancelBubble=true;return!selectHighlightedItem();}}
function field_onKeyUp(e){var nodeHighlightSuccess=true;if(e.keyCode===40){if(options.display!==false&&highlightNextNode(1))return;nodeHighlightSuccess=false;}
if(e.keyCode===38){if(options.display!==false&&highlightNextNode(-1))return;nodeHighlightSuccess=false;}
if(options.display!==false&&e.keyCode===13){e.cancelBubble=true;return!selectHighlightedItem();}
if(options.display!==false&&e.keyCode===27){buildNodeList(J2.AutoComplete.DataSet.prototype.Empty);return true;}
if(this.value.trim().length>=minLength){buildNodeList(fullDataSet.getFilteredSet(this.value.trim()));}else{buildNodeList(J2.AutoComplete.DataSet.prototype.Empty);}
if(options.display!==false&&nodeHighlightSuccess===false){if(e.keyCode===40)
highlightNextNode(1);if(e.keyCode===38)
highlightNextNode(-1);}};function buildNodeList(dataSet){var filter=field.value.trim();rootDisplayNode.removeAllChildren();if(dataSet.nodes.length===0){rootDisplayNode.remove();var allNodes=fullDataSet.getSet().nodes;for(var i=allNodes.length-1;i>=0;i--)
allNodes[i].removeCssClass(hoverCssClass);if(typeof options.onFilteredListDraw==="function")
options.onFilteredListDraw.call(rootDisplayNode,dataSet);return;}
if(options.matchAnyCharacter===true)
var regEx=new RegExp(filter,"i");var nodeValue;for(var i=0,j=dataSet.nodes.length,node;i<j,node=dataSet.nodes[i];i++){nodeValue=workWithObjects?dataSet.values[i][objectMember]:dataSet.values[i];if(options.matchAnyCharacter===true){node.innerHTML=nodeValue.replace(regEx,"<strong>"+nodeValue.match(regEx)+"</strong>");}else{node.innerHTML="<strong>"+nodeValue.substr(0,filter.length)+"</strong>"+nodeValue.substr(filter.length);}
if(i%2===0){node.addCssClass("alternateRow");}else{node.removeCssClass("alternateRow");}
rootDisplayNode.appendChild(node);if(typeof options.onItemBound==="function")
options.onItemBound.call(node,dataSet.values[i]);}
if(options.display!==false&&rootDisplayNode.parentNode!=field.parentNode)
field.parentNode.insertAfter(rootDisplayNode,field);if(typeof options.onFilteredListDraw=="function")
options.onFilteredListDraw.call(rootDisplayNode,dataSet,options.display);}
function createInitialDataSet(){var newDataSet={};newDataSet.values=data;var nodeSet=[],node;for(var i=0,j=data.length;i<j;i++){nodeSet[i]=document.createElement("li");nodeSet[i].addEvent("mouseover",node_MouseOver);nodeSet[i].addEvent("mouseout",node_MouseOut);nodeSet[i].addEvent("click",node_Click);nodeSet[i].rootValue=workWithObjects?data[i][objectMember]:data[i];nodeSet[i].rootData=data[i];}
newDataSet.nodes=nodeSet;return newDataSet;}
function highlightNextNode(direction){var currentlyHighlightedNode=null;var currentNodes=rootDisplayNode.getElementsByTagName("li");var nodeToHighlight=null;if(currentNodes.length===0)return false;for(var i=currentNodes.length-1;i>=0;i--){if(currentNodes[i].hasCssClass(hoverCssClass)){currentlyHighlightedNode=currentNodes[i];break;}}
if(currentlyHighlightedNode==null){if(direction===1){nodeToHighlight=currentNodes[0];}else{nodeToHighlight=currentNodes[currentNodes.length-1];}}else{if(direction===1){if(currentlyHighlightedNode!==currentNodes[currentNodes.length]){nodeToHighlight=currentlyHighlightedNode.getNextSibling("li");}else{nodeToHighlight=currentNodes[currentNodes.length];}}else{if(currentlyHighlightedNode!==currentNodes[0]){nodeToHighlight=currentlyHighlightedNode.getPreviousSibling("li");}else{nodeToHighlight=currentNodes[0];}}}
var allNodes=fullDataSet.getSet().nodes;for(var i=allNodes.length-1;i>=0;i--){if(allNodes[i]===nodeToHighlight){allNodes[i].addCssClass(hoverCssClass);}else{allNodes[i].removeCssClass(hoverCssClass);}}
return true;}
function selectHighlightedItem(){var currentNodes=rootDisplayNode.getElementsByTagName("li");var currentlyHighlightedNode=null;if(currentNodes.length===0)return false;for(var i=currentNodes.length-1;i>=0;i--){if(currentNodes[i].hasCssClass(hoverCssClass)){currentlyHighlightedNode=currentNodes[i];break;}}
if(currentlyHighlightedNode==null)return false;selectNode(currentlyHighlightedNode);return true;}
function node_MouseOver(){var allNodes=fullDataSet.getSet().nodes;for(var i=allNodes.length-1;i>=0;i--)
allNodes[i].removeCssClass(hoverCssClass);this.addCssClass(hoverCssClass);}
function node_MouseOut(){this.removeCssClass(hoverCssClass);}
function node_Click(e){selectNode(this);e.cancelBubble=true;return false;}
function selectNode(node){field.value=node.rootValue;buildNodeList(J2.AutoComplete.DataSet.prototype.Empty);if(typeof options.onItemSelect==="function")
options.onItemSelect.call(node,node.rootData);rootDisplayNode.remove();}}
J2.AutoComplete.DataSet=function(data,objectMember,matchAnyCharacter){var filteredSets={};this.getFilteredSet=function(filter){if(filteredSets[filter]==null)
filteredSets[filter]=new J2.AutoComplete.DataSet(this.filterSet(filter,data,objectMember,matchAnyCharacter));return filteredSets[filter].getSet();}
this.getSet=function(){return data;}}
J2.AutoComplete.DataSet.prototype={Empty:{values:[],nodes:[],isEmpty:true},filterSet:function(filter,data,objectMember,matchAnyCharacter){var workWithObjects=typeof objectMember=="string";var filteredSet={values:[],nodes:[]};var expression=matchAnyCharacter===true?filter:"^"+filter+".*$";var regEx=new RegExp(expression,"i"),regExResult=false;for(var i=0,j=data.values.length;i<j;i++){if(workWithObjects){regExResult=regEx.test(data.values[i][objectMember])}else{regExResult=regEx.test(data.values[i]);}
if(regExResult===true){filteredSet.values.push(data.values[i]);filteredSet.nodes.push(data.nodes[i]);}}
return filteredSet;}}
if(typeof J2!=="object")var J2={};J2.Cache=function(){var cache={},me=this;this.put=function(id,value,time){this.remove(id);cache[id]=value;if(time&&!isNaN(time)){cache[id].time=setTimeout(function(){me.remove(id)},time);}}
this.get=function(id){return cache[id];}
this.remove=function(id){delete cache[id];}}
if(typeof J2!=="object")var J2={};J2.Cookie=new(function(){var Collection=null;function init(){Collection={};var cookies=document.cookie.split(";");var cookie;for(var i=cookies.length-1;i>=0;i--){cookie=cookies[i].split("=");if(cookie.length>=2)
Collection[cookie[0]]=cookie[1];}
init=function(){};}
this.set=function(name,value,days){init();var expires="";if(days){var date=days;if(!(date instanceof Date)){date=new Date()
date.setDate(date.getDate()+(days||-1));}
expires="expires="+date.toGMTString();}
var cookie=name+"="+value+";expires="+expires+";path=/";document.cookie=cookie;Collection[name]=value;}
this.get=function(name){init();return Collection[name]||"";}
this.remove=function(name){init();this.set(name,"",-1);delete Collection[name];}});J2.ImageRollover=function(node,image,hoverImagePath){if(hoverImagePath===""||hoverImagePath==null||image==null)return;var hoverImage=document.createElement("img",{src:hoverImagePath});var nonHoverImagePath=image.src;node.addEvent("mouseover",node_onMouseOver);node.addEvent("mouseout",node_onMouseOut);function node_onMouseOver(){image.src=hoverImagePath;}
function node_onMouseOut(){image.src=nonHoverImagePath;}};J2.QueryString=location.search.slice(1).unDelimit();(function(){var tabSet=function(tabSetData,tabSetCssData){this.tabSetCssData=tabSetCssData||{tabSelected:"tabSelected",tabContentSelected:"tabVisible",tabContentUnselected:"tabHidden"};this.currentTab=-1;this.tabSetData=tabSetData;for(var i=tabSetData.length-1;i>=0;i--){if(tabSetData[i].activator==null||tabSetData[i].content==null)continue;J2.Core.bindElementTools(tabSetData[i].activator).addEvent("click",handleTabClick);tabSetData[i].activator.tabIndex=i;J2.Core.bindElementTools(tabSetData[i].content);}
this.hideAllTabs(tabSetCssData);this.showTab(0,tabSetCssData);var me=this;function handleTabClick(e){var tabIndex=this.tabIndex;me.hideTab();me.showTab(tabIndex);}}
tabSet.prototype={hideAllTabs:function(){for(var i=this.tabSetData.length-1;i>=0;i--){this.tabSetData[i].content.removeCssClass(this.tabSetCssData.tabContentSelected);this.tabSetData[i].activator.removeCssClass(this.tabSetCssData.tabSelected);this.tabSetData[i].content.addCssClass(this.tabSetCssData.tabContentUnselected);}},hideTab:function(){this.tabSetData[this.currentTab].content.removeCssClass(this.tabSetCssData.tabContentSelected);this.tabSetData[this.currentTab].activator.removeCssClass(this.tabSetCssData.tabSelected);this.tabSetData[this.currentTab].content.addCssClass(this.tabSetCssData.tabContentUnselected);},showTab:function(tabIndex){this.currentTab=tabIndex;this.tabSetData[tabIndex].content.removeCssClass(this.tabSetCssData.tabContentUnselected);this.tabSetData[tabIndex].content.addCssClass(this.tabSetCssData.tabContentSelected);this.tabSetData[tabIndex].activator.addCssClass(this.tabSetCssData.tabSelected);}}
function createTabSetData(root){var tabSetData=[],activators=root.getElementsByClassName({cssClass:"tabActivator",tags:"a",callback:addActivator});return tabSetData;function addActivator(){var content=document.getElementById(this.hash.slice(1));if(content){tabSetData.push({activator:this,content:content});}};}
J2.Core.addElementTool("makeTabset",function(options){options=options||{};new tabSet(options.tabSetData||createTabSetData(this),options.tabSetCssData);});})();if(typeof J2!=="object")var J2={};J2.URL=new(function(){var delim=";";var members={};var started=false;var timeout,timeoutLength=100;this.setPollingInterval=function(length){timeoutLength=length<35?35:(length>2500?2500:length);};this.getMember=function(key,callback,options){if(members[key]==null){if(typeof callback!=="function")return null;return new Member(key,callback,options,update);}else{return members[key];}};this.register=function(member){if(!member instanceof Member)return false;if(members[member.key()]!=null)return true;stopChecking();member.registered=true;members[member.key()]=member;if(started)
startChecking();return true;};window.addLoadEvent(function(){started=true;for(var m in members){if(members[m]instanceof Member){timeoutHandler();break;}}},-1001);var getBrowserUrl=function(){if(document.getElementById("URLFrame")){return function(){location.hash=document.frames["URLFrame"].location.search.slice(1);return document.frames["URLFrame"].location.search.slice(1);};}else{return function(){return location.hash.slice(1);};}}();var setBrowserUrl=function(){if(document.getElementById("URLFrame")){document.frames["URLFrame"].location.replace(document.frames["URLFrame"].location.pathname+"?"+location.hash.slice(1));return function(newUrl){document.getElementById("URLFrame").setAttribute("src",document.frames["URLFrame"].location.pathname+"?"+newUrl);location.hash=newUrl;};}else{return function(newUrl){location.hash=newUrl;};}}();function update(){stopChecking();var newUrl="";for(var key in members){newUrl=newUrl+(newUrl.length===0?"":delim);newUrl=key+"="+members[key].getValue();}
setBrowserUrl(newUrl);startChecking();}
function startChecking(){timeout=setTimeout(timeoutHandler,timeoutLength);}
function stopChecking(){clearTimeout(timeout);}
function timeoutHandler(){var currentURL=getURLObject(),currentURLVal;for(var key in members){currentURLVal=currentURL[key]||"";if(members[key].getValue()!==currentURLVal)
members[key].callback(currentURLVal);}
startChecking();}
function getURLObject(){var url=getBrowserUrl(),urlObject={},key,value,itemData;url=url.split(delim);for(var i=url.length-1;i>=0;i--){itemData=url[i].split("=");key=itemData[0];urlObject[key]=itemData.slice(1).join("=");}
return urlObject;}
var Member=function(key,callback,options,update){this.registered=false;var scope=window;var currentValue="";if(typeof options==="object"){scope=options.scope||scope;currentValue=options.initialValue||currentValue;}
this.key=function(){return key;};this.updateValue=function(data){currentValue=data;if(typeof update==="function")
update();};this.getValue=function(){return currentValue;};this.callback=function(newValue){currentValue=newValue;callback.call(scope,{"value":newValue,"key":key});};};})();