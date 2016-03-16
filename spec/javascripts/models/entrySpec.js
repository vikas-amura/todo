'use strict';

describe("Todo.Models.Entry", function() {  
  
	beforeEach(function () {
    this.entry = new Todo.Models.Entry();
    this.server = sinon.fakeServer.create();
    this.entryRecord = new Todo.Models.Entry({name: "Hollywood - Part 2"});
  });

  afterEach(function() {
    this.server.restore();
  });


  it("should make the correct server request", function() {
    var entrydata = new Todo.Models.Entry({name: "Hollywood"});
    var spy =  sinon.spy(jQuery, "ajax");
    entrydata.save(); 
    expect(jQuery.ajax.calledOnce).toBeTruthy();
  });

  it("should not save when name is empty", function() {
    var eventSpy = sinon.spy();
    this.entry.bind("error", eventSpy);
    this.entry.save({"name": ""});
    expect(jQuery.ajax.calledOnce).toBe(false);
  });

  it("should fire a callback when 'foo' is triggered",function(){
    var spy = sinon.spy();
    this.entryRecord.bind('foo', spy);  
    this.entryRecord.trigger('foo');
    expect(spy.called).toBeTruthy();
  });


  it ("should equal name",function(){
    expect(this.entryRecord.get("name")).toEqual("Hollywood - Part 2");
  });  

  it('should be defined', function() {
    expect(Todo.Models.Entry).toBeDefined();
  });

  it('can be instantiated Model Entries', function() {
    var tasks = new Todo.Models.Entry();
    expect(tasks).not.toBeNull();
  });

  it("should set the urlRoot to the Model urlRoot", function() { 
  	expect(this.entry.urlRoot).toEqual("/entries");
	});
	
});
