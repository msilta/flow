// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

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