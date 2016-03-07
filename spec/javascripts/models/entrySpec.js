describe("Todo.Models.Entry", function() {  
  
	beforeEach(function () {
    this.entry = new Todo.Models.Entry();
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