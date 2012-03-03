// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

/*globals Flow */

Flow = SC.Application.create();

Flow.Project = SC.Object.extend({
  title: null,
  status: false
});

Flow.CreateProjectView = SC.TextField.extend({
  insertNewline: function() {
    var value = this.get('value');
 
    if (value) {
      Flow.projectListController.createProject(value);
      this.set('value', '');
    }
  }
});

Flow.MarkDoneView = SC.Checkbox.extend({
  titleBinding: '.parentView.content.title',
  valueBinding: '.parentView.content.status'
});

Flow.ProjectListStatsView = SC.TemplateView.extend({
  remainingBinding: 'Flow.projectListController.remaining',
 
  displayRemaining: function() {
    var remaining = this.get('remaining');
    return remaining + (remaining === 1 ? " item" : " items");
  }.property('remaining')
});

SC.ready(function() {
  Flow.mainPane = SC.TemplatePane.append({
    layerId: 'flow',
    templateName: 'flow'
  });
});

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
