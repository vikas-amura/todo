
describe("Todo.Views.EntriesIndex", function() {
  
  beforeEach(function() {
    this.view = new Todo.Views.EntriesIndex();
  });
  
  describe("Instantiation", function() {
    
    it("should create a list element", function() {
      expect(this.view.el.nodeName).toEqual("UL");
    });
    
    it("should have a class of 'todos'", function() {
      expect($(this.view.el)).toHaveClass('todos');
    });
    
  });
  
 
  
});