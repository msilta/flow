// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

Flow.projectListController = SC.ArrayController.create({
  content: [],

  createProject: function(title) {
    var project = Flow.Project.create({ title: title });
    this.pushObject(project);
  },

  remaining: function() {
    return this.filterProperty('status', false).get('length');
  }.property('@each.status'),

  clearCompletedProjects: function() {
    this.filterProperty('status', true).forEach(this.removeObject, this);
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