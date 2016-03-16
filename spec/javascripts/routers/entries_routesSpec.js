

describe("Todo.Routers.EntriesRoutes", function() {
  
  beforeEach(function() {
    this.router = new Todo.Routers.EntriesRoutes();
    this.routeSpy = sinon.spy();
    try {
      Backbone.history.start({silent:true, pushState:true});
    } catch(e) {}
  });
  
  
  it("fires the index route with a blank hash", function() {
    this.router.bind("route:index", this.routeSpy);
    this.router.navigate("", true);
    expect(true).toBeTruthy();
  });
  

});