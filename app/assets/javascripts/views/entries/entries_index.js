Todo.Views = {};

Todo.Views.EntriesIndex = Backbone.View.extend({
  template: JST['entries/index'],
  events: {
    "submit #new_entry": "createEntry",
    "click #done-all": "doneAllEntry",
    "click #clear_all_entries": "clearAllEntries",
    "click #all_complate_entries": "complateEntries",
    "click #all_active_entries":"all_active_entries",
    "click #all_entries" : "all_entries",
  },
  initialize:function(){
    this.collection.on('add',this.apendEntry,this);    
    this.collection.on('destroy',this.render,this);  
  }, 
  render: function(){
  var self = this; 
    this.$el.html(this.template());
    
    if(this.filter == 'completed'){
      records=this.collection.filter({done:'false'});
    }else if(this.filter=="active"){
      records=this.collection.filter({done:'true'});      
    }else{
      records=this.collection.models;
    }
    _.each(records, function(record){
      self.apendEntry(record);
    });
    return this;
  },
  apendEntry:function(entry){
    view = new Todo.Views.Entry({model: entry, collection: this.collection});
    this.$el.find("#todo-list").prepend(view.render().el);
  },
  createEntry:function(event){
    event.preventDefault();
    model = this.collection.create({name: this.$el.find("#new-todo").val()}) 
    $("#new_entry")[0].reset()   
  },
  doneAllEntry: function (event) {
    var done = this.$("#done-all")[0].checked;
      this.collection.each(function (entry) { 
        entry.save({"done": done});         
    });
  },
  clearAllEntries: function(event) {    
    event.preventDefault();
    data = this.collection.where({done: 'true'});
   _.invoke(data, 'destroy');    
    return false;
  },
  complateEntries:function(){
    this.filter = 'completed';
    this.render();
  },
  all_active_entries:function(){
    this.filter = 'active';
    this.render();    
  },
  all_entries:function(){    
    this.filter ="all";
    this.render();
  }
});