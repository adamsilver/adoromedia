/*
 * PolyPage 0.8.0 [dev]
 *
 * Copyright (c) 2009 Andy Kent
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * For cookie support you will also need the modified version of the jQuery cookie plugin that comes bundled with this plugin.
 *
 * For help please open the index.html file in your web browser.
 *
 * Developed by Andy Kent
 */

(function($) {
  
  $.polypage = {};
  
  
  // ============================
  // = PolyPage Agregate helper =
  // ============================
  
  $.fn.polypage = function(opts) {
    var opts = $.extend({
      events:{},
      gui:{},
      cookie:{}
    }, opts || {});
    this.ppBase(opts);
    if(opts.events) this.ppEvents(opts.events);
    if(opts.gui) this.ppGUI(opts.gui);
    if(opts.cookie) this.ppCookie(opts.cookie);
    return this
  };
  
  
  // =================
  // = PolyPage Base =
  // =================
  
  $.fn.ppBase = function(opts) {
    return this.each(function() {
      if($(this).data('polypage')===undefined)
        $(this).data('polypage', new $.polypage.Base(this, opts)); 
    });
  };

  $.polypage.Base = function(scope, options) {
    this.scope = $(scope);
    this.options = $.extend($.polypage.Base.DEFAULTS, options||{});
    this.init();
  };
  
  $.polypage.Base.DEFAULTS = {
    prefix: 'pp',
    separator: '_'
  };
  
  $.polypage.Base.prototype = {
    init: function(){
      this.findStates();
      this.bindEvents();
      this.setStartStates();
      this.refresh();
    },
    
    
    setState: function(stateName,val){
      var newState = !!val;
      if(this.getState(stateName)==newState) return newState;
      this.states[stateName] = newState;
      this.setCookie(stateName, newState);
      this.refresh();
      this.scope.trigger('pp_stateChange', { name:stateName, value:newState });
      return newState;
    },
    
    getState: function(stateName){
      return this.states[stateName];
    },
    
    setStates: function(states) {
      for(var stateName in states) { this.setState(stateName, states[stateName]) };
    },
    
    toggleState: function(stateName) { return this.setState(stateName, !this.getState(stateName)); },
    
    toggleStates: function(stateNames) { for(var i in stateNames) this.toggleState(stateNames[i]); },
    
    setCookie: function(state,val) {
      if(!$.cookie()||!state.length) return false;
      $.cookie(this.prefixed(state), val ? 'yes' : null, {"path":"/"});
      return true;
    },
    
    getCookie: function(state) {
      if(!$.cookie()||!state.length) return false;
      $.cookie(this.prefixed(state))!=null;
    },
    
    prefixed: function(str){
      return this.options.prefix+this.options.separator+str;
    },
    
    bindEvents: function(){
      var pp = this;
      var doc = $(document.body);
      this.scope.bind('pp_setState pp_setStates', function(e, opts) { pp.setStates(opts); });
      this.scope.bind('pp_toggleState', function(e, stateName) { pp.toggleState(stateName); });
      this.scope.bind('pp_toggleStates', function(e, stateNames) { pp.toggleStates($.makeArray(arguments).slice(1)); });
    },
    
    separated: function(val) {
      return this.options.separator+val+this.options.separator
    },

    setStartStates: function(){
      if(this.options.defaultStates) 
        for(var i in this.options.defaultStates) { this.setState(initValues[i], true); }
      this.setValuesFromHash(window.location.hash);
    },

    setValuesFromHash: function(hash) {
      var hashValues = hash.replace(/^#/,'').split(new RegExp(this.separated('and')));
      for(var i in hashValues) { this.setState(hashValues[i], true); }
      return this;
    },

    
    findStates: function(){
      var el = this.findAll();
      var self = this;
      this.states = {};
      el.each(function() {
        var s = self.extractDataFromClassName($(this).attr('class'));
        var states = s.split(new RegExp(self.separated('?not')+'|'+self.separated('or')+'|'+self.separated('and')));
        for(var state in states) {
          if(self.states[states[state]]==undefined && states[state]!='') {
            if($.cookie()){ 
              self.states[states[state]]=self.getCookie(states[state]);
            } else {
              self.states[states[state]]=false;
            }
          }
        }
      });
      return this.states;
    },

    extractDataFromClassName: function(className){
      var classes = className.split(' ');
      for(var i in classes) {
        var matcher = new RegExp('^'+this.options.prefix+this.options.separator);
        if(matcher.test(classes[i])) return classes[i].replace(matcher,'');
      }
      return '';
    },

    findAll: function(){
      return $("*[class*='"+this.options.prefix+this.options.separator+"']", this.scope);
    },
    
    hasElements: function() {
      return this.findAll().length>0
    },

    refresh: function(){
      var self = this;
      this.findAll().each(function(){ self.evaluateNode(this); });
      return this;
    },

    evaluateNode: function(node){
      var on = this.evaluate(this.extractDataFromClassName($(node).attr('class')));  
      $(node).toggle(on);
      return on;
    },

    evaluate: function(input){
      var str = input
      .replace(new RegExp(this.separated('and'),'gi'),' && ')
      .replace(new RegExp(this.separated('or'),'gi'),' || ')
      .replace(new RegExp(this.separated('?not'),'gi'),' !')
      .replace(/([a-z_0-9\-]+)/gi,"this.states['$1']");
      return eval(str);
    },
    
    alphabeticalStates: function(){
      var alphaStates = [], ret = [];
      for(var state in this.states) { alphaStates.push(state) }
      alphaStates = alphaStates.sort();
      for(var state in alphaStates) { ret.push({name:alphaStates[state], value:this.states[alphaStates[state]]}); };
      return ret
    }
  };
  
  
  // ====================
  // = Extension Helper =
  // ====================
  
  $.polypage.extension = function(__extensionName__, __defaults__, __prototype__) {
    // create a jQuery chainable helper
    $.fn['pp'+__extensionName__] = function(opts) {
      return this.each(function() {
        (opts = opts || {}).bindTo = opts.bindTo || this;
        $(this).data('pp'+__extensionName__, new $.polypage[__extensionName__](this, opts)); 
      });
    };
    
    // object initializer
    $.polypage[__extensionName__] = function(scope, options) {
      this.scope = $(scope);
      this.options = $.extend($.polypage[__extensionName__].DEFAULTS, options||{});
      // polypage binding
      this.polypageScope = $(this.options.bindTo);
      this.polypage = this.polypageScope.data('polypage');
      if(this.polypage===undefined)
        throw "A polypage "+__extensionName__+" object must be bound to a polypage enabled element, try setting the 'bindTo' option.";
      // initialization
      this.init();
    };
    
    // empty defaults
    $.polypage[__extensionName__].DEFAULTS = __defaults__ || {};
    
    // blank init to stop errors
    $.polypage[__extensionName__].prototype = $.extend({ init: function(){} }, __prototype__);
  };
  
  
  // ==========================
  // = PolyPage GUI Extension =
  // ==========================
  
  $.polypage.extension('GUI', 
  {
    containerID: 'pp_options',
    label: "Page States:"
  },
  {
    init: function(){
      this.bindEvents();
      this.redraw();
    },
    
    bindEvents: function() {
      var nb = this;
      this.scope.bind('pp_gui_forceRedraw', function() { nb.redraw() });
      this.polypageScope.bind('pp_stateChange', function() { nb.redraw()});
    },
    
    redraw: function(){
      this.scope.trigger('pp_gui_redrawBegin', this);
      this.undraw();
      if(!this.needsOptionBar()) return;
      this.draw();
      this.scope.trigger('pp_gui_redrawComplete', this);
    },
    
    draw: function(){
      this.scope.append('<div id="'+this.options.containerID+'"><p>'+this.options.label+'</p><ul></ul></div>');
      var states = this.states();
      for(var index in states) {
        var state = states[index];
        var humanStateName = state.name.replace(this.separator(),' ');
        var className = state.value ? 'on' : 'off'
        $('#pp_options ul').append('<li><a href="#pp_toggle_'+state.name+'" id="pp_state_toggle_'+state.name+'" class="'+className+'">'+humanStateName+'</a></li>');
      }
    },
    
    undraw: function(){
      this.scope.find('#'+this.options.containerID).remove();
    },
    
    needsOptionBar: function(){
      return this.polypage.hasElements();
    },
    
    states: function(){
      return this.polypage.alphabeticalStates();
    },
    
    separator: function(){
      return this.polypage.options.separator;
    }
  });
  
  
  // =============================
  // = PolyPage Events Extension =
  // =============================
  
  $.polypage.extension('Events', 
  {
    enableClickEvents: true,
    enableSubmitEvents: true
  }, 
  {
    init: function(){
      this.bindEvents();
    },
    
    bindEvents: function() {
      var pp = this;
      if(this.options.enableClickEvents)
        $('body').bind('click.pp', function(e) { pp.clickHandler(e); });
      if(this.options.enableSubmitEvents)
        $('form').bind('submit.pp', function(e) { pp.submitHandler(e); }); // FIXME try to bind this to body not just form elements
    },
    
    clickHandler: function(e) {
      var a = $(e.target).closest('a');
      if(a.length==0) return;
      var href = a.attr('href');
      if(!href) return;
      if(this.triggerEventFromHash(href)) e.preventDefault();
    },
    
    submitHandler: function(e){
      var form = $(e.target).closest('form')
      if(form.length==0) return;
      var action = form.attr('action');
      if(!action) return;
      if(this.triggerEventFromHash(action)) e.preventDefault();
    },
    
    triggerEventFromHash: function(hash){
      if(hash.search(/^#pp_/)==-1) return false;
      var hash = hash.replace(/^#pp_/,'');
      if(hash.search(/^toggle_/)>=0) {
        this.scope.trigger('pp_toggleState', hash.replace(/^toggle_/, ''));
        return true
      }
      if(hash.search(/^set_/)>=0) {
        var val = hash.search(/_false$/)==-1
        hash = hash.replace(/^set_/, '')
        hash = hash.replace(/_true$|_false$/, '')
        var obj = {}
        obj[hash]=val
        this.scope.trigger('pp_setState', obj);
        return true
      }
      return false
    }
  });
  
  
  
  
  // =============================
  // = PolyPage Cookie Extension =
  // =============================
  
  $.polypage.extension('Cookie',
  {
    
  },
  {
    
  });
})(jQuery);