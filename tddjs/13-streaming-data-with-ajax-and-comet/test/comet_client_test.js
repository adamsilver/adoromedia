/*jslint indent: 2, onevar: false*/
/*globals fakeXMLHttpRequest, assertNotUndefined, Clock, assertException, TestCase, assertFalse, assertSame, assert, assertObject, assertFunction, assertEquals, assertNoException, tddjs, stubFn*/
(function () {
  var ajax = tddjs.ajax;

  TestCase("CometClientTest", {
    "test should be object": function () {
      assertObject(ajax.cometClient);
    },
    "test should have a disptach method": function() {
      var client = Object.create(ajax.cometClient);
      assertFunction(client.dispatch);
    },
    "test dispatch should notify observers": function() {
      var client = Object.create(ajax.cometClient);
      client.observers = { notify: stubFn() };
      client.dispatch( { someEvent: [{id:1234}]} );
      var args = client.observers.notify.args;
      
      assert(client.observers.notify.called);
      assertEquals("someEvent", args[0]);
      assertEquals({ id: 1234 }, args[1]);
    }
  });
  
  TestCase("CometClientDispatchTest", {
    setUp: function() {
      this.client = Object.create(ajax.cometClient);
    },
    
    "test should not throw if no observers": function() {
      this.client.observers = null;
      
      assertNoException(function() {
        this.client.dispatch( {someEvent: [{}]} );
      }.bind(this))
      
    },
    
    "test should not throw if notify undefined": function() {
      this.client.observers = {}
      
      assertNoException(function() {
        this.client.dispatch( {someEvent: [{}]} );
      }.bind(this))
    }
    
  })

}());
