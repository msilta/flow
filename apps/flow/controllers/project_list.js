// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

Flow.projectListController = SC.ArrayController.create({
  content: [],

  createProject: function(title) {
    Flow.store.createRecord(Flow.Project, {
      title: title
    });
  },

  remaining: function() {
    return this.filterProperty('status', false).get('length');
  }.property('@each.status'),

  clearCompletedProjects: function() {
    this.filterProperty('status', true).forEach(
      function(item) {
        Flow.store.destroyRecord(null,null,item.storeKey);
      }
    );
  },

  allAreDone: function(key, value) {
    if (value !== undefined) {
      this.setEach('status', value);
      return value;
    } else {
      return this.get('length') && this.everyProperty('status', true);
    }
  }.property('@each.status')
});