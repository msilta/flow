Flow.READY = SC.State.extend({ 
  
  enterState: function() {
    Flow.projectListController.set('content', Flow.store.find(SC.Query.local(Flow.Project)));
  },

  exitState: function() {
    // none
  },
  
  didLoad: function () {
    if (Flow.projectListController.get('status') === SC.Record.READY_CLEAN) {
      Flow.getPath('mainPage.mainPane').append();
    }
  }.stateObserves('Flow.projectListController.status'),

});

