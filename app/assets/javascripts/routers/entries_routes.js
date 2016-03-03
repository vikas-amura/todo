
Todo.Routers.EntriesRoutes = Backbone.Router.extend({

  routes: {
    "": "index",    // #index    
  },
  initialize:function(){
    var collection;
    this.collection = new Todo.Collections.Entries();
    this.collection.fetch();
  },
  index: function(){    
    var view = new Todo.Views.EntriesIndex({collection:this.collection});
    $("#container").html(view.render().el);  	
  }
});