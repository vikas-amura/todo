describe("Todo.Collections.Entries", function() {  
  
	beforeEach(function () {    
    this.entries = new Todo.Collections.Entries();

    var collection = {url: "/entries" };
  });
  it('should be defined', function() {
    expect(Todo.Collections.Entries).toBeDefined();
  });

  it('can be instantiated Collections Entries', function() {
    var tasks = new Todo.Collections.Entries();
    expect(tasks).not.toBeNull();
  });

  it("should set the URL to the collection URL", function() { 
  	expect(this.entries.url).toEqual("/entries");
	});
	it("should set the urlRoot to the collection urlRoot", function() { 
  	expect(this.entries.urlRoot).toEqual("/Entries");
	});
});